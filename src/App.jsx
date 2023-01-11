import { useState } from 'react'

import { ItemListContainer } from './components/container/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'


function App() {
  
  return (
    <>
      
      <NavBar/>
      <ItemListContainer saludo={'Pagina en construccion...'}/>
    </>

  )
}

export default App
