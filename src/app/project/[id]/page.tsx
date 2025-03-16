import Spinner from "@/components/spinner";
import ClientSideProjectContainer from "./index";
import { Suspense } from "react";

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://back.andreafrancin.com/api/projects/"
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const projects = await response.json();

    return projects.map((project: { id: number | string }) => ({
      id: String(project.id),
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default function ProjectPage({ params }: any) {
  return (
    <Suspense fallback={<Spinner />}>
      <ClientSideProjectContainer params={params} />
    </Suspense>
  );
}
