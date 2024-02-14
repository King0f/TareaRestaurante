import React from "react";
import { Link, useLocation } from 'react-router-dom';

function ReservaRealizada() {
    const location = useLocation();
    const { reservaId } = location.state || {};
  
    if (!reservaId) {
      return <Redirect to="/" />;
    }
    return (
       <div>
        <h1>RESERVA REALIZADA ILLOOOOOOOOOO</h1>
        <h2> Resumen de su reserva: </h2>
        <p>Nº de reserva: {reservaId}</p>
       </div> 
    )
}

export default ReservaRealizada;