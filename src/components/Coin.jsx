import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Graph from "./Graph";

const Coin = () => {
  // USESTATE GUARDO COIN
  const [coin, setCoin] = useState("");

  // *USEPARAMS
  const params = useParams();
  const id = params.id.toLowerCase().replace(" ", "-");
  console.log("parmas.id:", params.id);
  console.log("id:", id);

  // API-COIN

  const apiCoin = `https://api.coingecko.com/api/v3/coins/${id}`;

  // * PEDIDO AXIOS A COINGECKO API-COIN

  const dataCoin = async () => {
    const res = await axios.get(apiCoin);
    console.log("datacoin", res.data);
    setCoin(res.data);
  };

  // USE-EFFECT - RENDERIZAR API-COIN
  useEffect(() => {
    dataCoin();
  }, [id]);

  console.log("UseState Coin:", coin);
  return (
    <>
      {coin && (
        <div class="grid">
          <div class="e-1">
          <div class="e-1-1">{coin.symbol}</div>
          <div class="e-1-2">
            <img src={coin.image.small} alt="coin" height="70%" />
            {coin.name}
          </div>
          </div>
          <div class="e-2">
            <div class="e-2-1">{coin.market_data.current_price.usd}</div>
            <div class="e-2-2">{coin.market_data.current_price.usd / 100}</div>
            <div class="e-2-3">{coin.market_data.current_price.btc}</div>
            <div class="e-2-4">{coin.market_data.current_price.btc / 100}</div>
          </div>
          <div class="e-3">
          <div class="e-3-1">Contract</div>
          <div class="e-3-2">{coin.contract_address}</div>
          <div class="e-3-1">Ranking</div>
          <div class="e-3-2">{coin.coingecko_score}</div>
          <div class="e-3-1">Capitalization</div>
          <div class="e-3-2">{coin.market_data.market_cap.usd}</div>
          <div class="e-3-1">Official Page</div>
          <div class="e-3-2">{coin.links.official_forum_url[0]}</div>
          </div>
          <div class="e-4" dangerouslySetInnerHTML={{ __html: coin.description.en }}></div>
          <div>
          <div class="e-5">%{coin.market_data.price_change_percentage_24h}</div>
          <div>%{coin.market_data.price_change_percentage_7d}</div>
          <div>%{coin.market_data.price_change_percentage_14d}</div>
          <div>%{coin.market_data.price_change_percentage_30d}</div>
          <div>%{coin.market_data.price_change_percentage_60d}</div>
          <div>%{coin.market_data.price_change_percentage_200d}</div>
          <div>%{coin.market_data.price_change_percentage_1y}</div>
          </div >
          <div class="e-6">
            <Graph />
          </div>
        </div>
      )}
    </>
  );
};

export default Coin;

/* 









contract
website
wallets
community

 "tickers": [
  "market": {
        "name": "Binance",
 "trust_score": "green",
  "trade_url": "https://www.bitforex.com/en/spot/btc_usdt",
  
*/
