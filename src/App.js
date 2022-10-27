import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";


import { Navbar } from "./components/navbar/Navbar";
import Grid from "./components/Grid";
// import Searcher from "./components/Searcher";
import Coin from "./components/Coin";
import { currencySelector } from "./features/currencySlice";
import { sortSelector } from "./features/sortSlice";
import { chPercentSelector } from "./features/chPercentSlice";

const App = () => {
  // *API PROPIETIES
  const currency = useSelector(currencySelector);
  // console.log("currency:", currency);

  const sort = useSelector((state)=> state.sort);
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

  // * USESTATE SEARCH
  const [search, setSearch] = useState("");

  // USESTATE - CAPTURA API EN CRIPTOLIST
  const [criptoList, setCriptoList] = useState([]);



  return (
    <div  >
      <BrowserRouter >
        <Link to="/cripto_proyect" className=" criptoApp fixed-top">Cripto App</Link>
        <Navbar/>
        {/* <Searcher setSearch={setSearch} /> */}

        <Routes>
          <Route
          className="container"
            path="/cripto_proyect"
            element={<Grid criptoList={criptoList} search={search} />}
          />
          <Route
          path="/cripto_proyect/coin/:id"
          element={<Coin/>}
          >
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
