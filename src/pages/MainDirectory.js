import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Table } from "reactstrap";
import "../styles/pages/MainDirectory.css";

/**
 *
 * @param {coingecko} an object of arrays containing the coin values and their description
 * @returns renders the coin data in a table format
 */
function MainDirectory({ coingecko }) {
  const [coins, setCoins] = useState([]);

  /**
   * This functions uses the public instance of the library to get the list of coins
   * and stores it in a state variable called coins
   */
  async function fetch() {
    const res = await coingecko.getTopCoins();
    if (res.length > 0) {
      setCoins([...res]);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  console.log(coins);
  return (
    <div>
      <Table bordered dark hover responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>MCap Rank</th>
            <th>Coin Name</th>

            <th>Coin Price</th>

            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{coin.market_cap_rank}</td>
              <td>
                <img className="coin-logo" src={coin.image}></img>
                {coin.name}
              </td>
              <td>{coin.current_price}</td>
              <td>{coin.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

MainDirectory.propTypes = {
  coingecko: propTypes.object,
};

export default MainDirectory;
