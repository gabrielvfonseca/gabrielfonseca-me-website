/**
 * Path: /components/Footer.js
 * Created: 21.11.2021
 * Dev by Gabriel.
 **/

import React, { useState } from "react";
import useSWR from "swr";

/* Routes */
import main from "../../main.config";

/* Animations */
import { motion } from "framer-motion";

/* Assets */
import SpotifyIcon from "../assets/icons/spotify";

/* Import Components */
import Image from "next/image";
import FooterMenu from "./menus/footer-menu";
import Divider from "./modules/Divider";

const Footer = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/playing", fetcher);

  return (
    <footer className="marginTop-25">
      <Divider color="#A3A3A3" strokeWidth="2" />

      <FooterMenu />

      {String(data?.isPlaying) === "true" ? (
        <div
          className="center marginTop-10"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.01 },
            }}
            className="spotify-container"
          >
            <div id="icon">
              {isHovering ? (
                <Image
                  src={String(data?.albumImageUrl)}
                  alt="Picture of the author"
                  width={25}
                  height={25}
                />
              ) : (
                <SpotifyIcon
                  color="var(--green)"
                  width="24.5px"
                  height="24.5px"
                />
              )}
            </div>
            <p>
              <a href={data?.songUrl}>{data?.title}</a>
              {" - "}
              <span>{data?.artist}</span>
            </p>
          </motion.div>
        </div>
      ) : null}

      <div className="marginTop-10">
        <span id="copyright" className="center">
          © Dev by
          <a href={`https://github.com/${main.online.github}/`}>Gabriel</a>
          {"- 2021"}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
