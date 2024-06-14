import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 1
  const addValue = () => {
    if (counter <= 19){
      setCounter(counter + 1)
    }
    console.log(counter)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur Code </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>remove Value {counter}</button>
    </>
  )
}

export default App
