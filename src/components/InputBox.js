import React from'react'

const InputBox=({
  label,
  amount,
  disabledAmount=false,
  currencies=[],
  defaultSelect,
  changeAmount,
  currencyName,
  currencyChange
})=>{
 
 return(
  <div className="container">
       <div className="inputSec">
          
           <label >
                    {label}
            </label>
            
           <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={disabledAmount}
                   onInput={(e)=>(changeAmount && changeAmount(e.target.value))}
                />
          
       </div>
          <div className="selectSec">
                <p >Currency Type</p>
             <select
              className="select"
              value={currencyName}
              onChange={(e)=>(currencyChange && currencyChange(e.target.value))}
               >
               {
                currencies.map((currencyName)=>{
                      
                return(
                 <option key={currencyName}
                 value={currencyName}
                 
                 
                 >
                      {currencyName} 
                 </option>
                     )
                    }
                      )
                     
                    }
              </select>
          </div>
     
  </div>
  )
}
export default InputBox;