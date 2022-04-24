import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import propTypes from "prop-types";

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

function ViewCoin({ coinInfo }) {
  const [data, setData] = useState();
  // If the data is still loading, does not render the table
  const [loadingData, setLoadingData] = useState(true);

  const [searchParams] = useSearchParams();

  async function fetch(name) {
    const data = await coinInfo.getCoinInfo(name);
    setData(data);
    setLoadingData(false);
  }

  useEffect(() => {
    if (loadingData && searchParams) {
      fetch(searchParams.get("name"));
    }
  }, [searchParams]);

  console.log(data);

  return <div>ViewCoin</div>;
}

ViewCoin.propTypes = {
  coinInfo: propTypes.object,
};

export default ViewCoin;
