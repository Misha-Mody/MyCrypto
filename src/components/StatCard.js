import React from "react";
/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
/* eslint-disable react/jsx-key */
export default function StatCard({ name, data, k }) {
  const getClass = (d) => {
    let c = "";
    if (typeof d === "string" || d instanceof String) {
      if (d.slice(0, 1) == "-") {
        c = "text-danger";
      } else {
        c = "text-success";
      }
    }
    return c;
  };
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
              {d} <p className={getClass(data[d])}> {data[d]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
