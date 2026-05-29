# Wire the BK "Estrellas Reales" frontend to the qr-system API

## Context

The frontend (`index.html` multi-screen flow + `boveda.html` AR sky viewer) is currently
self-contained: it never talks to a backend. Registration is a `// TODO` comment
(`index.html:1826-1829`), entry state is chosen only from URL query params, and no analytics
events are sent. The FastAPI backend at `:8000` ("qr-system") already exposes the full session
& analytics contract:

| Endpoint | Purpose |
|---|---|
| `GET /play?token=` | Validates QR token, sets `access_token` HttpOnly cookie, **serves the frontend** |
| `GET /me` | Session state: `{session_id, created_at, email, verified, via_fake_token}` or `{session:null}` |
| `POST /register` `{email}` | Attaches email to session |
| `POST /event` `{event_type, data?}` | Logs one of 10 analytics events (needs cookie; rate-limited 120/60s) |
| `POST /submit` | Marks the flow completed |
| `GET /health` | Liveness |

Goal: connect the frontend to these endpoints so that (1) routing is driven by real session
data, (2) every meaningful UI moment emits the correct `/event`, and (3) the server domain is a
one-line config change.

### Decisions locked with the user
- **Same origin** — frontend is served from the same domain as the API. The `access_token`
  cookie (`HttpOnly; Path=/; SameSite=lax`) flows automatically across `index.html` ↔
  `boveda.html`. No CORS work needed. We still add a configurable API base for local dev
  (frontend on a static server, API on `:8000`).
- **`/play` serves the frontend; routing uses `/me`** — we do **not** build a `/play` status
  contract. After load the app calls `/me` and routes from it. Existing URL-param overrides
  (`?error=1`, `?not_started=1`, `?ended=1`, `?product=1`, `?desktop=1`) are kept for
  operational/QA use and future backend redirects.
- **`fake_visit_*` is backend-owned** — the frontend does **not** emit
  `fake_visit_unregistered` / `fake_visit_registered`. Backend logs these from `via_fake_token`.

## Approach

### 1. New file `assets/js/er-api.js` — config + API client (single source of truth)

One small script, included before the inline `<script>` in both `index.html` and `boveda.html`.

**Configurable server domain** (resolution order, first match wins):
1. `window.ER_CONFIG.API_BASE` (set inline before the script for ad-hoc override)
2. `<meta name="er-api-base" content="https://...">` in the page `<head>`
3. `""` → empty string = **same origin** (production default; fetches like `fetch("/me")`)

To point at another domain you change one meta tag (or one JS line). Document this at the top of
the file.

**Client API** exposed as `window.ER`:
- `ER.api.me()` → `GET {base}/me`
- `ER.api.register(email)` → `POST {base}/register`
- `ER.api.submit()` → `POST {base}/submit`
- `ER.api.track(eventType, data)` → `POST {base}/event` — **fire-and-forget**: never awaited by
  UI paths, swallows network/rate-limit/401 errors so analytics can never block or break the
  experience. (`/play` is the QR entry that serves the page, so the client never calls it.)

All requests use `credentials: "include"`, `Content-Type: application/json`, and a thin wrapper
that returns parsed JSON or throws on non-2xx (only `register`/`submit` callers handle throws;
`track` ignores them). Add a frozen `ER.EVENTS` map of the 10 valid event-type strings so call
sites use constants, not magic strings.

### 2. `index.html` — routing from `/me` + event wiring

- **Include** `<script src="assets/js/er-api.js"></script>` before the existing inline script;
  optionally add the `<meta name="er-api-base">` tag (commented default = same origin).
- **`init()` (`index.html:1857`)**: after `preloadAssets()`, keep the existing
  `getEntryScreenFromParams()` override check first, then add:
  ```
  const me = await ER.api.me().catch(() => null);
  if (me?.email) { showScreen("steps"); }   // already registered → resume at "Comenzar"
  else { showScreen("register"); }
  ```
  (If `/me` is unreachable, fall back to today's behavior: show `register`.) Keep client-side
  desktop detection mapping to the `desktop` screen if desired.
- **`showScreen()` (`index.html:1587`)**: emit `ER.api.track(EVENTS.page_view, {screen})` on each
  successful transition — one hook covers nav across register/terms/story/steps/sensor-gate.
- **Terms** (`openTermsBtn`, `index.html:1777`): `track(view_terms)`.
- **Register submit** (`index.html:1801`): replace the TODO block — `await ER.api.register(email)`;
  on success `track(register)` then `showScreen("story")`; on failure keep the user on the form
  and surface a non-blocking inline error. Keep existing client-side validation.
- **`prepararYEntrarBoveda()` / `openSkyBtn` (`index.html:1725`,`1770`)**: `track(start_experience)`
  before the sensor/GPS prompts and navigation to `boveda.html`.

### 3. `boveda.html` — event wiring

- **Include** `<script src="assets/js/er-api.js"></script>` before the inline script.
- On load: `track(page_view, {page:"boveda"})`.
- **`abrirModalMision(mission)` (`boveda.html:4390`)**: `track(view_content, {mission: mission.id})`.
- **`cerrarModalMision()` (`boveda.html:4438`)**: `track(skip_content, {mission: <current id>})`.
- **`openPosterScreen()` (`boveda.html:3448`)**: this is the completion point —
  `track(page_view, {page:"poster"})` **and** `ER.api.submit()` + `track(submit)` (guard so submit
  fires once per session).
- **`downloadCurrentPoster()` (`boveda.html:3494`)**: `track(download_qr, {year: item.year})`.

### 4. Event → UI moment map (frontend responsibilities)

| Event | Trigger | Location |
|---|---|---|
| `page_view` | every screen transition | `showScreen` (index), boveda load + `openPosterScreen` |
| `view_terms` | terms opened | `openTermsBtn` |
| `view_content` | mission modal opened | `abrirModalMision` |
| `skip_content` | mission modal closed | `cerrarModalMision` |
| `start_experience` | entering the sky viewer | `prepararYEntrarBoveda` |
| `register` | `/register` succeeded | register form submit |
| `submit` | flow completed | `openPosterScreen` (once) |
| `download_qr` | poster downloaded | `downloadCurrentPoster` |
| `fake_visit_*` | — | **backend-owned, not wired here** |

## Files
- **New:** `assets/js/er-api.js` (config + client)
- **Edit:** `index.html` (script include, `init` routing, `showScreen`, register submit, terms,
  start-experience hooks)
- **Edit:** `boveda.html` (script include, load + mission + poster + download hooks)
- `index2.html` is an older standalone prototype, not in the flow — left untouched.

## Open items to confirm with backend (out of frontend scope)
- `/play` must actually serve `index.html` (and the app's static assets must be reachable
  same-origin) for the production QR entry. Today it returns JSON `{status, message}`.
- Campaign-window states (`not_started` / `ended` / `product`) are not in `/me` today; they stay
  URL-param driven until the backend exposes them (e.g. via `/me` or a `/play` redirect).

## Verification
1. **Session/cookie**: `curl -c cj -b cj "http://localhost:8000/play?token=t"` then `/me` shows a
   session — already confirmed working.
2. **Local run**: serve the folder (e.g. `python -m http.server 5500`) with
   `<meta name="er-api-base" content="http://localhost:8000">`, open `index.html`, and in DevTools
   Network watch: `/me` on load → `/event page_view` per screen → `/register` on submit →
   `/event register` → `start_experience` → in boveda `view_content`/`skip_content` → `submit` +
   `download_qr`. (Cross-origin local dev needs the backend to allow credentialed CORS for the dev
   origin; production is same-origin so no CORS.)
3. **Resume path**: with an existing email session cookie, reload `index.html` → lands on `steps`,
   not `register`.
4. **Resilience**: stop the API and confirm the UI still navigates (track failures are swallowed;
   only register/submit show graceful inline errors).
