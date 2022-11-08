import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { apiData } from "../features/apiSlice";
import { chPercentSelector } from "../features/chPercentSlice";
import { apiSelector } from "../features/apiSlice";
import { idSelector } from "../features/Id";
import { useNavigate } from "react-router-dom";
import { newId } from "../features/Id";
import Coin from "./Coin";
import Searcher from "./Searcher";

// *TableGrid LISTADO CRIPTOS
const TableGrid = ({ criptoList }) => {
  // DISPATCH
  const dispatch = useDispatch();

  // USE SELECTOR - CHPERCENT
  const chPercent = useSelector(chPercentSelector);

  // USE SELECTOR - APIDATA
  const api = useSelector(apiSelector);

  // USE SELECTOR - APIDATA
  const id = useSelector(idSelector);

  // USE NAVIGATE
  const navigate = useNavigate();

  // USE STATE - ID SELECTED
  const [idSelected, setIdSelected] = useState();

  // * USE STATE SEARCH
  const [search, setSearch] = useState("");

  // HANDLECLICK
  const handleClick = (id) => {
    dispatch(apiData(id));
    dispatch(newId(id));
    navigate(`/cripto_proyect/coin/${id}`);
  };

  // ?SEARCH FUNCTION
  const filterCoins = criptoList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // CONSTRUCCION TITULO DE "price_change"
  const percent = `price_change_percentage_${chPercent}_in_currency`;

  return (
    // <div className="">
    <div className="HomePage">
      <div id="HP-Grid-1">
        <div id="HP-Grid-1-1">
        <Searcher  setSearch={setSearch} />
        </div>
        <div id="HP-Grid-1-2">
          <table className="table table-dark mt-4 table-hover">
            <thead>
              <tr className="text-center">
                <th style={{ width: "5%" }}></th>
                <th style={{ width: "5%" }}></th>
                <th style={{ width: "auto" }}>Crypto Coin</th>
                <th style={{ width: "20%" }}>Price</th>
                <th style={{ width: "24%" }}>% Percent</th>
              </tr>
            </thead>
            <tbody>
              {filterCoins.map((coin, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(coin.name.toLowerCase().replace(" ", "-"));
                  }}
                >
                  <td className="text-muted text-center tableprop">
                    {coin.market_cap_rank}
                  </td>
                  <td className="tableprop">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td>
                    <div>
                      <span>{coin.name}</span>
                      <div></div>
                      <span className="text-muted text-uppercase">
                        {coin.symbol}
                      </span>
                    </div>
                  </td>
                  <td className="tableprop text-end">
                    {coin.current_price.toLocaleString("es-MX")}
                  </td>
                  <td
                    className={
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
      </div>
      <div id="HP-Grid-2">
        <div id="HP-Grid-2-1">hola</div>
        <div id="HP-Grid-2-2">chau</div>
      </div>
    </div>
    // </div>
  );
};
export default TableGrid;
