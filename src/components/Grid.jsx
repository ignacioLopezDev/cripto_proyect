import React from "react";
import { useSelector } from "react-redux";

// *GRID LISTA DE CRIPTO
const Grid = ({ criptoList, search }) => {
  // console.log("criptolist", criptoList);


  //* TRAIGO EL "chPercent" DEL STORE
  const chPercent = useSelector((state) => state.chPercent);

  //* ARMO EL TITULO DE "price_change" PARA LUEGO MAPEARLO
  const percent = `price_change_percentage_${chPercent}_in_currency`;

  // *TITLES
  const titles = ["#","", "Coin", "Price", "%Avarage"];

  // *SEARCH FUNCTION
  const filterCoins = criptoList.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="row">
      <table className="table table-dark mt-4 table-hover ">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody id="tableBody">
          {filterCoins.map((coin, index) => (
            <tr key={index}>
              <td className="text-muted">{index + 1}</td>
              <td>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "27px" }}
                />
                </td>
                <td className="text-nowrap">
                <span>{coin.name}</span>
                <span className="text-muted text-uppercase ms-3">
                  {coin.symbol}
                </span>
              </td>
              <td>{coin.current_price}</td>
              <td 
                className={coin[percent] > 0 ? "text-success text-center" : "text-danger text-center"}
              >
                {Math.round(coin[percent] * 100) / 100}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Grid;
