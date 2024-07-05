import React,{useState,useEffect} from 'react'
//import ReactDOM from 'react-dom';
 
 const useCurrencyInfo=(currency)=>{
  const [data,setData]=useState({})
  useEffect(()=>{
   
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
    .then((res)=>{
     if(!res.ok)
    return "network error";
    else 
    return res.json();
    
    })
    .then((res)=>(setData(res[currency])))
    .catch((error)=>(console.log("Error in :",error)))
  },[currency])
  return data;
 }
 
 export default useCurrencyInfo;