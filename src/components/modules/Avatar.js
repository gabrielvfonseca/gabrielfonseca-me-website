/**
 * Path: /src/components/modules/Avatar.js
 * Created: 21.11.2021
 * Dev by Gabriel.
 **/

import React from "react";

/* Components */
import Image from "next/image";

const Avatar = ({ image, alt, width, height, properties, hover }) => {
  if (properties != "") {
    return (
      <div className={`${properties} ${hover}`}>
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          title="Gabriel in Toulouse, France"
        />
      </div>
    );
  } else {
    return (
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        title="Gabriel in Toulouse, France"
      />
    );
  }
};

export default Avatar;
