import React, { useState } from "react";
import { useParams } from 'react-router-dom';


function Reservar() {
  let { fecha, hora } = useParams();
  const isLoggedIn = !!localStorage.getItem('token');
  const [user, setUser] = useState();
  if (isLoggedIn) {
    useEffect(() => {
      const obtenerDatosUsuario = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/obtenerDatosUsuario/' + token);
        const data = await response.json();
        setUser(data)
      }
      obtenerDatosUsuario()
  }, []);
  }
  return (
    <>
    {isLoggedIn ? (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Fecha: {fecha}</p>
      <p>Hora: {hora}</p>
      <p> Nombre: {user.name}</p>
    </div>
    ) : (
        <h1>hola</h1>
    )}
    </>
  );
}

export default Reservar