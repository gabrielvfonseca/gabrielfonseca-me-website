/**
 * Path: /pages/changelog.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

/* Routes */
import main from "../../main.config";

/* Animations */
import { motion } from "framer-motion";

/* Data */
import { changes } from "../content/data";

/* Components */
import Heading from "../components/modules/Heading";

export default function Changelog() {
  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        heading={main.menu[5].route}
        head="h2"
        subHead="What's new on this site?"
      />

      <div className="marginTop-20">
        <div className="changelog container">
          <div className="timeline">
            <div>
              {changes.map((item, index) => (
                <div key={index} className="item">
                  {item.status === "" ? null : (
                    <div className="tag">{item.status}</div>
                  )}
                  <h3>{item.title}</h3>
                  <div className="divider">
                    <p className="details">
                      <span id="version">{item.version}</span>
                      <span id="dot-divider">{item.date}</span>
                    </p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
