import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';

function Github() {

  const [user, setUser] = useState("hiteshchoudhary");
  const [data, setData] = useState({});

  // const data = useLoaderData()

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${user || "navedfakru"}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Failed to fetch data:", err));
  };

  
  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
    <div className='w-full flex justify-center items-center gap-2 py-2 bg-gray-600 px-5'>
      <input className='w-3/4  py-4 px-2 text-xl font-bold ' 
        onChange={(e) => setUser(e.target.value.toLocaleLowerCase())}
      type="text" name="" id="" />
      <button onClick={() => fetchUserData()} className='bg-blue-600 text-white text-2xl py-4 px-8'>Search</button>
    </div>
    <div className='flex flex-col items-center justify-center bg-gray-600 w-96 mx-auto p-5 my-5 rounded-lg'>
      <h1 className='text-2xl font-bold text-white my-2'>followers: {data?.followers}</h1>
      <img className='rounded-full' src={data?.avatar_url} alt="" />
      <h1 className='text-2xl font-bold text-white my-2'>Name: {data?.name}</h1>
    </div>
    </>
  )
}

export default Github;

// export const githubInfoData = async () => {
//   const res = await fetch(`https://api.github.com/users/hiteshchoudhary`)
//   return res.json()
// }