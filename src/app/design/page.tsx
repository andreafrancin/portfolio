"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import ProjectsContainer from "../../components/projects";
import { fetchWithLanguage } from "@/utils/fetchWithLanguage";

function DesignContainer() {
  const router = useRouter();
  const [projects, setProjects] = useState<any>(null);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchWithLanguage("projects?type=design");
        setProjects(data);
      } catch (error) {
        setHttpError(true);
        console.error("Error fetching design projects:", error);
      }
    };

    loadProjects();
  }, []);

  const onClick = useCallback((project: any) => {
    router.push(
      `/project/${project.id}?type=${
        PAGE_IDS.design
      }&title=${encodeURIComponent(project.title)}&id=${project.id}`
    );
  }, []);

  return (
    <ProjectsContainer
      pageId={PAGE_IDS.design as Page}
      data={projects}
      title=".·. Projects .·."
      httpError={httpError}
      onClick={onClick}
    />
  );
}

export default DesignContainer;
