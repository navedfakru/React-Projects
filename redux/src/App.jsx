import {  useSelector } from "react-redux"

import './App.css'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {
  const todos = useSelector(state => state.todos)

  return (
    <>
      <p>Create Todo App using Reducer</p>
      <TodoForm />
      <div
        style={{
          width: "100%",
          backgroundColor: "maroon",
          color: "white",
          padding: 10,
          minWidth: "h-screen"
        }}
      >
        {todos.map((todo) => (
          <div key={todo.id}
            style={{
              display: 'flex',
              justifyContent: "space-between",
              marginTop: 10
            }}
          >
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
