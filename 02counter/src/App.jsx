import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setCounter] = useState(0)
  //let counter = 0

  const addValue = () => {
    setCounter(counter + 1)
  }
  const subtractValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>

    <h1>React practice</h1>
    <h2>counter value : {counter}</h2>
    <button
    onClick={addValue}>ADD</button>
    <button
    onClick={subtractValue}
    >SUBTRACT</button>
    <p>footer</p>
    </>
  )
}

export default App
