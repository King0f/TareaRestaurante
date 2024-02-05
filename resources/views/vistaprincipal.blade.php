<html>
<head>
    <style>
        footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #343a40; /* Cambia esto al color deseado */
    color: white; /* Cambia esto al color deseado */
    text-align: center;
}
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurante Ejemplo</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @vite('resources/css/app.css')
</head>
<body class="bg-gray-300 flex flex-col min-h-screen">
    <nav class="bg-gray-800 p-4 text-white">
        <div class="flex justify-between">
            <div>
                <a href="./"><span class="text-xl font-bold">Nombre del Restaurante Holaaaa</span></a>
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
    
    <div class="max-w-7xl mx-auto mt-4">
        <h1 class="text-center text-4xl font-bold mb-2">Restaurante Ejemplo: Desde 1986</h1>
        <img src="{{asset('imagenes/img1.jpg')}}" alt="Restaurante Ejemplo" class="mb-2">
        <div class="text-center mt-4">
            <a href="{{ route('mostrar-calendario') }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Realizar una reserva
            </a>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 p-4 text-white text-center mt-4 fixed-bottom">
        Pagina creada por Nicolas Gomez Mulero
    </footer>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>