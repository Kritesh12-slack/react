import useHook from "../Contexts/LoginContext"


export default function Profile(){
    const {username} = useHook()
    return(
        <>
            <h1>Profile</h1>
            <h2>Username : {username}</h2>
        </>
    )
}