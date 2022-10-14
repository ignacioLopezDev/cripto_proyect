import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Grid from "./components/Grid";

function App() {
  const api =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    // getData - pedido axios.get de la api
    const getData = async () => {
      const res = await axios.get(api);
      console.log(res.data);
    };


    // UseEffect - cuando cargue pagina traiga getData
    useEffect(() => {
      getData();
    }, []);



  return (
    <div>
      <BrowserRouter>
        <div>Cripto App</div>
        <Routes>
          <Route to="/" element={<Grid />} />
        </Routes>
        <Grid />
      </BrowserRouter>
    </div>
  );
}

export default App;
