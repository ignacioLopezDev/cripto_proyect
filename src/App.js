import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Grid from "./components/Grid";
import CurrencyOptions from "./components/navbar/CurrencyOptions";
import SortOptions from "./components/navbar/SortOptions";
import ChPercentOptions from "./components/navbar/ChPercentOptions";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  // *API PROPIETIES
  const currency = useSelector((state) => state.currency);
  // console.log('currency:', currency)

  const sort = useSelector((state) => state.sort);
  // console.log('sort:', sort)

  const chPercent = useSelector((state) => state.chPercent);
  console.log("chPercent:", chPercent);

  // * API ROUTE
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sort}&per_page=25&page=1&sparkline=false&price_change_percentage=${chPercent}`;

  // * PEDIDO AXIOS A COINGECKO API
  const getData = async () => {
    const res = await axios.get(api);
    setCriptoList(res.data);
  };

  // * USEEFFECT - RENDERIZA API
  useEffect(() => {
    getData();
  }, [currency, sort, chPercent]);

  // USESTATE - CAPTURA API EN CRIPTOLIST
  const [criptoList, setCriptoList] = useState([]);

  return (
    <div className="container">
      <BrowserRouter>
        <div className="criptoApp fixed-top">Cripto App</div>
          <Navbar />

        <input
          type="text"
          placeholder="Search a Coin"
          className="mt-60px form-control text-light mt-4 border-0 text-center"
        />
        <Routes>
          <Route path="/cripto_proyect" element={<Grid criptoList={criptoList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
