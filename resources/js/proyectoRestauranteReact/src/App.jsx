import {Routes, Route } from "react-router-dom";
import Principal from './pages/Principal'
import Login from './pages/Login'
import Register from './pages/Register'

import './App.css'

function App() {
  const path = 'proyectoRestauranteReact/src'  

  return (
    <>
      <Routes>
        <Route path={path} element={<Principal />}></Route>
        <Route path={path +'/login' } element={<Login />}></Route>
        <Route path={path +'/register' } element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App