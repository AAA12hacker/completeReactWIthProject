
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input,setInput]=useState("")
    const dispatch=useDispatch()
   const addTodoHandler=(e)=>{
    e.preventDefault();
    console.log(input)
    dispatch(addTodo({text:input}));
    setInput("")
   }
  return (
    <>
    <div>Todo</div>
    <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='todo' />
    <button onClick={addTodoHandler}></button>
    </>
  )
}

export default AddTodo