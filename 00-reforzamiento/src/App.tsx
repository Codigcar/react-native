import React from 'react'
import UseStateApp from './components/Contador'
import { Formularios } from './components/Formularios'
import { Login } from './components/Login'
import { Usuarios } from './components/Usuarios'

export const App = () => {
  return (
    <div className="m-5">
      <h1>Reformzamiento</h1>
      <hr />
      <UseStateApp />
      <hr />
      <Login />
      <hr />
      <Usuarios />
      <hr />
      <Formularios />
    </div>
  )
}
