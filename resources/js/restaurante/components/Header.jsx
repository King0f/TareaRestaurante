/**
 * El componente `Header` es una barra de navegación con enlaces para "Mi cuenta", "Mis reservas" y
 * "Realizar una reserva".
 * @returns El componente Encabezado devuelve una barra de navegación con un logotipo y enlaces para
 * "Mi cuenta", "Mis reservas" y "Realizar una reserva".
 */
import React from 'react'

import { Link } from "react-router-dom";

export const Header = ({}) => {
  const isLoggedIn = !!localStorage.getItem('token');
  const cerrarSesion = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <>
    {isLoggedIn ? (
    <nav className="bg-gray-700  bg-opacity-5  p-4 text-white font-mono custom-nav">
        <div className="flex justify-between ">
          <div>
            <Link to="/restaurante"><span className="text-3xl font-bold shadow">Los Cuatro Sentidos</span></Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/restaurante/misReservas" className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Mis Reservas</Link>
            <Link to="/restaurante/calendarioReservas" className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Realizar una reserva</Link>
            <a onClick={cerrarSesion} className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Cerrar Sesion</a>
          </div>
        </div>
    </nav>
    ) : (
      <nav className="bg-gray-700  bg-opacity-5  p-4 text-white font-mono custom-nav">
      <div className="flex justify-between ">
        <div>
          <Link to="/restaurante"><span className="text-3xl font-bold shadow">Los Cuatro Sentidos</span></Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/restaurante/login" className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Login</Link>
          <Link to="/restaurante/register" className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Register</Link>
          <Link to="/restaurante/calendarioReservas" className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Realizar una reserva</Link>
        </div>
      </div>
  </nav>
    )}
  </>
  )
}

