"use client";

import { useEffect, useState } from "react";
import { getPhotosBySection } from "@/api/PhotosAPI";
import { GroupPreview } from "@/components/groupPreview";
import { ISectionPhotos } from "@/interfaces/IPhotos";
import { Loader } from "@/components/loader";

interface Props {
  section: string;
}

export const SectionGalleryClient = ({ section }: Props) => {
  const [data, setData] = useState<ISectionPhotos | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndWaitImages = async () => {
      try {
        const result = await getPhotosBySection(section);
        setData(result);

        // Obtener todas las URLs de imágenes
        const imageUrls = Object.values(result)
          .flatMap((group) => group.images.map((img) => img.url));

        // Esperar a que todas las imágenes terminen de cargar
        await Promise.all(
          imageUrls.map((url) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = url;
              img.onload = resolve;
              img.onerror = resolve; // resolver aunque falle para no bloquear
            });
          })
        );
      } catch (error) {
        console.error("Error al cargar sección o imágenes");
      } finally {
        setLoading(false);
      }
    };

    fetchAndWaitImages();
  }, [section]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader logoSrc="/photos/cisa.png" />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div>
      {Object.entries(data).map(([group, groupData]) => (
        <GroupPreview
          key={group}
          section={section}
          group={group}
          images={groupData.images}
          displayName={groupData.title}
        />
      ))}
    </div>
  );
};
