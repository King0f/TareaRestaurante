<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis Reservas</title>
    <!-- Reemplazar con las URL correctas de los archivos CSS de Bootstrap -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">
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
        <div class="text-center">
            <h1 class="display-4 font-weight-bold mb-4">Mis Reservas</h1>
            <ul class="list-unstyled text-left">
                @foreach ($reservas as $reserva)
                    <li class="lead mb-4">
                        <strong>Fecha:</strong> {{ $reserva->Fecha }},
                        <strong>Hora:</strong> {{ $reserva->Hora }},
                        <strong>Número de Personas:</strong> {{ $reserva->Nº_Personas }}
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
    <footer class="bg-dark text-white py-4 text-center fixed-bottom">
        Pagina creada por Nicolas Gomez Mulero
    </footer>
</body>

</html>
