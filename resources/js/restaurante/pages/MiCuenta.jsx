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
                <button className="text-black" onClick={() => handleBorrar(tarjeta.id)}>Borrar la reserva</button>
        </li>
        
        </>
              ))}
    </ul>
    <button onClick={toggleFormulario} className="text-black">
                Añadir tarjeta a la cuenta
    </button>
    {mostrarFormulario && (
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                     <label htmlFor="Nº_Tarjeta" className="block text-gray-700 text-sm font-bold mb-2">
                       Nº de la tarjeta:
                     </label>
                     <input
                       type="text"
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="Nº_Tarjeta"
                       name="Nº_Tarjeta"
                       placeholder= "Inserte el número de la tarjeta"
                       onChange={(e) => setNTarjeta(e.target.value)}
                     />
                   </div>
                   <div className="mb-4">
                     <label htmlFor="Fecha_Caducidad" className="block text-gray-700 text-sm font-bold mb-2">
                       Fecha de caducidad:
                     </label>
                     <input
                       type="text"
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="Fecha_Caducidad"
                       name="Fecha_Caducidad"
                       placeholder= "Inserte el número de la tarjeta"
                       onChange={(e) => setFechaCaducidad(e.target.value)}
                     />
                   </div>
                   <div className="mb-4">
                     <label htmlFor="CVV" className="block text-gray-700 text-sm font-bold mb-2">
                       CVV:
                     </label>
                     <input
                       type="text"
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="CVV"
                       name="CVV"
                       placeholder= "Inserte el número de la tarjeta"
                       onChange={(e) => setCvv(e.target.value)}
                     />
                   </div>
                   <div className="flex items-center justify-between">
                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                       Añadir Tarjeta
                     </button>
                   </div>
                 </form>
            )}
    </>
 )
}
export default MiCuenta;