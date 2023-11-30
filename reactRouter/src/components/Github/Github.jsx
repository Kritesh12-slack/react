// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function GitHub(){
    const data = useLoaderData();   
    // const [data,setData] = useState([])
    // useEffect(()=>{fetch("https://api.github.com/users/kritesh12-stack")
    //                 .then((res)=> res.json())
    //                 .then((res)=> setData(res))}
    // ,[])

    return(
        <div className="flex flex-col text-center text-3xl text-orange-700 bg-gray-700 p-4 ">GitHub Followers : {data.followers}
        <img className="w-32 max-h-fit" src={data.avatar_url} alt="" />
        </div>
    )
}

export const GitHubLoaderData = async () => {
    const res = await fetch('https://api.github.com/users/kritesh12-stack')
    return res.json()
}