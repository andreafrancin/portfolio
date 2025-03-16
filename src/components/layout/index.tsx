"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Header from "../header";
import useIsMobile from "../../hooks/useIsMobile";
import BurgerMenu from "../header/burger-menu";
import { useLanguage } from "@/context/LanguageContext";

export type Page = "about" | "home" | "contact" | "design" | "illustration";

interface LayoutInterface {
  headerConfig?: {
    displayPrimaryLinks?: boolean;
    currentPage?: Page;
  };
  children: React.ReactNode;
}

function Layout({ headerConfig, children }: LayoutInterface) {
  const { language, setLanguage } = useLanguage();

  const isMobile = useIsMobile();
  const { displayPrimaryLinks = true, currentPage = "home" } =
    headerConfig || {};

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={styles.loadingWindow}></div>;
  }

  return (
    <div className={styles.container}>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <>
          <Header
            currentPage={currentPage}
            displayPrimaryLinks={displayPrimaryLinks}
          />
          <div className={styles.langContainer}>
            <button
              className={
                language === "en" ? styles.langLinkSelected : styles.langLink
              }
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              className={
                language === "es" ? styles.langLinkSelected : styles.langLink
              }
              onClick={() => setLanguage("es")}
            >
              ES
            </button>
            <button
              className={
                language === "ca" ? styles.langLinkSelected : styles.langLink
              }
              onClick={() => setLanguage("ca")}
            >
              CA
            </button>
          </div>
        </>
      )}
      {children}
    </div>
  );
}

export default Layout;
