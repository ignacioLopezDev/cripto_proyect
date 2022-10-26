import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newId } from "../features/Id";




// *GRID LISTA DE CRIPTO
const Grid = ({ criptoList, search }) => {
  // console.log("criptolist", criptoList);

// DISPATCH
const dispatch = useDispatch();

  //* TRAIGO EL "chPercent" DEL STORE
  const chPercent = useSelector((state) => state.chPercent);

  //* ARMO EL TITULO DE "price_change" PARA LUEGO MAPEARLO
  const percent = `price_change_percentage_${chPercent}_in_currency`;


  // *SEARCH FUNCTION
  const filterCoins = criptoList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // *USENAVIGATE
  // const navigate = useNavigate()

  // HANDLECLICK
  const handleClick= (id) => {
    console.log("este es el id", id)
    dispatch(newId(id))
  
  }


  return (
    <div className="container" >
      <table className="table table-dark mt-4 table-hover  ">
        <thead>
          <tr className="text-center">
            <th style={{width:"5%" }}>#</th>
            <th style={{width:"5%"}}></th>
            <th style={{width:"auto"}}>Coin</th>
            <th style={{width:"20%"}}>Price</th>
            <th style={{width:"20%"}} >% Percent</th>
          </tr>
        </thead>
        <tbody >
          {filterCoins.map((coin, index) => (
            <tr key={index} 
            onClick={() => {handleClick(coin.name)}}
            // onClick={() => {
              // navigate(`/cripto_proyect/coin/${coin.name}`)
            // }}
            >
              <td class="text-muted text-center tableprop">
                {coin.market_cap_rank}
              </td>
              <td class="tableprop">
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "35px" }}
                />
              </td >
              <td >
                <td><span >{coin.name}</span>
                <td></td><span class="text-muted text-uppercase">
                  {coin.symbol}
                </span></td>
              </td>
              <td class="tableprop text-end">{coin.current_price.toLocaleString('es-MX')}</td>
              <td
                class={
                  coin[percent] > 0
                    ? "text-success text-center tableprop"
                    : "text-danger text-center tableprop"
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

