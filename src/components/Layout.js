/**
 * Path: /components/Layout.js
 * Created: 21.11.2021
 * Dev by Gabriel.
 **/

import React from "react";
import { useRouter } from "next/router";

/* Main */
import main from "../../main.config";

/* Components */
import Head from "next/head";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./modules/ScrollToTop";

const Layout = ({ children }) => {
  const router = useRouter();
  const SEO = main.keywords.toString();
  var title = "Gabriel Fonseca - Full Stack Developer";

  for (var index = 0; index < main.menu.length; index++) {
    if (router.pathname === main.menu[0].path) {
      title = title;
    } else if (router.pathname === main.menu[index].path) {
      title = `${main.menu[index].route} - Gabriel Fonseca`;
    }
  }

  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta name="author" content="Gabriel Fonseca" />
        <meta name="description" content="Full-Stack Developer Portfolio" />
        <meta name="keywords" content={SEO} />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="flavicon.svg" />
        <link rel="apple-touch-icon" href="flavicon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Script
        async
        defer
        src="https://umami-analytics-production-3596.up.railway.app/umami.js"
        data-website-id="a2b57f72-4093-49df-a431-939a3a916bcc"
      />
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </html>
  );
};

export default Layout;
