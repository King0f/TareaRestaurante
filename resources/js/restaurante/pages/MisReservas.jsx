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

    const handleBorrar = async (id) => {
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
            window.location.reload();
            
          } else {
            console.error('Respuesta de error del servidor: ' + respuesta.status);
          }
    }
 return (
    <>
    <div>Hola</div>
    {reservas?.map((reserva) => (
        <>
                <p>Id de la reserva: {reserva.id}</p>
                <p>Fecha: {reserva.Fecha}</p>
                <p>Hora: {reserva.Hora}</p>
                <p>Número de comensales: {reserva.Nº_Personas}</p>
                <p>Menu seleccionado: {reserva.id_menu === 1 ? "Menu 1" : "Menu 2"}</p>
                <a onClick={handleBorrar(reserva.id)}>Borrar la reserva</a>

        </>
              ))}
    </>
 )
}
export default MisReservas;