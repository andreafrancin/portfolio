"use client";
import React from "react";
import Layout from "../components/layout";
import styles from "./page.module.scss";
import Link from "next/link";
import { useTranslations } from "@/context/TranslationsContext";

function HomeContainer() {
  const { localTranslations } = useTranslations();
  
  return (
    <Layout
      headerConfig={{
        displayPrimaryLinks: false,
        currentPage: "home",
      }}
    >
      <div className={styles.container}>
        <Link href="/design" className={styles.left}>
          <div className={styles.overlayer}>
            <h1 className={styles.title}>
              Andrea Francín
              {localTranslations?.HEADER_DESIGN_ILLUSTRATION && <p>.·. {localTranslations?.HEADER_DESIGN_ILLUSTRATION} .·.</p>}
            </h1>
          </div>
        </Link>
        <Link href="/illustration" className={styles.right}>
          <div className={styles.overlayer}>
            <h1 className={styles.title}>
              Druida Nòmada
              {localTranslations?.HEADER_ILLUSTRATION_ARTIST && <p>.·. {localTranslations?.HEADER_ILLUSTRATION_ARTIST} .·.</p>}
            </h1>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default HomeContainer;
