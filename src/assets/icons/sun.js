/**
 * Path: /assets/icons/sun.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

/* Animations */
import { motion } from "framer-motion";

const Sun = ({ color, height, width, strokeWidth }) => {
  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10,
  };

  const whileTap = { scale: 0.95, rotate: 15 };
  const raysVariants = {
    initial: { rotate: 45 },
    animate: { rotate: 0, transition },
  };
  const coreVariants = {
    initial: { scale: 1.5 },
    animate: { scale: 1, transition },
  };

  return (
    <motion.svg
      key="sun"
      height="25"
      viewBox="0 0 22 22"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      whileTap={whileTap}
      style={{ originX: "50%", originY: "50%" }}
    >
      <motion.g
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-210 -1)"
      >
        <circle
          cx="220.5"
          cy="11.5"
          r="4"
          strokeWidth="1.2"
          initial="initial"
          animate="animate"
          variants={coreVariants}
        />

        <motion.g initial="initial" animate="animate" variants={raysVariants}>
          <motion.path d="m220.5 2.5v2" />
          <motion.path d="m227 5-1.5 1.5" />
          <motion.path d="m214 5 1.5 1.5" />
          <motion.path d="m220.5 20.5v-2" />
          <motion.path d="m227 18-1.5-1.5" />
          <motion.path d="m214 18 1.5-1.5" />
          <motion.path d="m211.5 11.5h2" />
          <motion.path d="m227.5 11.5h2" />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export default Sun;
