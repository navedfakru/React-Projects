import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({editTodo, setEditTodo}) {

  const [input, setInput] = useState("");
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
      setId(editTodo.id);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    if (id !== null) {
      dispatch(updateTodo({ id, text: input }));
      setEditTodo(null);
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
    setId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${id !== null ? "bg-green-500 hover:bg-green-600" : "bg-indigo-500 hover:bg-indigo-600"
          }`}
      >
        {id !== null ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  )
}

export default AddTodo