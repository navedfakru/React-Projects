import { Provider } from 'react-redux';
import './App.css';
import AddTodos from './components/AddTodos';
import { store } from './app/store';
import Todos from './components/Todos';

function App() {

  return (
    <Provider store={store}>
      <h1>React Redux Tool Kit</h1>
      <AddTodos />
      <Todos />
    </Provider>
  )
}

export default App
