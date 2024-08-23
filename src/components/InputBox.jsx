import React, {useId} from 'react'

//function InputBox( { parameters } ) { return (  ); }
function InputBox({
    label,
    amount,
    onAmountChange, //amount change hoga to state bhi change krni padegi.
    onCurrencyChange,
    currencyOptions = [], //currencies ke options list me hoge isliye array.
    selectCurrency = "usd", //by default to koi currency select rahe.
    amountDisable = false, //koi user amount dena chahte he nahi dena chahte, compulsory nahi he ye var.
    currencyDisable = false,

    className = "", // ki user ko alag se khud ki css batani ho.

}) {

    //useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

    const amountInputId = useId()

    return (
        // javascript waali css {}
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
            
                      {/* uniqueness ke liye label {amountInputId} */}
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">

                    {/* variable se data aaega */}
                    {label} 

                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // agr amount change hua to me kya karu
                    //jb amount change hoga to onamountChange call karega wahi se humko access mil jaaye.
                    //New Concept
                    //onAmountChange pe koi default value pass nahi kari he kr bhi nahi sakte, bcz empty function thodi na banaoge.
                    //to waha pe possible chances he ki ye crash kr jaaye agr nahi pass kara to.
                    //syntax:- && agr ye available he to ye onAmountChange use karo. (Act as a checker.)
                    //kahi baar javascript string format ke leti he, isliye Number me conveert krna he.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} //bydefault usd

                    //same concept
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}

                    disabled={currencyDisable}
                >
                        {/* currency options ko loop krdo map se */}

                        {/* => agr value deni he to {} , nahi deni to () */}
                        {currencyOptions.map((currency) => (
                            
                            //loop me value bht baar reppeat hogi , to react ka API bht baar hit hota he.
                            //isliye humko jsx me key ka use krna hota he. specially LOOP me.
                            //remember to use KEY in REACT, in jsx, LOOP.
                            <option key={currency} value={currency}>
                                {/* //jo value chnage hogi wo currency ke variable me. */}
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;