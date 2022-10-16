import React from "react";
import { useSelector } from "react-redux";

// *GRID LISTA DE CRIPTO
const Grid = ({ criptoList }) => {
  console.log("criptolist", criptoList);

  //* TRAIGO EL "chPercent" DEL STORE
  const chPercent = useSelector((state) => state.chPercent);

  //* ARMO EL TITULO DE "price_change" PARA LUEGO MAPEARLO
  const percent = `price_change_percentage_${chPercent}_in_currency`;

  return (
    <>
      <div>Grid</div>
      <tbody>
        {criptoList.map((list) => (
          <tr key={list.id}>
            <td>{list.symbol}</td>
            <td>{list.name}</td>
            <td>{list.current_price}</td>
            <td>{Math.round(list[percent]*100)/100}%</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
export default Grid;
