import React from "react";
import { NavLink } from "react-router-dom";

/**
 *
 * @returns a navigation tool to go back to home page
 */
export default function BreadCrumb() {
  return (
    <div className="mb-5">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Coin
          </li>
        </ol>
      </nav>
    </div>
  );
}
