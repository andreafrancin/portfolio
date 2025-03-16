"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.scss";
import useHover from "../../../hooks/useHover";
import logoWhite from "../../../assets/images/logo/logo_white.png";
import logoColor from "../../../assets/images/logo/logo_color.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LanguageSelector from "../lang-selector";

const BurgerMenu = () => {
  const router = useRouter();
  const { ref, isHovered } = useHover<HTMLImageElement>();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => setIsOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = useCallback((route: string) => {
    setIsOpen(false);
    setTimeout(() => {
      router.push(route);
    }, 500);
  }, []);

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      {isOpen && <LanguageSelector onClick={() => setIsOpen(false)} />}
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
      <div className={`${styles.menuItems} ${isOpen ? styles.show : ""}`}>
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
