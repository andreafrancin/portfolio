import { designProjects, illustrationProjects } from "@/config/projects";
import ClientSideProjectContainer from "./index";
import { Suspense } from "react";

export async function generateStaticParams() {
  const allProjects = [...designProjects, ...illustrationProjects];

  return allProjects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSideProjectContainer params={params} />;
    </Suspense>
  );
}
