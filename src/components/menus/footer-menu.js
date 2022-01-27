/**
 * Path: /components/menus/footer-menu.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

import Link from "next/link";
import { useRouter } from "next/router";

/* Routes */
import main from "../../../main.config";

const FooterMenu = () => {
  const router = useRouter();

  return (
    <div className="display-grid">
      <div className="row">
        <div className="column without-marginLeft">
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
        </div>

        <div className="column .without-marginRight">
          <a
            href={`https://twitter.com/${main.online.twitter}/`}
            className={"without-underline"}
          >
            <li className="no-bullet">Twitter</li>
          </a>
          <a
            href={`https://linkedin.com/${main.online.linkedin}/`}
            className={"without-underline"}
          >
            <li className="no-bullet">LinkedIn</li>
          </a>
          <a
            href={`https://github.com/${main.online.github}/`}
            className={"without-underline"}
          >
            <li className="no-bullet">GitHub</li>
          </a>
        </div>

        <div className="column .without-marginRight">
          <Link href={main.menu[4].path} passHref>
            <li
              className={
                router.pathname === main.menu[4].path
                  ? "without-underline no-bullet color-blue selectedRoute"
                  : "without-underline no-bullet route"
              }
            >
              {main.menu[4].route}
            </li>
          </Link>
          <Link href={main.menu[5].path} passHref>
            <li
              className={
                router.pathname === main.menu[5].path
                  ? "without-underline no-bullet color-blue selectedRoute"
                  : "without-underline no-bullet route"
              }
            >
              {main.menu[5].route}
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
