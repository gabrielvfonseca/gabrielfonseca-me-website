/**
 * Path: /assets/icons/moon.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

/* Animations */
import { motion } from "framer-motion";

const Moon = ({ color, height, width, strokeWidth }) => {
  const moonVariants = {
    animate: { scale: 1, rotate: 0 },
    initial: { scale: 1, rotate: 90, marginTop: "1rem" },
  };

  return (
    <motion.svg
      key="moon"
      height="24"
      viewBox="0 0 16 22"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ originX: "50%", originY: "50%" }}
    >
      <motion.path
        initial="initial"
        animate="animate"
        variants={moonVariants}
        d="m7.5.5c1.3280962 0 2.5698071.36985953 3.6277499 1.01219586-3.14075981.19184303-5.6277499 2.79938976-5.6277499 5.98780414 0 3.1884144 2.48699009 5.7959611 5.6269199 5.9885898-1.0571128.6415507-2.2988237 1.0114102-3.6269199 1.0114102-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7z"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1, 4)"
      />
    </motion.svg>
  );
};

export default Moon;
