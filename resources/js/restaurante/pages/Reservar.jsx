import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


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

  return (
    <>
    <Header />
    {isLoggedIn ? (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[64rem]">
        <form>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              name="nombre"
              value={user.name}
              placeholder={user.name}
              readonly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tarjeta" className="block text-gray-700 text-sm font-bold mb-2">
              Seleccione una tarjeta
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    ) : (
        <h1>hola</h1>
    )}
    <Footer />
    </>
  );
}

export default Reservar