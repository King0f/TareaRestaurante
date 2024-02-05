<!DOCTYPE html>
<html>

<head>
    <title>Formulario de Reserva</title>
    <!-- Enlaces a los archivos de estilo de Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>

        #submitButton:enabled {
            background-color: #343a40; 
            color: #fff; 
        }
        #spinner {
            display: none;
            width: 100%;
            text-align: center;
        }
    
        .loader {
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
            margin: 20px auto;
        }
    
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>

<body>
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
    <div class="container mt-4">
        <!-- Formulario desde el que obtendremos los datos para enviar el correo -->
        <h1 id="hola">Formulario de Reserva</h1>
        <form action="{{ route('procesar-formulario') }}" method="post" id="contactForm">
            @csrf <!-- Añade la protección CSRF -->
            <div class="form-group">
                <label for="nombre">Nº de Personas:</label>
                <input type="number" class="form-control" id="comensales" name="comensales">
                <div id="nameError" style="color: red;"></div>
            </div>

            <div class="form-group">
                <label for="menu">Menu:</label>
                <select class="form-control" id="menu" name="menu" required>
                    <option value="">Selecciona un menú</option>
                    <option value="menu1">Menu 1</option>
                    <option value="menu2">Menu 2</option>
                </select>
                <div id="menuError" style="color: red;"></div>
            </div>

            <div class="form-group">
                <label for="tarjeta_credito">Tarjeta de crédito:</label>
                @guest
                    <input type="text" class="form-control" id="tarjeta" name="tarjeta" required>
                @else
                    <select class="form-control" id="tarjeta" name="tarjeta">
                        <option value="" selected>Seleccione una tarjeta</option>
                        @foreach ($tarjetas as $tarjeta)
                            <option value="{{ $tarjeta->id }}">{{ $tarjeta->Nº_Tarjeta }}</option>
                        @endforeach
                    </select>
                @endguest
                <div id="tarjetaCreditoError" style="color: red;"></div>
            </div>
            
            <div class="form-group">
                <label for="hora">Hora:</label>
                <input type="text" class="form-control" id="hora" name="hora" value="{{ $hora }}" readonly>
            </div>

            <div class="form-group">
                <label for="fecha">Fecha:</label>
                <input type="text" class="form-control" id="fecha" name="fecha" value="{{ $fecha }}" readonly>
            </div>

            <h1 id="hola">Datos del usuario:</h1>
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                @guest
                <input type="text" class="form-control" id="nombre" name="nombre" required>
                @else
                <input type="text" class="form-control" id="nombre" name="nombre" value="{{ $nombre }}" readonly>
                @endguest
                <div id="nameError" style="color: red;"></div>
            </div>

            <div class="form-group">
                <label for="asunto">Apellidos:</label>
                @guest
                <input type="text" class="form-control" id="apellidos" name="apellidos" required>
                @else
                <input type="text" class="form-control" id="apellidos" name="apellidos" value="{{ $apellidos }}" readonly>
                @endguest
                <div id="subjectError" style="color: red;"></div>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                @guest
                <input type="text" class="form-control" id="email" name="email" required>
                @else
                <input type="text" class="form-control" id="email" name="email" value="{{ $email }}" readonly>
                @endguest
                <div id="emailError" style="color: red;"></div>
            </div>

            <div class="form-group">
                <label for="hora">Telefono:</label>
                @guest
                <input type="text" class="form-control" id="telefono" name="telefono" required>
                @else
                <input type="text" class="form-control" id="telefono" name="telefono" value="{{ $telefono }}" readonly>
                @endguest
            </div>

            <div class="form-group">
                <label for="fecha">Alergias:</label>
                @guest
                <input type="text" class="form-control" id="alergias" name="alergias" required>
                @else
                <input type="text" class="form-control" id="alergias" name="alergias" value="{{ $alergias}}" readonly>
                @endguest
            </div>

            <button type="submit" class="btn btn-dark text-white mx-auto d-block" id="submitButton" disabled>Enviar</button>
            <div id="spinner" style="display: none">
                <div class="loader"></div>
                <p>Enviando...</p>
            </div>
        </form>
    </div>
    <footer class="mt-4 bg-dark text-white py-4 text-center">
        Pagina creada por Nicolas Gomez Mulero
    </footer>
    <!-- Enlaces a los archivos de script de Bootstrap -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function() {
            
            // Función para comprobar si todos los campos están llenos
            function verificarCamposLlenos() {
                var camposLlenos = true;
                $('input').each(function() {
                    if ($(this).val() === '') {
                        camposLlenos = false;
                    }
                });
    
                $('select').each(function() {
                    if ($(this).val() === '') {
                        camposLlenos = false;
                    }
                });
    
                // Habilitar el botón de envío si todos los campos están llenos
                if (camposLlenos) {
                    $('#submitButton').prop('disabled', false);
                } else {
                    $('#submitButton').prop('disabled', true);
                }
            }
    
            // Comprobar si todos los campos están llenos al cargar la página
            verificarCamposLlenos();
    
            // Comprobar si todos los campos están llenos al cambiar el valor de un campo
            $('input').on('input', function() {
                verificarCamposLlenos();
            });
    
            $('select').on('change', function() {
                verificarCamposLlenos();
            });
            
        });
    </script>
</body>

</html>