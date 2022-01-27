/**
 * Path: /pages/projects/[project].js
 * Created: 31.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import { useRouter } from "next/router";

/* Routes */
import Home from "../index";

/* Animations */
import { motion } from "framer-motion";

/* Data */
import { projects } from "../../content/data";

/* Components */
import Avatar from "../../components/modules/Avatar";

const transition = { duration: 0.5, ease: "easeInOut" };

const project = (title, description, img) => {
  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3, transition }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div className="float-left">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="float-right">
          <Avatar
            image={img}
            alt=""
            width="50px"
            height="50px"
            properties={"rounded bordered marginBottom-05"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  var router = useRouter();

  for (var index = 0; index < projects.length; index++) {
    if (
      router.query.snip ===
      projects[index].title.replace(/\s/g, "-").toLowerCase()
    ) {
      return project(
        projects[index].title,
        projects[index].description,
        projects[index].imgSrc,
        projects[index].body
      );
    }
  }
  return <Home />;
}
