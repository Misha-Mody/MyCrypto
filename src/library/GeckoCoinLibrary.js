import axios from "axios";
import constants from "./helper/constants.js";

/**
 * GeckoCoinLibrary has a single public instance called geckoLib which is actually an object.
 * The values of these objects are functions that use axios to fetch the data regarding the list of coins
 * from the gecko api.
 *
 * @returns A single object who's values are functions that can be used to fetch the list of coins
 */

export default function GeckoCoinLibrary() {
  // public instance that will be returned
  const geckoLib = {};

  geckoLib.getTopCoins = async function (
    currency = "USD",
    per_page = 10,
    page = 1
  ) {
    const res = await axios.get(
      `${constants.URI}/coins/markets?vs_currency=${currency}&per_page=${per_page}&page=${page}&sparkline=true`
    );

    return res.data;
  };

  geckoLib.getGlobalData = async function () {
    const res = await axios.get(`${constants.URI}/global`);
    let result = res.data.data;
    return result;
  };

  return geckoLib;
}
