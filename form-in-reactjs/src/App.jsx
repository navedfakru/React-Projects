import { useState } from 'react';
import { Input } from './form/Input';

function App() {
  const [joke, setJoke] = useState("")
  const jokeclick = () => {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then((res) => res.json())
      .then((data) => setJoke(data?.delivery ?? "Click for jokes"))
  }
  return (
    <div className='w-[500px] h-[200px] bg-slate-200 border-2 rounded-xl m-10'>
      <h1 className='text-green-500 font-bold text-xl text-center py-4'>Jokes for you</h1>
      <div className='justify-center items-center flex'>
        <button className='bg-blue-500 px-4 py-2 rounded-2xl text-white border-2 shadow-black hover:bg-blue-800' onClick={jokeclick}>get jokes</button>
      </div>
      <p className='text-center font-semibold py-4'>{joke}</p>
    </div>
  )
}

export default App
