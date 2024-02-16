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
 return (
  <>
  <Header2/>
  <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-8">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Todas las reservas del usuario</h1>
    <div className="w-full max-w-4xl px-4">
      {reservas?.map((reserva) => (
        <div key={reserva.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <p className="font-semibold text-gray-700">Id de la reserva: <span className="font-normal">{reserva.id}</span></p>
          <p className="font-semibold text-gray-700">Fecha: <span className="font-normal">{reserva.Fecha}</span></p>
          <p className="font-semibold text-gray-700">Hora: <span className="font-normal">{reserva.Hora}</span></p>
          <p className="font-semibold text-gray-700">Número de comensales: <span className="font-normal">{reserva.Nº_Personas}</span></p>
          <p className="font-semibold text-gray-700">Número de mesa para su reserva: <span className="font-normal">{reserva.id_mesa}</span></p>
          <p className="font-semibold text-gray-700">Menú seleccionado: <span className="font-normal">{reserva.id_menu === 1 ? "Menú 1" : "Menú 2"}</span></p>
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