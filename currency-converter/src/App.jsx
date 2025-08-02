import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  console.log("options", options); 

  const swap = () => {
    setFrom(to)
    setTo(from)
    convertedAmount(convertedAmount)
  }

const convert = () => {
    setConvertedAmount(Math.floor(amount * currencyInfo[to]), 2)
}

const refresh = () => {
  window.location.reload()
}
  return (
    <>
    <div className='w-full h-screen flex 
    flex-wrap justify-center bg-cover bg-no-repeat'
    style={{ backgroundImage : `url(https://lh3.googleusercontent.com/gps-cs-s/AC9h4nov4hYK2S4e15bO_pseeuV97IH6-_r8sy9eTlAFniJVqKn-BVGo_KdkxKk7d0sQJLOV_IWIyQte-Taar9D0PuJAQlxM1m3LVqsB5jvdULD0wwSa7NRx_Bk_ggbdBtNzrmAvkWjj=w540-h312-n-k-no)`}}>

      <div className='w-full'> 
        <div className='w-full max-w-md mx-auto 
        border border-gray-60 rounded-lg p-5 backdrop-blur-sm
        bg-white/30'>
          <form onSubmit={ (e) =>  {
            e.preventDefault(); 
            convert();
          }}>
            <div className='w-full mb-1'>
            <InputBox 
               label="From"
               amount={amount}
               currencyOptions={options}
               onCurrencyChange={(currency) => setAmount(amount)}
               selectCurrency={from}
               onAmountChange={ (amount) => setAmount(amount)}
               />
            </div>
            <div className='relative w-full h-0.5'>
              <button type="button"
              className='absolute left-1/2
              -translate-x-1/2
              -translate-y-1/2
              border-2
              border-white
              rounded-md
              bg-blue-600
              text-black-300
              bg-amber-800
              px-2
              py-0.5 
              '
            onClick={swap}
              >
                swap
              </button>
            </div>

          <div className='w-full mt-1 mb-4'>
          <InputBox label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={to}
            amountDisable
            />
          </div>
            <button type='submit'
            className='w-full bg-blue-600 text-black
            px-4 py-3 rounded-lg'>
                Convert {from.toUpperCase()} to {to.toUpperCase()} 
            </button>
          </form>
          <button type='button'
            className='w-50 bg-blue-600 text-black
            px-4 py-3 my-4 rounded-lg'
            onClick ={refresh}
            >              
            Clear
            </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;