import React, { useMemo } from "react";
import Layout, { Page } from "../layout";
import styles from "./index.module.scss";
import Gallery from "../gallery";
import { PAGE_IDS } from "../../config/variables";
import pineTree from "../../assets/images/background/pine-tree.jpg";
import butterfly from "../../assets/images/background/butterfly.jpg";

interface ProjectsContainerInterface {
  pageId: Page;
  data: any;
  title: string;
  onClick?: Function;
}

function ProjectsContainer({
  pageId,
  data,
  title,
  onClick,
}: ProjectsContainerInterface) {
  const backgroundStyle = useMemo(() => {
    const imageUrl = pageId === PAGE_IDS.design ? pineTree : butterfly;
    console.log("imageUrl: ", imageUrl);
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
        <Gallery items={data} onItemClick={onClick} />
      </div>
    </Layout>
  );
}

export default ProjectsContainer;
