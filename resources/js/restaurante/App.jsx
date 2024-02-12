import { useState, useEffect } from 'react'
import {Routes, Route } from "react-router-dom";
import Principal from './Principal'
import Login from './pages/Login'
import Register from './pages/Register'
import Calendar from './pages/Calendar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/prueba')
    .then(respuesta => respuesta.json())
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
  
  }, [])

  const path = 'restaurante'  

  return (
    <>
      <Routes>
        <Route path={path} element={<Principal />}></Route>
        <Route path={path +'/login' } element={<Login />}></Route>
        <Route path={path +'/register' } element={<Register />}></Route>
        <Route path={path +'/calendarioReservas' } element={<Calendar />}></Route>
      </Routes>

    </>
  )
}

export default App
