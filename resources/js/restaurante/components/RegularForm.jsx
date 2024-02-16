import React, { useState } from "react"

function RegularForm(props) {
const [n_personas, setPersonas] = useState();
const [menu, setMenu] = useState();
const [nombre, setNombre] = useState();
const [email, setEmail] = useState();
const [apellidos, setApellidos] = useState();
const [telefono, setTelefono] = useState();
const [alergias, setAlergias] = useState();
const [n_tarjeta, setNTarjeta] = useState();
const [fecha_caducidad, setFechaCaducidad] = useState();
const [cvv, setCvv] = useState();
const handleSubmit = async (e) => {
  e.preventDefault(); 
  try {
    const respuesta = await fetch('/api/procesarReservaUnlogged', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fecha: props.fecha,
        hora: props.hora,
        nombre: nombre,
        email: email,
        apellidos: apellidos,
        telefono: telefono,
        alergias: alergias,
        n_personas: n_personas,
        n_tarjeta: n_tarjeta,
        fecha_caducidad: fecha_caducidad,
        cvv: cvv,
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
              value={props.fecha}
              placeholder={props.fecha}
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
              value={props.hora}
              placeholder={props.hora}
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
            <label htmlFor="tarjeta" className="block text-gray-700 text-sm font-bold mb-2">
              Seleccione una menú para todos los comensales:
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tarjeta"
              name="tarjeta"
              onChange={(e) => setMenu(e.target.value)}
            >
              <option value="">Seleccione un menú</option>
              <option value="menu1">Menu 1 - Sensaciones encontradas - 75€</option>
              <option value="menu2">Menu 2 - Todas las emociones - 150€</option>
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
              placeholder= "Inserte su nombre"
              onChange={(e) => setNombre(e.target.value)}
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
              placeholder= "Inserte sus apellidos"
              onChange={(e) => setApellidos(e.target.value)}
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
              placeholder= "Inserte su email"
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder= "Inserte su telefono"
              onChange={(e) => setTelefono(e.target.value)}
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
              placeholder= "Desarrolle aqui si tiene alguna alergia"
              onChange={(e) => setAlergias(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="N_Tarjeta" className="block text-gray-700 text-sm font-bold mb-2">
              Nº de tarjeta:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="N_Tarjeta"
              name="N_Tarjeta"
              placeholder= "Inserte el número de su tarjeta"
              onChange={(e) => setNTarjeta(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Fecha_Caducidad" className="block text-gray-700 text-sm font-bold mb-2">
              Fecha de Caducidad:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Fecha_Caducidad"
              name="Fecha_Caducidad"
              placeholder= "Inserte la fecha de caducidad de la tarjeta introducida"
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
              placeholder= "Inserte EL CVV de la tarjeta introducida"
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default RegularForm