"use client";
import React from "react";
import Layout from "../components/layout";
import styles from "./page.module.scss";
import Link from "next/link";

function HomeContainer() {
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
              <p>.·. Design & Illustration .·.</p>
            </h1>
          </div>
        </Link>
        <Link href="/illustration" className={styles.right}>
          <div className={styles.overlayer}>
            <h1 className={styles.title}>
              Druida Nòmada
              <p>.·. Illustration Artist .·.</p>
            </h1>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default HomeContainer;
