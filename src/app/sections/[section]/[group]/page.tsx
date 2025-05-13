// app/sections/[section]/[group]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPhotosbyGroup } from "@/api/PhotosAPI";
import { GalleryGrid } from "@/components/galleryGrid";
import { BackArrow } from "@/components/backArrow";
import { ImageModal } from "@/components/imagenModal";
import { IPhotos } from "@/interfaces/IPhotos";

export default function GroupPage() {
  const { section, group } = useParams() as { section: string; group: string };
  const [images, setImages] = useState<IPhotos[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (section && group) {
      getPhotosbyGroup(section, group)
        .then(setImages)
        .catch(() => console.error("Error fetching images"));
    }
  }, [section, group]);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((prev) => prev === 0 ? images.length - 1 : (prev ?? 0) - 1);
  const showNext = () => setSelectedIndex((prev) => prev === images.length - 1 ? 0 : (prev ?? 0) + 1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {section && <BackArrow href={`/sections/${section}`} />}
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {decodeURIComponent(group?.replace(/-/g, " "))} {/* Decodificación aquí */}
      </h1>

      <GalleryGrid images={images} onImageClick={(index) => setSelectedIndex(index)} />

      {selectedIndex !== null && (
        <ImageModal
          imgUrl={images[selectedIndex].url}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}
