import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id: 1,
        todoMsg: "todo note",
        completed : false
    },],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleCompleted : (id)=>{},
})

export const useTodo = useContext(TodoContext)