
// import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()

    console.log(todos)
  return (
    <>
    <div>Todo</div>
    {todos.map((todo)=>(<>
        <h1>{todo.text}</h1>
        <button onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
    </>))}
    
    </>
  )
}

export default Todo