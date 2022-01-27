/**
 * Path: /components/Header.js
 * Created: 21.11.2021
 * Dev by Gabriel.
 **/

import React, { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserView, MobileView } from "react-device-detect";

/* Assets */
import Menu from "../assets/icons/menu";
import Cross from "../assets/icons/cross";
import Sun from "../assets/icons/sun";
import Moon from "../assets/icons/moon";

/* Components */
import MainMenu from "./menus/main-menu";
import SideBar from "./menus/sidebar-menu";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [changeTheme, setTheme] = useState(true);

  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);

    if (menuCollapse) {
      document.body.style.overflow = null;
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const themeIconClick = () => {
    changeTheme ? setTheme(false) : setTheme(true);
    localStorage.setItem("theme", changeTheme);

    if (changeTheme) {
      document.body.classList.remove("darkMode");
      document.body.classList.add("lightMode");
    } else {
      document.body.classList.remove("lightMode");
      document.body.classList.add("darkMode");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "true") {
      document.body.classList.add("lightMode");
    } else {
      document.body.classList.add("darkMode");
    }
  }, []);

  return (
    <header className="scroll">
      <SideBar isVisible={menuCollapse} />

      <BrowserView>
        <div className={isMobile ? "hidden" : null}>
          <MainMenu />
        </div>

        <div className={isMobile ? null : "hidden"}>
          <button
            className="menu"
            title="Menu"
            aria-label="Menu"
            onClick={menuIconClick}
          >
            {menuCollapse ? (
              <Cross color={"var(--oposite)"} />
            ) : (
              <Menu color={"var(--oposite)"} />
            )}
          </button>
        </div>
      </BrowserView>

      <MobileView>
        <button
          className="menu"
          title="Menu"
          aria-label="Menu"
          onClick={menuIconClick}
        >
          {menuCollapse ? (
            <Cross color={"var(--oposite)"} />
          ) : (
            <Menu color={"var(--oposite)"} />
          )}
        </button>
      </MobileView>

      <div>
        <span
          className="toggle"
          title="ThemeMode"
          aria-label="ThemeMode"
          onClick={themeIconClick}
        >
          {changeTheme ? (
            <Sun color="var(--oposite)" />
          ) : (
            <Moon color="var(--oposite)" />
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
