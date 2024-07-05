import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom';

 import useCurrencyInfo from './Hooks/useCurrencyInfo.js'
 import InputBox from './components/InputBox'
 
   const App=()=>{
   const defaultFrom="usd"
   const defaultTo="inr"
   const [from,setFrom]=useState("usd") 
   const[to,setTo]=useState("inr");
   const [amount,setAmount]=useState(0)
   const [convertAmount,setConvertAmount]=useState(0)
   const data=useCurrencyInfo(from)
   const currencyNames=Object.keys(data)
   const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertAmount)
    setConvertAmount(amount)
   }
   
   const convert=()=>{
        setConvertAmount(amount*data[to])
   }
   
 return(
   
      <div className="mainContainer">
      <h1> Currency Convertor </h1>
          <form onSubmit={(e)=>{e.preventDefault()}}>
        
           <InputBox
           label="from"
           amount={amount}
           currencyName={from}
           currencyChange={setFrom}
           currencies={currencyNames}
           changeAmount={setAmount}
           />
           <button className="swap"
           onClick={swap}
           > Swap </button>
        
        
           <InputBox
           label="to" 
           amount={convertAmount}
           currencyName={to}
           currencyChange={setTo}
           currencies={currencyNames}
           changeAmount={setConvertAmount}
           disabledAmount={true}
           />
       
           <button
           className="convert"
           type="submit"
           onClick={convert}
           >
           
            Convert {from.toUpperCase()} to {to.toUpperCase()}
           </button>
          </form>
      </div>   
  )
}
export default App;


