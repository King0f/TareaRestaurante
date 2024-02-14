import React, { useState } from "react";

const [n_personas, setPersonas] = useState();
const [menu, setMenu] = useState();
const [nombre, setNombre] = useState();
const [email, setEmail] = useState();
const [apellidos, setApellidos] = useState();
const [telefono, setTelefono] = useState();
const [alergias, setAlergias] = useState();
const [mesa, setMesa] = useState();
const [n_tarjeta, setNTarjeta] = useState();
const [fecha_caducidad, setFechaCaducidad] = useState();
const [cvv, setCvv] = useState();

function RegularForm(props) {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[80rem]">
      <h2 className="text-center text-3xl font-semibold mb-4 text-gray-800 pt-4">Datos de la reserva</h2>
        <form>
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
              <option value="menu1">Menu 1 - Sensaciones encontradas</option>
              <option value="menu2">Menu 2 - Todas las emociones</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="mesa" className="block text-gray-700 text-sm font-bold mb-2">
              Seleccione la mesa en la que desea comer:
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mesa"
              name="mesa"
              onChange={(e) => setMesa(e.target.value)}
            >
              <option value="">Seleccione la mesa</option>
              <option value="1">Mesa 1</option>
              <option value="2">Mesa 2</option>
              <option value="3">Mesa 3</option>
              <option value="4">Mesa 4</option>
              <option value="5">Mesa 5</option>
              <option value="6">Mesa 6</option>
              <option value="7">Mesa 7</option>
              <option value="8">Mesa 8</option>
            </select>
          </div>
        </form>
        <h2 className="text-center text-3xl font-semibold mb-4 text-gray-800 pt-4">Datos del Usuario</h2>
        <form>
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
              value={user.telefono}
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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