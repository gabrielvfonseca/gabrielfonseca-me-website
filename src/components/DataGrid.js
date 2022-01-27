/**
 * Path: /components/DataGrid.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React, { useState, useEffect } from "react";
import useSWR from "swr";

/* Routes */
import main from "../../main.config";

/* Data */
import { works } from "../content/data";

/* Assets */
import LinkIcon from "../assets/icons/link";

const DataGrid = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/github", fetcher);

  const contens = [
    {
      box: "GitHub Repos",
      url: `https://github.com/${main.online.github}`,
      data: data ? data?.starred : 0,
    },
    {
      box: "GitHub Followers",
      url: `https://github.com/${main.online.github}`,
      data: data ? data.followers : 0,
    },
    {
      box: "GitHub Stars",
      url: `https://github.com/${main.online.github}`,
      data: data ? data.stars : 0,
    },
    {
      box: "Works Done",
      url: null,
      data: works.length,
    },
  ];

  return (
    <>
      <div className="row">
        <div className="column box without-marginLeft padding-10">
          <a href={contens[0].url} className="without-underline">
            <p className="text">
              {contens[0].box}
              {contens[0].url != null ? (
                <span className="marginLeft-025">
                  <LinkIcon
                    color="var(--oposite)"
                    height="15px"
                    viewBox="0 0 24 20"
                  />
                </span>
              ) : null}
            </p>
          </a>
          <h3 className="number">{contens[0].data}</h3>
        </div>

        <div className="column box without-marginRight padding-10">
          <a href={contens[1].url} className="without-underline">
            <p className="text">
              {contens[1].box}
              {contens[1].url != null ? (
                <span className="marginLeft-025">
                  <LinkIcon
                    color="var(--oposite)"
                    height="15px"
                    viewBox="0 0 24 20"
                  />
                </span>
              ) : null}
            </p>
          </a>
          <h3 className="number">{contens[1].data}</h3>
        </div>
      </div>

      <div className="row">
        <div className="column box without-marginLeft padding-10">
          <a href={contens[2].url} className="without-underline">
            <p className="text">
              {contens[2].box}
              {contens[2].url != null ? (
                <span className="marginLeft-025">
                  <LinkIcon
                    color="var(--oposite)"
                    height="15px"
                    viewBox="0 0 24 20"
                  />
                </span>
              ) : null}
            </p>
            <h3 className="number">{contens[2].data}</h3>
          </a>
        </div>

        <div className="column box without-marginRight padding-10">
          <a href={contens[3].url} className="without-underline">
            <p className="text">
              {contens[3].box}
              {contens[3].url != null ? (
                <span className="marginLeft-025">
                  <LinkIcon
                    color="var(--oposite)"
                    height="15px"
                    viewBox="0 0 24 20"
                  />
                </span>
              ) : null}
            </p>
            <h3 className="number">{contens[3].data}</h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default DataGrid;
