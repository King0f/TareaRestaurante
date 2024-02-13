import { useState, useEffect } from 'react'
import {Routes, Route } from "react-router-dom";
import Principal from './Principal'
import Login from './pages/Login'
import Register from './pages/Register'
import Calenndar from './pages/Calenndar'
import Reservar from './pages/Reservar';

import './App.css'

function App() {

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
        <Route path={path +'/calendarioReservas' } element={<Calenndar />}></Route>
        <Route path={path +'/realizarReserva/:fecha'} element={<Reservar />}></Route>
      </Routes>

    </>
  )
}

export default App
