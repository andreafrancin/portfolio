"use client";
import React, { useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Layout, { Page } from "../../../components/layout";
import { PAGE_IDS } from "../../../config/variables";
import styles from "./index.module.scss";
import pineTree from "../../../assets/images/background/pine-tree.jpg";
import butterfly from "../../../assets/images/background/butterfly.jpg";
import Image from "next/image";
import { designProjects, illustrationProjects } from "@/config/projects";

function ProjectContainer() {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const projectImage = useMemo(() => {
    return (
      illustrationProjects.find((i) => i.id === params.id)?.imageUrl ||
      designProjects.find((i) => i.id === params.id)?.imageUrl ||
      ""
    );
  }, [params, illustrationProjects, designProjects]);

  const backgroundStyle = useMemo(() => {
    const imageUrl = params.type === PAGE_IDS.design ? pineTree : butterfly;

    return {
      background: `url(${imageUrl.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }, [params]);

  return (
    <Layout headerConfig={{ currentPage: params.type as Page }}>
      <div className={styles.overlayer} />
      <div className={styles.background} style={backgroundStyle} />
      <div className={styles.container}>
        <h1 className={styles.title}>{`.·. ${params.title} .·.`}</h1>
        <div className={styles.imageContainer}>
          <Image src={projectImage} alt={params.title} />
        </div>
      </div>
    </Layout>
  );
}

export default ProjectContainer;
