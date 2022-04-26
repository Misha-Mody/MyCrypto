import React from "react";
import { Table } from "reactstrap";
import {
  useTable,
  useSortBy,
} from "react-table/dist/react-table.development.js";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

/**
 *
 * @param {Object[]} cointList - list of coins to be displayed in the table
 * @returns
 */

export default function CoinTable({ coinList }) {
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
              <Link to={`/coin?name=${row.row.original.id}`}>
                <span>{row.row.original.name}</span>
              </Link>
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
    useTable({ columns, data: coinList }, useSortBy);
  return (
    <div>
      {" "}
      <Table dark responsive hover striped {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, k) => (
            <tr key={k} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, ke) => (
                // Add the sorting props to control sorting.
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
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
    </div>
  );
}

CoinTable.propTypes = {
  coinList: propTypes.array,
};
