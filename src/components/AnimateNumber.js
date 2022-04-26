import React from "react";
import propTypes from "prop-types";
import AnimatedNumber from "animated-number-react";
import { roundNumberTo } from "../library/helper/utilities.js";

/**
 *
 * @param {Number} val - data - the details about that particular coin
 * @returns an animation for displaying the price of the currency on every reload
 */
export default function AnimateNumber(val) {
  return (
    <AnimatedNumber
      value={val.val}
      duration={350}
      formatValue={(value) => `${roundNumberTo(Number(value), 2)}`}
      className="big-price-number"
    />
  );
}

AnimateNumber.propTypes = {
  val: propTypes.number,
};
