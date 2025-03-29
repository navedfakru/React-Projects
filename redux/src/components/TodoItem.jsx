import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, upadateTodo } from '../features/todo/todoSlice'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(true)
  const [updateText, setUpdateText] = useState(todo.text)
  const dispatch = useDispatch()

  const todoEdit = (todo) => {
    dispatch(upadateTodo({...todo, text: updateText}))
    setIsTodoEditable(prev => !prev)
  }

  return (
    <>
      {
        isTodoEditable ? 
        <p>{todo.text}</p>
        :
        <input type='text'
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
        />

      }
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: 10
      }}>
        <button onClick={() => todoEdit(todo)}>{isTodoEditable ? "✏️" : "📁"}</button>
        <button onClick={() => dispatch(removeTodo(todo))}>X</button>
      </div>
    </>
  )
}

export default TodoItem