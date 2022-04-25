import React from "react";
/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
/* eslint-disable react/jsx-key */
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
              <p>{d}</p> {data[d]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
