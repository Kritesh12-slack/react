import { createContext, useContext } from "react";

export const ThemeContext = createContext({})

export default function useModeSwitch(){
    return useContext(ThemeContext);
}