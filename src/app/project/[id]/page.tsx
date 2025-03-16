import ClientSideProjectContainer from "./index";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [];
}

export default function ProjectPage({ params }: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSideProjectContainer params={params} />
    </Suspense>
  );
}
