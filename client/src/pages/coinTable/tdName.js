import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// REDUX SLICE
import { apiData } from "../../service/apiSlice";
import { newId } from "../../service/idSlice";

export const Name = ({coin}) => {
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
      onClick={() => {
        handleClick(coin.name.toLowerCase().replace(" ", "-"));
      }}
    >
      <div>
        <span>{coin.name}</span>
        <div></div>
        <span className="text-muted text-uppercase">{coin.symbol}</span>
      </div>
    </td>
  );
};
