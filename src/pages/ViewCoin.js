import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import propTypes from "prop-types";
import "../styles/pages/ViewCoin.css";
import { useMediaQuery } from "react-responsive";
import BasicCoinDetails from "./BasicCoinDetails";
import Statistics from "./Statistics";
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import Loader from "../components/Loader";
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

function ViewCoin({ globalData, coinInfo }) {
  const [data, setData] = useState();
  // If the data is still loading, does not render the table
  const [loadingData, setLoadingData] = useState(true);

  const [searchParams] = useSearchParams();

  const [currency, setCurrency] = useState("usd");

  const [allCurrencyPrice, setAllCurrencyPrice] = useState([]);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  //   const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  //   const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  async function fetch(name) {
    const data = await coinInfo.getCoinInfo(name);
    setData(data);
    setAllCurrencyPrice(data.market_data.current_price);
    setLoadingData(false);
  }

  useEffect(() => {
    if (loadingData && searchParams) {
      fetch(searchParams.get("name"));
    }
  }, [searchParams]);

  const handleChange = (newValue) => {
    setCurrency(newValue);
  };

  function getMarketData() {
    let mdata = {};
    mdata["Rank"] = data.market_cap_rank;
    mdata["Market Cap"] = data.market_data.market_cap[currency];
    mdata["Circulating Suppy"] = data.market_data.circulating_supply;
    mdata["MCap Change (24h)"] =
      data.market_data.market_cap_change_percentage_24h_in_currency[currency] +
      "%";
    return mdata;
  }

  function getPriceData() {
    let mdata = {};
    mdata["ATH"] = data.market_data.ath[currency];
    mdata["ATH Change"] =
      data.market_data.ath_change_percentage[currency] + "%";
    mdata["ATL"] = data.market_data.atl[currency];
    mdata["ATL Change"] =
      data.market_data.atl_change_percentage[currency] + "%";
    return mdata;
  }

  function getPriceChangeData() {
    let mdata = {};
    mdata["1 hour"] =
      data.market_data.price_change_percentage_1h_in_currency[currency] + "%";
    mdata["24 hours"] =
      data.market_data.price_change_percentage_24h_in_currency[currency] + "%";
    mdata["60 days"] =
      data.market_data.price_change_percentage_60d_in_currency[currency] + "%";
    mdata["1 year"] =
      data.market_data.price_change_percentage_1y_in_currency[currency] + "%";
    return mdata;
  }

  function getScoreData() {
    let mdata = {};
    mdata["CoinGecko"] = data.coingecko_score;
    mdata["Community Score"] = data.community_score;
    mdata["ATL"] = data.developer_score;
    mdata["Liquidity Score"] = data.liquidity_score;
    return mdata;
  }

  const getStatisticData = () => {
    let sdata = [];
    sdata.push({ "Market Statistics": getMarketData() });
    sdata.push({ "Price Statistics": getPriceData() });
    sdata.push({ "Price Change": getPriceChangeData() });
    sdata.push({ Scores: getScoreData() });
    return sdata;
  };

  return (
    <div>
      {loadingData ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Navbar globalData={globalData} />
          <div className="container-fluid mt-5">
            <BreadCrumb />
            <BasicCoinDetails
              loadingData={loadingData}
              data={data}
              currency={currency}
              handleChange={handleChange}
              isBigScreen={isBigScreen}
              allCurrencyPrice={allCurrencyPrice}
            />
            <div className="row mt-5">
              <h3> Statistical Data</h3>
              <Statistics data={getStatisticData()} />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

ViewCoin.propTypes = {
  coinInfo: propTypes.object,
  globalData: propTypes.object,
};

export default ViewCoin;
