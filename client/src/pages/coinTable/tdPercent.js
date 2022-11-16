import { useSelector } from "react-redux";

// REDUX SLICE
import { chPercentSelector } from "../../service/apiChPercentSlice";

export const Percent = ({ coin, handleClick }) => {
  // USE SELECTOR
  const chPercent = useSelector(chPercentSelector);

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
