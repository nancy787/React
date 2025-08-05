import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/Addtodo'
import Todo from './components/Todo'

function App() {
  return (
    <>
    <h1>Redux Tool Kit</h1>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App
