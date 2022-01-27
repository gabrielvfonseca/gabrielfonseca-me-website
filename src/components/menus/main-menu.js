/**
 * Path: /components/menus/main-menu.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/* Routes */
import main from "../../../main.config";

const MainMenu = () => {
  const router = useRouter();

  return (
    <ul className="navbar">
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
  );
};

export default MainMenu;
