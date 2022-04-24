import axios from "axios";
import constants from "./helper/constants.js";

/**
 * CoinInfoLibrary has a single public instance called coinInfo which is actually an object.
 * The values of these objects are functions that use axios to fetch the data regarding the coins
 * from the coingecko api.
 *
 * @returns A single object who's values are functions that can be used to fetch the info of coins
 */

export default function CoinInfoLibrary() {
  // public instance that will be returned
  const coinInfo = {};

  coinInfo.getCoinInfo = async function (id) {
    const res = await axios.get(`${constants.URI}/coins/${id}`);
    return res.data;
  };

  //   coinInfo.getGlobalData = async function () {
  //     const res = await axios.get(`${constants.URI}/global`);
  //     let result = res.data.data;
  //     return result;
  //   };

  return coinInfo;
}
