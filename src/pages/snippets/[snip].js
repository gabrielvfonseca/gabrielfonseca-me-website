/**
 * Path: /pages/snippets/[snip].js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import { useRouter } from "next/router";

/* Routes */
import Snippets from "./index";

/* Animations */
import { motion } from "framer-motion";

/* Data */
import { code } from "../../content/data";

/* Assets */
import HastagIcon from "../../assets/icons/hastag";

/* Components */
import Heading from "../../components/modules/Heading";
import Avatar from "../../components/modules/Avatar";

const transition = { duration: 0.5, ease: "easeInOut" };

const snip = (title, description, imgSrc, body) => {
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
            image={imgSrc}
            alt=""
            width="50px"
            height="50px"
            properties={"rounded bordered marginBottom-05"}
          />
        </div>
      </div>
      <br />
      <div className="marginTop-30 display-block">
        <div className="code marginBottom-20">{body.code}</div>
        <Heading
          heading={
            <span>
              <span className="hastag">
                <HastagIcon width="20px" height="20px" />
              </span>
              <span className="color-white">Usage</span>
            </span>
          }
          head="h3"
        />
        <div className="code-details">
          <div>
            <h4 className="head display-inline">
              <span>1.</span>
              {body.usage.head1}
            </h4>
            <p>{body.usage.text1}</p>
          </div>
          <div>
            <h4 className="head display-inline">
              <span>2.</span>
              {body.usage.head2}
            </h4>
            <p>{body.usage.text2}</p>
          </div>
          <div>
            <h4 className="head display-inline">
              <span>3.</span>
              {body.usage.head3}
            </h4>
            <p>{body.usage.text3}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Snippet() {
  var router = useRouter();

  for (var index = 0; index < code.length; index++) {
    if (
      router.query.snip === code[index].title.replace(/\s/g, "-").toLowerCase()
    ) {
      return snip(
        code[index].title,
        code[index].description,
        code[index].imgSrc,
        code[index].body
      );
    }
  }
  return <Snippets />;
}
