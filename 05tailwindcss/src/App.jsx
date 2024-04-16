import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='bg-green-400 text-black pb-2 rounded-xl '>tailwind css</h1>
   <div className='mt-10'>
   <Card username="abrar" btntext="click me"/>
   <Card username="ansari" btntext="visit me"/>
   </div>
 
   </>
  )
}

export default App
