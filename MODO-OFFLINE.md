# Versión sin backend

Abrir `index-offline.html` desde un servidor estático. Esta variante:

- no consulta `/play`, `/me`, `/register`, `/event` ni `/submit`;
- no requiere token, sesión ni conexión al backend;
- no valida nombre, email, términos, estado de campaña ni tipo de dispositivo;
- conserva el flujo visual, la solicitud de sensores/GPS con fallback manual,
  las misiones y la descarga de pósteres.

Ejemplo local:

```powershell
python -m http.server 5500
```

Luego abrir `http://localhost:5500/index-offline.html`.

Los archivos de producción (`index.html`, `boveda.html` y `assets/js/er-api.js`)
no fueron modificados.
