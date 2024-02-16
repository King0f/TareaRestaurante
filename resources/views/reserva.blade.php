<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Reserva</title>
</head>
<body style="font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #4A90E2; text-align: center;">Confirmación de Reserva</h2>
        <p style="text-align: center;">Su reserva ha sido realizada con éxito. Por favor, compruebe todos sus datos personales y de la reserva.</p>
        <h2 style="color: #4A90E2; text-align: center;">Datos de la reserva:</h2>
        <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px; text-align: center;">Número de reserva: {{ $reserva['id'] }}</li>
        <li style="margin-bottom: 10px; text-align: center;">Día de la reserva: {{ $reserva['Fecha']}}</li>
        <li style="margin-bottom: 10px; text-align: center;">Hora de la reserva: {{ $reserva['Hora']}}</li>
        <li style="margin-bottom: 10px; text-align: center;">Número de personas: {{ $reserva['Nº_Personas'] }}</li>
        <li style="margin-bottom: 10px; text-align: center;">
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
        <li style="margin-bottom: 10px; text-align: center;">Mesa seleccionada para su comida: {{ $reserva['id_mesa'] }}</li>
        <li style="margin-bottom: 10px; text-align: center;">Número de tarjeta: {{ $reserva['Nº_Tarjeta'] }}</li>
    </ul>
    <h2 style="color: #4A90E2; text-align: center;">Datos del usuario:</h2>
        <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px; text-align: center;">Nombre: {{ $informacionAdicional['nombre'] ?? 'No proporcionado' }}</li>
        <li style="margin-bottom: 10px; text-align: center;">Apellidos: {{ $informacionAdicional['apellidos'] ?? 'No proporcionado'}}</li>
        <li style="margin-bottom: 10px; text-align: center;">Teléfono: {{ $informacionAdicional['telefono'] ?? 'No proporcionado' }}</li>
        <li style="margin-bottom: 10px; text-align: center;">Email: {{ $informacionAdicional['email'] ?? 'No proporcionado' }}</li>
        <li style="margin-bottom: 10px; text-align: center;">Alergias: {{ $informacionAdicional['alergias'] ?? 'No proporcionado' }}</li>
    </ul>
    
    <p style="font-style: italic; text-align: center;">Gracias por tu reserva. Nos vemos pronto.</p>
</body>
</html>