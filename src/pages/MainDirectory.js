import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Table } from "reactstrap";
import { useTable } from "react-table/dist/react-table.development.js";
import "../styles/pages/MainDirectory.css";

/**
 *
 * @param {coingecko} an object of arrays containing the coin values and their description
 * @returns renders the coin data in a table format
 */
/* eslint-disable react/jsx-key */
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
        Header: "#",
        accessor: "idx", // accessor is the "key" in the data
      },
      {
        Header: "MCap Rank",
        accessor: "rank",
      },
      {
        Header: "Coin Name",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Market Cap",
        accessor: "marketCap",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  console.log(coins);
  return (
    <div className="container-fluid">
      <div className="row mt-5 mb-5">
        {" "}
        <h1>Cryptocurrency Prices by Market Cap</h1>
      </div>
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <Table
          dark
          responsive
          hover
          striped
          {...getTableProps()}
          // style={{ border: "solid 1px blue" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} style={{}}>
                    {column.render("Header")}
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
  );
}

MainDirectory.propTypes = {
  coingecko: propTypes.object,
};

export default MainDirectory;
