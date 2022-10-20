import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  // USESTATE GUARDO COIN
  const [coin, setCoin] = useState("");

  // *USEPARAMS
  const params = useParams();
  const id = params.id.toLowerCase();

  // API-COIN

  const apiCoin = `https://api.coingecko.com/api/v3/coins/${id}`;

  // * PEDIDO AXIOS A COINGECKO API-COIN

  const dataCoin = async () => {
    const res = await axios.get(apiCoin);
    setCoin(res.data);
  };

  // USE-EFFECT - RENDERIZAR API-COIN
  useEffect(() => {
    dataCoin();
  }, []);

  console.log("mememe", coin);
  return (
    <>
      <div>NACHO</div>
      <div>{coin.name}</div>
      <div>{coin.name}</div>
    </>
  );
};

export default Coin;

/* 
"symbol": "btc",
"id": "bitcoin",
 "image": "https:/

 /coins/{id}

"market_data": {
    "current_price": {
      "bnb": 70577,

"description": {
    "en": "Bitcoin is the first}

"market_cap": {
      "aed": 1353825777006,
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
