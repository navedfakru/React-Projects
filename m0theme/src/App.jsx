import { useState } from "react"
import { ThemeProvider } from "./contexts/Theme"
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{darkTheme, lightTheme, themeMode}}>
      <div className="w-full min-h-screen dark:bg-black bg-white flex justify-center items-center flex-col gap-8">
        <ThemeBtn />
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
