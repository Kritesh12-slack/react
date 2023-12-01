import { useState } from "react"
import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeBtn"
import { ThemeContext } from "./Contexts/ThemeContext"

function App() {

  const [theme,setTheme] = useState('light')
  const lightTheme = () =>{
    setTheme("light");
  }
  const darkTheme = () =>{
    setTheme("dark");
  }
  return (
    <ThemeContext.Provider value={{theme,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
