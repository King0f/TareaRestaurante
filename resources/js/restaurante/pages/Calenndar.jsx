import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calenndar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Asume que tienes una función para obtener los eventos desde tu backend
        fetchEvents().then((events) => {
            const formattedEvents = events.map((event) => ({
                title: event.Horas_Disponibles, 
                start: event.Dias_Disponibles, 
                url: "/restaurante/realizarReserva/:" + event.Dias_Disponibles + "/:" + event.Horas_Disponibles 
            }));

            setEvents(formattedEvents);
        });
    }, []);

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
        />
    );
}

async function fetchEvents() {
    // Implementa la lógica de fetching de tus eventos aquí,
    // por ejemplo, usando fetch para obtener los datos de tu API.
    const response = await fetch('/api/eventosCalendario');
    const data = await response.json();
    return data;
}

export default Calenndar;