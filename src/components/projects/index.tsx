import React, { useMemo } from "react";
import Layout, { Page } from "../layout";
import styles from "./index.module.scss";
import Gallery from "../gallery";
import { PAGE_IDS } from "../../config/variables";
import pineTree from "../../assets/images/background/pine-tree.jpg";
import butterfly from "../../assets/images/background/butterfly.jpg";
import Spinner from "../spinner";
import alertIcon from "@/assets/icons/close.png";

interface ProjectsContainerInterface {
  pageId: Page;
  data: any;
  title: string;
  httpError?: boolean;
  onClick?: Function;
}

function ProjectsContainer({
  pageId,
  data,
  title,
  httpError,
  onClick,
}: ProjectsContainerInterface) {
  const backgroundStyle = useMemo(() => {
    const imageUrl = pageId === PAGE_IDS.design ? pineTree : butterfly;
    return {
      background: `url(${imageUrl.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }, [pageId]);

  return (
    <Layout
      headerConfig={{
        currentPage: pageId,
      }}
    >
      <div className={styles.overlayer} />
      <div className={styles.background} style={backgroundStyle} />
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {!data && !httpError ? (
          <Spinner />
        ) : (
          <>
            {httpError ? (
              <div className={styles.errorContainer}>
                <img
                  className={styles.icon}
                  src={alertIcon.src}
                  alt={"alert icon"}
                />
                <p className={styles.errorMessage}>
                  Sorry, there was an error requesting the projects.
                  <br></br>
                  Try again later.
                </p>
              </div>
            ) : (
              <Gallery items={data} onItemClick={onClick} />
            )}
          </>
        )}
      </div>
    </Layout>
  );
}

export default ProjectsContainer;
