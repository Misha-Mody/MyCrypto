import React from "react";

/**
 * @param {String} currency - the current user selected currency that you want to see the details in
 * @param {Func} handleCurrencychange - callback function passed to the Selector which  changes the currency
 * @param {boolean} isBigScreen - boolean value that specifies if the device width is that of a laptop / tablet
 * @param {Object[]} allCurrencyPrice - key- value pairs for the price of coin in all currencies
 * @returns a selector where you can select in which currency you would want to view that data in
 */
/* eslint react/prop-types: 0 */
export default function SelectCurrency({
  currency,
  handleCurrencychange,
  isBigScreen,
  allCurrencyPrice,
}) {
  return (
    <select
      className={
        isBigScreen
          ? "form-select-lg form-select mb-3 "
          : "form-select-sm form-select mb-3"
      }
      defaultValue={currency}
      aria-label=".form-select-lg example"
      // when user selects the currency, pass it to parent component as a callback
      onChange={(e) => handleCurrencychange(e.target.value)}
    >
      {/* display the list of currencies available as options */}
      {Object.keys(allCurrencyPrice).map((val, key) => {
        return (
          <option key={key} value={val}>
            {val}
          </option>
        );
      })}
    </select>
  );
}
