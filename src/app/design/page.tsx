"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import { designProjects } from "../../config/projects";
import ProjectsContainer from "../../components/projects";

function DesignContainer() {
  const router = useRouter();

  const onClick = (project: any) => {
    router.push(
      `/project/${project.id}?type=${
        PAGE_IDS.design
      }&title=${encodeURIComponent(project.title)}&id=${project.id}`
    );
  };

  return (
    <ProjectsContainer
      pageId={PAGE_IDS.design as Page}
      data={designProjects}
      title=".·. Projects .·."
      onClick={onClick}
    />
  );
}

export default DesignContainer;
