import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function MiCuenta (){
    const [user,setUser] = useState();
    const [tarjetas, setTarjetas] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [n_tarjeta, setNTarjeta] = useState();
    const [fecha_caducidad, setFechaCaducidad] = useState();
    const [añadida, setAñadida] = useState(false);
    const [cvv, setCvv] = useState(); // Nuevo estado para controlar la visibilidad del formulario
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

          
    },[añadida])

    const toggleFormulario = () => {
      setMostrarFormulario(!mostrarFormulario);
  };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
        try {
          const respuesta = await fetch('/api/addTarjeta', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              N_Tarjeta: n_tarjeta,
              fecha_caducidad: fecha_caducidad,
              cvv: cvv,
            }), 
          });

          if (respuesta.ok) {
            
          }
        } catch (error) {
          console.error('Error al enviar los datos:', error);
        }
        setAñadida(!añadida)
        setMostrarFormulario(false);
  };
  const handleBorrar = async (id) => {
    console.log('borrar')
    const token = localStorage.getItem('token')
    const respuesta = await fetch('/api/borrarTarjeta', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          idTarjeta: id,
        }), 
      });
  
      if (respuesta.ok) {
        setAñadida(!añadida)
      } else {
        console.error('Respuesta de error del servidor: ' + respuesta.status);
      }
}
    if (!user) {
        return <p>Cargando detalles del usuario...</p>;
      }
 return (
    <>
    <div>Hola</div>
    
    </>
 )
}
export default MiCuenta;