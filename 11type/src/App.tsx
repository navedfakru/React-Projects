import './App.css'
import MyButton from './components/Button'
import { CounterProvider } from './provider/Context'

function App() {

  return (
    <>
      <CounterProvider>
        <MyButton onClick={() => alert("Okay")} text={"Click Me Again"} />
      </CounterProvider>
    </>
  )
}

export default App
