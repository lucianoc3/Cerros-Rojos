<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Gastos Compartidos</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <h1>Registro de Gastos Compartidos</h1>
    
    <form id="gastoForm">
        <label for="descripcion">Descripción:</label>
        <input type="text" id="descripcion" required>
        
        <label for="monto">Monto:</label>
        <input type="number" id="monto" required>
        
        <label for="quienGasto">¿Quién gastó?</label>
        <select id="quienGasto" required>
            <option value="Caro">Caro</option>
            <option value="Lucas">Lucas</option>
            <option value="Luciano">Luciano</option>
        </select>
        
        <button type="submit">Registrar Gasto</button>
    </form>

    <h2>Historial de Transacciones</h2>
    <table id="tablaHistorial">
        <!-- El historial se llenará dinámicamente con JavaScript -->
    </table>

    <script src="script.js"></script>
    <script>
        // Registrar el Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
              .then(function(registration) {
                console.log('Service Worker registrado con éxito:', registration.scope);
              })
              .catch(function(error) {
                console.log('Registro de Service Worker fallido:', error);
              });
        }
    </script>
</body>
</html>