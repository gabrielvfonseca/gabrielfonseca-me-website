/**
 * Path: /pages/api/top-tracks.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import fetch from "isomorphic-unfetch";
import querystring from "querystring";

const client_id = "de5306fd68f34864b77ca3aa7b5f6aa7";
const client_secret = "862900e2e310459cbed6f8f013faddb4";
const refresh_token =
  "AQBBqNIvlVzA1-JZq04ZcFJ-lAl77fWlTXonuQZscbBQcQ66fXyX_D-XKholXVzUkkTdI5xYIL5mkzuF-9BhFPZb4BJQvrh1YLmumBzc-8zITPvOCF-2O8DSM5JmdiOEWkY";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json({ tracks });
};
