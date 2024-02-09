import './App.css'
import React, { useState } from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ButtonHome } from './components/ButtonHome'


function App() {
/* El código está usando el gancho `useState` en React para crear
variables de estado `hovered` y `buttonHovered ` con sus respectivas funciones de configuración
`setHovered` y `setButtonHovered`. */
  const [hovered, setHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  return (
    <>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./imagenes/foton.jpg')" }}>
      <Header/>
      <div className="flex flex-col items-center justify-center pb-36 h-full text-white">
        <h1 className="text-xl font-bold mt-8 mb-4 shadow1 text-zinc-200">Restaurante</h1>

        <h1 id="titulo" className="text-7xl font-bold shadow1">LOS CUATRO SENTIDOS</h1>
        <br/> 
        <h1 className="text-xl font-bold mb-4 shadow1 text-zinc-200">Una experiencia única que te hará sentirlo todo. </h1>
        <br/>
        <ButtonHome
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              hovered={buttonHovered}
            />
      </div>
    </div>

    <div className="relative h-screen bg-cover bg-center bg-gray-900 text-white p-6">
      <div className="flex items-center justify-center ml-16">
        <img
          src="./imagenes/plato.jpg"
          alt="Restaurante"
          className={`w-3/4 h-auto mr-8 rounded-lg mt-40 ${hovered ? 'hovered' : ''}`}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <div className='mt-24 ml-10 mr-20 text-center'>
          <h2 className="text-4xl font-bold mb-4">Una experiencia que nunca olvidarás.</h2>
          <p>En Los Cuatro Sentidos vivirás experiencias que nunca antes habías vivido. </p>
          <br/>
          <p>El chef jefe, Pedrito Perez, ha diseñado varios platos especiales para este restaurante utilizando los ingredientes mas frescos y exclusivos de la ribera de Córdoba</p>
          <br/>
          <p>Realiza tu reserva aquí. </p>
          <br/>
          <center>
          <ButtonHome
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              hovered={buttonHovered}
            />
          </center>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
