import ClientSideProjectContainer from "./index";
import { Suspense } from "react";

export async function generateStaticParams() {
  const projects = await fetch("https://back.andreafrancin.com/projects");
  const projectsData = await projects.json();

  return projectsData.map((project: { id: string }) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSideProjectContainer params={params} />
    </Suspense>
  );
}
