import React, { useState, useEffect } from "react";
import MarketChartLibrary from "../library/MarketChartLibrary";
import propTypes from "prop-types";

export default function PriceChart({ coin }) {
  const [prices, setPrices] = useState({});
  const [loadingData, setLoadingData] = useState(true);

  async function fetch() {
    const chartLib = new MarketChartLibrary();
    const data = await chartLib.getChartPrices(coin, "usd", 24);
    setPrices(data);
    setLoadingData(false);
  }

  useEffect(() => {
    if (loadingData) {
      fetch();
    }
  }, []);

  console.log(prices);
  return <div>PriceChart</div>;
}

PriceChart.propTypes = {
  coin: propTypes.object,
};
