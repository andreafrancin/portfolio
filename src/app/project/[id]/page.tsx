"use client";

import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import Layout, { Page } from "../../../components/layout";
import { PAGE_IDS } from "../../../config/variables";
import styles from "./index.module.scss";
import pineTree from "../../../assets/images/background/pine-tree.jpg";
import butterfly from "../../../assets/images/background/butterfly.jpg";
import Image from "next/image";
import { designProjects, illustrationProjects } from "@/config/projects";

function ProjectContainer() {
  const urlParams = useParams();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const project = [...illustrationProjects, ...designProjects].find(
    (i) => i.id === urlParams.id
  );

  const imageUrl =
    params.type === PAGE_IDS.design ? pineTree.src : butterfly.src;

  return (
    <Layout headerConfig={{ currentPage: params.type as Page }}>
      <div className={styles.overlayer} />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>{`.·. ${
          params.title || "Untitled"
        } .·.`}</h1>
        <div className={styles.imageContainer}>
          {project ? (
            <Image
              src={project.imageUrl}
              alt={params.title || "Project Image"}
              width={800}
              height={600}
            />
          ) : (
            <p>Image not found</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default ProjectContainer;
