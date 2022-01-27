/**
 * Path: /pages/works/index.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

/* Routes */
import main from "../../../main.config";

import { works } from "../../content/data";

/* Animations */
import { motion } from "framer-motion";

/* Assets */
import LinkIcon from "../../assets/icons/link";

/* Components */
import Image from "next/image";
import Link from "next/link";
import Heading from "../../components/modules/Heading";

export default function Works() {
  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        heading={main.menu[2].route}
        head="h2"
        subHead="All my previous works."
      />

      <div className="marginTop-15">
        {works.map((item, index) => (
          <div key={index} className="selected-project">
            <div className="img-fit sections-image">
              <Image
                src={item.imgSrc.src}
                alt={item.filename}
                width="4025px"
                height="1878px"
                priority
              />
            </div>
            <h3 className="sections-image-title">{item.title}</h3>
            <p>
              <span>{item.description}</span>
              <span id="dot-divider">{item.date}</span>
            </p>
            <Link href={"https://" + item.url} className="without-underline">
              <a>
                Visit {item.route}
                <span id="icon">
                  <LinkIcon
                    color={"currentColor"}
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 11"
                  />
                </span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
