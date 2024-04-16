import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext)
    if(!user) return <>please login</>
  return (
    <div>welcome :{user.username}</div>
  )
}

export default Profile