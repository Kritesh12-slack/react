import { useParams } from "react-router-dom"

export default function User(){
    const {id} = useParams();
    return(
        <div className="text-center text-4xl text-orange-500 bg-gray-700 p-4">User : {id}</div>
    )
}