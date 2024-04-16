import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [passwordInput,setPasswordInput]=useState("");
  // here we are introducing the concept of ref 
  // ref give the reference of the specific element on which it get applies
  const passwordRef=useRef()

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="1234567890";
    if(charAllowed) str +="!@#$%^&*-_+=[]{}~`"
    for (let i = 0; i <= length; i++) {
      // here we are doing math.random()*str reason is it should go from 0 index to last index of the string
      const char=Math.floor((Math.random()*str.length)+1)
      console.log(char);
      pass+=str.charAt(char)
    }
    setPasswordInput(pass)

  },[numberAllowed,charAllowed,length,setPasswordInput])
  const copyPassWordFromClipBoard=useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(passwordInput)
  },[passwordInput])
  // here we are introding the useEffect it can be used for refreshing the complete component
  // if there is any change
  useEffect(()=>{
    passwordGenerator()
  },[numberAllowed,length,charAllowed])

  return (
  
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
<h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text" value={passwordInput}  
    className="outline-none w-full py-1 px-3"
    placeholder="password"
    readOnly
    ref={passwordRef}
    />
    <button onClick={copyPassWordFromClipBoard} 
    className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'>
      copy
     </button>
  </div>
  <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e)=>setLength(e.target.value)}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>setNumberAllowed((prev)=>!prev)}
        
      />
       <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
  </div>

  )
}

export default App
