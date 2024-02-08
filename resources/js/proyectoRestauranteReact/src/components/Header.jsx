/**
 * El componente `Header` es una barra de navegación con enlaces para "Mi cuenta", "Mis reservas" y
 * "Realizar una reserva".
 * @returns El componente Encabezado devuelve una barra de navegación con un logotipo y enlaces para
 * "Mi cuenta", "Mis reservas" y "Realizar una reserva".
 */
import React from 'react'

/* import { Link } from "react-router-dom"; */

export const Header = ({}) => {
  return (
    <nav className="bg-gray-700  bg-opacity-5  p-4 text-white font-mono custom-nav">
        <div className="flex justify-between ">
          <div>
            {/* <Link to="/"><span className="text-3xl font-bold shadow">Los Cuatro Sentidos</span></Link> */}
          </div>
          <div className="flex space-x-4">
            {/* <Link to="/login" className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Login</Link>
            <Link to="/register" className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Register</Link> */}
            <a href="#" className="mb-2 text-xl px-3 py2 rounded mt-2 shadow1 nav-link">Realizar una reserva</a>
          </div>
        </div>
    </nav>
  )
}

