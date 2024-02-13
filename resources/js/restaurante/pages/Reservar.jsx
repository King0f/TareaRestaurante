import { useParams } from 'react-router-dom';

function Reservar() {
  let { fecha, hora } = useParams();
  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <>
    {isLoggedIn ? (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Fecha: {fecha}</p>
      <p>Hora: {hora}</p>
    </div>
    ) : (
        <h1>hola</h1>
    )}
    </>
  );
}

export default Reservar