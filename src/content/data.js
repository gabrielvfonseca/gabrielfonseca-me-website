/**
 * Path: /content/data.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import teenupdate from "../assets/gallery/projects/teenupdate-cover.png";

export const code = [
  {
    title: "Firebase",
    description: "Read data from Realtime Database.",
    imgSrc:
      "https://leerob.io/_next/image?url=%2Flogos%2Ffirebase.png&w=48&q=75",
    body: {
      code: `
        import db from '../../lib/db-admin';

        export default (req, res) => {
          if (!req.query.id) {
            return res.status(400).json({
              error: 'Missing "id" query parameter'
            });
          }

          const ref = db.ref('table').child(req.query.id);

          return ref.once('value', (snapshot) => {
            res.status(200).json({
              total: snapshot.val()
            });
          });
        };`,
      usage: {
        head1: "Create Firebase Account",
        text1: "First, create a Firebase account.",
        head2: "Retrieve Service Account",
        text2: "If you do not have a Firebase account, create one first.",
        head3: "Add Environment Variables",
        text3:
          "To securely access the API, we need to include the secret with each request. We also do not want to commit secrets to git. Thus, we should use an environment variable. Learn how to add environment variables in Vercel.",
      },
    },
  },
];

export const projects = [
  {
    type: true,
    imgSrc: {
      src: teenupdate,
      alt: "teenupdate.pt",
    },
    title: "News Blog",
    description: "Online media news about tech",
    route: "teenupdate.pt",
  },
];

export const works = [
  {
    imgSrc: {
      src: teenupdate,
      alt: "teenupdate.pt",
    },
    title: "News Blog",
    description: "Online media news about tech",
    date: "July 2021",
    route: "teenupdate.pt",
  },
];

export const changes = [
  {
    version: "v1.3",
    status: "",
    title: "What's comming next?",
    date: "Jan 1, 2022",
    description: "Adding Blog Section.",
  },
  {
    version: "v1.2",
    status: "",
    title: "Next.js",
    date: "Dec 21, 2020",
    description: (
      <span>
        Converting all web application to server-side{" "}
        <a href="https://nextjs.org/" className="without-underline color-blue">
          Next.JS
        </a>
      </span>
    ),
  },
  {
    version: "v1.1",
    status: "",
    title: "Bugs and Review",
    date: "Dec 11, 2020",
    description: "DarkMode implementation and bugs review.",
  },
  {
    version: "v1.0",
    status: "",
    title: "⚡️ This site was born!",
    date: "Oct 22, 2021",
    description: (
      <span>
        This website went live, design on{" "}
        <a
          href="https://www.adobe.com/pt/products/xd.html"
          className="without-underline color-blue"
        >
          Adobe XD
        </a>
        , and builted using{" "}
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
          className="without-underline color-blue"
        >
          JavaScript
        </a>{" "}
        ES6,{" "}
        <a
          href="https://nodejs.org/en/"
          className="without-underline color-blue"
        >
          Node.js
        </a>
        ,{" "}
        <a href="https://reactjs.org/" className="without-underline color-blue">
          React.JS
        </a>
        ,{" "}
        <a href="https://mongodb.com/" className="without-underline color-blue">
          MongoDB
        </a>
        ,{" "}
        <a
          href="https://www.framer.com/motion/"
          className="without-underline color-blue"
        >
          Framer Motion
        </a>
        ,{" "}
        <a
          href="https://www.postman.com/"
          className="without-underline color-blue"
        >
          Postman
        </a>{" "}
        and deplyed on{" "}
        <a
          href="https://railway.app/?referralCode=65Jk5a"
          className="without-underline color-blue"
        >
          Railway
        </a>
        !
      </span>
    ),
  },
  {
    version: "v0.1",
    status: "",
    title: "Initial commit",
    date: "Jun 30, 2021",
    description: "",
  },
];

export const timeline = [
  [
    2021,
    {
      0: {
        title: "Introduction to AI 🦾",
        text: "Begin learning and implementing Machine Learning algorithms in my daily programs.",
      },
      1: {
        title: "React Native & Firebase 🙌",
        text: "Introduction to React Native for mobile development with Google Firebase.",
      },
      2: {
        title: "Mastering MERN Stack 📚",
        text: "Learning to become a web Master at developing apps with NodeJS, Express, ReactJS, and MongoDB.",
      },
    },
  ],
  [
    2020,
    {
      0: {
        title: "Freelancing",
        text: "Started freelancing online to get work experience.",
      },
      1: {
        title: "Server-side Programing ⚡",
        text: "Started learing and developing apps based on server-oriented & query languages.",
      },
      2: {
        title: "When JS appeared",
        text: "Definitely my favorite programming language. JS is awesome ❤️",
      },
    },
  ],
  [
    2019,
    {
      0: {
        title: "First Tesla Model 3 ride 🚗",
        text: "I love Tesla",
      },
      1: {
        title: "First Server ⚡",
        text: "Building and managing this Linux-based web server made me learn more about back-End and web services development.",
      },
      2: {
        title: "My Blog 🖥️",
        text: "To express to others my passion for the technology itself, I started an online blog.",
      },
      3: {
        title: "WordPress",
        text: "WordPress was a huge step I have done to begin web development.",
      },
    },
  ],
  [
    2018,
    {
      0: {
        title: "Discovered Python ✨",
        text: 'I remember discovering python and it was like "wow"',
      },
      1: {
        title: "First PC build",
        text: "My first computer build!",
      },
      2: {
        title: "IST 🎓",
        text: "I have repeated the summer course at IST.",
      },
    },
  ],
  [
    2017,
    {
      0: {
        title: "Discover the passion for music 🎵",
        text: "Why not learn how to Dj?",
      },
      1: {
        title: "Learned Wakeboard 🛥️",
        text: "First time I manage to get up on wakeboard.",
      },
    },
  ],
  [
    2016,
    {
      0: {
        title: "Hello World! 🤖",
        text: "The first program I wrote for an Arduino in C++",
      },
      1: {
        title: "Start studying programming 👨‍💻",
        text: "At the time I didn't get it the right way so I didn't like it so much.",
      },
    },
  ],
  [
    2015,
    {
      0: {
        title: "Discoverd Surf 🏄",
        text: "The only sport I could do without getting exhausted easily.",
      },
    },
  ],
  [
    2012,
    {
      0: {
        title: "Started disassembly things...",
        text: "I always wanted to know how tech in general works, so I disassembled all broken things just to comprehend it better.",
      },
    },
  ],
  [
    2011,
    {
      0: {
        title: "First Computer 💻",
        text: "I remember many hours playing DVD games on windows XP.",
      },
    },
  ],
  [
    2005,
    {
      0: {
        title: "Born 👶🏼",
      },
    },
  ],
];
