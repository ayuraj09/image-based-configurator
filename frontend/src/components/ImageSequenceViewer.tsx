"use client";

import React, { useState, useRef, useEffect } from "react";

interface ImageSequenceViewerProps {
  images: string[]; // Array of image URLs
  width?: number;
  height?: number;
}

const ImageSequenceViewer: React.FC<ImageSequenceViewerProps> = ({
  images,
  width = 500,
  height = 500,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      startXRef.current = e.clientX;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startXRef.current !== null && containerRef.current) {
      const deltaX = e.clientX - startXRef.current;

      // Calculate image index based on mouse movement with slower sensitivity
      const pixelsPerImage = 10; // Number of pixels needed to move for one image change
      const indexDelta = Math.floor(Math.abs(deltaX) / pixelsPerImage);

      if (indexDelta > 0) {
        // Calculate new index with proper wrapping
        let newIndex = currentImageIndex + (deltaX > 0 ? 1 : -1);

        // Ensure index stays within bounds
        if (newIndex >= images.length) {
          newIndex = 0;
        } else if (newIndex < 0) {
          newIndex = images.length - 1;
        }

        setCurrentImageIndex(newIndex);
        startXRef.current = e.clientX; // Reset the start position
      }
    }
  };

  const handleMouseUp = () => {
    startXRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative cursor-grab active:cursor-grabbing select-none"
      style={{ width, height }}
    >
      <img
        src={`http://localhost:3001${images[currentImageIndex]}`}
        alt={`Sequence image ${currentImageIndex + 1}`}
        className="absolute top-0 left-0 w-full h-full object-contain"
        draggable={false}
      />
      <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded">
        {currentImageIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSequenceViewer;
