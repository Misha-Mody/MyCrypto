import React, { useState } from "react";
/* eslint react/prop-types: 0 */
export default function Calculator(props) {
  const [price, setPrice] = useState(0);
  const [cprice, setcPrice] = useState(0);

  const handle = (e) => {
    setPrice(e.target.value);
    setcPrice((e.target.value * props.price[props.currency]).toFixed(2));
  };

  return (
    <div className="calculator-container shadow-lg row">
      <h3>PRICE CALCULATOR</h3>
      <hr />
      <div style={{ marginTop: "10px" }} className="col-sm-12 col-lg-6">
        <div className="input-group">
          <span className="input-group-text">Buy</span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            value={price}
            onChange={handle}
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }} className="col-sm-12 col-lg-6">
        <div className="input-group">
          <input
            disabled
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            value={cprice + "(" + props.currency + ")"}
          />
        </div>
      </div>
    </div>
  );
}
