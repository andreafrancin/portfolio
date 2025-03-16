"use client";

import React, { useCallback, useEffect, useState } from "react";
import Layout, { Page } from "../../../components/layout";
import { PAGE_IDS } from "../../../config/variables";
import styles from "./index.module.scss";
import pineTree from "../../../assets/images/background/pine-tree.jpg";
import butterfly from "../../../assets/images/background/butterfly.jpg";
import { fetchWithLanguage } from "@/utils/fetchWithLanguage";
import Description from "@/components/description";

const ClientSideProjectContainer = ({ params }: { params: any }) => {
  const [id, setId] = useState(null);
  const [data, setData] = useState<any>(null);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const project = await fetchWithLanguage(`project/${id}`);
          setData(project);
        } catch (error) {
          // console.error("Error fetching design projects:", error);
          setHttpError(true);
        }
      };

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    awaitParams();
  }, []);

  const awaitParams = useCallback(async () => {
    const awaitedParams = await params;
    setId(awaitedParams.id);
  }, [params]);

  const imageUrl =
    data?.type === PAGE_IDS.design ? pineTree.src : butterfly.src;

  if (!data) return null;

  return (
    <Layout headerConfig={{ currentPage: data?.type as Page }}>
      <div className={styles.overlayer} />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.container}>
        {httpError ? (
          <h1 className={styles.title}>
            {`.·. Sorry, something went wrong .·.`}
          </h1>
        ) : (
          <>
            <h1 className={styles.title}>
              {`.·. ${data?.title || "Untitled"} .·.`}
            </h1>
            <div className={styles.imageContainer}>
              {data ? (
                <img
                  src={data.image_resources[0].image_url}
                  alt={data.title || "Project Image"}
                />
              ) : (
                <p>Image not found</p>
              )}
            </div>
            {!!data?.description && (
              <div className={styles.descriptionContainer}>
                <Description text={data.description} />
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default ClientSideProjectContainer;
