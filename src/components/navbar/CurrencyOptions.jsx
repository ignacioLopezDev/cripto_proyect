
import { useState } from "react";
import { editCurrency } from "../../features/currencySlice";
import { useDispatch } from "react-redux";


const CurrencyOptions = () => {


  const currency = ["usd", "btc", "eur"];
 const [currencyList, setCurrencyList] = useState(["usd"])

 const dispatch = useDispatch()

const handleClick = (e) => {
  dispatch(editCurrency(e.target.innerText))
  console.log(e.target.innerText);
  setCurrencyList(e.target.innerText)

}

  return (
    <>
    <div>CurrencyOptions</div>
    <tbody>
    {currency.map((list, index) => (
      <tr key={index}>
        <td onClick={handleClick}>{list}</td>
      </tr>
    ))}

    </tbody>
    </>
  )
}

export default CurrencyOptions