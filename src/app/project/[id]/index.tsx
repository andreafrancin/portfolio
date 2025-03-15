"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Layout, { Page } from "../../../components/layout";
import { PAGE_IDS } from "../../../config/variables";
import styles from "./index.module.scss";
import pineTree from "../../../assets/images/background/pine-tree.jpg";
import butterfly from "../../../assets/images/background/butterfly.jpg";
import Image from "next/image";
import { designProjects, illustrationProjects } from "@/config/projects";

const ClientSideProjectContainer = ({ params }: { params: any }) => {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());

  const [id, setId] = useState("");

  useEffect(() => {
    awaitParams();
  }, []);

  const awaitParams = useCallback(async () => {
    const awaitedParams = await params;
    setId(awaitedParams.id);
  }, [params]);

  const project = [...illustrationProjects, ...designProjects].find(
    (i) => i.id === id
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
};

export default ClientSideProjectContainer;
