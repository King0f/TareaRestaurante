import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";

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
    console.log(id) ; 
    const respuesta = await fetch('/api/borrarTarjeta', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
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
  <Header2 />
  <div className="flex flex-col min-h-screen">
  <main className="flex-grow">
  <div className="max-w-4xl mx-auto px-4 py-8 text-center">
    <h2 className="text-3xl font-semibold text-gray-800">Datos del usuario:</h2>
    <div className="mt-4 bg-white shadow-md rounded-lg p-6">
      <p className="text-2xl text-gray-700"><b>Nombre:</b> {user.name}</p>
      <p className="text-2xl text-gray-700"><b>Apellidos:</b> {user.apellido}</p>
      <p className="text-2xl text-gray-700"><b>Teléfono:</b> {user.telefono}</p>
      <p className="text-2xl text-gray-700"><b>Alergias:</b> {user.alergias}</p>
      <p className="text-2xl text-gray-700"><b>Email:</b> {user.email}</p>
    </div>

    <h2 className="text-3xl font-semibold text-gray-800 mt-8">Tarjetas de crédito guardadas:</h2>
    <ul className="mt-4">
      {tarjetas?.map((tarjeta) => (
        <li className="bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl text-gray-700">Número de la tarjeta: {tarjeta.Nº_Tarjeta}</span><br />
              <span className="text-2xl text-gray-700">Fecha de caducidad: {tarjeta.Fecha_Caducidad}</span><br />
              <span className="text-2xl text-gray-700">CVV: {tarjeta.CVV}</span>
            </div>
            <button className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleBorrar(tarjeta.id)}>Borrar la tarjeta</button>
          </div>
        </li>
      ))}
    </ul>
    <button onClick={toggleFormulario} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
      Añadir tarjeta a la cuenta
    </button>
    {mostrarFormulario && (
      <form onSubmit={handleSubmit} className="mt-6 bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="Nº_Tarjeta" className="block text-gray-700 text-sm font-bold mb-2">
            Nº de la tarjeta:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Nº_Tarjeta"
            name="Nº_Tarjeta"
            placeholder="Inserte el número de la tarjeta"
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
            placeholder="MM/AA"
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
            placeholder="CVV"
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
  </div>
  </main>
  <Footer />
  </div>
</>
 )
}
export default MiCuenta;