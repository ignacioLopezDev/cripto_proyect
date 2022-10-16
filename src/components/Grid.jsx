import React from "react";

const Grid = ({ criptoList }) => {
  console.log("Lista", criptoList);

  const changePercentage = `price_change_percentage_1h_in_currency`

  return (
    <>
      <div>Grid</div>
      <tbody>
        {criptoList.map((list) => (
          <tr key={list.id}>
            <td>{list.symbol}</td>
            <td>{list.name}</td>
            <td>{list.current_price}</td>
            <td>{list.name}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
export default Grid;
