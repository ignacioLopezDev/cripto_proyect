import { useSelector } from "react-redux";
import { apiSelector } from "../features/apiSlice";
// import { idSelector } from "../features/Id";
import { useDispatch } from "react-redux";
import { apiData } from "../features/apiSlice";
import { newId } from "../features/Id";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

// import Graph from "./Graph";

const Coin = () => {
  // USE-PARAMS
  const params = useParams();
  const id = params.id.toLowerCase().replace(" ", "-");
  // const id = params.id.toLowerCase().replace(" ", "-");
  // console.log('id:', id)

  // DISPATCH
  const dispatch = useDispatch();

  // USE-EFFECT
  // useEffect(() => {
  //   dispatch(apiData(id));
  //   dispatch(newId(id));
  // }, [id]);

  // USE SELECTOR - API
  let coin = useSelector(apiSelector);
  let loading = coin.loading;
  // console.log("loading:", loading);
  coin = coin.data;

  if (loading) return <div className="loader"></div>;

  return (
    <>
      {coin && (
        <div className="grid">
          <div className="e-1">
            <div className="e-1-1">({coin.symbol.toUpperCase()})</div>
            <div className="e-1-2">
              <img
                src={coin.image.small}
                alt="coin"
                height="70%"
                style={{ padding: "0 15px 0 0" }}
              />
              {coin.name}
            </div>
          </div>
          <div className="e-2">
            <div className="e-2-1">
              ${coin.market_data.current_price.usd.toLocaleString("es-MX")}
            </div>
            <div
              className="e-2-2"
              class={
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
            <div className="e-2-3">
              BTC {coin.market_data.current_price.btc.toFixed(2)}
            </div>
            <div
              className="e-2-4"
              class={
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
          <div className="e-3 ">
            <div className="e-3-1">Contract:</div>
            <div className="e-3-2-1">{coin.contract_address}</div>
            <div className="e-3-1">Ranking:</div>
            <div className="e-3-2">{coin.coingecko_score}</div>
            <div className="e-3-1">Capitalization:</div>
            <div className="e-3-2">
              {coin.market_data.market_cap.usd.toLocaleString("es-MX")}
            </div>
            <div className="e-3-1">Official Page:</div>
            <a href={coin.links.official_forum_url[0]} className="e-3-2">
              {coin.links.official_forum_url[0]}
            </a>
          </div>
          <div className="e-5">
            <table className="table table-dark text-center ">
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
            className="e-4"
            dangerouslySetInnerHTML={{ __html: coin.description.en }}
          ></div>
          <div className="e-6">{/* <Graph /> */}</div>
        </div>
      )}
    </>
  );
};
export default Coin;

//       // API ROUTES
//   let symbol = ""
//   let img = ""
//   let name = ""
//   let priceUsd = ""
//   let priceBtc = ""
//   let ch24hsUsd = ""
//   let ch24hsBtc =""
//   let contract = ""
//   let ranking = ""
//   let capitalization = ""
//   let officialPage = ""
//   let ch24h = ""
//   let ch7d = ""
//   let ch14d = ""
//   let ch30d = ""
//   let ch60d = ""
//   let ch200d = ""
//   let ch1y = ""
//   let description = ""

//   // API ROUTES
//    symbol = coin.symbol;
//    img = coin.image;
//    name = coin.name;
//    priceUsd = coin.market_data.current_price.usd.toLocaleString("es-MX");
//    priceBtc = coin.market_data.current_price.btc.toFixed(2);
//    ch24hsUsd =
//     coin.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
//       2
//     );
//    ch24hsBtc =
//     coin.market_data.market_cap_change_percentage_24h_in_currency.btc.toFixed(
//       2
//     );
//    contract = coin.contract_address;
//    ranking = coin.coingecko_score;
//    capitalization = coin.market_data.market_cap.usd.toLocaleString("es-MX");
//    officialPage = coin.links.official_forum_url[0];

//    ch24h = coin.market_data.price_change_percentage_24h.toFixed(2);
//    ch7d = coin.market_data.price_change_percentage_7d.toFixed(2);
//    ch14d = coin.market_data.price_change_percentage_14d.toFixed(2);
//    ch30d = coin.market_data.price_change_percentage_30d.toFixed(2);
//    ch60d = coin.market_data.price_change_percentage_60d.toFixed(2);
//    ch200d = coin.market_data.price_change_percentage_200d.toFixed(2);
//    ch1y = coin.market_data.price_change_percentage_1y.toFixed(2);

//    description = coin.description.en;

//   return (
//   <>
//     <div className="grid">
//       <div className="e-1">
//         <div className="e-1-1">({symbol.toUpperCase()})</div>
//         <div className="e-1-2">
//           <img
//             src={img.small}
//             alt="coin"
//             height="70%"
//             style={{ padding: "0 15px 0 0" }}
//           />
//           {name}
//         </div>
//       </div>
//       <div className="e-2">
//         <div className="e-2-1">${priceUsd}</div>
//         <div
//           className="e-2-2"
//           className={ch24hsUsd > 0 ? "text-success" : "text-danger"}
//         >
//           %{ch24hsUsd}
//         </div>
//         <div className="e-2-3">BTC {priceBtc}</div>
//         <div
//           className="e-2-4"
//           className={ch24hsBtc > 0 ? "text-success" : "text-danger"}
//         >
//           %{ch24hsBtc}
//         </div>
//       </div>
//       <div className="e-3 ">
//         <div className="e-3-1">Contract:</div>
//         <div className="e-3-2-1">{contract}</div>
//         <div className="e-3-1">Ranking:</div>
//         <div className="e-3-2">{ranking}</div>
//         <div className="e-3-1">Capitalization:</div>
//         <div className="e-3-2">{capitalization}</div>
//         <div className="e-3-1">Official Page:</div>
//         <a href={officialPage} className="e-3-2">
//           {officialPage}
//         </a>
//       </div>

//       <div className="e-5">
//         <table className="table table-dark text-center ">
//           <thead>
//             <tr>
//               <th>24h</th>
//               <th>7d</th>
//               <th>14d</th>
//               <th>30d</th>
//               <th>60d</th>
//               <th>200d</th>
//               <th>1y</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="tableBody">
//               <td className={ch24h > 0 ? "text-success" : "text-danger"}>
//                 {ch24h}%
//               </td>
//               <td className={ch7d > 0 ? "text-success" : "text-danger"}>
//                 {ch7d}%
//               </td>
//               <td className={ch14d > 0 ? "text-success" : "text-danger"}>
//                 {ch14d}%
//               </td>
//               <td className={ch30d > 0 ? "text-success" : "text-danger"}>
//                 {ch30d}%
//               </td>
//               <td className={ch60d > 0 ? "text-success" : "text-danger"}>
//                 {ch60d}%
//               </td>
//               <td className={ch200d > 0 ? "text-success" : "text-danger"}>
//                 {ch200d}%
//               </td>
//               <td className={ch1y > 0 ? "text-success" : "text-danger"}>
//                 {ch1y}%
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div
//         className="e-4"
//         dangerouslySetInnerHTML={{ __html: description }}
//       ></div>
//       <div className="e-6">{/* <Graph /> */}</div>
//     </div>
//   </>
//   );
// };

// export default Coin;
