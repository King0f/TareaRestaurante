<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Reserva</title>
</head>
<body>
    <!-- Cuerpo del correo electronico que se mandara -->
    <h2>Confirmación de Reserva</h2>
    <p>Confirmación de reserva para el día: {{ $reserva['Fecha'] }} a las {{ $reserva['Hora'] }}</p>
    <p>Detalles de la reserva:</p>
    <h2>Datos del usuario:</h2>
    <ul>
        <li>Nombre: {{ $informacionAdicional['nombre'] ?? 'No proporcionado' }}</li>
        <li>Apellidos: {{ $informacionAdicional['apellidos'] ?? 'No proporcionado'}}</li>
        <li>Email: {{ $informacionAdicional['email'] ?? 'No proporcionado' }}</li>
        <li>Reserva id: {{ $reserva['id'] }}</li>

    </ul>
    <p>Gracias por tu reserva. Nos vemos pronto.</p>
</body>
</html>