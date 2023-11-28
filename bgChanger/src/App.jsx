import { useState } from "react"

function App() {
  const [color,setColor] = useState("black")
  return (
    <div className="w-full h-screen duration-200 "
    style={{background: color}}
    >
    <div className="fixed bottom-8 flex flex-wrap justify-center inset-x-0 px-2">
      <div className="flex flex-wrap justify-center px-2 py-2 bg-white gap-3 rounded-3xl">
        <button onClick={()=> setColor("red")}
        className="outline-none px-4 py-1 rounded-full bg-red-700">Red</button>
        <button onClick={()=> setColor("blue")}
        className="outline-none px-4 py-1 rounded-full bg-blue-700">Blue</button>
        <button onClick={()=> setColor("green")}
        className="outline-none px-4 py-1 rounded-full bg-green-700">Green</button>
      </div>
    </div>
    </div>
  )
}

export default App
