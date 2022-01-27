/**
 * Path: /pages/404.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import Link from "next/link";

/* Animations */
import { motion } from "framer-motion";

/* Components */
import Heading from "../components/modules/Heading";

const NotFound = () => {
  return (
    <motion.div
      className="align-center page404 marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        heading="404"
        head="h3"
        subHead="The page you are looking for does not exist."
      />

      <div className="without-underline marginTop-15">
        <Link href="/" passHref>
          <motion.button
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.01 },
            }}
            className="shadow"
            whileTap={{ scale: 0.6 }}
          >
            Return Home
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
