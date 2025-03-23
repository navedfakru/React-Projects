import { useState, useCallback, useEffect, useRef } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false)

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCEDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()_+|}{';?><,./`[]="

    let strLength = str.length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strLength + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)
    setCopied(false)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordClipboard = useCallback(() => {
    setCopied(true)
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed, passwordGenrator]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-800 font-bold">
        <h1 className="text-center text-white my-3">Password Genrator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input type="text"
            className={`outline-none w-full py-1 px-3 ${copied ? "text-white bg-red-800" : ""}`}
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">{copied ? "Copied" : "Copy"}</button>
        </div>
        <div className="text-sm flex gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" id="length"
              min={8}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className="cursor-pointer"
            />
            <label htmlFor="length">Length {length}</label>
            <input type="checkbox" id="numberAllowed"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberAllowed">Number</label>
            <input type="checkbox" id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charAllowed">Charactars</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
