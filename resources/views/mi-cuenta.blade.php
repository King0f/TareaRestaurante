<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu restaurante</title>
    <!-- Reemplazar con las URL correctas de los archivos CSS de Bootstrap -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
    </nav>

    <div class="container-fluid bg-light pt-4">
        <div class="container">
            <h1 class="text-center font-weight-bold mb-4">Mi cuenta</h1>
            <table class="table table-bordered mx-auto">
                <tr>
                    <td class="font-weight-bold">Nombre:</td>
                    <td class="text-center">{{ $user->name }}</td>
                </tr>
                <tr>
                    <td class="font-weight-bold">Apellidos:</td>
                    <td class="text-center">{{ $user->apellido }}</td>
                </tr>
                <tr>
                    <td class="font-weight-bold">Teléfono:</td>
                    <td class="text-center">{{ $user->telefono }}</td>
                </tr>
                <tr>
                    <td class="font-weight-bold">Alergias:</td>
                    <td class="text-center">{{ $user->alergias }}</td>
                </tr>
                <tr>
                    <td class="font-weight-bold">Email:</td>
                    <td class="text-center">{{ $user->email }}</td>
                </tr>
            </table>

            <div class="mt-8">
                <h2 class="text-center font-weight-bold mb-3">Mis tarjetas de crédito</h2>
                <ul class="list-unstyled text-center">
                    @foreach ($tarjetas as $tarjeta)
                        <li>
                            <span class="font-weight-bold">Número de Tarjeta:</span> {{ $tarjeta->Nº_Tarjeta }},
                            <span class="font-weight-bold">Fecha de Caducidad:</span> {{ $tarjeta->Fecha_Caducidad }},
                            <span class="font-weight-bold">CVV:</span> {{ $tarjeta->CVV }}
                        </li>
                    @endforeach
                </ul>
                <div class="mt-3 text-center">
                    <a href="{{ route('añadir-tarjeta') }}" class="btn btn-primary">Añadir Tarjeta de Crédito</a>
                </div>
            </div>

            <form action="{{ route('logout') }}" method="POST" class="mt-3 text-center">
                @csrf
                <button type="submit" class="btn btn-dark" style="background-color: #343a40; border-color: #343a40;">Cerrar sesión</button>
            </form>
        </div>
    </div>
    <footer class="navbar navbar-dark bg-dark p-4 text-white text-center fixed-bottom">
        Pagina creada por Nicolas Gomez Mulero
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>