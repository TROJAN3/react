import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLenght] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const passwordRef = useRef(null)

  const genratePassword = useCallback(() => {
    let password = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*()'
    }
    for (let i = 0; i < length; i++) { 
      password += str.charAt(Math.floor(Math.random() * str.length))
    }
    console.log(password)
    setPassword(password)
  },[charAllowed,length,numberAllowed])

  useEffect(() => {
    genratePassword()
  }
  , [length,numberAllowed,charAllowed])
  
  const copytoClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
    alert(`Generated Password: ${password}`)
  }
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3'
        placeholder='Passord'
        readOnly 
        ref={passwordRef}/>
        <button
        onClick={copytoClipboard}  
        className='bg-green-500 text-white px-3 rounded-lg py-0.5 shrink-0'>
          Copy
        </button>
      </div>
      <div
      className='flex gap-x-4 items-center'>
      <div className='flex items-center gap-x-1'>
      <input
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) => setLenght(e.target.value)}
      />
      <label htmlFor="length">Lenght:{length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
      <input
      type='checkbox' 
      defaultChecked={numberAllowed}
      onChange={(e) => {
        setNumberAllowed((prev) => !prev)
      }
      }
      />
      <label htmlFor="number">Include Numbers</label>
      </div>
      
      <div className='flex items-center gap-x-1'>
      <input
      type='checkbox' 
      defaultChecked={charAllowed}
      onChange={(e) => {
        setCharAllowed((prev) => !prev)
      }
      }
      />
      <label htmlFor="number">Include Characters</label>
      </div>
      </div>
    </div>
  )
}


export default App
