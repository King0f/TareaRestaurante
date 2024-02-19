import React, { useState, useEffect} from "react";
import { Header2 } from '../components/Header2'
import { Footer } from "../components/Footer";

function MisReservas (){
    const [reservas,setReserva] = useState()
    const [actualizar, setActu] = useState(false)
    useEffect(() => {
        const obtenerDatosUsuario = async () => {
          const token = localStorage.getItem('token');
          
          const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          });
    
          const response = await fetch('/api/obtenerReservasUsuario', {
            method: 'GET', 
            headers: headers, 
          });
    
          if (!response.ok) {
            throw new Error('La petición falló o el token no es válido');
          }
    
          const data = await response.json();
          return data;
        };
        obtenerDatosUsuario().then(data => {
            setReserva(data)
          }).catch(error => {
            console.error('Error al obtener las tarjetas:', error);
          })
    },[actualizar])

    const handleBorrar = async (id) => {
        console.log('borrar')
        const token = localStorage.getItem('token')
        const respuesta = await fetch('/api/borrarReserva', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              idReserva: id,
            }), 
          });
      
          if (respuesta.ok) {
            setActu(!actualizar)
          } else {
            console.error('Respuesta de error del servidor: ' + respuesta.status);
          }
    }
    if (!reservas) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-xl font-semibold text-gray-800">No se ha encontrado ninguna reserva</h1>
        </div>
      );
    }
 return (
  <>
    <Header2/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Todas las reservas del usuario</h1>
      <div className="w-full max-w-4xl px-4">
        {reservas?.map((reserva) => (
          <div key={reserva.id} className="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">Id de la reserva:</p>
              <p className="text-lg text-gray-600">{reserva.id}</p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">Fecha:</p>
              <p className="text-lg text-gray-600">{reserva.Fecha}</p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">Hora:</p>
              <p className="text-lg text-gray-600">{reserva.Hora}</p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">Número de comensales:</p>
              <p className="text-lg text-gray-600">{reserva.Nº_Personas}</p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">Número de mesa para su reserva:</p>
              <p className="text-lg text-gray-600">{reserva.id_mesa}</p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">Menú seleccionado:</p>
              <p className="text-lg text-gray-600">{reserva.id_menu === 1 ? "Menú 1 - Sensaciones encontradas - 75€" : "Menú 2 - Todas las emociones - 150€"}</p>
            </div>
            <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleBorrar(reserva.id)}>Borrar la reserva</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>
 )
}
export default MisReservas;