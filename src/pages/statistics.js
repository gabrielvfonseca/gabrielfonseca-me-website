/**
 * Path: /pages/statistics.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import useSWR from "swr";

/* Routes */
import main from "../../main.config";

/* Animations */
import { motion } from "framer-motion";

/* Assets */
import HastagIcon from "../assets/icons/hastag";

/* Components */
import DataGrid from "../components/DataGrid";
import TopSpotifyTracks from "../components/TopTracks";
import Heading from "../components/modules/Heading";
import Divider from "../components/modules/Divider";

export default function Statistics() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/github", fetcher);

  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="marginBottom-15" id="statistics">
        <Heading
          heading={main.menu[6].route}
          head="h2"
          subHead="This is my personal dashboard, built with React.js API routes deployed as serverless functions."
        />

        <div className="marginTop-20">
          <DataGrid />
        </div>
      </div>

      <Divider color="#A3A3A3" strokeWidth="2" />

      <div className="marginTop-15" id="top-tracks">
        <Heading
          heading={
            <span>
              <span className="hastag">
                <HastagIcon width="20px" height="20px" />
              </span>
              <span className="color-white">Top Tracks</span>
            </span>
          }
          head="h3"
          subHead="Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily."
        />

        <div className="marginTop-20">
          <TopSpotifyTracks />
        </div>
      </div>
    </motion.div>
  );
}
