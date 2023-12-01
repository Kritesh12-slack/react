import { useState } from "react"
import Profile from "./Components/Profile"
import Login from "./Components/Login"
import { LoginContext } from "./Contexts/LoginContext"


function App() {
  
  const [username,setUsername] = useState('')
  const [profile,setProfile] = useState(false)
  return (
    <LoginContext.Provider value = {{username , setUsername , setProfile}}>
      {profile ? <Profile/> : <Login/>}
    </LoginContext.Provider>
  )
}

export default App
