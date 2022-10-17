import React from "react";
import { useSelector } from "react-redux";

// *GRID LISTA DE CRIPTO
const Grid = ({ criptoList }) => {
  console.log("criptolist", criptoList);

  //* TRAIGO EL "chPercent" DEL STORE
  const chPercent = useSelector((state) => state.chPercent);

  //* ARMO EL TITULO DE "price_change" PARA LUEGO MAPEARLO
  const percent = `price_change_percentage_${chPercent}_in_currency`;

  // *TITLES
  const titles = ["#", "Coin", "Price", "%Avarage"];

  return (
    <div className="row">
      <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title) => (
              <td>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {criptoList.map((list, index) => (
            <tr key={list.id}>
              <td className="text-muted">{index + 1}</td>
              <td>
                <img
                  src={list.image}
                  alt={list.name}
                  style={{ width: "27px" }}
                  className="img-fluid me-3"
                />
                <span>{list.name}</span>
                <span className="text-muted text-uppercase ms-3">
                  {list.symbol}
                </span>
              </td>
              <td>{list.current_price}</td>
              <td
                className={list[percent] > 0 ? "text-success" : "text-danger"}
              >
                {Math.round(list[percent] * 100) / 100}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Grid;
