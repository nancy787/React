import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : 'nancy',
    age : '23'
  };

  let ArraData = ['1', '2', '3'];

  return (
    <>
       {/* <h1 class="text-3xl font-bold underline bg-amber-400 text-rose-50">
        Hello world!
    </h1> */}
    <Card username="nancy" designation="Software Engineer"/>
    <Card username="bhagat" />
    </>
  )
}

export default App
