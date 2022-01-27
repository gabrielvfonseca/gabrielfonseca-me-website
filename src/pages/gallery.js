/**
 * Path: /pages/gallery.js
 * Created: 31.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import Link from "next/link";

/* Animations */
import { motion } from "framer-motion";

/* Components */
import Heading from "../components/modules/Heading";

const Gallery = () => {
  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading heading="Gallery" head="h3" subHead="My collection of photos." />

      <div className="marginTop-15"></div>
    </motion.div>
  );
};

export default Gallery;
