import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import propTypes from "prop-types";
import "../styles/pages/ViewCoin.css";
import { useMediaQuery } from "react-responsive";
import BasicCoinDetails from "./BasicCoinDetails";
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

function ViewCoin({ coinInfo }) {
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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  async function fetch(name) {
    const data = await coinInfo.getCoinInfo(name);
    setData(data);
    setAllCurrencyPrice(Object.entries(data.market_data.current_price));
    setLoadingData(false);
  }

  useEffect(() => {
    if (loadingData && searchParams) {
      fetch(searchParams.get("name"));
    }
  }, [searchParams]);

  console.log(allCurrencyPrice);

  const handleChange = (newValue) => {
    setCurrency(newValue);
  };

  return (
    <div>
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <BasicCoinDetails
          loadingData={loadingData}
          data={data}
          currency={currency}
          handleChange={handleChange}
          isBigScreen={isBigScreen}
          allCurrencyPrice={allCurrencyPrice}
        />
      )}
    </div>
  );
}

ViewCoin.propTypes = {
  coinInfo: propTypes.object,
};

export default ViewCoin;
