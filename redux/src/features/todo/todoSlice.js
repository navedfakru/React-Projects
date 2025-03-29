import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "HELLO REDUX",
    }
  ]
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
      // console.log(todo)
      state.todos.push(todo)
    },
    
    removeTodo: (state, action) => {
      const {id, text} = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
      // console.log(text)
    },

    upadateTodo: (state, action)  => {
      const {id, text} = action.payload
      const todo = state.todos.find((todo) => todo.id === id)
      if(todo) {
        todo.text = text
      }
      // console.log(id)
    }

  }
})

export const {addTodo, removeTodo, upadateTodo} = todoSlice.actions

export default todoSlice.reducer