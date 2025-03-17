import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Header from "../header";
import useIsMobile from "../../hooks/useIsMobile";
import BurgerMenu from "../header/burger-menu";
import LanguageSelector from "../header/lang-selector";

export type Page = "about" | "home" | "contact" | "design" | "illustration";

interface LayoutInterface {
  headerConfig?: {
    displayPrimaryLinks?: boolean;
    currentPage?: Page;
  };
  children: React.ReactNode;
}

function Layout({ headerConfig, children }: LayoutInterface) {
  const router = useRouter();
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
    <div className={styles.container} key={router.pathname}>
      {isMobile ? (
        <BurgerMenu />
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
