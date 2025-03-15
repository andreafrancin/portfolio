import { designProjects, illustrationProjects } from "@/config/projects";
import ClientSideProjectContainer from "./index";

export async function generateStaticParams() {
  const allProjects = [...designProjects, ...illustrationProjects];

  return allProjects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ClientSideProjectContainer id={params.id} />;
}
