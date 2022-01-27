/**
 * Path: /pages/api/currently-playing.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import querystring from "querystring";

const client_id = "de5306fd68f34864b77ca3aa7b5f6aa7";
const client_secret = "862900e2e310459cbed6f8f013faddb4";
const refresh_token =
  "AQBBqNIvlVzA1-JZq04ZcFJ-lAl77fWlTXonuQZscbBQcQ66fXyX_D-XKholXVzUkkTdI5xYIL5mkzuF-9BhFPZb4BJQvrh1YLmumBzc-8zITPvOCF-2O8DSM5JmdiOEWkY";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
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

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};
