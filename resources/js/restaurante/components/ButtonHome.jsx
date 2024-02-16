import React from 'react'
import { useNavigate } from 'react-router-dom'
export const ButtonHome = ({onMouseEnter, onMouseLeave, hovered}) => {
  const navigate = useNavigate()
  function handleClick(){
    navigate('/restaurante/realizarReserva')
  }
  return (
    <button className="botonInicio text-white font-bold py-3 px-6 rounded mt-4 ${hovered ? 'hovered' : ''}"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={handleClick}
      >
          Realizar una reserva
    </button>
  )
}
