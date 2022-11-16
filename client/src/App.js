import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Navbar } from "./components/Navbar";
import TableGrid from "./pages/coinTable/coinTable";
import Coin from "./pages/coinDetail/Coin";
import { currencySelector } from "./service/apiCurrencySlice";
import { sortSelector } from "./service/apiSortSlice";
import { chPercentSelector } from "./service/apiChPercentSlice";
import Loader from "./components/ui/loader";


const App = () => {


  // LOADER AUTH0
  const { isLoading } = useAuth0();

  // *API PROPIETIES
  const currency = useSelector(currencySelector);
  // console.log("currency:", currency);

  const sort = useSelector((state) => state.sort);
  // console.log('sort:', sort)

  const chPercent = useSelector(chPercentSelector);
  // console.log("chPercent:", chPercent);

  // * API ROUTE
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sort}&per_page=50&page=1&sparkline=false&price_change_percentage=${chPercent}`;

  // * PEDIDO AXIOS A COINGECKO API
  const getData = async () => {
    const res = await axios.get(api);
    setCriptoList(res.data);
    // console.log("Ejecute getData");
    // console.log("api", api);
  };

  // * USEEFFECT - RENDERIZA API
  useEffect(() => {
    // renderiza al instante
    getData();
    // renderiza en intervalos, resetea cuando cambia algo
    // const interval = setInterval(getData, 30000);
    // return () => clearInterval(interval);
  }, [currency, sort, chPercent]);

  // USESTATE - CAPTURA API EN CRIPTOLIST
  const [criptoList, setCriptoList] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Link to="/" className="cryptoApp fixed-top">Crypto App</Link>
        <Navbar />
        {isLoading ? <Loader /> : <></>}

        <Routes>
          <Route
            className="container"
            // path="/cripto_proyect"
            path="/"
            element={<TableGrid criptoList={criptoList} />}
          />
          <Route
            // path="/cripto_proyect/coin/:id"
            path="/coin/:id"
            element={<Coin />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
