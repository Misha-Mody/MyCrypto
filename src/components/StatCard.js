import React from "react";
import { getNumberColor } from "../library/helper/utilities";
/**
 *
 * @param {String} name - The header/name of the card
 * @param {Object[]} data - The key-value pair of the information regarding the statistics
 * @returns a card with statistics for the coin in a currency of your choosing
 */
/* eslint react/prop-types: 0 */
export default function StatCard({ name, data, k }) {
  return (
    <div
      key={k}
      className="card stat-card text-white bg-dark"
      style={{ width: "18rem" }}
    >
      <div className="card-header stat-card-header">{name}</div>
      <ul className="list-group list-group-flush">
        {Object.keys(data).map((d, k) => {
          return (
            <li key={k} className="stat-card-list list-group-item">
              {d} <p className={getNumberColor(data[d])}> {data[d]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
