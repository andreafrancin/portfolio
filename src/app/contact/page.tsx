"use client";
import React from "react";
import Layout, { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import styles from "./index.module.scss";

function ContactContainer() {
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
            <h1 className={styles.title}>Get in touch</h1>
            <p className={styles.description}>
              Let me now how can we work together!
              <br></br>
              <b>andfrancin@gmail.com</b>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactContainer;
