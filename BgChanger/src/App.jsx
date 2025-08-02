import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons'

function App() {
  const [color, setColor] = useState('violet')

  return (
    <>
      <div className="w-full h-screen duration-200"style={{backgroundColor : color}}>
        test
        </div> 
      <Buttons Bgchange={setColor}/>
    </>
  )
}

export default App
