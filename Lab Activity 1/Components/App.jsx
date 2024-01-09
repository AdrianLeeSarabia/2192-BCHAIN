// Sarabia, Adrian Lee S. | WD - 401

import { useState } from 'react'
import './App.css'
import React from 'react'
import ParentComponent from './components/ParentComponent'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      <div>
        <h1>React Props Example</h1>
        <Hello/>
        <Welcome/>
        <ParentComponent/>
      </div>
      
    </>
  )
}

export default App
