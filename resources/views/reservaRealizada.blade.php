<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis Reservas</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="./">Nombre del Restaurante</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    @guest
                        <li class="nav-item">
                            <a class="nav-link" href="login">Iniciar sesión</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="register">Registrarse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('mostrar-calendario') }}">Realizar una reserva</a>
                        </li>
                    @else
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('mi-cuenta') }}">Mi cuenta</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('mis-reservas') }}">Mis reservas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('mostrar-calendario') }}">Realizar una reserva</a>
                        </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <h1>Reserva Realizada con Éxito</h1>
        <p>A continuación se muestran los detalles de la reserva:</p>
        <ul>
            <li>Fecha: {{ $reserva['Fecha'] }}</li>
            <li>Hora: {{ $reserva['Hora'] }}</li>
            <li>Número de Personas: {{ $reserva['Nº_Personas'] }}</li>
            <!-- Agrega más detalles de la reserva aquí -->
        </ul>

        <a href="./" class="btn btn-primary">Volver a la Página Principal</a>
    </div>
    <footer class="bg-dark text-white p-4 text-center fixed-bottom">
        Pagina creada por Nicolas Gomez Mulero
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
