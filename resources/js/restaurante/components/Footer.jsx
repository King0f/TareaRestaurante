/**
 * La función anterior es un componente de React que representa un elemento de pie de página con algo
 * de texto.
 * @returns El componente Pie de página devuelve un elemento de pie de página con una clase de
 * "bg-black p-4 opacity-90 text-white text-center" y el texto "Pagina creada por Nicolas Gomez
 * Mulero".
 */
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-black p-4 opacity-90 text-white text-center">
      Página creada por Nicolás Gómez Mulero
    </footer>
  )
}
