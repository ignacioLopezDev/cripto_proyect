import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import Searcher from "./searcher";
import { FavoritesBookmark } from "./tdFavoritesBookmark";
import { TableHead } from "./tableHead";
import { Ranking } from "./tdRanking";
import { Image } from "./tdImage";
import { Name } from "./tdName";
import { Price } from "./tdPrice";
import { Percent } from "./tdPercent";

// REDUX SLICE
import { apiData } from "../../service/apiSlice";
import { newId } from "../../service/idSlice";
import { userSelector } from "../../service/loginUserSlice";
import { favoriteGet } from "../../service/favoriteListSlice";

const TableGrid = ({ criptoList }) => {
  // USE NAVIGATE
  const navigate = useNavigate();

  // DISPATCH
  const dispatch = useDispatch();

  // USE SELECTOR
  const userLoggued = useSelector(userSelector);

  // HANDLECLICK
  const handleClick = (id) => {
    dispatch(apiData(id));
    dispatch(newId(id));
    navigate(`/cripto_proyect/coin/${id}`);
  };

  //USEEFFECT
  useEffect(() => {
    dispatch(favoriteGet(userLoggued));
  }, [userLoggued]);

  // USESTATE SEARCH - catch de onChange from Searcher component
  const [search, setSearch] = useState("");

  // SEARCH FUNCTION - Filtercoin will be mapped
  const filterCoins = criptoList.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="HomePage">
      <div id="HP-Grid-1">
        <div id="HP-Grid-1-1">
          <Searcher setSearch={setSearch} />
        </div>
        <div id="HP-Grid-1-2">
          <table className="table table-dark mt-4 table-hover">
            <thead>
              <TableHead />
            </thead>
            <tbody>
              {filterCoins.map((coin, index) => (
                <tr key={index}>
                  <FavoritesBookmark coin={coin} />
                  <Ranking coin={coin} handleClick={handleClick} />
                  <Image coin={coin} handleClick={handleClick} />
                  <Name coin={coin} handleClick={handleClick} />
                  <Price coin={coin} handleClick={handleClick} />
                  <Percent coin={coin} handleClick={handleClick} />
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
