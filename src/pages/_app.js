/**
 * Path: /pages/_app.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

/* Routes */
import main from "../../main.config";

/* Animations */
import { motion } from "framer-motion";

/* Styles */
import "../styles/fonts.css";
import "../styles/main.css";

/* Components */
import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add("lightMode");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
