"use client";

import React from "react";
import ImageSequenceViewer from "./ImageSequenceViewer";

interface EmbeddableViewerProps {
  projectId: string;
  images: string[];
}

const EmbeddableViewer: React.FC<EmbeddableViewerProps> = ({
  projectId,
  images,
}) => {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-gray-100">
      <ImageSequenceViewer images={images} width={800} height={600} />
    </div>
  );
};

export default EmbeddableViewer;
