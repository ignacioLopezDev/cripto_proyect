import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// REDUX SLICE
import { apiData } from "../../service/apiSlice";
import { newId } from "../../service/idSlice";
import { chPercentSelector } from "../../service/apiChPercentSlice";

export const Percent = ({coin}) => {
  // DISPATCH
  const dispatch = useDispatch();

  // USE NAVIGATE
  const navigate = useNavigate();

  // USE SELECTOR

  const chPercent = useSelector(chPercentSelector);

  // HANDLECLICK
  const handleClick = (id) => {
    dispatch(apiData(id));
    dispatch(newId(id));
    navigate(`/cripto_proyect/coin/${id}`);
  };

  // ? CONSTRUCCION TITULO DE "price_change"
  const percent = `price_change_percentage_${chPercent}_in_currency`;

  return (
    <td
      className={
        coin[percent] > 0
          ? "text-success text-center tableprop"
          : "text-danger text-center tableprop"
      }
      onClick={() => {
        handleClick(coin.name.toLowerCase().replace(" ", "-"));
      }}
    >
      {Math.round(coin[percent] * 100) / 100}%
    </td>
  );
};
