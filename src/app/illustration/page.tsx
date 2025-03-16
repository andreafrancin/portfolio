"use client";
import React, { useEffect, useState } from "react";
import { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import ProjectsContainer from "../../components/projects";
import { useRouter } from "next/navigation";
import { fetchWithLanguage } from "@/utils/fetchWithLanguage";

function IllustrationContainer() {
  const router = useRouter();
  const [projects, setProjects] = useState<any>(null);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchWithLanguage("projects?type=illustration");
        setProjects(data);
      } catch (error) {
        setHttpError(true);
        setProjects([]);
        console.error("Error fetching illustration projects:", error);
      }
    };

    loadProjects();
  }, []);

  const onClick = (project: any) => {
    router.push(
      `/project/${project.id}?type=${
        PAGE_IDS.illustration
      }&title=${encodeURIComponent(project.title)}&id=${project.id}`
    );
  };

  return (
    <ProjectsContainer
      pageId={PAGE_IDS.illustration as Page}
      data={projects}
      title=".·. Art .·."
      httpError={httpError}
      onClick={onClick}
    />
  );
}

export default IllustrationContainer;
