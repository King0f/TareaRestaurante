import React, { useState, useEffect} from "react";

function MiCuenta (){
    const [user,setUser] = useState();
    const [tarjetas, setTarjetas] = useState([]);
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
            console.error('Error al obtener las tarjetas:', error);
          })
          cargarTarjetas().then(data => {
            setTarjetas(data)
          }).catch(error => {
            console.error('Error al obtener las tarjetas:', error);
          });
    },[])
    if (!user) {
        return <p>Cargando detalles del usuario...</p>;
      }
 return (
    <>
    <div>Hola</div>
    <h2>Datos del usuario</h2>
    <p><b>Nombre:</b> {user.name}</p>
    <p><b>Apellidos:</b> {user.apellido}</p>
    <p><b>Teléfono:</b> {user.telefono}</p>
    <p><b>Alergias:</b> {user.alergias}</p>
    <p><b>Email:</b> {user.email}</p>
    <h2>Tarjetas de credito guardadas:</h2>
    <ul>
    {tarjetas?.map((tarjeta) => (
        <>
        <li>
                <span>Número de la tarjeta: {tarjeta.Nº_Tarjeta}</span>
                <span>Fecha de caducidad: {tarjeta.Fecha_Caducidad}</span>
                <span>CVV: {tarjeta.CVV}</span>
        </li>
        </>
              ))}
    </ul>
    <Link to="/restaurante/añadirTarjeta">
    <button>Añadir tarjeta a la cuenta</button>
    </Link>
    </>
 )
}
export default MiCuenta;