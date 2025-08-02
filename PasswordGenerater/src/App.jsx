import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [number, AllowedNumber] = useState(false)
  const [character, AllowedCharacter] = useState(false)
  const [password, setPassword] = useState('')

  // use Ref
  const passwordRef = useRef(null)

  const passwordGenerater = useCallback( () => {
      let pass = ""
      let str = "ABHFHJSTFETIHIAXZSZSazsdderigdsjgd"

      if(AllowedNumber) {
        str += "012344567880"
      }
      if(AllowedCharacter) {
        str += "@#$%^&()+=-_[]{}"
      }

      for (let index = 0; index < length; index++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }

      setPassword(pass)
  },[length, number, character ])

  const copyPassword = useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  }
  , [password])

  useEffect(() => {
    passwordGenerater();
  }, [length, number, character]);
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-green-600 text-white">
      <div className="w-full max-w-md bg-green-700 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center tracking-wide">Password Generator</h1>

        <div className="flex items-center border border-white/30 rounded-lg overflow-hidden shadow-inner bg-white">
          <input 
            type="text" 
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full px-4 py-2 text-black placeholder-gray-400 focus:outline-none"
            placeholder="Your password"
          />

          <button type="button" onClick={copyPassword} className='text-7xl text-amber-200 outline-2'>copy</button>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                  <input type="range"
                    min={6}
                    max={50}
                    value={length}
                    className='cursor-pointer'
                    onChange={ (e) => {setLength(e.target.value)}}
                   />
            </div>
              <label>length : {length}</label>
          </div>
            <input 
              type="checkbox" 
              id="numberinput" 
              defaultChecked={number}
              onChange={ () => {
                AllowedNumber((prev) => !prev);
              }}
              />
              <label htmlFor="numbers">Numbers</label> 
              <input 
              type="checkbox" 
              id="characterinput" 
              defaultChecked={character}
              onChange={ () => {
                AllowedCharacter((prev) => !prev);
              }}
              />
              <label htmlFor="numbers">Characters</label>
        </div>
      </div>
    </div>

     
    </>
  )
}

export default App
