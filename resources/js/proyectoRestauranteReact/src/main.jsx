import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import App from './App.jsx'
import Login from './pages/Login'
import Register from './pages/Register'
import PaginaError from './pages/PaginaError'
import { Footer } from './components/Footer'
import './index.css'

/**
 * La función AppLayout devuelve un componente de diseño con un componente Outlet y un componente
 * Footer.
 */
function AppLayout() {
  return <>
  <Outlet />
  <Footer />
  </>
}

/* La declaración `const router = createBrowserRouter([...])` está creando una configuración de
enrutador para la aplicación React usando la función `createBrowserRouter` de la biblioteca
`react-router-dom`. */
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PaginaError />,
    children: [{
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register/>,
    }]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
