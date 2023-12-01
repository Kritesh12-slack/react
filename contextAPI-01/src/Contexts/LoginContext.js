import { createContext, useContext } from "react";

export const LoginContext = createContext({})

export default function useHook(){
    return useContext(LoginContext)
}