import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const {setUser}=useContext(UserContext)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const handleLogin=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2 >Context Api</h2>
        <div>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login