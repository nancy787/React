import { useEffect,useState } from "react";

function useCurrencyInfo(currency) { 
    console.log("pascurreny" , currency);
    const [data, setData] = useState( {})
    useEffect(() => {
            fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then( (res) => {
                setData(res.rates)
                console.log("API full Rates:", res.rates);
            }).catch( (err) => {
                console.error("API fetch error:", err);
            })
            console.log("currency" ,data);
        }, [currency])

        return data
}

export default useCurrencyInfo