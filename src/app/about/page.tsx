"use client";
import React from "react";
import Layout, { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import styles from "./index.module.scss";
import { useTranslations } from "@/context/TranslationsContext";

function AboutContainer() {
  const { localTranslations } = useTranslations()

  return (
    <Layout
      headerConfig={{
        currentPage: PAGE_IDS.about as Page,
      }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>{localTranslations?.ABOUT_TITLE}</h1>
            <p className={styles.description}>
              {localTranslations?.ABOUT_DESCRIPTION}
              {/* I am a creative, proactive, and detail-oriented individual,
              specialized in graphic design. I have experience in a wide range
              of projects, including digital illustration, web design,
              large-scale murals, and screen printing. I consider myself
              resourceful and adaptable to different challenges, using my
              creativity and skills to deliver effective and high-quality visual
              solutions. */}
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.overlayer} />
          <div className={styles.backgroundTitle}>
            {localTranslations?.ABOUT_QUOTE}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutContainer;
