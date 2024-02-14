import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AñadirTarjeta(){
    const [n_tarjeta, setNTarjeta] = useState();
    const [fecha_caducidad, setFechaCaducidad] = useState();
    const [cvv, setCvv] = useState();
    const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault(); 
  const token = localStorage.getItem('token');
  try {
    const respuesta = await fetch('/api/anadirTarjeta', {
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
      navigate('/restaurante/miCuenta')
      
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
        </>
    )
}

export default AñadirTarjeta;