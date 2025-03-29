import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {

  return (
    <>
      <div className='toolbar' onClick={() => alert("you click inside div")}>
        <Button onClick={() => alert("Playing!")}>
          Playing
        </Button>
        <Button onClick={() => alert("Upload image")}>
          Upload image
        </Button>
      </div>
    </>
  )
}

export default App
