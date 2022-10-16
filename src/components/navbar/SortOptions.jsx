import { editSort } from "../../features/sortSlice";
import { useDispatch } from "react-redux";

const SortOptions = () => {
  // *TIPOs DE SORTS
  const types = ["market_cap_desc", "market_cap_asc", "volume_asc"];

  // *USE DISPATCH
  const dispatch = useDispatch();

  // *HANDLECLICK
  const handleClick = (e) => {
    dispatch(editSort(e.target.innerHTML));
    // console.log("handleclick:", e.target.innerHTML);
  };

  return (
    <>
      <div>Sort</div>
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

export default SortOptions;
