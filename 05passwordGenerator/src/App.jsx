import { useState, useCallback, useEffect, useRef } from 'react' // Import hooks from React
import './App.css' // Import the CSS file for styling

function App() {
  const [length, setLenght] = useState(8) // State for password length
  const [numberAllowed, setNumberAllowed] = useState(false) // State to allow numbers
  const [charAllowed, setcharAllowed] = useState(false) // State to allow special characters
  const [password, setPasword] = useState("") // State for the generated password

  const passwordRef = useRef(null) // Reference for the password input field

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPasword(pass)
  }, [length, numberAllowed, charAllowed]) // Dependencies for the password generator function

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password]) // Dependency for the copy function

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]) // Dependencies for useEffect

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // Reference for input field
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLenght(e.target.value) }} // Update length state
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); // Toggle numberAllowed state
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev) // Toggle charAllowed state
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App // Export the App component
