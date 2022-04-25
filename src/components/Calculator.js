import React, { useState } from "react";
/* eslint react/prop-types: 0 */
export default function Calculator(props) {
  const [price, setPrice] = useState(0);
  const [cprice, setcPrice] = useState(0);

  const handle = (e) => {
    setPrice(e.target.value);
    setcPrice(e.target.value * props.price[props.currency]);
  };

  return (
    <div className="calculator-container row">
      <h3>Price Calculator</h3>
      <div style={{ marginTop: "10px" }} className="col-sm-12 col-lg-6">
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Buy
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={price}
            onChange={handle}
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }} className="col-sm-12 col-lg-6">
        <div className="input-group input-group-lg">
          <input
            disabled
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={cprice + "(" + props.currency + ")"}
          />
        </div>
      </div>
    </div>
  );
}
