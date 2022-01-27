/**
 * Path: /assets/icons/chevron-down.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

const ChevronDown = ({ color, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 9L12 15L6 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown;
