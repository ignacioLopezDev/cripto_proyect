import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Grid from "./components/Grid";
import { Navbar } from "./components/navbar/Navbar";
import Searcher from "./components/Searcher";

function App() {
  // *API PROPIETIES
  const currency = useSelector((state) => state.currency);
  // console.log('currency:', currency)

  const sort = useSelector((state) => state.sort);
  // console.log('sort:', sort)

  const chPercent = useSelector((state) => state.chPercent);
  // console.log("chPercent:", chPercent);

  // * API ROUTE
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sort}&per_page=50&page=1&sparkline=false&price_change_percentage=${chPercent}`;

  // * PEDIDO AXIOS A COINGECKO API
  const getData = async () => {
    const res = await axios.get(api);
    setCriptoList(res.data);
  };

  // * USEEFFECT - RENDERIZA API
  useEffect(() => {
    getData();
  }, [currency, sort, chPercent]);

  // * USESTATE SEARCH
  const [search, setSearch] = useState("");

  // USESTATE - CAPTURA API EN CRIPTOLIST
  const [criptoList, setCriptoList] = useState([]);

  return (
    <div className="container">
      <BrowserRouter>
        <div className="criptoApp fixed-top">Cripto App</div>
        <Navbar />
        <Searcher setSearch={setSearch} />

        <Routes>
          <Route
            path="/cripto_proyect"
            element={<Grid criptoList={criptoList} search={search} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
