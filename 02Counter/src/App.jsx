
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(15);


  // let counter = 5;
  const increase = () => {
    setCounter((prevCouter) => prevCouter + 1)
    setCounter((prevCouter) => prevCouter + 1)
    setCounter((prevCouter) => prevCouter + 1)
    setCounter((prevCouter) => prevCouter + 1)
    console.log(`increase ${counter}`)
  }

  const decrease = () => {
    setCounter(counter - 1)
    console.log(`decrease() ${counter}`)
  }

  return (
    <>
      <h1>Chai aur Code {counter}</h1>
      <button
        onClick={increase}
        style={{
          margin: 20,
          borderWidth: 3,
          borderColor: "green"
        }}
      >increase value</button>
      <button
        onClick={decrease}
        style={{
          margin: 20,
          borderWidth: 3,
          borderColor: "green"
        }}
      >decrease value</button>
    </>
  )
}

export default App
