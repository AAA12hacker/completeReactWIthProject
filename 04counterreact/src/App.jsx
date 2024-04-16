import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const addCount=()=>{
    if(count<20) setCount(count+1)
  }
  const removeCount=()=>{
    if(count>0) setCount(count-1)
   
  }
  return (
   <>
   <h1>Learning UserState</h1>
   <h2>Count:{count}</h2>
   <button onClick={addCount}>Add</button>
   <button onClick={removeCount}>Remove</button>
   </>
  )
}

export default App
