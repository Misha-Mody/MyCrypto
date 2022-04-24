import React from "react";
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
  const coingecko = new GeckoCoinLibrary();
  const coinInfo = new CoinInfoLibrary();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDirectory coingecko={coingecko} />} />
          <Route path="/coin/*" element={<ViewCoin coinInfo={coinInfo} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
