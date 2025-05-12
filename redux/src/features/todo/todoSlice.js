import { createSlice, nanoid } from "@reduxjs/toolkit";

const todos = localStorage.getItem("myTodos") !== null ? JSON.parse(localStorage.getItem("myTodos")) : [
  {
    id: 1,
    text: "HELLO REDUX",
  }
]

const initialState = {
  todos: todos
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(10),
        text: action.payload
      }
      // console.log(JSON.parse(localStorage.getItem("myTodos")))
      state.todos.push(todo)

      localStorage.setItem("myTodos", JSON.stringify(state.todos.map(item => item)))
    },
    
    removeTodo: (state, action) => {
      const {id, text} = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
      // console.log(text)
      localStorage.setItem("myTodos", JSON.stringify(state.todos.map(item => item)))
    },

    upadateTodo: (state, action)  => {
      const {id, text} = action.payload
      const todo = state.todos.find((todo) => todo.id === id)
      if(todo) {
        todo.text = text
      }
      localStorage.setItem("myTodos", JSON.stringify(state.todos.map(item => item)))
      // console.log(id)
    }


  }
}) 

export const {addTodo, removeTodo, upadateTodo} = todoSlice.actions

export default todoSlice.reducer