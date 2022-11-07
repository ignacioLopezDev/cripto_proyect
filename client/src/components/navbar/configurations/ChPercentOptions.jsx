import { useDispatch } from "react-redux";
import { editChPercent } from "../../../features/chPercentSlice";

const ChPercentOptions = () => {
  // *TIPOS DE PERCENTS%
  const types = ["1h", "24h", "7d", "14d", "30d", "1y"];

  // *USE DISPATCH
  const dispatch = useDispatch();

  // *HANDLECLICK
  const handleClick = (e) => {
    dispatch(editChPercent(e.target.innerHTML));
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

export default ChPercentOptions;
