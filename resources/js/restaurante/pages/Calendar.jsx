import React/* , { useState, useEffect } */ from 'react';
/* import { Calendar, momentLocalizer } from 'react-big-calendar'; */
/* import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; */
/* 
const localizer = momentLocalizer(moment); */
function Calendar () {
    /* const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/eventosCalendario') // Ajusta esta URL a la ruta de tu API
      .then((response) => response.json())
      .then((data) => {
        const mappedEvents = data.map((event) => {
          const eventStart = new Date(event.Dias_Disponibles); // Asume 'fechaInicio' es una fecha 
          const end = new Date(event.Horas_Disponibles)
          return {
            ...event,
            start: eventStart,
            end: moment(end).add(24, 'hours').toDate(), 
            title: `${moment(end)}`, // Combina la hora y el título
          };
        });
        setEvents(mappedEvents);
      });
  }, []); */

  return (<>
    <h1> Me cagoooooooo </h1>
    {/* <div style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div> */}
    </>
  );
}

export default Calendar