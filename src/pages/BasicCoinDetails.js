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
    <React.Fragment>
      <div className="row">
        {/* the first row containing the basic coin name */}

        <div className="col-lg-7">
          <div className="row">
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

            {/* option to select the currency */}
            <div className="col-sm-12 col-lg-4">
              <SelectCurrency
                currency={currency}
                onChange={handleChange}
                isBigScreen={isBigScreen}
                allCurrencyPrice={allCurrencyPrice}
              />
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-lg-5"> </div>
      </div>

      {/* second row containing the price and calcularor */}
      <div className="row">
        <div className="col-lg-7 col-sm-12">
          <div className="big-price-container">
            <AnimateNumber val={allCurrencyPrice[currency]} />
            <span className="big-price-currency">
              {" "}
              {"     ( " + currency + " ) "}{" "}
            </span>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12">
          <Calculator currency={currency} price={allCurrencyPrice} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default BasicCoinDetails;
