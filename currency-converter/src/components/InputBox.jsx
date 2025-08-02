import React  from "react";
import {useId} from "react";
function InputBox( {
    label, 
    className = '',
    amount,
    onAmountChange, 
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,
    currencyDisable = false
    }) 
    {
        const amounTnputId = useId()
    return (
        <>
            <div className={`bg-white p-3 rounded-lg text-sm
            flex ${className}`}>
                <div className="w-1/2">
                    <label htmlFor={amounTnputId} className="text-black/40 mb-2 inline-block">
                        {label }
                    </label>

                    <input type="number"
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"  
                    disabled={amountDisable}
                    value={amount}
                    id={amounTnputId}
                    onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value) ) }          
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-righgt">
                    <p className="text-black/40 mb-2 w-full">
                        Currency Type
                    </p>
                    <select 
                    name="" 
                    id=""
                    value={selectCurrency}
                    onChange={(e) => (onCurrencyChange && onCurrencyChange(e.target.value)) }
                    disabled={currencyDisable}
                    className="rounded-lg px-1 py-1 bg-gray cursor-pointer outline- none"
                    >
                        {/* rembembers the key in loops react */}
                        {currencyOptions.map( (currency) => (
                            <option 
                            key={currency} 
                            value={currency}
                            >
                            {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox