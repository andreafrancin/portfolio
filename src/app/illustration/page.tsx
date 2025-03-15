"use client";
import React from "react";
import { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import { illustrationProjects } from "../../config/projects";
import ProjectsContainer from "../../components/projects";
import { useRouter } from "next/navigation";

function IllustrationContainer() {
  const router = useRouter();

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
      data={illustrationProjects}
      title=".·. Art .·."
      onClick={onClick}
    />
  );
}

export default IllustrationContainer;
