import { useState } from 'react'
import './App.css'
import React from 'react'
import ConditionalDemo1 from './components/ConditionalDemo1';
import ConditionalDemo2 from './components/ConditionalDemo2';
import ConditionalDemo3 from './components/ConditionalDemo3';
import ConditionalDemo4 from './components/ConditionalDemo4'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Conditional Demo 1</h2>
        <ConditionalDemo1/>
        <h2>Conditional Demo 2</h2>
        <ConditionalDemo2/>
        <h2>Conditional Demo 3</h2>
        <ConditionalDemo3/>
        <h2>Conditional Demo 4</h2>
        <ConditionalDemo4/>
      </div>
      
    </>
  )
}

export default App
