document.getElementById('transaccionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tipo = document.getElementById('tipo').value;
    const quien = document.getElementById('quien').value;
    const descripcion = document.getElementById('descripcion').value;
    const monto = document.getElementById('monto').value;
    const destinatario = document.getElementById('destinatario').value || '';

    // Validar campos
    if (!tipo || !quien || !descripcion || !monto || (tipo == 'Pago' && !destinatario)) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
    }

    // Construir la URL con los parámetros
    const url = `${baseUrl}?action=registrarTransaccion&tipo=${encodeURIComponent(tipo)}&descripcion=${encodeURIComponent(descripcion)}&monto=${encodeURIComponent(monto)}&quien=${encodeURIComponent(quien)}&destinatario=${encodeURIComponent(destinatario)}`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            alert(data);
            cargarHistorial();
            // Limpiar formulario
            document.getElementById('transaccionForm').reset();
            document.getElementById('destinatarioDiv').style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al registrar la transacción.');
        });
});
document.getElementById('transaccionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tipo = document.getElementById('tipo').value;
    const quien = document.getElementById('quien').value;
    const descripcion = document.getElementById('descripcion').value;
    const monto = document.getElementById('monto').value;
    const destinatario = document.getElementById('destinatario').value || '';

    // Validar campos
    if (!tipo || !quien || !descripcion || !monto || (tipo == 'Pago' && !destinatario)) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
    }

    // Construir la URL con los parámetros
    const url = `${baseUrl}?action=registrarTransaccion&tipo=${encodeURIComponent(tipo)}&descripcion=${encodeURIComponent(descripcion)}&monto=${encodeURIComponent(monto)}&quien=${encodeURIComponent(quien)}&destinatario=${encodeURIComponent(destinatario)}`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            alert(data);
            cargarHistorial();
            // Limpiar formulario
            document.getElementById('transaccionForm').reset();
            document.getElementById('destinatarioDiv').style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al registrar la transacción.');
        });
});
