import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

function User() {

  const [data, setData] = useState()

  const { userId } = useParams()

  const location = useLocation()

  useEffect(() => {
    try {
      setData(eval(userId))
    } catch (error) {
      setData(userId)
    }
  }, [location.pathname])


  return (
    <div className='w-full h-screen flex items-center justify-center bg-blue-300'>
      <div className='w-96 h-96 bg-blue-700 text-white rounded-md flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>User:- {data}</h1>
      </div>
    </div>
  )
}

export default User