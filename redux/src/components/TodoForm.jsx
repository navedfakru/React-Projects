import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function TodoForm() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if(!input) return
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form
      onSubmit={addTodoHandler}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: 10
        }}
      />
      <button
        type='submit'
      >Addtodo</button>
    </form>
  )
}

export default TodoForm