"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Layout, { Page } from "../../../components/layout";
import { PAGE_IDS } from "../../../config/variables";
import styles from "./index.module.scss";
import pineTree from "../../../assets/images/background/pine-tree.jpg";
import butterfly from "../../../assets/images/background/butterfly.jpg";
import Image from "next/image";
import { designProjects, illustrationProjects } from "@/config/projects";

export async function generateStaticParams() {
  const allProjects = [...designProjects, ...illustrationProjects];

  return allProjects.map((project) => ({
    id: project.id,
  }));
}

function ProjectContainer({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());

  const project = [...illustrationProjects, ...designProjects].find(
    (i) => i.id === params.id
  );

  const imageUrl =
    searchParamsObject.type === PAGE_IDS.design ? pineTree.src : butterfly.src;

  return (
    <Layout headerConfig={{ currentPage: searchParamsObject.type as Page }}>
      <div className={styles.overlayer} />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>{`.·. ${
          searchParamsObject.title || "Untitled"
        } .·.`}</h1>
        <div className={styles.imageContainer}>
          {project ? (
            <Image
              src={project.imageUrl}
              alt={searchParamsObject.title || "Project Image"}
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
