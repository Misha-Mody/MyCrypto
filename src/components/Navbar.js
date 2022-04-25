import React from "react";
import propTypes from "prop-types";

export default function Navbar({ globalData }) {
  const style = { color: "#007bff" };
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-text">
          Coins :{" "}
          <span style={style}> {globalData.active_cryptocurrencies} </span>
        </span>
        <span className="navbar-text">
          Markets : <span style={style}> {globalData.markets} </span>
        </span>
        <span className="navbar-text">
          Ongoing ICO : <span style={style}> {globalData.ongoing_icos} </span>
        </span>
        <span className="navbar-text">
          Upcoming ICO : <span style={style}> {globalData.upcoming_icos} </span>
        </span>
        <span className="navbar-text">
          MCap Change :{" "}
          <span style={style}>
            {" "}
            {" " +
              String(globalData.market_cap_change_percentage_24h_usd).substring(
                0,
                6
              ) +
              "%"}{" "}
          </span>
        </span>
        <span className="navbar-text">
          Ended ICO : <span style={style}> {globalData.ended_icos} </span>
        </span>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  globalData: propTypes.object,
};
