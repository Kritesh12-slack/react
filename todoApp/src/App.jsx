import { useEffect, useState } from "react";
import { useTodo } from "./Contexts/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";


function App() {
  const [todos,setTodos] = useState([]);
  
  const {TodoContext} = useTodo();
  
  
  const addTodo = (todo) => setTodos((prev) => [{id:Date.now(),todo,completed:false},...prev]);
  
  const updateTodo = (id,todo) => setTodos((prev)=>prev.map((i)=>(i.id === id ? {todoMsg: todo,...i}: i)))
  
  const deleteTodo = (id) => setTodos((prev)=>prev.filter((i)=>i.id !== id)) 
  
  const toggleCompleted = (id) => setTodos((prev)=>prev.map((i)=>(i.id=== id ? {...i,completed:!i.
  completed}: i)))

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }
  ,[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },
  [todos])


  return (
    <TodoContext.Provider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((i)=>(
                          <TodoItem />
                        ))}
                    </div>
                </div>
            </div>
    </TodoContext.Provider>
  )
}

export default App
