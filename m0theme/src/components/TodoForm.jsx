import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
  const [todo, setTodo] = useState("");

  const {addTodo} = useTodo()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!todo) return 
    addTodo({todo, completed: false})
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit} className=''>
      <input
        type="text"
        value={todo}
        className='bg-gray-200 text-black px-4 py-2'
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='bg-blue-900 text-white cursor-pointer p-2'>Add</button>
    </form>
  )
}

export default TodoForm