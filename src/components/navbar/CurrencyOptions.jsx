import { useDispatch } from "react-redux";
import { editCurrency } from "../../features/currencySlice";

const CurrencyOptions = () => {
  // *TIPOS DE CURRENCY
  const types = ["usd", "btc", "eur", "bnb"];

  // *USE DISPATCH
  const dispatch = useDispatch();

  // *HANDLECLICK
  const handleClick = (e) => {
    dispatch(editCurrency(e.target.innerText));
    // console.log("handleClick:", e.target.innerText);
  };

  return (
    <>
        {types.map((type, index) => (
            <li key={index} onClick={handleClick} className="dropdown-item">{type}</li>
        ))}
    </>
  );
};

export default CurrencyOptions;
