import React from "react";

/**
 *
 * @returns A loader that waits for the data to load first
 */
export default function Loader() {
  return (
    <div className="loader center">
      <i className="fa fa-cog fa-spin" />
    </div>
  );
}
