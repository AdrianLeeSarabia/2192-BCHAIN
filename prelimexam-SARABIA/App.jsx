import { useState } from 'react'
import React from 'react'
import './App.css'
import BibleQuiz from './components/BibleQuiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The Bible Quiz</h1>
          <BibleQuiz/>
      </div>
      
    </>
  )
}

export default App
