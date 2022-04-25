import React from "react";
import propTypes from "prop-types";
import AnimatedNumber from "animated-number-react";
export default function AnimateNumber(val) {
  return (
    <AnimatedNumber
      value={val.val}
      duration={350}
      formatValue={(value) => `${Number(value).toFixed(0)}`}
      className="big-price-number"
    />
  );
}

AnimateNumber.propTypes = {
  val: propTypes.number,
};
