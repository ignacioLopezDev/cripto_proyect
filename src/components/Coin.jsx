import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  // USESTATE GUARDO COIN
  const [coin, setCoin] = useState({
    symbol: "",
    name: "",
    coingecko_score: "",
    image: { small: "" },
    description: { en: "" },
    market_data: {
      current_price: { usd: "", btc: "" },
      market_cap: { usd: "" },
    },
  });

  // *USEPARAMS
  const params = useParams();
  const id = params.id.toLowerCase();

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
      <div>{coin.symbol}</div>
      <img src={coin.image.small} alt="coin" />
      <div>{coin.name}</div>
      <div>{coin.coingecko_score}</div>
      <div>{coin.market_data.current_price.usd}</div>
      <div>{coin.market_data.current_price.btc}</div>
      <div>{coin.market_data.market_cap.usd}</div>
      <div>{coin.market_data.market_cap.usd}</div>
      <div>{coin.name}</div>
      <div>{coin.name}</div>
      <div dangerouslySetInnerHTML={{ __html: coin.description.en }}></div>
    </>
  );
};

export default Coin;

/* 







Market Cap Rank

  "price_change_24h": 60.003,
    "price_change_percentage_24h": 0.31325,
    "price_change_percentage_7d": 0.3239,
    "price_change_percentage_14d": -4.69578,
    "price_change_percentage_30d": -1.81555,
    "price_change_percentage_60d": -9.25684,
    "price_change_percentage_200d": -58.08426,
    "price_change_percentage_1y": -70.21733,

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
