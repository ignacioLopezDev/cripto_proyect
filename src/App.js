import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Grid from "./components/Grid";
import CurrencyOptions from "./components/navbar/CurrencyOptions";

function App() {

  // useSelector
  const moneda = useSelector((state) => state.currency)
  console.log("NACHOOO", moneda)

  // parametros
  const currency = useSelector((state) => state.currency);
  console.log('currency:', currency)
  const order = ["market_cap_desc"];
  // const order = ["market_cap_desc", "market_cap_asc", "volume_asc"];
  // ? falta el visual
  // const visual = "&price_change_percentage=" + "1h";

  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${order}&per_page=100&page=1&sparkline=false`;

  // getData - pedido axios.get de la api
  const getData = async () => {
    const res = await axios.get(api);
    setCriptoList(res.data);
  };

  // UseEffect - cuando cargue pagina traiga getData
  useEffect(() => {
    getData();
  }, [currency]);

  // useState - criptoList
  const [criptoList, setCriptoList] = useState([1]);

  return (
    <div>
      <BrowserRouter>
        <div>Cripto App</div>
      <CurrencyOptions/>
        <tr>
          <td>"usd</td>
          <td>btc</td>
          <td>eur</td>
        </tr>
        <tr>
          <td>market_cap_desc</td>
          <td>market_cap_asc</td>
          <td>volume_asc</td>
        </tr>
        <tr>
          <td>1h</td>
          <td>24h</td>
          <td>7d</td>
          <td>14d</td>
          <td>30d</td>
          <td>1y</td>
        </tr>
        <Routes>
          <Route path="/" element={<Grid criptoList={criptoList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
