import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // this is the one way to call the api request
    //  const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/AAA12hacker")
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((res)=>setData(res))
    //     .catch((err)=>console.log(err))
    // })
    // this hook we can use which is made by react-router-dom
    const data=useLoaderData()
  return (
    <div className="bg-gray-300 text-white p-5 text-center">Github followers:{data?.followers}
    <img src={data?.avatar_url} alt="git"/>
    </div>
  )
}

export default Github

export const gitHubLoaderApi=async()=>{
    const response=await fetch("https://api.github.com/users/AAA12hacker")
    return response.json()
}