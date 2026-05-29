/* =========================================================
   Estrellas Reales — API client + config (single source of truth)
   Wires the frontend to the qr-system FastAPI backend.

   --- CONFIGURING THE SERVER DOMAIN ---
   The API base URL is resolved in this order (first match wins):
     1. window.ER_CONFIG.API_BASE   — set inline before this script for ad-hoc overrides.
     2. <meta name="er-api-base" content="https://..."> in the page <head>.
     3. ""  → empty string = SAME ORIGIN (production default; fetches like fetch("/me")).

   To point the frontend at another domain (e.g. local dev with the API on :8000),
   change ONE meta tag in the page <head>:
     <meta name="er-api-base" content="http://localhost:8000">

   All requests send cookies (credentials: "include") so the HttpOnly `access_token`
   cookie set by GET /play flows automatically across index.html and boveda.html.
========================================================= */
(function () {
  "use strict";

  function resolveApiBase() {
    if (window.ER_CONFIG && typeof window.ER_CONFIG.API_BASE === "string") {
      return window.ER_CONFIG.API_BASE;
    }

    var meta = document.querySelector('meta[name="er-api-base"]');
    if (meta && typeof meta.content === "string") {
      return meta.content.trim();
    }

    return ""; // same origin
  }

  var API_BASE = resolveApiBase();

  // The valid analytics event types. Use these constants, never magic strings.
  var EVENTS = Object.freeze({
    page_view: "page_view",
    view_terms: "view_terms",
    view_content: "view_content",
    start_experience: "start_experience",
    register: "register",
    submit: "submit",
    download_poster: "download_poster",
    fake_visit_unregistered: "fake_visit_unregistered",
    fake_visit_registered: "fake_visit_registered",
  });

  // Thin fetch wrapper: parses JSON, throws on non-2xx. Always sends cookies.
  async function request(path, options) {
    options = options || {};

    var init = {
      method: options.method || "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    };

    if (options.body !== undefined) {
      init.body = JSON.stringify(options.body);
    }

    var response = await fetch(API_BASE + path, init);

    var payload = null;
    try {
      payload = await response.json();
    } catch (err) {
      payload = null;
    }

    if (!response.ok) {
      var error = new Error("Request to " + path + " failed with status " + response.status);
      error.status = response.status;
      error.payload = payload;
      throw error;
    }

    return payload;
  }

  var api = {
    // GET /me → { session_id, created_at, email, verified, via_fake_token } or { session: null }
    me: function () {
      return request("/me", { method: "GET" });
    },

    // POST /register { email } — attaches email to the session. Caller handles throws.
    register: function (email) {
      return request("/register", { method: "POST", body: { email: email } });
    },

    // POST /submit — marks the flow completed. Caller handles throws.
    submit: function () {
      return request("/submit", { method: "POST" });
    },

    // POST /event { event_type, data? } — fire-and-forget analytics.
    // Never awaited by UI paths; swallows all errors (network / rate-limit / 401)
    // so analytics can never block or break the experience.
    track: function (eventType, data) {
      try {
        var body = { event_type: eventType };
        if (data !== undefined) body.data = data;

        request("/event", { method: "POST", body: body }).catch(function () {
          /* swallowed: analytics must never break the UI */
        });
      } catch (err) {
        /* swallowed */
      }
    },
  };

  window.ER = {
    API_BASE: API_BASE,
    EVENTS: EVENTS,
    api: api,
  };
})();
