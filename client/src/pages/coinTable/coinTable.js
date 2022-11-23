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
import { apiMainSelector } from "../../service/apiMain";
import { favoriteGet } from "../../service/favoriteListSlice";
import { currencySelector } from "../../service/apiCurrencySlice";
import { sortSelector } from "../../service/apiSortSlice";
import { chPercentSelector } from "../../service/apiChPercentSlice";
import { apiGet } from "../../service/apiMain";




const TableGrid = () => {
  // USE NAVIGATE
  const navigate = useNavigate();

  // DISPATCH
  const dispatch = useDispatch();

  // USE SELECTOR DEL USUARIO UNA VEZ QUE SE LOGUEE
  const userLoggued = useSelector(userSelector);

  // USE SELECTOR - API PROPIETIES
  const currency = useSelector(currencySelector);
  const sort = useSelector(sortSelector);
  const chPercent = useSelector(chPercentSelector);

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

  //USEEFFECT - RENDERIZA API-GET (DATA DE LA API CON LAS MONEDAS)
  useEffect(() => {
    dispatch(apiGet(currency, sort, chPercent));
  }, [currency, sort, chPercent]);

  // USE SELECTOR DE LA CRIYPTO-LIST
  const criptoList = useSelector(apiMainSelector);




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
        <div id="HP-Grid-2-1">
          chau
        </div>
        <div id="HP-Grid-2-2">chau</div>
      </div>
    </div>
  );
};
export default TableGrid;
