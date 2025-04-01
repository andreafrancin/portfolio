"use client";
import React from "react";
import Layout, { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import styles from "./index.module.scss";
import { useTranslations } from "@/context/TranslationsContext";

function ContactContainer() {
  const { localTranslations } = useTranslations();

  return (
    <Layout
      headerConfig={{
        currentPage: PAGE_IDS.contact as Page,
      }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.overlayer} />
        </div>
        <div className={styles.right}>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>{localTranslations?.CONTACT_TITLE}</h1>
            <p className={styles.description}>
              {localTranslations?.CONTACT_SUBTITLE}
              <br></br>
              <b>{localTranslations?.CONTACT_EMAIL}</b>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactContainer;
