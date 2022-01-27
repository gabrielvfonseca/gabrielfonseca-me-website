/**
 * Path: /src/components/modules/Divider.js
 * Created: 21.11.2021
 * Dev by Gabriel.
 **/

import React from "react";

const Divider = ({ style }) => {
  return (
    <div id="divider" className={style ? style + "center" : "center"}></div>
  );
};

export default Divider;
