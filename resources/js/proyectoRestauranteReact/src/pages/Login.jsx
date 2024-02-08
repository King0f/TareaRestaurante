import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  /* La línea usa el gancho `useState` en React para crear una variable de estado llamada `formData` y una función
  correspondiente llamada ` setFormData` para actualizar el estado. */
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /**
   * La función `handleInputChange` se utiliza para actualizar el objeto `formData` con el nuevo valor
   * del campo de entrada que desencadenó el evento.
   */
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

     //Creando el objeto usuario con los datos del formulario
    const user = {
      email: formData.email,
      password: formData.password,
    };

   /* El objeto se utiliza para configurar los detalles de la solicitud HTTP que se enviará
   al servidor. En este caso se está configurando una solicitud POST con las siguientes propiedades: */
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

   /* La línea `const url = "http://localhost/TareaRestaurante2/public/api/login";` está asignando la
   URL del punto final de la API de inicio de sesión a la variable `url`. Esta URL es la dirección
   donde se enviará la solicitud de inicio de sesión al servidor. */
/*     const url = "/api/login"; */

    /* El código "fetch(url, opciones)" realiza una solicitud HTTP a la "url" especificada con las
    "opciones" dadas. */
    fetch(url, options)
      .then(response => response.json())
      .then(resultado => console.log(resultado.token))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="relative h-screen bg-cover bg-center flex items-center justify-center bg-gray-900">
        <div className="relative z-10 bg-gray-800 bg-opacity-90 p-8 rounded-md shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-white ml-16">Inicio de Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border bg-gray-700 rounded-md text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white text-sm font-medium mb-2">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border bg-gray-700 rounded-md text-white"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Iniciar Sesión
            </button>
          </form>
          <div className="mt-4 text-white text-center">
            ¿No tienes cuenta? <Link to="/register" className="text-blue-500">Regístrate aquí.</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
