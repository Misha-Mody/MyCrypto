import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Table } from "reactstrap";
import { numberToString } from "../library/helper/utilities.js";
import {
  useTable,
  useSortBy,
} from "react-table/dist/react-table.development.js";
import "../styles/pages/MainDirectory.css";

/**
 *
 * @param {coingecko} an object of arrays containing the coin values and their description
 * @returns renders the coin data in a table format
 */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
function MainDirectory({ coingecko }) {
  // Save the list of coins as a state variable
  const [coins, setCoins] = useState([]);

  // If the data is still loading, does not render the table
  const [loadingData, setLoadingData] = useState(true);

  // State for read more
  const [readMore, setReadMore] = useState(false);

  //Save the gloabal data relating to market in a state variable
  const [globalData, setGlobalData] = useState();

  /**
   * This functions uses the public instance of the library to get the list of coins
   * and stores it in a state variable called coins
   */
  async function fetch() {
    const coin = await coingecko.getTopCoins();
    setCoins([...coin]);

    const globalData = await coingecko.getGlobalData();
    setGlobalData(globalData);
    setLoadingData(false);
  }

  useEffect(() => {
    if (loadingData) {
      fetch();
    }
  }, []);

  /**
   * Defines the column values for the react table.
   * Mmemo is used to improve performance and avoid unnecessary re-renders
   */
  const columns = React.useMemo(
    () => [
      {
        Header: () => <div>#</div>,
        accessor: "id",
        Cell: ({ row, flatRows }) => {
          return flatRows.indexOf(row) + 1;
        },
        disableSortBy: true,
      },
      {
        Header: () => <span>Coin</span>,
        accessor: "name",
        Cell: (row) => {
          return (
            // Display the coin logo , name and symbol
            <div className="sticky">
              <span>
                <img className="coin-logo" src={row.row.original.image}></img>
              </span>
              <span>{row.row.original.name}</span>
              <span className="text-muted">
                {"  (" + row.row.original.symbol + ")"}
              </span>
            </div>
          );
        },
      },
      {
        Header: () => (
          <span
            style={{
              textAlign: "right",
            }}
          >
            Price
          </span>
        ),
        Cell: (row) => {
          return <div>{"$ " + row.row.original.current_price}</div>;
        },
        accessor: "current_price",
      },
      {
        Header: "Price Change",
        accessor: "price_change_percentage_24h",
        Cell: (row) => {
          return (
            // Change the color of text wrt percentage change
            <div
              className={
                row.row.original.price_change_percentage_24h > 0
                  ? "text-success"
                  : "text-danger"
              }
            >
              {row.row.original.price_change_percentage_24h + " %"}
            </div>
          );
        },
      },
      {
        Header: "Volume",
        accessor: "total_volume",
      },
      {
        Header: "Mkt Cap",
        accessor: "market_cap",
        Cell: (row) => {
          return <div>{"$ " + row.row.original.market_cap}</div>;
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: coins }, useSortBy);

  return (
    <div className="container-fluid">
      <div className="table-row mt-5 mb-5">
        {" "}
        <h1 className="header">
          Cryptocurrency Prices By Market Capitalization
        </h1>
        {
          // Only render the table once the data has been full loaded
          loadingData ? (
            <p>Loading Please wait...</p>
          ) : (
            <React.Fragment>
              <p>
                The global cryptocurrency market capitalization today is{" "}
                <b> {"$" + numberToString(globalData.total_market_cap.usd)} </b>
                , a{" "}
                <span
                  className={
                    parseInt(globalData.market_cap_change_percentage_24h_usd) >=
                    0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {" "}
                  {String(
                    globalData.market_cap_change_percentage_24h_usd
                  ).substring(0, 4) + "%"}{" "}
                </span>
                change in the last 24 hours.
                {/* toggler for readmore */}
                <span
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                  className="read-more-text"
                >
                  Read More
                </span>
                {
                  // show only if the user clicks on read more
                  readMore && (
                    <p>
                      Total <b>{globalData.active_cryptocurrencies} </b>{" "}
                      cryptocurrencies are being tracked. Total cryptocurrency
                      trading volume in the last day is at{" "}
                      <b>
                        {" "}
                        {"$" + numberToString(globalData.total_volume.usd)}{" "}
                      </b>
                      .
                    </p>
                  )
                }
              </p>
              <Table dark responsive hover striped {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup, k) => (
                    <tr key={k} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column, ke) => (
                        // Add the sorting props to control sorting.
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          key={ke}
                        >
                          {column.render("Header")}

                          {/* Add a sort direction indicator arrow (up / down) in case sorting is possible,
                          If sorting is disabled then display no icon.
                       */}
                          <span>
                            {column.canSort ? (
                              column.isSorted ? (
                                column.isSortedDesc ? (
                                  // if it is sorted in descending order then show descending icon
                                  <i
                                    className="fa fa-sort-desc sortIcon sortIconDown"
                                    aria-hidden="true"
                                  ></i>
                                ) : (
                                  // if it is sorted in ascending order then show ascending icon
                                  <i
                                    className="fa fa-sort-asc sortIcon sortIconUp"
                                    aria-hidden="true"
                                  ></i>
                                )
                              ) : (
                                // if it not sorted then show sort both ways icon
                                <i
                                  className="fa fa-sort sortIcon"
                                  aria-hidden="true"
                                ></i>
                              )
                            ) : (
                              // if the column cannot be sorted then show no icons
                              ""
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                  {rows.map((row, k) => {
                    prepareRow(row);
                    return (
                      <tr key={k} {...row.getRowProps()}>
                        {row.cells.map((cell, ke) => {
                          return (
                            <td key={ke} {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </React.Fragment>
          )
        }
      </div>
    </div>
  );
}

MainDirectory.propTypes = {
  coingecko: propTypes.object,
};

export default MainDirectory;
