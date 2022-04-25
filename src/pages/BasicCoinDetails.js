import React from "react";
import "../styles/pages/ViewCoin.css";
import SelectCurrency from "../components/SelectCurrency.js";
import AnimateNumber from "../components/AnimateNumber";
import Calculator from "../components/Calculator";
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */

function BasicCoinDetails({
  loadingData,
  data,
  currency,
  handleChange,
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
                <img className="coin-logo" src={data?.image.large}></img>
              </span>
              <span className="coin-name">{data.name + "    "}</span>
              <span className="badge coin-symbol-badge text-dark">
                {"  (" + data.symbol + ")"}
              </span>
            </h1>
          </div>
          {/* select currency option */}
          <div className="col-sm-12 col-lg-6">
            <SelectCurrency
              currency={currency}
              onChange={handleChange}
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
                  {data.sentiment_votes_up_percentage + "%"}
                </span>
              </p>
              <p>
                <i className="fa fa-solid fa-thumbs-down"></i>{" "}
                <span style={{ color: "red" }}>
                  {data.sentiment_votes_up_percentage + "%"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-lg-6">
        <Calculator
          currency={currency}
          price={allCurrencyPrice}
          name={data.name}
          isBigScreen={isBigScreen}
        />
      </div>
    </div>
  );
}

export default BasicCoinDetails;
