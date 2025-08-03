import React, { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    // const [data, setData] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/nancy787')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
    
 const data = useLoaderData(); 

    return(
        <>
            <div className="bg-gray-600 text-center m-4 p-5 text-3xl">Github</div>
            <h2 className="text-shadow-amber-300"> Github Followers : {data.followers}</h2>
            <img src={data.avatar_url} alt="Githhub image" width={300} className="p-6 m-4"/>
        </>
    )
}

export default Github

export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nancy787')
    console.log(response);
    return response.json()
}
