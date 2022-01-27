/**
 * Path: /components/menus/sidebar-menu.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/* Routes */
import main from "../../../main.config";

/* Animations */
import { motion, AnimatePresence } from "framer-motion";

const SideBar = ({ isVisible }) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="sidebar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.09 }}
          className={"sidebar"}
        >
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32 }}
            className={"sidebar"}
          >
            <ul>
              <Link href={main.menu[0].path} passHref>
                <li
                  className={
                    router.pathname === main.menu[0].path
                      ? "without-underline no-bullet color-blue selectedRoute"
                      : "without-underline no-bullet route"
                  }
                >
                  {main.menu[0].route}
                </li>
              </Link>
              <Link href={main.menu[1].path} passHref>
                <li
                  className={
                    router.pathname === main.menu[1].path
                      ? "without-underline no-bullet color-blue selectedRoute"
                      : "without-underline no-bullet route"
                  }
                >
                  {main.menu[1].route}
                </li>
              </Link>
              <Link href={main.menu[6].path} passHref>
                <li
                  className={
                    router.pathname === main.menu[6].path
                      ? "without-underline no-bullet color-blue selectedRoute"
                      : "without-underline no-bullet route"
                  }
                >
                  {main.menu[6].route}
                </li>
              </Link>
              <Link href={main.menu[2].path} passHref>
                <li
                  className={
                    router.pathname === main.menu[2].path
                      ? "without-underline no-bullet color-blue selectedRoute"
                      : "without-underline no-bullet route"
                  }
                >
                  {main.menu[2].route}
                </li>
              </Link>
              <Link href={main.menu[3].path} passHref>
                <li
                  className={
                    router.pathname === main.menu[3].path
                      ? "without-underline no-bullet color-blue selectedRoute"
                      : "without-underline no-bullet route"
                  }
                >
                  {main.menu[3].route}
                </li>
              </Link>
            </ul>
            <div>
              <span id="copyright">
                © Dev by
                <a href={`https://github.com/${main.online.github}/`}>
                  Gabriel
                </a>
                {"- 2021"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SideBar;
