/* =========================================================
   Estrellas Reales — adaptador para la versión sin backend.

   Mantiene la misma interfaz pública que er-api.js para que la
   experiencia funcione sin red, sesión, token, registro, eventos
   ni validaciones remotas. Ninguna función realiza fetch/XHR.
========================================================= */
(function () {
  "use strict";

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

  function resolved(payload) {
    return Promise.resolve(payload);
  }

  window.ER = {
    API_BASE: null,
    OFFLINE: true,
    EVENTS: EVENTS,
    api: {
      me: function () {
        return resolved({ session: null, offline: true });
      },
      register: function (email) {
        return resolved({ email: email || "", offline: true });
      },
      submit: function () {
        return resolved({ completed: true, offline: true });
      },
      track: function () {
        // Intencionalmente vacío: la versión offline no envía analítica.
      },
    },
  };
})();
