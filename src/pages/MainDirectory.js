import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Table } from "reactstrap";
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
  const [coins, setCoins] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  /**
   * This functions uses the public instance of the library to get the list of coins
   * and stores it in a state variable called coins
   */
  async function fetch() {
    const res = await coingecko.getTopCoins();
    setCoins([...res]);
    setLoadingData(false);
  }

  useEffect(() => {
    if (loadingData) {
      fetch();
    }
  }, []);

  const data = React.useMemo(
    () =>
      coins.map((coin, key) => ({
        idx: key + 1,
        rank: coin.market_cap_rank,
        name: coin.name,
        price: coin.current_price,
        marketCap: coin.market_cap,
      })),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: () => <div>#</div>,
        accessor: "id",
        width: 200,
        Cell: ({ row, flatRows }) => {
          return flatRows.indexOf(row) + 1;
        },
        disableSortBy: true,
      },
      {
        Header: () => "Coin",
        accessor: "name",
        Cell: (row) => {
          console.log(row);
          return (
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
          console.log(row);
          return (
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
      <div className="row table-row mt-5 mb-5">
        {" "}
        <h1 className="header">Cryptocurrency Prices by Market Cap</h1>
        {loadingData ? (
          <p>Loading Please wait...</p>
        ) : (
          <Table dark responsive hover striped {...getTableProps()} style={{}}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    // Add the sorting props to control sorting.
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}

                      {/* Add a sort direction indicator */}
                      <span>
                        {column.canSort ? (
                          column.isSorted ? (
                            column.isSortedDesc ? (
                              <i
                                className="fa fa-sort-desc sortIcon sortIconDown"
                                aria-hidden="true"
                              ></i>
                            ) : (
                              <i
                                className="fa fa-sort-asc sortIcon sortIconUp"
                                aria-hidden="true"
                              ></i>
                            )
                          ) : (
                            <i
                              className="fa fa-sort sortIcon"
                              aria-hidden="true"
                            ></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={
                            {
                              // padding: "10px",
                              // border: "solid 1px gray",
                              // background: "papayawhip",
                            }
                          }
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

MainDirectory.propTypes = {
  coingecko: propTypes.object,
};

export default MainDirectory;
