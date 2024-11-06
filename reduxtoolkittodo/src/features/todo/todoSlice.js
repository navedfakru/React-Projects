import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: 1,  text: "Hello World Todo!"}]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
       state.todos = state.todos.filter((item) => item.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const {id, text} = action.payload;
      const todo = state.todos.find((item) => item.id === id)
      if(todo) {
        todo.text = text
      }
    }
  }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;