import useHook from "../Contexts/LoginContext"

export default function Login(){
    const {setUsername , setProfile} = useHook()
    return(
        <>
        <input type="text" placeholder="Username" 
        onChange={(e)=> setUsername(e.target.value)}
        />
        <input type="text" placeholder="Password"/>
        <button
            onClick = {()=> setProfile(true)}
        >Login</button>
        </>
    )
}