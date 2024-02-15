import React, { useState, useEffect} from "react";
import { Header2 } from '../components/Header2'

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
        await fetch('/api/borrarReserva', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              idReserva: id,
            }), 
          });
            setActu[!actualizar]
    }
 return (
    <>
    <Header2/>
    {reservas?.map((reserva) => (
        <>
                <p>Id de la reserva: {reserva.id}</p>
                <p>Fecha: {reserva.Fecha}</p>
                <p>Hora: {reserva.Hora}</p>
                <p>Número de comensales: {reserva.Nº_Personas}</p>
                <p>Número de mesa para su reserva: {reserva.id_mesa}</p>
                <p>Menu seleccionado: {reserva.id_menu === 1 ? "Menu 1" : "Menu 2"}</p>
                <button className="text-black" onClick={() => handleBorrar(reserva.id)}>Borrar la reserva</button>

        </>
              ))}
    </>
 )
}
export default MisReservas;