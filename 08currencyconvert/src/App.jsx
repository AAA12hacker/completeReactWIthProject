import { useState } from 'react'

import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputCurrencyBox } from './components';

function App() {
  const [amountSelectCurrency,setAmountSelectCurrency]=useState(0);
  const [convertedCurrencyAmount,setConvertedCurrencyAmount]=useState(0);
  const [from,setaFrom]=useState("USD");
  const [to,setTo]=useState("INR");
  
  // calling our customHook
  const currencyInfo=useCurrencyInfo(from);
  console.log({currencyInfo})
  const obj=currencyInfo.rates;
  const options=obj&&Object.keys(obj)
  console.log(options,obj)
  

  const swap=()=>{
    setTo(from);
    setaFrom(to);
    setAmountSelectCurrency(convertedCurrencyAmount);
    setConvertedCurrencyAmount(amountSelectCurrency)
  }
  const convertCurrency=()=>{
    console.log(currencyInfo.rates,"heelo")
    setConvertedCurrencyAmount(amountSelectCurrency*currencyInfo.rates[to.toUpperCase()])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${"https://images.pexels.com/photos/2522676/pexels-photo-2522676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convertCurrency()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputCurrencyBox
                            label="From"
                            amount={amountSelectCurrency}
                            onAmountChange={setAmountSelectCurrency}
                            selectCurrency={from}
                            onCurrencyChange={setaFrom}
                            currencyOptions={options}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputCurrencyBox
                            label="To"
                            amount={convertedCurrencyAmount}
                            onAmountChange={setConvertedCurrencyAmount}
                            // here we can use another way 
                            // onCurrencyChange={(currency)=>setTo(currency)}
                            onCurrencyChange={setTo}
                            currencyOptions={options}
                            amountDisable
                            selectCurrency={to}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
