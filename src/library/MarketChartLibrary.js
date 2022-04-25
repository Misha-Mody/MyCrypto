import axios from "axios";
import constants from "./helper/constants.js";

/**
 * MarketChartLibrary has a single public instance called marketChart which is actually an object.
 * The values of these objects are functions that use axios to fetch the data regarding the market charts
 * from the gecko api.
 *
 * @returns A single object who's values are functions that can be used to fetch the market charts
 */

export default function MarketChartLibrary() {
  // public instance that will be returned
  const marketChart = {};

  marketChart.getChartPrices = async function (
    id,
    currency = "usd",
    days = 24
  ) {
    const res = await axios.get(
      `${constants.URI}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    );

    return res.data;
  };

  return marketChart;
}
