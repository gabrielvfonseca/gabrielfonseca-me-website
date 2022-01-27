/**
 * Path: /src/components/modules/Heading.js
 * Created: 21.11.2021
 * Dev by Gabriel.
 **/

import React from "react";

const Heading = ({ heading, subHead, head }) => {
  return (
    <div className="heading">
      <div className={head}>{heading}</div>
      <div className="sub-heading">{subHead}</div>
    </div>
  );
};

export default Heading;
