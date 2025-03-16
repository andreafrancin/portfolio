import ClientSideProjectContainer from "./index";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function ProjectPage({ params }: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSideProjectContainer params={params} />
    </Suspense>
  );
}
