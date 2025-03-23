import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)

  const handleSubmit = () => {
    setUser({username, password})
    setUsername("")
    setPassword("")
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder='Password'
        value={password} onChange={(e) =>
          setPassword(e.target.value)} /
      >
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login