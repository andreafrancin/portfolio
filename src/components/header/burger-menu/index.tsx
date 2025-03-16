"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import useHover from "../../../hooks/useHover";
import logoWhite from "../../../assets/images/logo/logo_white.png";
import logoColor from "../../../assets/images/logo/logo_color.png";
import Link from "next/link";
import Image from "next/image";

const BurgerMenu = () => {
  const { ref, isHovered } = useHover<HTMLImageElement>();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => setIsOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.logoContainer}>
        <Link onClick={() => setIsOpen(false)} href="/">
          <Image
            ref={ref}
            src={isHovered ? logoColor : logoWhite}
            className={styles.logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={`${styles.menuItems} ${isOpen ? styles.show : ""}`}>
        <ul>
          <li>
            <Link onClick={() => setIsOpen(false)} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} href="/design">
              Design & Illustration
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} href="/illustration">
              Illustration Artist
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
