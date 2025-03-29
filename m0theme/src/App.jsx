import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts"
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : { prevTodo }))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ addTodo, deleteTodo, todos, toggleTodo, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl text-center font-bold">Todo using Context API</h1>
          {/* TodoForm */}
          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-3">
            {/* TodoItem */}
            {
              todos.map((todo) => (
                <div key={todo.id} className="w-full ">
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
