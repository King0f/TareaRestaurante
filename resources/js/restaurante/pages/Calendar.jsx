import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

function Calendar () {
    /* const [events, setEvents] = useState([]);

    useEffect(() => {
      // Reemplaza esta URL por la ruta de tu API
      fetch('/api/eventosCalendario')
        .then((response) => response.json())
        .then((data) => {
          const mappedEvents = data.map((event) => ({
            ...event,
            start: new Date(event.Dias_Disponibles), // Asume que tu objeto tiene una propiedad 'fechaInicio'
            title: event.Horas_Disponibles, // Asume que tu objeto tiene una propiedad 'titulo'
          }));
          setEvents(mappedEvents);
        });
    }, []); */
  
    return (
      <div style={{ height: 700 }}>
        {/* <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          style={{ height: 500 }} */}
        {/* /> */}
        <h1>AAAAAAAAAAAAAA</h1>
      </div>
    );
}

export default Calendar