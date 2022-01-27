/**
 * Path: /pages/gear.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";

/* Routes */
import main from "../../main.config";

/* Animations */
import { motion } from "framer-motion";

/* Assets */
import HastagIcon from "../assets/icons/hastag";

/* Components */
import Heading from "../components/modules/Heading";

export default function Gear() {
  return (
    <motion.div
      className="marginTop-Page"
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        heading={main.menu[4].route}
        head="h2"
        subHead="My personal equipment for software developing, or hobbies."
      />

      <div className="marginTop-20" id="hardware">
        <Heading
          heading={
            <span>
              <span className="hastag">
                <HastagIcon width="20px" height="20px" />
              </span>
              Hardware
            </span>
          }
          head="h4"
        />

        <ul className="list">
          <li>
            <span className="bold">Laptop: </span>
            <a
              href="https://www.asus.com/SupportOnly/ROG_Strix_GL503/HelpDesk_Knowledge/"
              className="a-blue without-underline"
            >
              ROG GL503 (15-Inch, 16GB RAM, 512GB Storage, 2.2GHz Intel Core i7)
            </a>
          </li>
          <li>
            <span className="bold">Desktop: </span>
            <a
              href="https://support.apple.com/kb/SP771?locale=en_US"
              className="a-blue without-underline"
            >
              iMac pro 2017 (27-Inch, 32GB RAM, 1TB Storage, 3.2GHz Intel Xeon)
            </a>
          </li>
          <li>
            <span className="bold">Mouse: </span>
            <a
              href="https://www.logitechg.com/en-us/products/gaming-mice/g603-lightspeed-wireless-gaming-mouse.html"
              className="a-blue without-underline"
            >
              Logitech G603
            </a>
          </li>
          <li>
            <span className="bold">Headphones: </span>
            <a
              href="https://steelseries.com/gaming-headsets/arctis-3"
              className="a-blue without-underline"
            >
              Steelseries Arctis 3
            </a>
          </li>
          <li>
            <span className="bold">Smartphone: </span>
            <a
              href="https://www.gsmarena.com/huawei_p20-9107.php"
              className="a-blue without-underline"
            >
              Huawei P20
            </a>
          </li>
          <li>
            <span className="bold">Earbuds: </span>
            <a
              href="https://consumer.huawei.com/pt/audio/freebuds3/"
              className="a-blue without-underline"
            >
              Huawei Freebuds 3
            </a>
          </li>
        </ul>
      </div>

      <div className="marginTop-15" id="software">
        <Heading
          heading={
            <span>
              <span className="hastag">
                <HastagIcon width="20px" height="20px" />
              </span>
              Software
            </span>
          }
          head="h4"
        />

        <ul className="list">
          <li>
            <span className="bold">IDE: </span>
            <a
              href="https://code.visualstudio.com/"
              className="a-blue without-underline"
            >
              Visual Studio Code
            </a>
          </li>
          <li>
            <span className="bold">Browser: </span>
            <a
              href="https://www.mozilla.org/en-US/firefox/new/"
              className="a-blue without-underline"
            >
              Firefox
            </a>
          </li>
          <li>
            <span className="bold">API: </span>
            <a
              href="https://www.postman.com/"
              className="a-blue without-underline"
            >
              Postman
            </a>
          </li>
          <li>
            <span className="bold">Notes: </span>
            <a href="https://notion.so/" className="a-blue without-underline">
              Notion
            </a>
          </li>
          <li>
            <span className="bold">Music: </span>
            <a href="https://tidal.com/" className="a-blue without-underline">
              TIDAL HiFi
            </a>
          </li>
          <li>
            <span className="bold">Deploy to: </span>
            <a
              href="https://railway.app?referralCode=65Jk5a"
              className="a-blue without-underline"
            >
              Railway
            </a>
          </li>
          <li>
            <span className="bold">Terminal: </span>
            <a
              href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab"
              className="a-blue without-underline"
            >
              Windows Terminal
            </a>
          </li>
          <li>
            <span className="bold">Design/Mock Up: </span>
            <a
              href="https://www.adobe.com/pt/products/xd.html"
              className="a-blue without-underline"
            >
              Adobe XD
            </a>{" "}
            &{" "}
            <a href="https://framer.com/" className="a-blue without-underline">
              Framer
            </a>
          </li>
          <li>
            <span className="bold">Local DB: </span>
            <a
              href="https://www.mongodb.com/products/compass"
              className="a-blue without-underline"
            >
              Mongo DB Compass
            </a>
          </li>
        </ul>
      </div>

      <div className="marginTop-15" id="camera-gear">
        <Heading
          heading={
            <span>
              <span className="hastag">
                <HastagIcon width="20px" height="20px" />
              </span>
              Camera Gear
            </span>
          }
          head="h4"
        />

        <ul className="list">
          <li>
            <span className="bold">Camera: </span>
            <a
              href="https://electronics.sony.com/imaging/interchangeable-lens-cameras/aps-c/p/ilce6100-b"
              className="a-blue without-underline"
            >
              Sony A6100
            </a>
          </li>
          <li>
            <span className="bold">Microphone: </span>
            <a
              href="https://www.rode.com/microphones/videomicgo"
              className="a-blue without-underline"
            >
              Rode VideoMic Go
            </a>
          </li>
          <li>
            <span className="bold">Lenses: </span>
            <a
              href="https://www.sony.pt/electronics/camara-lentes/selp1650"
              className="a-blue without-underline"
            >
              Sony 16-50mm F3.5-5.6 OSS
            </a>{" "}
            &{" "}
            <a
              href="https://www.sony.pt/electronics/camara-lentes/sel50f18"
              className="a-blue without-underline"
            >
              Sony 50mm F1.8 OSS
            </a>
          </li>
          <li>
            <span className="bold">Action Camera: </span>
            <a
              href="https://gopro.com/pt/pt/update/hero-2018"
              className="a-blue without-underline"
            >
              GoPro Hero 2018
            </a>
          </li>
          <li>
            <span className="bold">Gimbal: </span>
            <a
              href="https://www.dji.com/pt/ronin-s"
              className="a-blue without-underline"
            >
              DJI Ronin-S
            </a>
          </li>
        </ul>
      </div>

      <div className="marginTop-15" id="music-gear">
        <Heading
          heading={
            <span>
              <span className="hastag">
                <HastagIcon width="20px" height="20px" />
              </span>
              Music Gear
            </span>
          }
          head="h4"
        />

        <ul className="list">
          <li>
            <span className="bold">Controller: </span>
            <a
              href="https://www.pioneerdj.com/pt-pt/product/controller/archive/ddj-sb2/black/overview/"
              className="a-blue without-underline"
            >
              Pioneer DDJ SB2
            </a>
          </li>
          <li>
            <span className="bold">Headphones: </span>
            <a
              href="https://www.beatsbydre.com/support/headphones/beats-ep"
              className="a-blue without-underline"
            >
              Beats by Dree EP
            </a>
          </li>
          <li>
            <span className="bold">Monitor Speakers: </span>
            <a
              href="https://www.pioneerdj.com/en-us/product/monitor-speakers/archive/s-dj50x/black/overview/"
              className="a-blue without-underline"
            >
              Pioneer S-DJ50X
            </a>
          </li>
          <li>
            <span className="bold">Software: </span>
            <a
              href="https://serato.com/dj/pro"
              className="a-blue without-underline"
            >
              Serato Dj Pro
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
