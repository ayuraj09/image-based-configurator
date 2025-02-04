import { use } from "react";
// import { api } from "../../../services/api";
import axios from "axios";
import EmbeddableViewer from "../../../components/EmbeddableViewer";

interface EmbedPageProps {
  params: {
    projectId: string;
  };
}

async function getProjectData(projectId: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const response = await axios.get(`${baseUrl}/api/projects/${projectId}`);
  return response.data;
}

export default function EmbedPage({ params }: EmbedPageProps) {
  const resolvedParams = use(Promise.resolve(params));
  const project = use(getProjectData(resolvedParams.projectId));
  const imageUrls = project.images.map((image) => image.url);
  console.log(imageUrls);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <EmbeddableViewer
        projectId={resolvedParams.projectId}
        images={imageUrls}
      />
    </div>
  );
}
