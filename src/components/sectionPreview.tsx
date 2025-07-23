"use client";

import { IPhotos } from "@/interfaces/IPhotos";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Props {
  sectionSlug: string;
  sectionLabel: string;
  images: IPhotos[];
}

export const SectionPreview: React.FC<Props> = ({ sectionSlug, sectionLabel, images }) => {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cambio automático de imagen cada 4 segundos
  useEffect(() => {
    if (!hovering && images.length > 1) {
      timeoutRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [hovering, images.length]);

  return (
    <div className="w-full border-b border-wheat">

    <Link href={`/sections/${sectionSlug}`}>
      <div
        className="relative w-full h-64 md:h-96 overflow-hidden group cursor-pointer transition-transform"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Slideshow con transición */}
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={`section-${sectionSlug}-img-${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Glass effect solo al hover */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-100 transition-all duration-500 z-20" />

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <h2 className="text-white text-2xl md:text-4xl font-bold tracking-wide opacity-100 transition-opacity duration-500 text-center px-4">
            {sectionLabel}
          </h2>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default SectionPreview