import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import Searcher from "./searcher";

// REDUX SLICE
import { apiData } from "../../service/apiSlice";
import { chPercentSelector } from "../../service/apiChPercentSlice";
import { newId } from "../../service/idSlice";
import { userSelector } from "../../service/loginUserSlice";
import {
  favoriteDelete,
  favoritePost,
  favoriteSelected,
} from "../../service/favoriteSelectedSlice";
import { favoriteGet, favoriteList } from "../../service/favoriteListSlice";

// IMAGES
import favoriteLogo from "../../assets/images/favorite0.png";
import favoriteLogoHover from "../../assets/images/favorite1.png";
import favoriteLogoOk from "../../assets/images/favorite2.png";

const TableGrid = ({ criptoList }) => {
  // USE NAVIGATE
  const navigate = useNavigate();

  // DISPATCH
  const dispatch = useDispatch();

  // USE SELECTOR
  const userLoggued = useSelector(userSelector);
  const chPercent = useSelector(chPercentSelector);
  let favoriteArray = useSelector(favoriteList);

    // HANDLECLICK
  const handleClick = (id) => {
    dispatch(apiData(id));
    dispatch(newId(id));
    navigate(`/cripto_proyect/coin/${id}`);
  };
  
  // HANDLEFAVORITE
  const handleFavorite = async (e) => {
    if (!userLoggued) alert("resgistre señor");
    
    favoriteArray.includes(e.cryptoId)
    ? await dispatch(favoriteDelete(e))
    : await dispatch(favoritePost(e));
    
    await dispatch(favoriteGet(userLoggued));
  };

  // USE STATE SEARCH - catch de onChange from Searcher component
  const [search, setSearch] = useState("");

  // SEARCH FUNCTION - Filtercoin will be mapped
  const filterCoins = criptoList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // ! CONSTRUCCION TITULO DE "price_change"
  const percent = `price_change_percentage_${chPercent}_in_currency`;

  return (
    // <div className="">
    <div className="HomePage">
      <div id="HP-Grid-1">
        <div id="HP-Grid-1-1">
          <Searcher setSearch={setSearch} />
        </div>
        <div id="HP-Grid-1-2">
          <table className="table table-dark mt-4 table-hover">
            <thead>
              <tr className="text-center">
                <th style={{ width: "5%" }}></th>
                <th style={{ width: "5%" }}></th>
                <th style={{ width: "5%" }}></th>
                <th style={{ width: "auto" }}>Crypto Coin</th>
                <th style={{ width: "20%" }}>Price</th>
                <th style={{ width: "24%" }}>% Percent</th>
              </tr>
            </thead>
            <tbody>
              {filterCoins.map((coin, index) => (
                <tr key={index}>
                  {/* IMAGEEEEN */}
                  <td className="Fav-logo">
                    {favoriteArray.includes(coin.id) ? (
                      <img
                        className="favorite-Logo"
                        src={favoriteLogoOk}
                        alt="favoriteLogo"
                      />
                    ) : (
                      <img
                        className="favorite-Logo"
                        src={favoriteLogo}
                        alt="favoriteLogo"
                      />
                    )}

                    <img
                      className="favorite-Logo-Hover"
                      onClick={() => {
                        handleFavorite({
                          cryptoId: coin.id,
                          userId: userLoggued,
                        });
                      }}
                      src={favoriteLogoHover}
                      alt="favoriteLogo"
                    />
                  </td>
                  <td
                    className="text-muted text-center tableprop"
                    onClick={() => {
                      handleClick(coin.name.toLowerCase().replace(" ", "-"));
                    }}
                  >
                    {coin.market_cap_rank}
                  </td>

                  <td
                    className="tableprop"
                    onClick={() => {
                      handleClick(coin.name.toLowerCase().replace(" ", "-"));
                    }}
                  >
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: "30px" }}
                    />
                  </td>
                  <td
                    onClick={() => {
                      handleClick(coin.name.toLowerCase().replace(" ", "-"));
                    }}
                  >
                    <div>
                      <span>{coin.name}</span>
                      <div></div>
                      <span className="text-muted text-uppercase">
                        {coin.symbol}
                      </span>
                    </div>
                  </td>
                  <td
                    className="tableprop text-end"
                    onClick={() => {
                      handleClick(coin.name.toLowerCase().replace(" ", "-"));
                    }}
                  >
                    {coin.current_price.toLocaleString("es-MX")}
                  </td>
                  <td
                    className={
                      coin[percent] > 0
                        ? "text-success text-center tableprop"
                        : "text-danger text-center tableprop"
                    }
                    onClick={() => {
                      handleClick(coin.name.toLowerCase().replace(" ", "-"));
                    }}
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
  );
};
export default TableGrid;
