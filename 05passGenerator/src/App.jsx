import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(6)
  const [number,setNumber] = useState(false)
  const [symbol,setSymbol] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num = "0123456789"
    let sym = "!@#$%^&*()_+"
  
    if(number) {
      string += num
    }
    if(symbol) {
      string += sym
    }
    for(let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * string.length)
      pass += string[randomIndex]
    }
    setPassword(pass)

  }, [length, number, symbol, setPassword])

  //useEffect hook
  useEffect(() => {
    passwordGenerator()

  }, [length, number, symbol, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-md p-4 my-8 text-orange-500 
      bg-gray-800'>
        Password Generator
        <div className='flex shadow rounded-lg overflow-hidden gap-4'>
          
          <input type="text"
          value={password}
          readOnly
          placeholder='Password'
          className='outline-none py-1 px-3 w-full bg-white '
          ref={passwordRef}
          />
          <button className='bg-orange-500 text-white px-3 py-1'
          onClick={() => {
            navigator.clipboard.writeText(passwordRef.current.value)
            navigator.clipboard.writeText(passwordRef.current.select())
          }}
           >
            Copy
          </button>
          
        </div>
        <div className='flex flex-col gap-4 p-4'>
            <div className='flex items-center gap-4'>
              <input type="range" min="1" max="20" value={length} 
              onChange={(e) => setLength(e.target.value)} 
              className='cursor-pointer'
              />
              <label >Lenght: {length}</label>

              <input type="checkbox" checked={number} 
              onChange={(e) => setNumber(e.target.checked)}
              />
              <label >Numbers</label>
              
              <input type="checkbox" checked={symbol} 
              onChange={(e) => setSymbol(e.target.checked)}
              />
              <label >Symbols</label>
            </div>
            
            <button className='bg-orange-500 text-white px-3 py-1' 
            onClick={passwordGenerator}
            >
              Generate Password
            </button>

          </div>
      </div>
    </> 
  )
}

export default App
