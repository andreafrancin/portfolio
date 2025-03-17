"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.scss";
import useHover from "../../../hooks/useHover";
import logoWhite from "../../../assets/images/logo/logo_white.png";
import logoColor from "../../../assets/images/logo/logo_color.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import LanguageSelector from "../lang-selector";

const BurgerMenu = ({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}: {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: Function;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { ref, isHovered } = useHover<HTMLImageElement>();

  const toggleMenu = () => {
    setIsBurgerMenuOpen((prev: any) => !prev);
  };

  const handleNavigation = useCallback(
    (route: string) => {
      setIsBurgerMenuOpen(false);
      if (pathname !== route) {
        setTimeout(() => {
          router.push(route);
        }, 50);
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    setIsBurgerMenuOpen(false);
  }, [pathname]);

  return (
    <div
      className={`${styles.container} ${isBurgerMenuOpen ? styles.open : ""}`}
    >
      {isBurgerMenuOpen && (
        <LanguageSelector onClick={() => setIsBurgerMenuOpen(false)} />
      )}
      <div className={styles.logoContainer}>
        <button onClick={() => handleNavigation("/")}>
          <Image
            ref={ref}
            src={isHovered ? logoColor : logoWhite}
            className={styles.logo}
            alt="logo"
          />
        </button>
      </div>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div
        className={`${styles.menuItems} ${isBurgerMenuOpen ? styles.show : ""}`}
      >
        <ul>
          <li>
            <button onClick={() => handleNavigation("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/design")}>
              Design & Illustration
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/illustration")}>
              Illustration Artist
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/contact")}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
