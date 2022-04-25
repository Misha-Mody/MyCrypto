import React from "react";
/* eslint react/prop-types: 0 */
export default function SelectCurrency(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <select
      className={
        props.isBigScreen
          ? "form-select-lg form-select mb-3 "
          : "form-select-sm form-select mb-3"
      }
      defaultValue={props.currency}
      aria-label=".form-select-lg example"
      onChange={handleChange}
    >
      {Object.keys(props.allCurrencyPrice).map((val, key) => {
        return (
          <option key={key} value={val}>
            {val}
          </option>
        );
      })}
    </select>
  );
}
