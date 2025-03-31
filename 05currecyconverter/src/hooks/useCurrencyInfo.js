import { useEffect,useState } from "react";

function useCurrencyInfo (currency){
    const [data,setData] = useState({});
    console.log("his1",data)
    console.log("inside1",currency)

    useEffect(() => {
        console.log("inside",currency)
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
       .then((res) => res.json())
       .then((res) => setData(res[currency]))
    
       console.log("his2",data)
       
    }, [currency]);
    console.log("his3",data)
    console.log("out",currency)
    return data;

  
}
// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log("inside",data);
//     }, [currency])
//     console.log("out",data);
//     return data
// }
export default useCurrencyInfo;