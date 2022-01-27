/**
 * Path: /pages/index.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

/* Routes */
import main from "../../main.config";

/* Animations */
import { motion } from "framer-motion";

/* Data */
import { projects } from "../content/data";

/* Assets */
import GitHubIcon from "../assets/icons/github";
import TwitterIcon from "../assets/icons/twitter";
import LinkedInIcon from "../assets/icons/linkedin";
import LinkIcon from "../assets/icons/link";
import HastagIcon from "../assets/icons/hastag";
import MeAnimated from "../assets/gallery/memoji.gif";

/* Components */
import Image from "next/image";
import Link from "next/link";
import Avatar from "../components/modules/Avatar";
import Divider from "../components/modules/Divider";
import Heading from "../components/modules/Heading";

export default function Home() {
  return (
    <div>
      <motion.div
        className="marginTop-Page"
        animate={{ y: -10, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className="intro">
          <div className="rounded bordered meAnimated">
            <Avatar
              image={MeAnimated}
              alt="Gabriel Fonseca"
              width="100px"
              height="80px"
              properties={""}
            />
          </div>

          <h1 className="without-margins">Hi, my name is Gabriel.</h1>

          <h3 className="without-margins">Contributing to a faster web</h3>
          <p>
            I’m a Javascript Developer also interested in AI, Web3 & mobile
            hybrid apps. In this website you’ll find all the stuff I’m a
            currently thinking about.⚡
          </p>

          <div>
            <div className="float-left social">
              <a href={`https://twitter.com/${main.online.twitter}/`}>
                <TwitterIcon
                  id="icon"
                  color={"var(--oposite)"}
                  width={"28px"}
                  height={"28px"}
                />
              </a>
              <a
                className="marginBetween05"
                href={`https://www.linkedin.com/in/${main.online.linkedin}/`}
              >
                <LinkedInIcon
                  id="icon"
                  color={"var(--oposite)"}
                  width={"28px"}
                  height={"28px"}
                />
              </a>
              <a href={`https://github.com/${main.online.github}/`}>
                <GitHubIcon
                  id="icon"
                  color={"var(--oposite)"}
                  width={"28px"}
                  height={"28px"}
                />
              </a>
            </div>
            <div className="float-right">
              <a href={`mailTo:${main.online.email}`}>
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.01 },
                  }}
                  className="shadow"
                  whileTap={{ scale: 0.6 }}
                  aria-label="Email Button"
                >
                  Get in Touch
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        <Divider
          color="#A3A3A3"
          strokeWidth="2"
          className="marginTop-20 marginBottom-30"
        />

        <div className="marginTop-15" id="projects">
          <Heading
            heading={
              <span>
                <span className="hastag">
                  <HastagIcon width="20px" height="20px" />
                </span>
                <span className="color-white">Selected Projects</span>
              </span>
            }
            head="h3"
          />

          <div className="marginTop-15">
            {projects[0] === undefined ? (
              <p>No projects avaiable right now.</p>
            ) : (
              projects.map((item, index) => (
                <div key={index} className="selected-project">
                  <div className="img-fit sections-image">
                    <Image
                      src={item.imgSrc.src}
                      alt={item.imgSrc.alt}
                      width={"4025px"}
                      height={"1878px"}
                      priority
                    />
                  </div>
                  <Link
                    href={`/projects/${item.title
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                    passHref
                    key={index}
                  >
                    <h3 className="sections-image-title">{item.title}</h3>
                  </Link>
                  <p>{item.description}</p>
                  <Link href={"https://" + item.route}>
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
              ))
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
