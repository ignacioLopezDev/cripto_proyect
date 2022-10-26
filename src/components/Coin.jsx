import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newId } from "../features/Id";
import Graph from "./Graph";

const Coin = () => {
  // USESTATE GUARDO COIN
  const [coin, setCoin] = useState({});

  // *USEPARAMS
  const params = useParams();
  const id = params.id.toLowerCase().replace(" ", "-");
  // console.log("parmas.id:", params.id);
  // console.log("id:", id);

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
  // console.log("UseState Coin:", coin);

  // ?

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(newId(id));
  //   dispatch(dataCoin(id))

  // }, [id]);

  // ?

  return (
    <>
      {coin && (
        <div class="grid">
          <div class="e-1">
            <div class="e-1-1">({coin.symbol.toUpperCase()})</div>
            <div class="e-1-2">
              <img
                src={coin.image.small}
                alt="coin"
                height="70%"
                style={{ padding: "0 15px 0 0" }}
              />
              {coin.name}
            </div>
          </div>
          <div class="e-2">
            <div class="e-2-1">
              ${coin.market_data.current_price.usd.toLocaleString("es-MX")}
            </div>
            <div
              class="e-2-2"
              className={
                coin["market_data"][
                  "market_cap_change_percentage_24h_in_currency"
                ]["usd"] > 0
                  ? "text-success"
                  : "text-danger"
              }
            >
              %
              {coin.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                2
              )}
            </div>
            <div class="e-2-3">
              BTC {coin.market_data.current_price.btc.toFixed(2)}
            </div>
            <div
              class="e-2-4"
              className={
                coin["market_data"][
                  "market_cap_change_percentage_24h_in_currency"
                ]["btc"] > 0
                  ? "text-success"
                  : "text-danger"
              }
            >
              %
              {coin.market_data.market_cap_change_percentage_24h_in_currency.btc.toFixed(
                2
              )}
            </div>
          </div>
          <div class="e-3 ">
            <div class="e-3-1">Contract:</div>
            <div class="e-3-2-1">{coin.contract_address}</div>
            <div class="e-3-1">Ranking:</div>
            <div class="e-3-2">{coin.coingecko_score}</div>
            <div class="e-3-1">Capitalization:</div>
            <div class="e-3-2">
              {coin.market_data.market_cap.usd.toLocaleString("es-MX")}
            </div>
            <div class="e-3-1">Official Page:</div>
            <a href={coin.links.official_forum_url[0]} class="e-3-2">
              {coin.links.official_forum_url[0]}
            </a>
          </div>

          <div class="e-5">
            <table class="table table-dark text-center ">
              <thead>
                <tr>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>60d</th>
                  <th>200d</th>
                  <th>1y</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tableBody">
                  <td
                    className={
                      coin["market_data"]["price_change_percentage_24h"] > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td
                    className={
                      coin["market_data"]["price_change_percentage_7d"] > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {coin.market_data.price_change_percentage_7d.toFixed(2)}%
                  </td>
                  <td
                    className={
                      coin["market_data"]["price_change_percentage_14d"] > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                  </td>
                  <td
                    className={
                      coin["market_data"]["price_change_percentage_30d"] > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                  </td>
                  <td
                    className={
                      coin["market_data"]["price_change_percentage_60d"] > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                  </td>
                  <td
                    className={
                      coin["market_data"]["price_change_percentage_200d"] > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {coin.market_data.price_change_percentage_200d.toFixed(2)}%
                  </td>
                  <td
                    className={
                      coin["market_data"]["price_change_percentage_1y"] > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {coin.market_data.price_change_percentage_1y.toFixed(2)}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="e-4"
            dangerouslySetInnerHTML={{ __html: coin.description.en }}
          ></div>
          <div class="e-6">{/* <Graph /> */}</div>
        </div>
      )}
    </>
  );
};

export default Coin;
