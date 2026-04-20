const BRIGHT_STARS = [
  { name: "Sirio", ra: 6.7525, dec: -16.7161 },
  { name: "Canopus", ra: 6.3992, dec: -52.6957 },
  { name: "Arcturus", ra: 14.261, dec: 19.1824 },
  { name: "Vega", ra: 18.6156, dec: 38.7837 },
  { name: "Capella", ra: 5.2782, dec: 45.998 },
  { name: "Rigel", ra: 5.2423, dec: -8.2016 },
  { name: "Betelgeuse", ra: 5.9195, dec: 7.4071 },
  { name: "Aldebarán", ra: 4.5987, dec: 16.5093 },
  { name: "Antares", ra: 16.4901, dec: -26.432 },
  { name: "Spica", ra: 13.4199, dec: -11.1613 },
  { name: "Fomalhaut", ra: 22.9608, dec: -29.6222 },
  { name: "Achernar", ra: 1.6286, dec: -57.2368 },

  { name: "SCGA 1924 · Puppis", ra: 8.3098138889, dec: -26.2482222222 },
  { name: "SCGA 1928 · Puppis", ra: 8.3197972222, dec: -23.0248611111 },
  { name: "SCGA 1930 · Puppis", ra: 8.3217416667, dec: -23.7969444444 },
  { name: "SCGA 1950 · Volans", ra: 8.2952472222, dec: -69.1289444444 },
];

const CONSTELLATIONS = [
  { name: "Orión", ra: 5.6, dec: -5.0 },
  { name: "Cruz del Sur", ra: 12.5, dec: -60.0 },
  { name: "Escorpio", ra: 16.9, dec: -30.0 },
  { name: "Tauro", ra: 4.7, dec: 15.0 },
  { name: "Leo", ra: 10.7, dec: 15.0 },
  { name: "Casiopea", ra: 1.0, dec: 60.0 },
  { name: "Sagitario", ra: 19.0, dec: -28.0 },
  { name: "Andrómeda", ra: 0.8, dec: 37.0 },
];

const CONSTELLATION_LINES = [
  {
    name: "Orión",
    segments: [
      [{ ra: 5.9195, dec: 7.4071 }, { ra: 5.2423, dec: -8.2016 }],
      [{ ra: 5.9195, dec: 7.4071 }, { ra: 5.5334, dec: -0.2991 }],
      [{ ra: 5.5334, dec: -0.2991 }, { ra: 5.4189, dec: -1.9426 }],
      [{ ra: 5.4189, dec: -1.9426 }, { ra: 5.6036, dec: -1.2019 }],
      [{ ra: 5.6036, dec: -1.2019 }, { ra: 5.6793, dec: -1.9426 }],
      [{ ra: 5.6793, dec: -1.9426 }, { ra: 5.2423, dec: -8.2016 }],
    ],
  },
  {
    name: "Cruz del Sur",
    segments: [
      [{ ra: 12.4433, dec: -63.0991 }, { ra: 12.7953, dec: -59.6888 }],
      [{ ra: 12.5194, dec: -57.1132 }, { ra: 12.2524, dec: -58.7489 }],
    ],
  },
  {
    name: "Escorpio",
    segments: [
      [{ ra: 16.4901, dec: -26.432 }, { ra: 16.0056, dec: -22.6217 }],
      [{ ra: 16.0056, dec: -22.6217 }, { ra: 16.3531, dec: -25.5928 }],
      [{ ra: 16.3531, dec: -25.5928 }, { ra: 17.5601, dec: -37.1038 }],
      [{ ra: 17.5601, dec: -37.1038 }, { ra: 17.7081, dec: -39.0299 }],
    ],
  },
  {
    name: "Tauro",
    segments: [
      [{ ra: 4.5987, dec: 16.5093 }, { ra: 4.4769, dec: 15.8709 }],
      [{ ra: 4.4769, dec: 15.8709 }, { ra: 4.3299, dec: 15.6277 }],
      [{ ra: 4.5987, dec: 16.5093 }, { ra: 4.7041, dec: 22.9569 }],
      [{ ra: 4.5987, dec: 16.5093 }, { ra: 4.9499, dec: 33.1661 }],
    ],
  },
  {
    name: "Leo",
    segments: [
      [{ ra: 10.1395, dec: 11.9672 }, { ra: 10.3329, dec: 19.8415 }],
      [{ ra: 10.3329, dec: 19.8415 }, { ra: 10.2782, dec: 23.4173 }],
      [{ ra: 10.2782, dec: 23.4173 }, { ra: 11.2351, dec: 20.5237 }],
    ],
  },
  {
    name: "Casiopea",
    segments: [
      [{ ra: 0.6751, dec: 56.5373 }, { ra: 0.9451, dec: 60.7167 }],
      [{ ra: 0.9451, dec: 60.7167 }, { ra: 1.4303, dec: 60.2353 }],
      [{ ra: 1.4303, dec: 60.2353 }, { ra: 2.2937, dec: 59.1498 }],
      [{ ra: 2.2937, dec: 59.1498 }, { ra: 2.4855, dec: 67.402 }],
    ],
  },
  {
    name: "Andrómeda",
    segments: [
      [{ ra: 0.1398, dec: 29.0904 }, { ra: 0.6555, dec: 30.861 }],
      [{ ra: 0.6555, dec: 30.861 }, { ra: 1.1622, dec: 35.6206 }],
      [{ ra: 1.1622, dec: 35.6206 }, { ra: 2.0649, dec: 42.3297 }],
    ],
  },
  {
    name: "Sagitario",
    segments: [
      [{ ra: 18.4029, dec: -34.3846 }, { ra: 18.4662, dec: -25.4217 }],
      [{ ra: 18.4662, dec: -25.4217 }, { ra: 18.9211, dec: -26.2967 }],
      [{ ra: 18.9211, dec: -26.2967 }, { ra: 19.0435, dec: -29.8801 }],
      [{ ra: 19.0435, dec: -29.8801 }, { ra: 18.4029, dec: -34.3846 }],
    ],
  },
];

const SOLAR_BODIES = [
  { name: "Sol", body: "Sun" },
  { name: "Luna", body: "Moon" },
  { name: "Mercurio", body: "Mercury" },
  { name: "Venus", body: "Venus" },
  { name: "Marte", body: "Mars" },
  { name: "Júpiter", body: "Jupiter" },
  { name: "Saturno", body: "Saturn" },
  { name: "Urano", body: "Uranus" },
  { name: "Neptuno", body: "Neptune" },
];

const CALIBRATION_STEPS = [
  {
    key: "neutral",
    title: "1. Posición base",
    instruction:
      "Sostené el celular horizontal al suelo, pantalla hacia arriba, apuntando hacia adelante. Quedate quieto y guardá el paso.",
    arrowClass: "up",
  },
  {
    key: "yawLeft",
    title: "2. Girá a la izquierda",
    instruction:
      "Con el celular horizontal al suelo, giralo hacia la izquierda como brújula sobre una mesa. Luego guardá el paso.",
    arrowClass: "left",
  },
  {
    key: "yawRight",
    title: "3. Girá a la derecha",
    instruction:
      "Volvé cerca del centro y giralo hacia la derecha, siempre horizontal al suelo. Luego guardá el paso.",
    arrowClass: "",
  },
  {
    key: "pitchUp",
    title: "4. Levantalo hacia vos",
    instruction:
      "Desde horizontal, levantá la parte superior del celular hacia tu cara, como si miraras la pantalla. Luego guardá el paso.",
    arrowClass: "up",
  },
  {
    key: "rollLeft",
    title: "5. Rotá sobre su eje a la izquierda",
    instruction:
      "Sostené el celular frente a vos y rotalo en su propio eje hacia la izquierda. Luego guardá el paso.",
    arrowClass: "roll-left",
  },
  {
    key: "rollRight",
    title: "6. Rotá sobre su eje a la derecha",
    instruction:
      "Ahora rotalo en su propio eje hacia la derecha. Guardá el paso para terminar.",
    arrowClass: "roll-right",
  },
];

const els = {
  skyCanvas: document.getElementById("skyCanvas"),
  sensorTestCanvas: document.getElementById("sensorTestCanvas"),

  startCalibrationBtn: document.getElementById("startCalibrationBtn"),
  captureCalibrationBtn: document.getElementById("captureCalibrationBtn"),
  resetCalibrationBtn: document.getElementById("resetCalibrationBtn"),

  calibrationStepTitle: document.getElementById("calibrationStepTitle"),
  calibrationInstruction: document.getElementById("calibrationInstruction"),
  calibrationStatus: document.getElementById("calibrationStatus"),
  calibrationProgress: document.getElementById("calibrationProgress"),
  calibrationArrow: document.getElementById("calibrationArrow"),

  lat: document.getElementById("lat"),
  lon: document.getElementById("lon"),
  accuracy: document.getElementById("accuracy"),
  timestamp: document.getElementById("timestamp"),
  status: document.getElementById("status"),
  debugJson: document.getElementById("debugJson"),

  getSkyBtn: document.getElementById("getSkyBtn"),
  refreshBtn: document.getElementById("refreshBtn"),
  enableMotionBtn: document.getElementById("enableMotionBtn"),
  recenterBtn: document.getElementById("recenterBtn"),

  solarList: document.getElementById("solarList"),
  starsList: document.getElementById("starsList"),
  constellationsList: document.getElementById("constellationsList"),

  viewHeading: document.getElementById("viewHeading"),
  viewPitch: document.getElementById("viewPitch"),
  centerTarget: document.getElementById("centerTarget"),
  controlMode: document.getElementById("controlMode"),
  fovReadout: document.getElementById("fovReadout"),
};

const state = {
  canvasReady: false,

  lat: null,
  lon: null,
  accuracy: null,
  timestampIso: null,

  solar: [],
  stars: [],
  constellations: [],

  viewHeading: 0,
  viewPitch: 18,
  fovX: 75,
  fovY: 52,

  dragging: false,
  dragStartX: 0,
  dragStartY: 0,
  dragHeadingStart: 0,
  dragPitchStart: 0,

  motionEnabled: false,
  headingOffset: 0,
  pitchOffset: 0,

  rawHeading: null,
  rawPitch: null,
  rawRoll: null,

  rawAcceleration: { x: 0, y: 0, z: 0 },
  rawRotationRate: { alpha: 0, beta: 0, gamma: 0 },

  smoothedHeading: null,
  smoothedPitch: null,
  smoothedRoll: null,

  calibratedYaw: 0,
  calibratedPitch: 0,
  calibratedRoll: 0,

  calibrationActive: false,
  calibrationStepIndex: -1,
  calibrationSamples: {},

  calibration: {
    ready: false,
    yawSign: 1,
    pitchSign: 1,
    rollSign: 1,
    yawScale: 1,
    pitchScale: 1,
    rollScale: 1,
    neutralHeading: 0,
    neutralPitch: 0,
    neutralRoll: 0,
  },

  centerObject: null,
  highlightedObject: null,
};

function setStatus(message, tone = "") {
  els.status.innerHTML = `<strong>Estado:</strong> <span class="${tone}">${message}</span>`;
}

function setCalibrationStatus(message, tone = "") {
  els.calibrationStatus.innerHTML = `<strong>Calibración:</strong> <span class="${tone}">${message}</span>`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clamp360(value) {
  return ((value % 360) + 360) % 360;
}

function shortestAngleDiff(a, b) {
  let diff = a - b;
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;
  return diff;
}

function smoothValue(previous, next, factor = 0.12) {
  if (previous == null) return next;
  return previous + (next - previous) * factor;
}

function smoothAngle(previous, next, factor = 0.12) {
  if (previous == null) return next;
  return clamp360(previous + shortestAngleDiff(next, previous) * factor);
}

function azimuthToDirection(azimuth) {
  const dirs = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
  return dirs[Math.round(clamp360(azimuth) / 45) % 8];
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setupCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  [els.skyCanvas, els.sensorTestCanvas].forEach((canvas) => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  });

  state.canvasReady = true;
}

function renderMetricCards() {
  els.lat.textContent = state.lat != null ? state.lat.toFixed(6) : "--";
  els.lon.textContent = state.lon != null ? state.lon.toFixed(6) : "--";
  els.accuracy.textContent = state.accuracy != null ? `${Math.round(state.accuracy)} m` : "--";

  els.timestamp.textContent = state.timestampIso
    ? new Date(state.timestampIso).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "--";

  els.viewHeading.textContent = `${state.viewHeading.toFixed(1)}° · ${azimuthToDirection(state.viewHeading)}`;
  els.viewPitch.textContent = `${state.viewPitch.toFixed(1)}°`;

  els.controlMode.textContent = state.motionEnabled
    ? state.calibration.ready
      ? "Sensores calibrados"
      : "Sensores sin calibrar"
    : "Mouse / touch";

  els.fovReadout.textContent = `${state.fovX.toFixed(0)}° × ${state.fovY.toFixed(0)}°`;

  els.centerTarget.textContent = state.centerObject
    ? `${state.centerObject.name} · ${state.centerObject.altitude.toFixed(1)}° alt`
    : "Nada cerca";
}

function renderList(container, items, type) {
  if (!items.length) {
    container.innerHTML = `<div class="muted">No hay datos todavía.</div>`;
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const visible = item.altitude >= 0;

      return `
        <div class="item">
          <div class="item-top">
            <div>
              <h3>${escapeHtml(item.name)}</h3>
              <div class="muted">${escapeHtml(item.note || "")}</div>
            </div>

            <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
              <span class="badge ${type}">
                ${type === "solar" ? "ASTRO" : type === "star" ? "ESTRELLA" : "CONSTELACIÓN"}
              </span>
              <span class="badge ${visible ? "visible" : "hidden"}">
                ${visible ? "Visible" : "Bajo horizonte"}
              </span>
            </div>
          </div>

          <div class="coords">
            <div>Azimut<strong>${item.azimuth.toFixed(1)}° · ${azimuthToDirection(item.azimuth)}</strong></div>
            <div>Altitud<strong>${item.altitude.toFixed(1)}°</strong></div>
            <div>RA<strong>${item.raText || "--"}</strong></div>
            <div>Dec<strong>${item.decText || "--"}</strong></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function toRaText(raHours) {
  const h = Math.floor(raHours);
  const m = Math.floor((raHours - h) * 60);
  return `${h}h ${m}m`;
}

function toDecText(decDeg) {
  const sign = decDeg >= 0 ? "+" : "-";
  const abs = Math.abs(decDeg);
  const d = Math.floor(abs);
  const m = Math.floor((abs - d) * 60);
  return `${sign}${d}° ${m}'`;
}

function computeSolarObjects(date, observer) {
  return SOLAR_BODIES.map((entry) => {
    const equ = Astronomy.Equator(Astronomy.Body[entry.body], date, observer, true, true);
    const hor = Astronomy.Horizon(date, observer, equ.ra, equ.dec, "normal");

    return {
      name: entry.name,
      type: "solar",
      altitude: hor.altitude,
      azimuth: hor.azimuth,
      raText: toRaText(equ.ra),
      decText: toDecText(equ.dec),
      note: hor.altitude >= 0 ? "Sobre el horizonte ahora" : "No visible en este momento",
    };
  }).sort((a, b) => b.altitude - a.altitude);
}

function computeCatalogObjects(date, observer, catalog, type, visibleNote, hiddenNote) {
  return catalog.map((entry) => {
    const hor = Astronomy.Horizon(date, observer, entry.ra, entry.dec, "normal");

    return {
      name: entry.name,
      type,
      altitude: hor.altitude,
      azimuth: hor.azimuth,
      raText: toRaText(entry.ra),
      decText: toDecText(entry.dec),
      note: hor.altitude >= 0 ? visibleNote : hiddenNote,
    };
  }).sort((a, b) => b.altitude - a.altitude);
}

function calculateSky() {
  if (state.lat == null || state.lon == null) {
    setStatus("primero hay que obtener la ubicación.", "warn");
    return;
  }

  if (typeof Astronomy === "undefined") {
    setStatus("no cargó Astronomy Engine. Revisá internet.", "danger");
    return;
  }

  const date = new Date();
  const observer = new Astronomy.Observer(state.lat, state.lon, 0);

  state.timestampIso = date.toISOString();
  state.solar = computeSolarObjects(date, observer);
  state.stars = computeCatalogObjects(date, observer, BRIGHT_STARS, "star", "Estrella sobre el horizonte", "Debajo del horizonte ahora");
  state.constellations = computeCatalogObjects(date, observer, CONSTELLATIONS, "constellation", "Zona visible", "Zona no visible ahora");

  renderAll();
  setStatus("cielo calculado correctamente para tu ubicación actual.", "good");
}

function getLocationAndCalculate() {
  if (!("geolocation" in navigator)) {
    setStatus("este navegador no soporta geolocalización.", "danger");
    return;
  }

  setStatus("obteniendo ubicación...", "warn");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.lat = position.coords.latitude;
      state.lon = position.coords.longitude;
      state.accuracy = position.coords.accuracy;

      setStatus("ubicación obtenida. calculando cielo...", "warn");
      calculateSky();
    },
    (error) => {
      console.error(error);
      setStatus("no se pudo obtener la ubicación. Revisá permisos.", "danger");
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 15000,
    }
  );
}

function projectObject(obj, width, height) {
  const dAz = shortestAngleDiff(obj.azimuth, state.viewHeading);
  const dAlt = obj.altitude - state.viewPitch;

  if (Math.abs(dAz) > 95 || dAlt < -70 || dAlt > 70) return null;

  const nx = dAz / (state.fovX / 2);
  const ny = dAlt / (state.fovY / 2);

  if (Math.abs(nx) > 1.25 || Math.abs(ny) > 1.25) return null;

  const x = width / 2 + nx * (width / 2);
  const y = height / 2 - ny * (height / 2);

  return {
    x,
    y,
    distanceScore: Math.hypot(dAz / state.fovX, dAlt / state.fovY),
    centerDistancePx: Math.hypot(x - width / 2, y - height / 2),
  };
}

function projectCatalogPoint(point, observer, date, width, height) {
  const hor = Astronomy.Horizon(date, observer, point.ra, point.dec, "normal");

  if (hor.altitude < 0) return null;

  return projectObject(
    {
      azimuth: hor.azimuth,
      altitude: hor.altitude,
    },
    width,
    height
  );
}

function drawSkyExplorer() {
  if (!state.canvasReady) return;

  const canvas = els.skyCanvas;
  const ctx = canvas.getContext("2d");
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  ctx.clearRect(0, 0, width, height);

  const bg = ctx.createLinearGradient(0, 0, 0, height);
  bg.addColorStop(0, "#081425");
  bg.addColorStop(0.55, "#040811");
  bg.addColorStop(1, "#02040a");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 140; i++) {
    const x = (i * 157) % width;
    const y = (i * 89) % height;

    ctx.globalAlpha = 0.05 + (i % 4) * 0.04;
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x, y, (i % 3) + 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;

  const horizonY = height * (0.78 - state.viewPitch / 220);

  const horizonGradient = ctx.createLinearGradient(0, horizonY - 80, 0, horizonY + 120);
  horizonGradient.addColorStop(0, "rgba(100,150,255,0)");
  horizonGradient.addColorStop(0.7, "rgba(78,112,166,0.12)");
  horizonGradient.addColorStop(1, "rgba(22,33,52,0.32)");

  ctx.fillStyle = horizonGradient;
  ctx.fillRect(0, horizonY - 80, width, height - horizonY + 80);

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.beginPath();
  ctx.moveTo(0, horizonY);
  ctx.lineTo(width, horizonY);
  ctx.stroke();

  drawCompassLabels(ctx, width);

  if (state.lat != null && state.lon != null && typeof Astronomy !== "undefined") {
    drawConstellationLines(ctx, width, height);
  }

  const visibleObjects = [];

  const groups = [
    {
      items: state.solar.filter((i) => i.altitude >= 0),
      color: getComputedStyle(document.documentElement).getPropertyValue("--solar").trim(),
      radius: 6,
    },
    {
      items: state.stars.filter((i) => i.altitude >= 0),
      color: getComputedStyle(document.documentElement).getPropertyValue("--star").trim(),
      radius: 4,
    },
    {
      items: state.constellations.filter((i) => i.altitude >= 0),
      color: getComputedStyle(document.documentElement).getPropertyValue("--constellation").trim(),
      radius: 4.5,
    },
  ];

  groups.forEach((group) => {
    group.items.forEach((item) => {
      const projected = projectObject(item, width, height);
      if (!projected) return;

      visibleObjects.push({
        ...item,
        ...projected,
        color: group.color,
        radius: group.radius,
      });
    });
  });

  visibleObjects.sort((a, b) => a.distanceScore - b.distanceScore);

  state.centerObject = visibleObjects[0] || null;
  state.highlightedObject = visibleObjects.find((item) => item.centerDistancePx < 42) || null;

  if (state.highlightedObject) {
    state.centerObject = state.highlightedObject;
  }

  visibleObjects.forEach((item) => {
    drawSkyObject(ctx, item);
  });

  renderMetricCards();
}

function drawCompassLabels(ctx, width) {
  const markers = [
    { t: "N", az: 0 },
    { t: "NE", az: 45 },
    { t: "E", az: 90 },
    { t: "SE", az: 135 },
    { t: "S", az: 180 },
    { t: "SO", az: 225 },
    { t: "O", az: 270 },
    { t: "NO", az: 315 },
  ];

  markers.forEach((marker) => {
    const dAz = shortestAngleDiff(marker.az, state.viewHeading);

    if (Math.abs(dAz) > state.fovX * 0.7) return;

    const x = width / 2 + (dAz / (state.fovX / 2)) * (width / 2);

    ctx.globalAlpha = 1 - Math.abs(dAz) / (state.fovX * 0.75);
    ctx.fillStyle = marker.t === "N" ? "#7cc7ff" : "rgba(255,255,255,0.8)";
    ctx.font = "12px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(marker.t, x, 24);
  });

  ctx.globalAlpha = 1;
}

function drawConstellationLines(ctx, width, height) {
  const observer = new Astronomy.Observer(state.lat, state.lon, 0);
  const date = state.timestampIso ? new Date(state.timestampIso) : new Date();

  ctx.strokeStyle = "rgba(215,184,255,0.32)";
  ctx.lineWidth = 1.4;

  CONSTELLATION_LINES.forEach((constellation) => {
    constellation.segments.forEach((segment) => {
      const p1 = projectCatalogPoint(segment[0], observer, date, width, height);
      const p2 = projectCatalogPoint(segment[1], observer, date, width, height);

      if (!p1 || !p2) return;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    });
  });
}

function drawSkyObject(ctx, item) {
  const isHighlighted =
    state.highlightedObject &&
    state.highlightedObject.name === item.name &&
    state.highlightedObject.type === item.type;

  const glow = ctx.createRadialGradient(
    item.x,
    item.y,
    0,
    item.x,
    item.y,
    item.radius * (isHighlighted ? 8 : 5)
  );

  glow.addColorStop(0, `${item.color}cc`);
  glow.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(item.x, item.y, item.radius * (isHighlighted ? 8 : 5), 0, Math.PI * 2);
  ctx.fill();

  if (isHighlighted) {
    ctx.strokeStyle = "rgba(255,255,255,0.65)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(item.x, item.y, item.radius * 3, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.fillStyle = item.color;
  ctx.beginPath();
  ctx.arc(item.x, item.y, isHighlighted ? item.radius * 1.55 : item.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = isHighlighted ? "#fff" : "rgba(255,255,255,0.92)";
  ctx.font = isHighlighted ? "bold 16px Inter, sans-serif" : "11px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(item.name, item.x, item.y - (isHighlighted ? 24 : 14));
}

function drawSensorTestCanvas() {
  if (!state.canvasReady) return;

  const canvas = els.sensorTestCanvas;
  const ctx = canvas.getContext("2d");
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const cx = width / 2;
  const cy = height / 2;

  ctx.clearRect(0, 0, width, height);

  const bg = ctx.createLinearGradient(0, 0, 0, height);
  bg.addColorStop(0, "#081425");
  bg.addColorStop(1, "#02040a");

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.beginPath();
  ctx.moveTo(cx, 0);
  ctx.lineTo(cx, height);
  ctx.moveTo(0, cy);
  ctx.lineTo(width, cy);
  ctx.stroke();

  const x = clamp(cx + state.calibratedYaw * 3, 32, width - 32);
  const y = clamp(cy - state.calibratedPitch * 3, 42, height - 42);
  const roll = (state.calibratedRoll * Math.PI) / 180;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(roll);

  ctx.fillStyle = "rgba(124,199,255,0.18)";
  ctx.strokeStyle = "rgba(124,199,255,0.85)";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.roundRect(-38, -58, 76, 116, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.beginPath();
  ctx.roundRect(-16, 42, 32, 4, 2);
  ctx.fill();

  ctx.restore();

  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.font = "12px ui-monospace, monospace";
  ctx.textAlign = "left";

  ctx.fillText(`yaw X: ${state.calibratedYaw.toFixed(1)}`, 14, 24);
  ctx.fillText(`pitch Y: ${state.calibratedPitch.toFixed(1)}`, 14, 42);
  ctx.fillText(`roll Z: ${state.calibratedRoll.toFixed(1)}`, 14, 60);
  ctx.fillText(
    `gyro αβγ: ${state.rawRotationRate.alpha.toFixed(1)}, ${state.rawRotationRate.beta.toFixed(1)}, ${state.rawRotationRate.gamma.toFixed(1)}`,
    14,
    height - 18
  );
}

function getHeadingFromEvent(event) {
  if (typeof event.webkitCompassHeading === "number") {
    return event.webkitCompassHeading;
  }

  if (typeof event.alpha === "number") {
    return clamp360(360 - event.alpha);
  }

  return null;
}

function updateCalibratedAxes() {
  const c = state.calibration;

  if (!c.ready) {
    state.calibratedYaw = shortestAngleDiff(state.rawHeading ?? 0, c.neutralHeading);
    state.calibratedPitch = (state.rawPitch ?? 0) - c.neutralPitch;
    state.calibratedRoll = (state.rawRoll ?? 0) - c.neutralRoll;
    return;
  }

  state.calibratedYaw =
    c.yawSign *
    shortestAngleDiff(state.rawHeading ?? c.neutralHeading, c.neutralHeading) *
    c.yawScale;

  state.calibratedPitch =
    c.pitchSign *
    ((state.rawPitch ?? c.neutralPitch) - c.neutralPitch) *
    c.pitchScale;

  state.calibratedRoll =
    c.rollSign *
    ((state.rawRoll ?? c.neutralRoll) - c.neutralRoll) *
    c.rollScale;
}

function handleOrientation(event) {
  const heading = getHeadingFromEvent(event);
  const pitch = typeof event.beta === "number" ? event.beta : null;
  const roll = typeof event.gamma === "number" ? event.gamma : null;

  if (heading == null || pitch == null || roll == null) return;

  state.smoothedHeading = smoothAngle(state.smoothedHeading, heading);
  state.smoothedPitch = smoothValue(state.smoothedPitch, pitch);
  state.smoothedRoll = smoothValue(state.smoothedRoll, roll);

  state.rawHeading = state.smoothedHeading;
  state.rawPitch = state.smoothedPitch;
  state.rawRoll = state.smoothedRoll;

  updateCalibratedAxes();

  if (!state.motionEnabled) return;

  if (state.calibration.ready) {
    state.viewHeading = clamp360(state.calibration.neutralHeading + state.calibratedYaw + state.headingOffset);
    state.viewPitch = clamp(18 + state.calibratedPitch + state.pitchOffset, -30, 85);
  } else {
    state.viewHeading = clamp360(state.rawHeading + state.headingOffset);
    state.viewPitch = clamp(state.rawPitch + state.pitchOffset, -30, 85);
  }
}

function handleMotion(event) {
  const acc = event.accelerationIncludingGravity || event.acceleration || {};
  const rot = event.rotationRate || {};

  state.rawAcceleration = {
    x: typeof acc.x === "number" ? acc.x : 0,
    y: typeof acc.y === "number" ? acc.y : 0,
    z: typeof acc.z === "number" ? acc.z : 0,
  };

  state.rawRotationRate = {
    alpha: typeof rot.alpha === "number" ? rot.alpha : 0,
    beta: typeof rot.beta === "number" ? rot.beta : 0,
    gamma: typeof rot.gamma === "number" ? rot.gamma : 0,
  };
}

async function enableMotionControls() {
  try {
    if (typeof DeviceOrientationEvent === "undefined") {
      setStatus("este dispositivo no soporta orientación.", "danger");
      return;
    }

    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      const result = await DeviceOrientationEvent.requestPermission();

      if (result !== "granted") {
        setStatus("permiso de orientación denegado.", "danger");
        return;
      }
    }

    if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
      try {
        await DeviceMotionEvent.requestPermission();
      } catch (error) {
        console.warn(error);
      }
    }

    window.addEventListener("deviceorientation", handleOrientation, true);
    window.addEventListener("devicemotion", handleMotion, true);

    state.motionEnabled = true;

    renderMetricCards();
    setStatus("sensores activos. Podés mover el celular.", "good");
  } catch (error) {
    console.error(error);
    setStatus("no se pudieron activar sensores. Usá HTTPS y celular real.", "danger");
  }
}

function updateCalibrationUI() {
  const step = CALIBRATION_STEPS[state.calibrationStepIndex];

  const progress =
    state.calibrationStepIndex < 0
      ? 0
      : (state.calibrationStepIndex / CALIBRATION_STEPS.length) * 100;

  els.calibrationProgress.style.width = `${clamp(progress, 0, 100)}%`;

  if (!step) {
    els.calibrationStepTitle.textContent = state.calibration.ready ? "Calibración completa" : "Sin calibrar";
    els.calibrationInstruction.textContent = state.calibration.ready
      ? "Los movimientos del dispositivo ya se traducen con la calibración guardada."
      : "Tocá “Iniciar calibración guiada” y seguí los movimientos.";
    els.calibrationArrow.className = "calibration-arrow";
    return;
  }

  els.calibrationStepTitle.textContent = step.title;
  els.calibrationInstruction.textContent = step.instruction;
  els.calibrationArrow.className = `calibration-arrow ${step.arrowClass}`;
}

function snapshot() {
  return {
    heading: state.rawHeading ?? 0,
    pitch: state.rawPitch ?? 0,
    roll: state.rawRoll ?? 0,
    acceleration: { ...state.rawAcceleration },
    rotationRate: { ...state.rawRotationRate },
    at: Date.now(),
  };
}

async function startCalibration() {
  state.calibrationActive = true;
  state.calibrationStepIndex = 0;
  state.calibrationSamples = {};

  updateCalibrationUI();
  setCalibrationStatus("seguí el primer paso y tocá “Guardar este paso”.", "warn");

  await enableMotionControls();
}

function captureCalibrationStep() {
  if (!state.calibrationActive || state.calibrationStepIndex < 0) {
    setCalibrationStatus("primero iniciá la calibración guiada.", "warn");
    return;
  }

  const step = CALIBRATION_STEPS[state.calibrationStepIndex];

  state.calibrationSamples[step.key] = snapshot();
  state.calibrationStepIndex += 1;

  if (state.calibrationStepIndex >= CALIBRATION_STEPS.length) {
    finishCalibration();
    return;
  }

  updateCalibrationUI();
  setCalibrationStatus("paso guardado. Hacé el siguiente movimiento.", "good");
}

function finishCalibration() {
  const s = state.calibrationSamples;
  const neutral = s.neutral;

  if (!neutral || !s.yawLeft || !s.yawRight || !s.pitchUp || !s.rollLeft || !s.rollRight) {
    setCalibrationStatus("faltan pasos. Reiniciá la calibración.", "danger");
    return;
  }

  const yawLeftDelta = shortestAngleDiff(s.yawLeft.heading, neutral.heading);
  const yawRightDelta = shortestAngleDiff(s.yawRight.heading, neutral.heading);
  const pitchDelta = s.pitchUp.pitch - neutral.pitch;
  const rollLeftDelta = s.rollLeft.roll - neutral.roll;
  const rollRightDelta = s.rollRight.roll - neutral.roll;

  const yawAmplitude = Math.max(8, Math.abs(yawLeftDelta - yawRightDelta) / 2);
  const pitchAmplitude = Math.max(8, Math.abs(pitchDelta));
  const rollAmplitude = Math.max(8, Math.abs(rollLeftDelta - rollRightDelta) / 2);

  state.calibration = {
    ready: true,
    yawSign: yawLeftDelta < 0 ? 1 : -1,
    pitchSign: pitchDelta > 0 ? 1 : -1,
    rollSign: rollLeftDelta < rollRightDelta ? 1 : -1,
    yawScale: 35 / yawAmplitude,
    pitchScale: 35 / pitchAmplitude,
    rollScale: 35 / rollAmplitude,
    neutralHeading: neutral.heading,
    neutralPitch: neutral.pitch,
    neutralRoll: neutral.roll,
  };

  state.calibrationActive = false;
  state.calibrationStepIndex = -1;

  state.headingOffset = shortestAngleDiff(state.viewHeading, state.rawHeading ?? neutral.heading);
  state.pitchOffset = state.viewPitch - (state.rawPitch ?? neutral.pitch);

  els.calibrationProgress.style.width = "100%";

  updateCalibrationUI();
  updateCalibratedAxes();

  setCalibrationStatus("lista. Ejes normalizados para esta sesión.", "good");
}

function resetCalibration() {
  state.calibrationActive = false;
  state.calibrationStepIndex = -1;
  state.calibrationSamples = {};

  state.calibration = {
    ready: false,
    yawSign: 1,
    pitchSign: 1,
    rollSign: 1,
    yawScale: 1,
    pitchScale: 1,
    rollScale: 1,
    neutralHeading: state.rawHeading ?? 0,
    neutralPitch: state.rawPitch ?? 0,
    neutralRoll: state.rawRoll ?? 0,
  };

  els.calibrationProgress.style.width = "0%";

  updateCalibrationUI();
  updateCalibratedAxes();

  setCalibrationStatus("reiniciada.", "warn");
}

function recenterView() {
  state.viewHeading = 0;
  state.viewPitch = 18;

  state.headingOffset = state.rawHeading != null ? shortestAngleDiff(0, state.rawHeading) : 0;
  state.pitchOffset = state.rawPitch != null ? 18 - state.rawPitch : 0;

  setStatus("vista recentrada.", "good");
}

function pointerStart(x, y) {
  state.dragging = true;
  state.dragStartX = x;
  state.dragStartY = y;
  state.dragHeadingStart = state.viewHeading;
  state.dragPitchStart = state.viewPitch;
}

function pointerMove(x, y) {
  if (!state.dragging || state.motionEnabled) return;

  const dx = x - state.dragStartX;
  const dy = y - state.dragStartY;

  state.viewHeading = clamp360(state.dragHeadingStart - dx * 0.18);
  state.viewPitch = clamp(state.dragPitchStart + dy * 0.14, -30, 85);
}

function pointerEnd() {
  state.dragging = false;
}

function renderAll() {
  renderMetricCards();
  drawSkyExplorer();
  drawSensorTestCanvas();

  renderList(els.solarList, state.solar, "solar");
  renderList(els.starsList, state.stars, "star");
  renderList(els.constellationsList, state.constellations, "constellation");

  els.debugJson.textContent = JSON.stringify(
    {
      latitude: state.lat,
      longitude: state.lon,
      accuracyMeters: state.accuracy,
      timestamp: state.timestampIso,
      viewHeading: state.viewHeading,
      viewPitch: state.viewPitch,
      motionEnabled: state.motionEnabled,
      calibration: state.calibration,
      centerTarget: state.centerObject?.name || null,
      solar: state.solar,
      stars: state.stars,
      constellations: state.constellations,
    },
    null,
    2
  );
}

function startRenderLoop() {
  function frame() {
    drawSkyExplorer();
    drawSensorTestCanvas();
    requestAnimationFrame(frame);
  }

  frame();
}

els.startCalibrationBtn.addEventListener("click", startCalibration);
els.captureCalibrationBtn.addEventListener("click", captureCalibrationStep);
els.resetCalibrationBtn.addEventListener("click", resetCalibration);

els.getSkyBtn.addEventListener("click", getLocationAndCalculate);
els.refreshBtn.addEventListener("click", calculateSky);
els.enableMotionBtn.addEventListener("click", enableMotionControls);
els.recenterBtn.addEventListener("click", recenterView);

els.skyCanvas.addEventListener("mousedown", (event) => {
  pointerStart(event.clientX, event.clientY);
});

window.addEventListener("mousemove", (event) => {
  pointerMove(event.clientX, event.clientY);
});

window.addEventListener("mouseup", pointerEnd);

els.skyCanvas.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.touches[0];
    pointerStart(touch.clientX, touch.clientY);
  },
  { passive: true }
);

els.skyCanvas.addEventListener(
  "touchmove",
  (event) => {
    const touch = event.touches[0];
    pointerMove(touch.clientX, touch.clientY);
  },
  { passive: true }
);

window.addEventListener("touchend", pointerEnd, { passive: true });

window.addEventListener("resize", () => {
  setupCanvas();
  renderAll();
});

setupCanvas();
updateCalibrationUI();
renderAll();
startRenderLoop();