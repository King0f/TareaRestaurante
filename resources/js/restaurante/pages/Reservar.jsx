import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


function Reservar() {
  let { fecha, hora } = useParams();
  const isLoggedIn = !!localStorage.getItem('token');
  const [user, setUser] = useState();
  const [tarjetas, setTarjetas] = useState([]);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState('');
  if (isLoggedIn) {
    useEffect(() => {
      const obtenerDatosUsuario = async () => {
        const token = localStorage.getItem('token');
        
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        });
  
        const response = await fetch('/api/obtenerDatosUsuario', {
          method: 'GET', 
          headers: headers, 
        });
  
        if (!response.ok) {
          throw new Error('La petición falló o el token no es válido');
        }
  
        const data = await response.json();
        return data;
      };

      const cargarTarjetas = async () => {
        const token = localStorage.getItem('token');
        
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        });
  
        const response = await fetch('/api/obtenerTarjetas', {
          method: 'GET', 
          headers: headers, 
        });

        const data = await response.json();
        return data;
      };
  
      obtenerDatosUsuario().then(data => {
        setUser(data)
      }).catch(error => {
        console.error('Error al obtener datos del usuario:', error);
      });

      cargarTarjetas().then(data => {
        setTarjetas(data)
      }).catch(error => {
        console.error('Error al obtener las tarjetas:', error);
      });
    }, []); 

  if (!user) {
    return <p>Cargando detalles del usuario...</p>;
  }
}
const handleChange = (e) => {
  setTarjetaSeleccionada(e.target.value);
};
  return (
    <>
    {isLoggedIn ? (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Fecha: {fecha}</p>
      <p>Hora: {hora}</p>
      <p>Nombre: {user.name}</p>
      <select
          id="tarjeta"
          name="tarjeta"
          value={tarjetaSeleccionada}
          onChange={handleChange}
        >
          <option value="">Seleccione una tarjeta</option>
          {tarjetas.map((tarjeta) => (
            <option key={tarjeta.id} value={tarjeta.id}>
              {tarjeta.Nº_Tarjeta}
            </option>
          ))}
        </select>
    </div>
    ) : (
        <h1>hola</h1>
    )}
    </>
  );
}

export default Reservar