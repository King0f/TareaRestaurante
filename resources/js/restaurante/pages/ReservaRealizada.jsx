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
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
          {isLoggedIn ? (
            <div className="text-center space-y-1">
              <h1 className="text-4xl font-bold text-white">Reserva realizada con éxito</h1>
              <h2 className="text-2xl text-gray-300">Compruebe la página de 'Mis Reservas' para comprobar todos los datos de su reserva</h2>
              <Link to={'/restaurante/misReservas'}>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mis Reservas</button>
              </Link>
              <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={volverAlInicio}>Volver al inicio</button>
            </div> 
          ) : (
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">Reserva realizada con éxito</h1>
              <h2 className="text-2xl text-gray-300">Compruebe su bandeja de entrada en el correo para comprobar todos los datos de la reserva</h2>
              <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={volverAlInicio}>Volver al inicio</button>
            </div> 
          )}
        </div>
        <Footer/>
      </>
    )
}

export default ReservaRealizada;