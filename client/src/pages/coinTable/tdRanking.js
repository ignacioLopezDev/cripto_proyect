import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// REDUX SLICE
import { apiData } from "../../service/apiSlice";
import { newId } from "../../service/idSlice";

export const Ranking = ({coin}) => {
  // DISPATCH
  const dispatch = useDispatch();

  // USE NAVIGATE
  const navigate = useNavigate();

  // HANDLECLICK
  const handleClick = (id) => {
    dispatch(apiData(id));
    dispatch(newId(id));
    navigate(`/cripto_proyect/coin/${id}`);
  };

  return (
    <td
      className="text-muted text-center tableprop"
      onClick={() => {
        handleClick(coin.name.toLowerCase().replace(" ", "-"));
      }}
    >
      {coin.market_cap_rank}
    </td>
  );
};
