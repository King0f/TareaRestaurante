import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";

function ReservaRealizada() {
    const isLoggedIn = !!localStorage.getItem('token');
  
    return (
      <>
      <Header2/>
      ({isLoggedIn ? (
        <div>
        <h1>Reserva realizada con exito</h1>
        <h2>Compruebe la pagina de 'Mis Reservas' para comprobar todos los datos de su reserva</h2>
        <Link to={'/restaurante/misReservas'}>
        <button>Mis Reservas</button>
        </Link>
        <Link to={'/restaurante/'}>
          <button>Volver al inicio</button>
        </Link>
       </div> 
      ) : (
        <div>Hola</div>
      )})
      <Footer/>
      </>
    )
}

export default ReservaRealizada;