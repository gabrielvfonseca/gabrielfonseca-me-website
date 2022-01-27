/**
 * Path: /pages/about.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React, { useState } from "react";

/* Routes */
import main from "../../main.config";

/* Animations */
import { motion } from "framer-motion";

/* Data */
import { timeline } from "../content/data";

/* Assets */
import HastagIcon from "../assets/icons/hastag";
import Down from "../assets/icons/chevron-down";
import Hero from "../assets/gallery/hero.png";

/* Components */
import Image from "next/image";
import Heading from "../components/modules/Heading";
import Divider from "../components/modules/Divider";

export default function About() {
  const [LoadTimeline, LoadAllTimeline] = useState(false);

  const loadTimelineClick = () => {
    LoadTimeline ? LoadAllTimeline(false) : LoadAllTimeline(true);
  };

  return (
    <div>
      <motion.div
        className="marginTop-Page"
        animate={{ y: -10, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <div>
            <div className="img-fit title-image marginBottom-05">
              <Image
                src={Hero}
                alt="Portrait of Gabriel"
                width={"1400px"}
                height={"933px"}
                priority
              />
            </div>
          </div>
          <p className="marginTop-10">
            Hey I’m Gabriel, a Full-stack Javascript Developer based in Lisbon,{" "}
            <a
              className="without-underline color-blue"
              href="https://www.visitportugal.com/pt-pt"
            >
              Portugal
            </a>
            .
          </p>
          <p>
            Beyond Javascript development, I’m passionate about AI, Web3, and
            mobile hybrid apps. I started by creating my firsts simple programs
            in{" "}
            <a
              className="without-underline color-blue"
              href="https://docs.microsoft.com/en-us/cpp/cpp/?view=msvc-170"
            >
              C++
            </a>{" "}
            &{" "}
            <a
              className="without-underline color-blue"
              href="https://www.python.org/"
            >
              Python
            </a>{" "}
            then learned Javascript and created web apps with my APIs.
            Discovered{" "}
            <a
              className="without-underline color-blue"
              href="https://reactnative.dev/"
            >
              React Native
            </a>{" "}
            and took a shoot on mobile hybrid development.
          </p>
          <p>
            Next, I’ll be entering the AI world, building more complex programs
            and applications with help of some Artificial Intelligence
            algorithms.
          </p>
          <p>
            You can also find me online as a freelancer on{" "}
            <a
              className="without-underline color-blue"
              href={main.online.fiverr}
            >
              Fiverr
            </a>{" "}
            or search for me on{" "}
            <a
              className="without-underline color-blue"
              href={main.online.github}
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <Divider color="#A3A3A3" strokeWidth="2" />

        <div className="marginTop-10 marginTop-10" id="timeline">
          <Heading
            heading={
              <span>
                <span className="hastag">
                  <HastagIcon width="20px" height="20px" />
                </span>
                <span className="color-white">Timeline</span>
              </span>
            }
            head="h4"
            subHead="My life path until now on a timeline."
          />

          <div className="marginTop-10">
            {timeline.slice(0, 2).map((item, index) => (
              <div key={index}>
                <h5>{item[0]}</h5>
                <ul className="lifeline">
                  {Object.keys(item[1]).map((data, position) => (
                    <>
                      <li className="GT-Bold">{item[1][position].title}</li>
                      <p className="GT-Medium without-marginTop">
                        {item[1][position].text}
                      </p>
                    </>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={LoadTimeline ? "" : "hidden"}>
            {timeline.slice(2).map((item, index) => (
              <div key={index}>
                <h5>{item[0]}</h5>
                <ul className="lifeline">
                  {Object.keys(item[1]).map((data, index) => (
                    <>
                      <li className="GT-Bold">{item[1][index].title}</li>
                      <p className="GT-Medium without-marginTop">
                        {item[1][index].text}
                      </p>
                    </>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="center">
            <motion.button
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.01 },
              }}
              whileTap={{ scale: 0.6 }}
              onClick={loadTimelineClick}
              className={
                LoadTimeline
                  ? "hidden vertical-align shadow"
                  : "vertical-align shadow"
              }
              aria-label="Load More"
            >
              <span>See More</span>
              <span id="icon">
                <Down color="#fff" width={"18px"} height={"18px"} />
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
