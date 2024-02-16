import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import RegularForm from "../components/RegularForm";


function Reservar() {
  let { fecha, hora } = useParams();
  const navigate = useNavigate()
  const isLoggedIn = !!localStorage.getItem('token');
  const [user, setUser] = useState();
  const [n_personas, setPersonas] = useState();
  const [menu, setMenu] = useState("");
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

const handleSubmit = async (e) => {
  e.preventDefault(); 
  const token = localStorage.getItem('token');
  try {
    const respuesta = await fetch('/api/procesarReservaLogged', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        fecha: fecha,
        hora: hora,
        n_personas: n_personas,
        tarjeta: tarjetaSeleccionada,
        menu: menu,
        // Incluye cualquier otro dato necesario
      }), 
    });

    if (respuesta.ok) {
      const resultado = await respuesta.json();
      const reservaId = resultado.id;
      navigate('/restaurante/resumenReserva', { state: { reservaId } })
      
    } else {
      console.error('Respuesta de error del servidor: ' + respuesta.status);
    
      // Intenta parsear la respuesta para obtener el mensaje de error
      respuesta.json().then(error => {
        console.error('Detalle del error:', error);
      }).catch(() => {
        // Si la respuesta no se pudo parsear a JSON, lee como texto
        respuesta.text().then(texto => {
          console.error('Respuesta de error como texto:', texto);
        });
      });
    }
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
};

  return (
    <>
    <Header2 />
    {isLoggedIn ? (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[80rem]">
      <h2 className="text-center text-3xl font-semibold mb-4 text-gray-800 pt-4">Datos de la reserva</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-gray-700 text-sm font-bold mb-2">
              Dia de la reserva:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fecha"
              name="fecha"
              value={fecha}
              placeholder={fecha}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hora" className="block text-gray-700 text-sm font-bold mb-2">
              Hora de la reserva:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hora"
              name="hora"
              value={hora}
              placeholder={hora}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Nº_Personas" className="block text-gray-700 text-sm font-bold mb-2">
              Nº de personas para la reserva:
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Nº_Personas"
              name="Nº_Personas"
              placeholder= "Inserte el número de personas de la reserva"
              onChange={(e) => setPersonas(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="menu" className="block text-gray-700 text-sm font-bold mb-2">
              Seleccione una menú para todos los comensales:
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="menu"
              name="menu"
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
            >
              <option value="">Seleccione un menú</option>
              <option value="Menu1">Menú 1 - Sensaciones encontradas - 75€</option>
              <option value="Menu2">Menú 2 - Todas las emociones - 150€</option>
            </select>
          </div>
        <h2 className="text-center text-3xl font-semibold mb-4 text-gray-800 pt-4">Datos del Usuario</h2>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
              Nombre:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              name="nombre"
              value={user.name}
              placeholder={user.name}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apellidos" className="block text-gray-700 text-sm font-bold mb-2">
              Apellidos:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="apellido"
              name="apellido"
              value={user.apellido}
              placeholder={user.apellido}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              value={user.email}
              placeholder={user.email}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">
              Teléfono:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="telefono"
              name="telefono"
              value={user.telefono}
              placeholder={user.telefono}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="alergias" className="block text-gray-700 text-sm font-bold mb-2">
              Alergias:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="alergias"
              name="alergias"
              value={user.alergias}
              placeholder={user.alergias}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tarjeta" className="block text-gray-700 text-sm font-bold mb-2">
              Seleccione una tarjeta:
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tarjeta"
              name="tarjeta"
              value={tarjetaSeleccionada}
              onChange={(e) => setTarjetaSeleccionada(e.target.value)}
            >
              <option value="">Seleccione una tarjeta</option>
              {tarjetas.map((tarjeta) => (
                <option key={tarjeta.id} value={tarjeta.id}>
                  {tarjeta.Nº_Tarjeta}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    ) : (
        <RegularForm fecha={fecha} hora={hora}/>
    )}
    <Footer />
    </>
  );
}

export default Reservar