import { useDispatch } from "react-redux";
import { editCurrency } from "../../features/currencySlice";

const CurrencyOptions = () => {
  // *TIPOS DE CURRENCY
  const types = ["usd", "btc", "eur"];

  // *USE DISPATCH
  const dispatch = useDispatch();

  // *HANDLECLICK
  const handleClick = (e) => {
    dispatch(editCurrency(e.target.innerText));
    // console.log("handleClick:", e.target.innerText);
  };

  return (
    <>
      <div>CurrencyOptions</div>
      <tbody>
        {types.map((type, index) => (
          <tr key={index}>
            <td onClick={handleClick}>{type}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default CurrencyOptions;
