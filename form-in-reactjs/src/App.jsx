import { useState } from 'react';
import { Input } from './Input';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(contact)
  }
  const handleReset = () => {
    setFirstName("");
    setContact("");
    setEmail("");
    setLastName("");
  }

  return (
    <div className='bg-white rounded-2xl shadow-2xl py-3 px-6 mx-10 duration-200 w-96 text-center m-auto mt-5 border justify-self-center'>
      <h1 className='text-2xl text-center text-[#327c35] font-bold'>Form in React</h1>
      <fieldset className='border-none'>
        <form action="#" method='get'>
          <Input
            type={"text"}
            label={"First Name*"}
            name={"firstName"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={"Enter First Name"}
            required
          />
          <Input
            type={"text"}
            label={"Last Name*"}
            name={"lastName"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={"Enter Last Name"}
            required
          />
          <Input
            type={"email"}
            label={"Enter Email*"}
            name={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Enter Email"}
            required
          />
          <Input
            type={"tel"}
            label={"Contact*"}
            name={"contact"}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={"Enter Contact Number"}
            required
          />
          <button
            type="reset"
            value="reset"
            onClick={() => handleReset()}
            className='p-4 rounded-xl m-4 border-none text-white cursor-pointer bg-green-600 w-[40%] text-[16px]'
          >
            Reset
          </button>
          <button
            type="submit"
            value="Submit"
            onClick={(e) => {
              handleSubmit(e)
            }}
            className='p-4 rounded-xl m-4 border-none text-white cursor-pointer bg-green-600 w-[40%] text-[16px]'
          >
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  )
}

export default App
