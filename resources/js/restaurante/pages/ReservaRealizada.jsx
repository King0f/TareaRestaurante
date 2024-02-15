import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";

function ReservaRealizada() {
    const isLoggedIn = !!localStorage.getItem('token');
    function volverAlInicio() {
      window.location.href = '/restaurante/';
  }
  
    return (
      <>
      <Header2/>
      {isLoggedIn ? (
        <div>
        <h1>Reserva realizada con exito</h1>
        <h2>Compruebe la pagina de 'Mis Reservas' para comprobar todos los datos de su reserva</h2>
        <Link to={'/restaurante/misReservas'}>
        <button className="text-black">Mis Reservas</button>
        </Link>
          <button className="text-black" onClick={volverAlInicio}>Volver al inicio</button>
       </div> 
      ) : (
        <div>Hola</div>
      )}
      <Footer/>
      </>
    )
}

export default ReservaRealizada;