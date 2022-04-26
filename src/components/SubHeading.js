import React, { useState } from "react";
import { numberToValueString } from "../library/helper/utilities";
import propTypes from "prop-types";
/**
 *
 * @param {Object []} globalData - data regarding the global market
 * @returns
 */
export default function SubHeading({ globalData }) {
  // State for read more
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <p>
        The global cryptocurrency market capitalization today is{" "}
        <b> {"$" + numberToValueString(globalData.total_market_cap.usd)} </b>, a{" "}
        <span
          className={
            parseInt(globalData.market_cap_change_percentage_24h_usd) >= 0
              ? "text-success"
              : "text-danger"
          }
        >
          {" "}
          {String(globalData.market_cap_change_percentage_24h_usd).substring(
            0,
            4
          ) + "%"}{" "}
        </span>
        change in the last 24 hours.
        {/* toggler for readmore */}
        <span
          onClick={() => {
            setReadMore(!readMore);
          }}
          className="read-more-text"
        >
          {readMore ? "Read Less" : "Read More"}
        </span>
      </p>
      {
        // show only if the user clicks on read more
        readMore && (
          <p>
            Total <b>{globalData.active_cryptocurrencies} </b> cryptocurrencies
            are being tracked. Total cryptocurrency trading volume in the last
            day is at{" "}
            <b> {"$" + numberToValueString(globalData.total_volume.usd)} </b>.
          </p>
        )
      }
    </div>
  );
}

SubHeading.propTypes = {
  globalData: propTypes.object,
};
