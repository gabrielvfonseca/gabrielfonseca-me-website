/**
 * Path: /assets/icons/hastag.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

const Hastag = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 20"
      width={width}
      height={height}
    >
      <path d="M7,23,9,1" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M23,16H1" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M17,1,15,23" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M1,8H23" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

export default Hastag;
