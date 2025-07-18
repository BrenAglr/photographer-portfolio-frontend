"use client";
// intefaces
import { IPhotos } from "@/interfaces/IPhotos";
// instalaciones
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface Props {
  section: string;
  group: string;
  images: IPhotos[];
  displayName:string;
}

export const GroupPreview: React.FC<Props> = ({ section, group, images, displayName }) => {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!hovering) {
      timeoutRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000); // cada 4 segundos
    }

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [hovering, images?.length]);

  const getRotatedImages = () => {
    const rotated = [];
    for (let i = 0; i < 3; i++) {
      rotated.push(images[(index + i) % images.length]);
    }
    return rotated;
  };

  const [first, second, third] = getRotatedImages();

 return (
  <Link href={`/sections/${section}/${group}`}>
  <div
    className="mb-10 cursor-pointer group"
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
  >
    <h2 className="text-2xl text-chocolate font-semibold mb-4 transition">
      {displayName}
    </h2>

    {/* Desktop: 3 imágenes */}
    <div className="hidden md:grid grid-cols-3 gap-4 items-stretch transition duration-300 hover:scale-105">
      <div className="relative col-span-2 rounded-lg overflow-hidden aspect-[3/2]">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={`img-${i}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 rounded-lg ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {second && (
          <img
            src={second.url}
            alt="img-2"
            className="w-full object-cover rounded-lg aspect-[3/2]"
          />
        )}
        {third && (
          <img
            src={third.url}
            alt="img-3"
            className="w-full object-cover rounded-lg aspect-[3/2]"
          />
        )}
      </div>
    </div>

    {/* Mobile: solo una imagen (slideshow sigue activo) */}
    <div className="md:hidden relative rounded-lg overflow-hidden aspect-[3/2] transition duration-300 hover:scale-105">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.url}
          alt={`img-${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 rounded-lg ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  </div>
</Link>

  );
};
