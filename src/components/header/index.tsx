import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Page } from "../layout";
import logoWhite from "../../assets/images/logo/logo_white.png";
import logoColor from "../../assets/images/logo/logo_color.png";
import useHover from "../../hooks/useHover";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/context/TranslationsContext";

interface HeaderInterface {
  displayPrimaryLinks: boolean;
  currentPage: Page;
}

function Header({ displayPrimaryLinks, currentPage }: HeaderInterface) {
  const { ref, isHovered } = useHover<HTMLLIElement>();
  const { localTranslations } = useTranslations();

  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        {displayPrimaryLinks && (
          <Link
            href="/design"
            className={`${styles.primaryLink} ${
              currentPage === "design" ? styles.selected : ""
            }`}
          >
            Andrea Francín
            {localTranslations?.HEADER_DESIGN_ILLUSTRATION && <p>.·. {localTranslations?.HEADER_DESIGN_ILLUSTRATION	} .·.</p>}
          </Link>
        )}
        <div className={styles.listContainer}>
          <ul className={styles.secondaryLinkList}>
            <li>
              <Link
                href="/about"
                className={`${styles.secondaryLink} ${
                  currentPage === "about" ? styles.selected : ""
                }`}
              >
                {localTranslations?.HEADER_ABOUT}
              </Link>
            </li>
            <li ref={ref}>
              <Link href="/">
                <Image
                  src={isHovered ? logoColor : logoWhite}
                  className={styles.logo}
                  alt="logo"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${styles.secondaryLink} ${
                  currentPage === "contact" ? styles.selected : ""
                }`}
              >
                {localTranslations?.HEADER_CONTACT}
              </Link>
            </li>
          </ul>
        </div>
        {displayPrimaryLinks && (
          <Link
            href="/illustration"
            className={`${styles.primaryLink} ${
              currentPage === "illustration" ? styles.selected : ""
            }`}
          >
            Druida Nòmada
            {localTranslations?.HEADER_ILLUSTRATION_ARTIST && <p>.·. {localTranslations?.HEADER_ILLUSTRATION_ARTIST} .·.</p>}
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
