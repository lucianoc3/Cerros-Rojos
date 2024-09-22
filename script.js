// URL del Web App de Google Apps Script
const baseUrl = 'https://script.google.com/macros/s/AKfycbw3ixIsPdsomFQn5OLAVKXnXduFc7S1ZXrr8oQyHXm1hEEfteZEd9ndosS6d4n5SYND/exec';

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

function cargarHistorial() {
    const url = `${baseUrl}?action=obtenerHistorial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#tablaHistorial tbody');
            tbody.innerHTML = '';

            data.forEach(registro => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${new Date(registro['Fecha']).toLocaleString()}</td>
                    <td>${registro['Quién']}</td>
                    <td>${registro['Descripción']}</td>
                    <td>${registro['Monto']}</td>
                    <td>${registro['Tipo de Transacción']}</td>
                    <td>${registro['Saldo Caro']}</td>
                    <td>${registro['Saldo Lucas']}</td>
                    <td>${registro['Saldo Luciano']}</td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al obtener el historial.');
        });
}

// Cargar historial al cargar la página
window.onload = cargarHistorial;
// URL del Web App de Google Apps Script
const baseUrl = 'https://script.google.com/macros/s/AKfycbyk1gLUyaLzo-CC47jQ8WnezfOtj5dw8Tqr2rHUtpITyZYVvAKqZmbDbvx5LJLXNUe-/exec';

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

function cargarHistorial() {
    const url = `${baseUrl}?action=obtenerHistorial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#tablaHistorial tbody');
            tbody.innerHTML = '';

            data.forEach(registro => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${new Date(registro['Fecha']).toLocaleString()}</td>
                    <td>${registro['Quién']}</td>
                    <td>${registro['Descripción']}</td>
                    <td>${registro['Monto']}</td>
                    <td>${registro['Tipo de Transacción']}</td>
                    <td>${registro['Saldo Caro']}</td>
                    <td>${registro['Saldo Lucas']}</td>
                    <td>${registro['Saldo Luciano']}</td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al obtener el historial.');
        });
}

// Cargar historial al cargar la página
window.onload = cargarHistorial;
