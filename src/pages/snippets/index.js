/**
 * Path: /pages/snippets/index.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import Link from "next/link";

/* Routes */
import main from "../../../main.config";

/* Animations */
import { motion } from "framer-motion";

/* Data */
import { code } from "../../content/data";

/* Components */
import Heading from "../../components/modules/Heading";
import Avatar from "../../components/modules/Avatar";

export default function Snippets() {
  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        heading={main.menu[3].route}
        head="h2"
        subHead="Code snippets for copy paste use :D"
      />

      <div className="marginTop-20">
        <div className="container-repo">
          {code[0] === undefined ? (
            <p>No snippets yet! :)</p>
          ) : (
            code.map((snippet, index) => (
              <Link
                href={`/snippets/${snippet.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`}
                passHref
                key={index}
              >
                <motion.div
                  whileTap={{ scale: 1.04 }}
                  className="without-underline padding-10 item-repo box"
                >
                  <Avatar
                    image={snippet.imgSrc}
                    alt={snippet.title}
                    width="32px"
                    height="32px"
                    properties={"rounded bordered marginBottom-05"}
                  />
                  <h4 className="GT-Medium">{snippet.title}</h4>
                  <p className="without-margins marginTop-025">
                    {snippet.description}
                  </p>
                </motion.div>
              </Link>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}
