import React, { useState } from "react";

/**
 * A calculator to calculate the price of buying bitcoins in the currency of your choosing
 * @param {String} currency - the current currency user wants to see the price in
 * @param {Object[]} allCurrencyPrice - price of coin in all currencies in case the user switches to a different currency
 * @returns
 */
/* eslint react/prop-types: 0 */
export default function Calculator({ currency, allCurrencyPrice }) {
  // initially the number of coins you are planning to buy is 0
  const [coinNum, setCoinNum] = useState(0);
  // the calculated price to display which changed when coin number changes
  const [cprice, setcPrice] = useState(0);

  /**
   * When user inputs the number of coins, calculate the price to buy those coins
   * @param {*}
   */
  const handleCoinNumChange = (e) => {
    setCoinNum(e.target.value);
    setcPrice((e.target.value * allCurrencyPrice[currency]).toFixed(2));
  };

  return (
    <div className="calculator-container shadow-lg row">
      <h3>PRICE CALCULATOR</h3>
      <hr />
      <div style={{ marginTop: "10px" }} className="col-sm-12 col-lg-6">
        <div className="input-group">
          <span className="input-group-text">Buy</span>
          {/* let user input the number of coins */}
          <input
            type="number"
            className="form-control"
            value={coinNum}
            onChange={handleCoinNumChange}
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }} className="col-sm-12 col-lg-6">
        <div className="input-group">
          {/* display the calculated price */}
          <input
            disabled
            type="text"
            className="form-control"
            value={cprice + "(" + currency + ")"}
          />
        </div>
      </div>
    </div>
  );
}
