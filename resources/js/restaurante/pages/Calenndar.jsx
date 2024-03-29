import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Header2 } from '../components/Header2'

function Calenndar() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetchEvents().then((events) => {
            const formattedEvents = events.map((event) => ({
                title: 'Reserva a las ' + event.Horas_Disponibles +' horas', 
                start: event.Dias_Disponibles,
                hora: event.Horas_Disponibles,
            }));

            setEvents(formattedEvents);
        });
    }, []);

    const handleEventClick = (clickInfo) => {
        const { event } = clickInfo;
        const hora = event.extendedProps.hora; 
        navigate(`/restaurante/realizarReserva/${event.startStr}/${hora}`);
    };

    return (
        <>
        <Header2 />
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick} 
        />
        </>
    );
}

async function fetchEvents() {
    const response = await fetch('/api/eventosCalendario');
    const data = await response.json();
    return data;
}

export default Calenndar;
