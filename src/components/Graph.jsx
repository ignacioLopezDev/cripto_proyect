import { createChart } from "lightweight-charts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// https://jsfiddle.net/nachoparque/9d7g4ayr/1/

const Graph = () => {
  // TODO  ------------------------------------------------------

  
  // *USE-PARAMS
  const params = useParams();
  const id = params.id.toLowerCase().replace(" ","-");

  //   *API
  const api = `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1367280000&to=${Date.now()}`;

  // * USE-STATE
  const [apiData, setApiData] = useState([]);

  // *PEDIDO AXIOS
  const dateDataApi = async () => {
    const res = await axios.get(api);
    const apiArray = res.data.prices.map((data) => {
      // const date = new Date(data[0]);
      // const dateForm = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`

      let date = new Date(data[0]);
      let dateString;

      date.setDate(date.getDate() + 20);

      dateString =
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);

      return { time: dateString, value: parseFloat(data[1]) };
    });
    setApiData(apiArray);
  };

  // * USE-EFFECT
  useEffect(() => {
    dateDataApi();
  }, [id]);

  console.log("la data de la api", apiData);

  // TODO  ------------------------------------------------------
  var dayData = apiData;
  console.log("dayData:", dayData);

  function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
    var switcherElement = document.createElement("div");
    switcherElement.classList.add("switcher");

    var intervalElements = items.map(function (item) {
      var itemEl = document.createElement("button");
      itemEl.innerText = item;
      itemEl.classList.add("switcher-item");
      itemEl.classList.toggle("switcher-active-item", item === activeItem);
      itemEl.addEventListener("click", function () {
        onItemClicked(item);
      });
      switcherElement.appendChild(itemEl);
      return itemEl;
    });

    function onItemClicked(item) {
      if (item === activeItem) {
        return;
      }

      intervalElements.forEach(function (element, index) {
        element.classList.toggle("switcher-active-item", items[index] === item);
      });

      activeItem = item;

      activeItemChangedCallback(item);
    }

    return switcherElement;
  }

  // var intervals = ['1D', '1W', '1M', '1Y'];
  var intervals = ["1D"];

  // var dayData = [
  //     { time: '2018-10-19', value: 26.19 },
  //     { time: '2018-10-22', value: 25.87 },
  //     { time: '2018-10-23', value: 25.83 },
  //     { time: '2018-10-24', value: 25.78 },
  // ];

  // var weekData = [
  //     { time: '2016-07-18', value: 26.10 },
  //     { time: '2016-07-25', value: 26.19 },
  // ];

  // var monthData = [
  //     { time: '2006-12-01', value: 25.40 },
  //     { time: '2007-01-01', value: 25.50 },
  //     { time: '2007-02-01', value: 25.11 },
  //     { time: '2007-03-01', value: 25.24 },
  // ];

  // var yearData = [
  //     { time: '2006-01-02', value: 24.89 },
  //     { time: '2007-01-01', value: 25.50 },
  //     { time: '2008-01-01', value: 23.90 },
  // ];

  var seriesesData = new Map([["1D", dayData]]);

  // var seriesesData = new Map([
  //   ['1D', dayData ],
  //   ['1W', weekData ],
  //   ['1M', monthData ],
  //   ['1Y', yearData ],
  // ]);

  var switcherElement = createSimpleSwitcher(
    intervals,
    intervals[0],
    syncToInterval
  );

  var chartElement = document.createElement("div");

  var chart = createChart(chartElement, {
    width: 800,
    height: 300,
    layout: {
      backgroundColor: "#000000",
      textColor: "#d1d4dc",
    },
    grid: {
      vertLines: {
        visible: false,
      },
      horzLines: {
        color: "rgba(42, 46, 57, 0.5)",
      },
    },
    rightPriceScale: {
      borderVisible: false,
    },
    timeScale: {
      borderVisible: false,
    },
    crosshair: {
      horzLine: {
        visible: false,
      },
    },
  });

  var areaSeries = null;

  function syncToInterval(interval) {
    if (areaSeries) {
      chart.removeSeries(areaSeries);
      areaSeries = null;
    }
    areaSeries = chart.addAreaSeries({
      topColor: "rgba(76, 175, 80, 0.56)",
      bottomColor: "rgba(76, 175, 80, 0.04)",
      lineColor: "rgba(76, 175, 80, 1)",
      lineWidth: 2,
    });

    areaSeries.setData(seriesesData.get(interval));
  }

  syncToInterval(intervals[0]);

  if (dayData.length !== 0) {
    document.body.appendChild(chartElement);
    document.body.appendChild(switcherElement);
  }
};

export default Graph;
