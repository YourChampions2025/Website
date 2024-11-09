"use client";
import React, { useEffect, useState } from "react";
import style from "./header.module.css";

import { usePathname } from "next/navigation";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function Header() {
  const size = useWindowSize();
  const isMobile = size.width <= 700;
  const pathname = usePathname();

  const isStudio = pathname.includes("/studio");
  if (isStudio) return null;

  return (
    <div className={style.headerContainer}>
      <div className={style.headerContent}>
        {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      </div>
    </div>
  );
}

export default Header;
