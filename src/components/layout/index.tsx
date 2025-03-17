"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import Header from "../header";
import useIsMobile from "../../hooks/useIsMobile";
import LanguageSelector from "../header/lang-selector";
import dynamic from "next/dynamic";

const BurgerMenu = dynamic(() => import("../header/burger-menu"), {
  ssr: false,
});

export type Page = "about" | "home" | "contact" | "design" | "illustration";

interface LayoutInterface {
  headerConfig?: {
    displayPrimaryLinks?: boolean;
    currentPage?: Page;
  };
  children: React.ReactNode;
}

function Layout({ headerConfig, children }: LayoutInterface) {
  const [isClient, setIsClient] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { displayPrimaryLinks = true, currentPage = "home" } =
    headerConfig || {};

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsBurgerMenuOpen(false);
  }, [pathname]);

  if (!isClient) {
    return <div className={styles.loadingWindow}></div>;
  }

  return (
    <div className={styles.container} key={pathname}>
      {isMobile && isClient && isBurgerMenuOpen ? (
        <BurgerMenu
          isBurgerMenuOpen={isBurgerMenuOpen}
          setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        />
      ) : (
        <>
          <Header
            currentPage={currentPage}
            displayPrimaryLinks={displayPrimaryLinks}
          />
          <LanguageSelector />
        </>
      )}
      {children}
    </div>
  );
}

export default Layout;
