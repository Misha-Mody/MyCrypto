import React from "react";
import "../styles/pages/ViewCoin.css";
import SelectCurrency from "../components/SelectCurrency.js";
import AnimateNumber from "../components/AnimateNumber";
import Calculator from "../components/Calculator";

/**
 *
 * @param { Object } data - the details about that particular coin
 * @param {String} currency - the current user selected currency that you want to see the details in
 * @param {Func} handleCurrencychange - callback function passed to the Selector which  changes the currency
 * @param {boolean} isBigScreen - boolean value that specifies if the device width is that of a laptop / tablet
 *
 * @returns basic details of the price, selector to choose a different currency and a calculator to calcultate price from number of coins
 */
/* eslint react/prop-types: 0 */
function BasicCoinDetails({
  coinData,
  currency,
  handleCurrencychange,
  isBigScreen,
  allCurrencyPrice,
}) {
  return (
    <div className="row">
      {/* row containing coin name */}
      <div className="col-sm-12 col-lg-6">
        {/* row containing price */}
        <div className="row">
          {/* coin name col */}
          <div className="col-sm-12 col-lg-6">
            <h1>
              {" "}
              <span>
                <img className="coin-logo" src={coinData?.image.large}></img>
              </span>
              <span className="coin-name">{coinData.name + "    "}</span>
              <span className="badge coin-symbol-badge text-dark">
                {"  (" + coinData.symbol + ")"}
              </span>
            </h1>
          </div>
          {/* select currency option */}
          <div className="col-sm-12 col-lg-6">
            <SelectCurrency
              currency={currency}
              handleCurrencychange={handleCurrencychange}
              isBigScreen={isBigScreen}
              allCurrencyPrice={allCurrencyPrice}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="big-price-container">
              <AnimateNumber val={allCurrencyPrice[currency]} />
              <span className="big-price-currency">
                {" "}
                {"     ( " + currency + " ) "}{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social-media col-lg-5">
              {" "}
              <p>SENTIMENT</p>
              <p>
                <i className="fa fa-solid fa-thumbs-up"></i>{" "}
                <span style={{ color: "green" }}>
                  {coinData.sentiment_votes_up_percentage + "%"}
                </span>
              </p>
              <p>
                <i className="fa fa-solid fa-thumbs-down"></i>{" "}
                <span style={{ color: "red" }}>
                  {coinData.sentiment_votes_down_percentage + "%"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-lg-6">
        <Calculator currency={currency} price={allCurrencyPrice} />
      </div>
    </div>
  );
}

export default BasicCoinDetails;
