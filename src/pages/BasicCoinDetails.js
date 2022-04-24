import React from "react";
import "../styles/pages/ViewCoin.css";
import SelectCurrency from "../components/SelectCurrency.js";
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
    <div className="container-fluid mt-5">
      <div className="row">
        {/* the first row containing the basic coin name */}

        <div className="col-lg-7">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
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
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-lg-5"> </div>
      </div>

      {/* second row containing the price and calcularor */}
      {/* <div className="row mt-5">
        <div className="col-lg-7 col-sm-12 red">
          <div className="big-price-container">34</div>
        </div>
        <div className="col-lg-5 pink col-sm-12">bye</div>
      </div> */}
    </div>
  );
}

export default BasicCoinDetails;
