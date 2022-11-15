import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { apiData } from "../../service/apiSlice";
import { chPercentSelector } from "../../service/chPercentSlice";
import { apiSelector } from "../../service/apiSlice";
import { idSelector } from "../../service/IdSlice";
import { useNavigate } from "react-router-dom";
import { newId } from "../../service/IdSlice";
import { userSelector } from "../../service/loginUserSlice";
import { favoriteDelete, favoritePost } from "../../service/addFavoriteSlice";
import { favoriteGet, favoriteList } from "../../service/favoriteListSlice";
import Coin from "../coinDetail/Coin";
import Searcher from "./searcher";


import favoriteLogo from "../../assets/images/favorite0.png";
import favoriteLogoHover from "../../assets/images/favorite1.png";
import favoriteLogoOk from "../../assets/images/favorite2.png";

// *TableGrid LISTADO CRIPTOS
const TableGrid = ({ criptoList }) => {
  // DISPATCH
  const dispatch = useDispatch();

  // USE SELECTOR - USER LOGGUED
  const userLoggued = useSelector(userSelector);
  // console.log("userLoggued:", (!userLoggued) ? true : false);

  // USE SELECTOR - CHPERCENT
  const chPercent = useSelector(chPercentSelector);

  // USE SELECTOR - APIDATA
  const api = useSelector(apiSelector);

  // USE SELECTOR - FAVORITE LIST
  let favoriteArray = useSelector(favoriteList);
  // console.log("favoriteList:", favoriteArray);

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

  // HANDLEFAVORITE
  // const handleFavorite = (e) => {
  //   console.log(e.cryptoId)
  //   console.log("Arreglo",favoriteArray)
  //   const position = favoriteArray.indexOf(e.cryptoId);
  //   favoriteArray.includes(e.cryptoId)
  //     ? favoriteArray.splice(position, 1)
  //     : favoriteArray = [...favoriteArray, e.cryptoId];
  //     console.log("Arreglo2",favoriteArray)
  // };

  // PRUEBA LOADER
  const favoritesLoader = useSelector((state) => state.favorites.loading);

  console.log("favorites", favoritesLoader);

  // <div class="spinner-grow spinner-grow-sm" role="status"></div>; // SPINNER

  const handleFavorite = async (e) => {
    if (!userLoggued) alert("resgistre señor");

    favoriteArray.includes(e.cryptoId)
      ? await dispatch(favoriteDelete(e))
      : await dispatch(favoritePost(e));

    await dispatch(favoriteGet(userLoggued));
    //  dispatch(favoritePost(userLoggued))
  };

  // USE-EFFECT
  // useEffect(() => {
  //   console.log("ANDUVO EL useEffect")
  // });

  useEffect(() => {
    dispatch(favoriteGet(userLoggued));
  }, [userLoggued]);

  // SEARCH FUNCTION
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
                <tr
                  // onClick={() => {
                  //   handleClick(coin.name.toLowerCase().replace(" ", "-"));
                  // }}
                  key={index}
                >
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
