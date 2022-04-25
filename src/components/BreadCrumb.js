import React from "react";

export default function BreadCrumb() {
  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Coin
          </li>
        </ol>
      </nav>
    </div>
  );
}
