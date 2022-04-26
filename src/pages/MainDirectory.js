import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

import "../styles/pages/MainDirectory.css";
import Navbar from "../components/Navbar.js";
import Loader from "../components/Loader.js";
import SubHeading from "../components/SubHeading.js";
import CoinTable from "../components/CoinTable";

/**
 *
 * @param {Object[]} coingecko - a class instance that can make api calls
 * @param {object[]} globalData - an object of arrays containing the global data
 * @returns renders the coin data in a table format
 */
/* eslint-disable react/jsx-key */
/* eslint react/prop-types: 0 */
function MainDirectory({ globalData, coingecko }) {
  // Save the list of coins as a state variable
  const [coins, setCoins] = useState([]);

  // If the data is still loading, does not render the table
  const [loadingData, setLoadingData] = useState(true);

  /**
   * This functions uses the public instance of the library to get the list of coins
   * and stores it in a state variable called coins
   */
  async function fetch() {
    const coin = await coingecko.getTopCoins();
    setCoins([...coin]);
    setLoadingData(false);
  }

  useEffect(() => {
    if (loadingData) {
      fetch();
    }
  }, []);

  return (
    <div>
      <Navbar globalData={globalData} />
      <div className="container-fluid">
        <div className="table-row mt-5 mb-5">
          {" "}
          <h1 className="header">
            Cryptocurrency Prices By Market Capitalization
          </h1>
          {
            // Only render the table once the data has been full loaded
            loadingData ? (
              <Loader></Loader>
            ) : (
              <div>
                <SubHeading globalData={globalData} />
                <CoinTable coinList={coins} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

MainDirectory.propTypes = {
  coingecko: propTypes.object,
};

export default MainDirectory;
