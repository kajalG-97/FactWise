import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AllRoutes } from './components/AllRoutes'

import { Home } from './components/Home'
import { CardItem } from './components/Card'
import { EditPage } from './components/EditPage'
import { Acc } from './components/Acc'

function App() {
  

  return (
    <div className="App">
   
     <Home/>
     <CardItem/>
     
    </div>
  )
}

export default App
