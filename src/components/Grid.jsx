import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// *GRID LISTA DE CRIPTO
const Grid = ({ criptoList, search }) => {
  // console.log("criptolist", criptoList);

  //* TRAIGO EL "chPercent" DEL STORE
  const chPercent = useSelector((state) => state.chPercent);

  //* ARMO EL TITULO DE "price_change" PARA LUEGO MAPEARLO
  const percent = `price_change_percentage_${chPercent}_in_currency`;

  // *TITLES
  const titles = ["#", "", "Coin", "Price", "%Avarage"];

  // *SEARCH FUNCTION
  const filterCoins = criptoList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // *USENAVIGATE
  const navigate = useNavigate()



  return (
    <div className="container" >
      <table className="table table-dark mt-4 table-hover  ">
        <thead>
          <tr >
            {/* {titles.map((title, index) => ( */}
              {/* <th key={index}>{title}</th> */}
            {/* ))} */}
            <th style={{width:"5%"}}>#</th>
            <th style={{width:"5%"}}>Coin</th>
            <th style={{width:"auto"}}></th>
            <th style={{width:"30%"}}>Price</th>
            <th style={{width:"30%"}} >% Percent</th>
          </tr>
        </thead>
        <tbody>
          {filterCoins.map((coin, index) => (
            <tr key={index} 
            onClick={() => {
              navigate(`/cripto_proyect/coin/${coin.name}`)
            }}
            >
              <td className="text-muted pe-1 text-center">
                {coin.market_cap_rank}
              </td>
              <td>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "27px" }}
                />
              </td >
              <td class="tableprop">
                <span >{coin.name}</span>
                <span class="text-muted text-uppercase ms-3">
                  {coin.symbol}
                </span>
              </td>
              <td className="text-end">{coin.current_price.toLocaleString('es-MX')}</td>
              <td
                className={
                  coin[percent] > 0
                    ? "text-success text-center"
                    : "text-danger text-center"
                }
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

