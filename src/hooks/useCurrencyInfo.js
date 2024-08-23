//API se jo value aati he wo string format me hoti he. uski format change krni hpti he.

import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    //ye pure method se hum DATA return kr rahe he.
    const [data, setData] = useState({}) //empty loop islie rakhi he bcz empty data kabhi aaye to crash naa kare.
    
    useEffect(() => {

        //API of currency
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) //chaining, convert response into .json,  json ka data hold bhi krna pdega kahi pe.
        .then((res) => setData(res[currency])) //access krne ke liye . yaa [] use krte he, aur jb inr yaa usd likhege to currency ke variable me value jaaegi.
        console.log(data);

    }, [currency])

    console.log(data);

    return data

}

export default useCurrencyInfo; //ye pura method return krna he jo data return kr raha he.