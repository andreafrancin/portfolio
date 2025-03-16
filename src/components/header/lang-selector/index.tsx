import React from "react";
import styles from "./index.module.scss";
import { useLanguage } from "@/context/LanguageContext";

function LanguageSelector({ onClick }: { onClick?: Function }) {
  const { language, setLanguage } = useLanguage();

  const handleClick = (lan: string) => {
    setLanguage(lan);
    onClick && onClick();
  };

  return (
    <div className={styles.langContainer}>
      <button
        className={
          language === "en" ? styles.langLinkSelected : styles.langLink
        }
        onClick={() => handleClick("en")}
      >
        EN
      </button>
      <button
        className={
          language === "es" ? styles.langLinkSelected : styles.langLink
        }
        onClick={() => handleClick("es")}
      >
        ES
      </button>
      <button
        className={
          language === "ca" ? styles.langLinkSelected : styles.langLink
        }
        onClick={() => handleClick("ca")}
      >
        CA
      </button>
    </div>
  );
}

export default LanguageSelector;
