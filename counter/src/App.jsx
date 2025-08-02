import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)
  // let counter = 1;

  const addValue = () => {
    counter = counter + 1;
    if(counter > 20) {
      console.log(22);
      counter = 0;
    }
    console.log(counter);
    setCount(counter)
  
  }

  const removeValue = () => {
    counter = counter - 1;
    if(counter < 0 ) {
      counter = 0
    }
    setCount(counter)
  }

  return (
    <>
    <h1>Nancy</h1>
    <h2>counter : {counter}</h2>

    <button onClick={addValue}>Add : {counter}</button>
    <br />
    <button onClick={removeValue}>Dec : {counter}</button>

    </>
  )
}

export default App
