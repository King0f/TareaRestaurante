import React, { useState, useEffect} from "react";

function MisReservas (){
    const [reservas,setReserva] = useState()
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
    })
 return (
    <>
    <div>Hola</div>
    {reservas.map((reserva) => (
                <p>Id de la reserva: {reserva.id}</p>
              ))}
    </>
 )
}
export default MisReservas;