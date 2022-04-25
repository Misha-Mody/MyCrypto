import React, { useState, useEffect } from "react";
import "./App.css";
import GeckoCoinLibrary from "./library/GeckoCoinLibrary.js";
import CoinInfoLibrary from "./library/CoinInfoLibrary.js";
import MainDirectory from "./pages/MainDirectory.js";
import ViewCoin from "./pages/ViewCoin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  /**
   *  The coingecko is the public instance object who's values are functions that make
   * api calls fetching data related to the coins.
   */

  // If the data is still loading, does not render the table
  const [loadingData, setLoadingData] = useState(true);

  //Save the gloabal data relating to market in a state variable
  const [globalData, setGlobalData] = useState();
  const [modules, setModules] = useState();

  async function fetch() {
    if (loadingData) {
      const coingecko = new GeckoCoinLibrary();
      const coinInfo = new CoinInfoLibrary();
      const globalData = await coingecko.getGlobalData();
      setModules({ coinInfo, coingecko });
      setGlobalData(globalData);
      setLoadingData(false);
    }
  }

  useEffect(() => {
    if (loadingData) {
      fetch();
    }
  }, []);

  return (
    <div className="App">
      {loadingData ? (
        <p>please wait</p>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainDirectory
                  globalData={globalData}
                  coingecko={modules.coingecko}
                />
              }
            />
            <Route
              path="/coin/*"
              element={
                <ViewCoin globalData={globalData} coinInfo={modules.coinInfo} />
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
