/**
 * Path: /components/TopTracks.js
 * Created: 21.11.2021
 * Dev by Gabriel.
 **/

import React, { useState, useEffect } from "react";
import useSWR from "swr";

/* Animations */
import { motion } from "framer-motion";

const TopSpotifyTracks = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/tracks", fetcher);

  return (
    <div className="table-container">
      <table>
        {data?.tracks.map((track, index) => (
          <tr key={index} className="table-row-lined tracks marginBottom-10">
            <td className="color-gray">{index + 1}</td>
            <td className="leftAlign">
              <a href={track.songUrl} className="without-underline a-blue">
                {track.title}
              </a>
              <br />
              <span className="color-gray without-underline GT-Regular">
                {track.artist}
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TopSpotifyTracks;
