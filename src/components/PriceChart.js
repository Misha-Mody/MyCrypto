import React, { useState, useEffect } from "react";
import { LineSeries, XAxis, YAxis, FlexibleXYPlot } from "react-vis";

/**
 *
 * @param {Object} coinInformation -  public instance that can make function calls to api
 * @returns a line chart
 */
export default function PriceChart({ coinInfo }) {
  // Save the prices as a state variable
  const [price, setPrice] = useState([]);
  // If the data is still loading, does not render the table
  const [loadingData, setLoadingData] = useState(true);

  /**
   * This functions uses the public instance of the library to get the list of prices
   * and stores it in a state variable called prices
   */
  /* eslint react/prop-types: 0 */
  async function fetch() {
    const coin = await coinInfo.getPriceData("bitcoin", "usd", 7);
    setPrice(coin.prices);
    setLoadingData(false);
  }

  useEffect(() => {
    if (loadingData) {
      fetch();
    }
  }, []);

  // format the data as object of x and y coordinates to be put in the chart
  const loopData = () => {
    let data = [];
    for (let i = 0; i < price.length; i++) {
      data.push({ x: new Date(price[i][0]), y: price[i][1] });
    }
    return data;
  };

  return (
    <div className="mt-5 row">
      {loadingData ? (
        ""
      ) : (
        <div className="col-lg -6 col-sm-12">
          <h3> 7d Price Chart (usd) </h3>{" "}
          <div className="chart-container">
            <FlexibleXYPlot xType="time" width={1000} height={400}>
              <YAxis
                tickFormat={(v) => `${v.toString().slice(0, 2)}K`}
                title="Price"
                style={{
                  line: { stroke: "#ADDDE1" },
                  ticks: { stroke: "#ADDDE1" },
                  text: {
                    stroke: "none",
                    fill: "#6b6b76",
                    fontWeight: 200,
                    fontSize: "16px",
                  },
                  title: {
                    stroke: "none",
                    fill: "#6b6b76",
                    fontWeight: 600,
                    fontSize: "16px",
                  },
                }}
              ></YAxis>
              <XAxis
                title="Date"
                tickLabelAngle={-30}
                style={{
                  line: { stroke: "#ADDDE1" },
                  ticks: { stroke: "#ADDDE1" },
                  text: {
                    stroke: "none",
                    fill: "#6b6b76",
                    fontWeight: 200,
                    fontSize: "16px",
                  },
                  title: {
                    stroke: "none",
                    fill: "#6b6b76",
                    fontWeight: 600,
                    fontSize: "16px",
                  },
                }}
              ></XAxis>
              <LineSeries data={loopData()} color={"#f39c12"} />
            </FlexibleXYPlot>
          </div>
        </div>
      )}
    </div>
  );
}
