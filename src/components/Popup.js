/**
 * Path: /components/Popup.js
 * Created: 24.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

/* Animations */
import { motion } from "framer-motion";

const Popup = (props) => (
  <motion.div
    className="popup"
    animate={{ y: -10, opacity: 1 }}
    transition={{ ease: "easeOut", duration: 0.3 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0, duration: 0.3 }}
  >
    <div className="box">{props.content}</div>
  </motion.div>
);

export default Popup;
