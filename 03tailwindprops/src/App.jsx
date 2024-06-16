import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-600 p-4 text-black rounded-xl mb-4'>Talilwind test</h1>
      <Card username="ChaiaurCode" btnText="click me" />
      <Card username="Hitash" />
    </>
  )
}

export default App
