import { useState } from 'react'

import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const [convertedAmount, setConvertedAmount] = useState(0)

                      //function from se hi to currency lega
                      //jo currency parameter he wo API me jaati he.
                      //ye from selected currency he.

                      //pure function ho currencyinfo me daal diya.
  const currencyInfo = useCurrencyInfo(from)

  //wo API puri object ke format me thi, to saari keys fetch krni padegi

  const options = Object.keys(currencyInfo)

  //swap ke liye function

  const swap = () => {

    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  const convert = () => {
                // ^ wala amount, aur ye currencyinfo ke parameter[to]
                //yaani niche jo currency select hui he wo.
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <h1 className='text-center text-black text-4xl'>Currency App</h1>

      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                <form
                    onSubmit={(e) => {
                        e.preventDefault(); //jb form submit hota he to wo koi url pe jaata he, hum nahi chate ke wah ajaaye isliey preventDefault
                        convert() //aur jb convert pe submit ho to convert() method call ho.
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                        //ye sb InputBox Function ke parameters
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap} //swap ke click ke mthod call
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>



    </>
  )

  


}

export default App
