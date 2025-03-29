import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoItem({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(true);
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {deleteTodo, updateTodo} = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo:todoMsg})
    setIsTodoEditable((prev) => !prev)
  }

  return (
    <div className='w-full flex items-center  justify-between bg-amber-200 text text-black p-2'>
      {/* <input 
        type='text'
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      /> */}
      {
        isTodoEditable 
        ?
          <h1>{todo.todo}</h1>
        :
        <input 
          type="text"
          className='text-black bg-gray-200'
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
      }
      <div className='flex flex-row items-center justify-center gap-x-2'>
        <button
          className='cursor-pointer'
          onClick={editTodo}
        >{isTodoEditable ? "✏️" : "📁"}</button>
        <button className='cursor-pointer' onClick={() => deleteTodo(todo.id)}>🗑</button>
      </div>
    </div>
  )
}

export default TodoItem