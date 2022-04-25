import React from "react";
/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
/* eslint-disable react/jsx-key */
import StatCard from "../components/StatCard";

export default function Statistics(data) {
  return (
    <div className="stat-card-container">
      {data.data.map((obj, k) => {
        return (
          <StatCard
            name={Object.keys(obj)}
            data={obj[Object.keys(obj)]}
            k={k}
          />
        );
      })}
    </div>
  );
}
