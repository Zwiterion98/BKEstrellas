# Versión sin backend

Abrir `index.html` desde un servidor estático. Esta es ahora la entrada
predeterminada para GitHub Pages y:

- no consulta `/play`, `/me`, `/register`, `/event` ni `/submit`;
- no requiere token, sesión ni conexión al backend;
- no valida nombre, email, términos, estado de campaña ni tipo de dispositivo;
- conserva el flujo visual, la solicitud de sensores/GPS con fallback manual,
  las misiones y la descarga de pósteres.

Ejemplo local:

```powershell
python -m http.server 5500
```

Luego abrir `http://localhost:5500/`.

La versión anterior conectada al backend está preservada en el ZIP de `backups/`
y en el historial de Git. `assets/js/er-api.js` permanece sin modificaciones.
