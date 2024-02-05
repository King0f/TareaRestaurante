<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Reserva</title>
</head>
<body>
    <nav class="bg-gray-800 p-4 text-white">
        <div class="flex justify-between">
            <div>
                <a href="./"><span class="text-xl font-bold">Nombre del Restaurante</span></a>
            </div>
            <div class="flex space-x-4">
                @guest
                    <a href="login" class="mb-4">Iniciar sesión</a>
                    <a href="register" class="mb-4">Registrarse</a>
                    <a href="{{ route('mostrar-calendario') }}" class="mb-4">Realizar una reserva</a>
                @else
                    <a href="{{ route('mi-cuenta') }}" class="mb-4">Mi cuenta</a>
                    <a href="{{ route('mis-reservas') }}" class="mb-4">Mis reservas</a>
                    <a href="{{ route('mostrar-calendario') }}" class="mb-4">Realizar una reserva</a>
                @endguest
            </div>
        </div>
    </nav>
    <!-- Cuerpo del correo electronico que se mandara -->
    <h2>Confirmación de Reserva</h2>
    <p>Confirmación de reserva para el día: {{ $reserva['fecha'] }} a las {{ $reserva['hora'] }}</p>
    <p>Detalles de la reserva:</p>
    <ul>
        <li>Nombre: {{ $reserva['nombre'] }}</li>
        <li>Asunto: {{ $reserva['asunto'] }}</li>
        <li>Email: {{ $reserva['email'] }}</li>
        <li>Mensaje: {{ $reserva['mensaje'] }}</li>
    </ul>
    <p>Gracias por tu reserva. Nos vemos pronto.</p>
    <footer class="bg-gray-800 p-4 text-white text-center fixed bottom-0 w-full">
        Pagina creada por Nicolas Gomez Mulero
    </footer>
</body>
</html>