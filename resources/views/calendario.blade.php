<!DOCTYPE html>
<html>
<head>
    <style>
        .fc-daygrid-event { 
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js'></script>
    @vite('resources/css/app.css')
    @guest
    <script>
    document.addEventListener('DOMContentLoaded', function() {
            var eventos = @json($event); // Convertir el array PHP en un array de JavaScript

            var eventosFullCalendar = [];

            eventos.forEach(function(evento) {
                eventosFullCalendar.push({
                    title: evento.Horas_Disponibles,
                    start: evento.Dias_Disponibles,
                    url: "formulario2/" + evento.Dias_Disponibles + "/" + evento.Horas_Disponibles 
                });
            });
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
            events: eventosFullCalendar,
            });
        calendar.render();
        });
</script>
@else
<script>
    document.addEventListener('DOMContentLoaded', function() {
            var eventos = @json($event); // Convertir el array PHP en un array de JavaScript

            var eventosFullCalendar = [];

            eventos.forEach(function(evento) {
                eventosFullCalendar.push({
                    title: evento.Horas_Disponibles,
                    start: evento.Dias_Disponibles,
                    url: "formulario/" + evento.Dias_Disponibles + "/" + evento.Horas_Disponibles 
                });
            });
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
            events: eventosFullCalendar,
            });
        calendar.render();
        });
</script>
@endguest
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
    <!-- Devolviendo el mensaje si se redirige a la pagina despues de mandar un correo -->
    @if(isset($mensaje))
        <p> {{$mensaje}}</p>
    @endif
    <!-- Inicializando el calendario -->
    <div id="calendar"></div>
    <footer class="bg-gray-800 p-4 text-white text-center">
        Pagina creada por Nicolas Gomez Mulero
    </footer>
</body>
</html>