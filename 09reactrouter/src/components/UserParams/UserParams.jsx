import React from 'react'
import { useParams } from 'react-router-dom'

const UserParams = () => {
    const {userId}=useParams()
  return (
    <div className="text-3xl text-center bg-gray-300 text-white">User: {userId}</div>
  )
}

export default UserParams