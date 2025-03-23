import './App.css'
import Card from './components/Card'

function App() {

  const myObj = {username: "Naved", age: 21}
  const newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-900 text-black p-4 mb-5 rounded-xl">Tailwindcss</h1>
      <Card username="Naved Fakru" />
      <Card  />
    </>
  )
}

export default App
