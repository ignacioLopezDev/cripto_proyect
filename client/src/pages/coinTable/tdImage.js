import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// REDUX SLICE
import { apiData } from "../../service/apiSlice";
import { newId } from "../../service/idSlice";

export const Image = ({coin}) => {
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
      className="tableprop"
      onClick={() => {
        handleClick(coin.name.toLowerCase().replace(" ", "-"));
      }}
    >
      <img src={coin.image} alt={coin.name} style={{ width: "30px" }} />
    </td>
  );
};
