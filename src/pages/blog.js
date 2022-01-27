/**
 * Path: /pages/blog.js
 * Created: 24.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import Link from "next/link";

/* Animations */
import { motion } from "framer-motion";

/* Assets */
import Search from "../assets/icons/search";

/* Components */
import Heading from "../components/modules/Heading";

const Blog = () => {
  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        heading="Blog"
        head="h3"
        subHead="
            I've been writing online since 2014, mostly about web development and tech careers. 
            In total, I've written 70 articles on my blog. Use the search below to filter by title.
        "
      />

      <span className="input-field">
        <input placeholder="Search Articles" />
        <Search color={"var(--text)"} width="20px" height="20px" id="icon" />
      </span>

      <div className="marginTop-15"></div>
    </motion.div>
  );
};

export default Blog;
