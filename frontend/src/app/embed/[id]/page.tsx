import { api } from "@/services/api";
import EmbeddableViewer from "@/components/EmbeddableViewer";

interface EmbedPageProps {
  params: {
    id: string;
  };
}

async function getProjectData(projectId: string) {
  const project = await api.getProject(projectId);
  return project;
}

export default async function EmbedPage({ params }: EmbedPageProps) {
  const project = await getProjectData(params.id);
  const imageUrls = project.images.map((image) => image.url);

  return (
    <html>
      <body>
        <EmbeddableViewer projectId={params.id} images={imageUrls} />
      </body>
    </html>
  );
}
