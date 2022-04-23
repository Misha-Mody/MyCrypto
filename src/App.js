import React from "react";
import "./App.css";
import GeckoCoinLibrary from "./library/GeckoCoinLibrary.js";
import MainDirectory from "./pages/MainDirectory.js";
function App() {
  /**
   *  The coingecko is the public instance object who's values are functions that make
   * api calls fetching data related to the coins.
   */
  const coingecko = new GeckoCoinLibrary();
  return (
    <div className="App">
      <MainDirectory coingecko={coingecko} />
    </div>
  );
}

export default App;
