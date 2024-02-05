$(document).ready(function() {
    $('#calendar').fullCalendar({
        defaultView: 'agendaDay',
        editable: false,
        events: [
            // Evento que representa las horas disponibles
            {
                title: 'Hora disponible',
                start: '2023-10-11T09:00:00', // Fecha y hora de inicio
                end: '2023-10-11T10:00:00', // Fecha y hora de finalización
                url: 'formulario.html' // URL al formulario
            },
            // Agrega más eventos según tus necesidades
        ]
    });
});