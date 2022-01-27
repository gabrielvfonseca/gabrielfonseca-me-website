/**
 * Path: /assets/icons/search.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

const Search = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 15"
      width={width}
      height={height}
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <line
        x1="20.4"
        y1="20.5"
        x2="15.5"
        y2="15.7"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Search;
