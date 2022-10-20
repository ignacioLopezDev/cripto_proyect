import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  // USESTATE GUARDO COIN
  const [coin, setCoin] = useState("")

  // *USEPARAMS
  const params = useParams();
  const id = params.id.toLowerCase().replace(" ","-");
  console.log('parmas.id:', params.id)
  console.log('id:', id)

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
        <>
      <div>{coin.symbol}</div>
      <img src={coin.image.small} alt="coin" />
      <div>{coin.name}</div>
      <div>{coin.coingecko_score}</div>
      <div>{coin.market_data.current_price.usd}</div>
      <div>{coin.market_data.current_price.btc}</div>
      <div>{coin.market_data.market_cap.usd}</div>
      <div>{coin.contract_address}</div>
      <div>{coin.links.official_forum_url[0]}</div>
      <div>%{coin.market_data.price_change_percentage_24h}</div>
      <div>%{coin.market_data.price_change_percentage_7d}</div>
      <div>%{coin.market_data.price_change_percentage_14d}</div>
      <div>%{coin.market_data.price_change_percentage_30d}</div>
      <div>%{coin.market_data.price_change_percentage_60d}</div>
      <div>%{coin.market_data.price_change_percentage_200d}</div>
      <div>%{coin.market_data.price_change_percentage_1y}</div>
      
      <div>{coin.name}</div>
      <div dangerouslySetInnerHTML={{ __html: coin.description.en }}></div>
      </>)}

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
