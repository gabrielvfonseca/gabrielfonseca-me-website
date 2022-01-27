/**
 * Path: /pages/discuss.js
 * Created: 11.01.2022
 * Dev by Gabriel.
 **/

import React, { useState, useEffect } from "react";
import Link from "next/link";

/* Animations */
import { motion } from "framer-motion";

/* Components */
import Heading from "../components/modules/Heading";
import Popup from "../components/Popup";

const Discuss = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
    }
  }, [isOpen]);

  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading heading="Discuss" head="h3" subHead="Write something nice." />

      <div className="marginTop-15"></div>

      {isOpen ? (
        <Popup
          content={
            <>
              <b>Login</b>
              <p>Authenticate to continue.</p>
              <div className="table-container marginTop-05 marginBottom-10"></div>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.01 },
                }}
                className="shadow"
                whileTap={{ scale: 0.6 }}
                aria-label="Close Button"
                onClick={togglePopup}
              >
                Close
              </motion.button>
            </>
          }
        />
      ) : null}
    </motion.div>
  );
};

export default Discuss;
