/**
 * El componente ButtonHome es un botón sobre el que se puede pasar el cursor y activa eventos
 * onMouseEnter y onMouseLeave.
 * @returns El código devuelve un componente de botón con el texto "Realizar una reserva". El botón
 * tiene un nombre de clase que incluye "text-white", "font-bold", "py-3", "px-6", "rounded" y "mt-4".
 * El nombre de clase también incluye "flotado" si la propiedad "flotado" es verdadera. El botón tiene
 * controladores de eventos onMouseEnter y onMouseLeave que son
 */
import React from 'react'

export const ButtonHome = ({onMouseEnter, onMouseLeave, hovered}) => {
  return (
    <button className="text-white font-bold py-3 px-6 rounded mt-4 ${hovered ? 'hovered' : ''}"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
      >
          Realizar una reserva
    </button>
  )
}
