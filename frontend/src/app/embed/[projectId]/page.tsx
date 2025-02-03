"use client";

import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import EmbeddableViewer from "../../../components/EmbeddableViewer";

interface EmbedPageProps {
  params: {
    projectId: string;
  };
}

export default function EmbedPage({ params }: EmbedPageProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const project = await api.getProject(params.projectId);
        if (project.images) {
          setImages(project.images.map((img) => img.url));
        }
        setError(null);
      } catch (err) {
        setError("Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [params.projectId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (images.length === 0) return <div>No images found</div>;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <EmbeddableViewer projectId={params.projectId} images={images} />
    </div>
  );
}
