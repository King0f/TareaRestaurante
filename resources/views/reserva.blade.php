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
    <p>Su reserva ha sido realizada con éxito. Por favor, compruebe todos sus datos personales y de la reserva.</p>
    <h2>Datos de la reserva:</h2>
    <ul>
        <li>Número de reserva: {{ $reserva['id'] }}</li>
        <li>Día de la reserva: {{ $reserva['Fecha']}}</li>
        <li>Hora de la reserva: {{ $reserva['Hora']}}</li>
        <li>Número de personas: {{ $reserva['Nº_Personas'] }}</li>
        <li>
            Menú seleccionado para los comensales: 
            @if(isset($reserva['id_menu']))
                @switch($reserva['id_menu'])
                    @case(1)
                        Menú 1 - Sensaciones encontradas - 75€
                        @break
                    @case(2)
                        Menú 2 - Todas las emociones - 150€
                        @break
                    @default
                        No proporcionado
                @endswitch
            @else
                No proporcionado
            @endif
        </li>
        <li>Mesa seleccionada para su comida: {{ $reserva['id_mesa'] }}</li>
        <li>Número de tarjeta: {{ $reserva['Nº_Tarjeta'] }}</li>
    </ul>
    <h2>Datos del usuario:</h2>
    <ul>
        <li>Nombre: {{ $informacionAdicional['nombre'] ?? 'No proporcionado' }}</li>
        <li>Apellidos: {{ $informacionAdicional['apellidos'] ?? 'No proporcionado'}}</li>
        <li>Teléfono: {{ $informacionAdicional['telefono'] ?? 'No proporcionado' }}</li>
        <li>Email: {{ $informacionAdicional['email'] ?? 'No proporcionado' }}</li>
        <li>Alergias: {{ $informacionAdicional['alergias'] ?? 'No proporcionado' }}</li>
    </ul>
    
    <p>Gracias por tu reserva. Nos vemos pronto.</p>
</body>
</html>