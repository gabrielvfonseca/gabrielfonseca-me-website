/**
 * Path: /src/components/modules/ScrollToTop.js
 * Created: 21.11.2021
 * Dev by Gabriel.
 **/

import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = (props) => {
  const { pathname } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
};

export default ScrollToTop;
