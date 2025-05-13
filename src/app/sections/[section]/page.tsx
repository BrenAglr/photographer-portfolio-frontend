// app/sections/[section]/page.tsx
// API
import { getPhotosBySection } from "@/api/PhotosAPI";
// COMPONENTS
import { GroupPreview } from "@/components/groupPreview";
// INTERFACES
import { ISectionPhotos } from "@/interfaces/IPhotos";
// instalaciones
import { notFound } from "next/navigation";

interface Props {
  params: { section: string };
}

export default async function SectionGallery({ params }: Props) {
  const { section } = params;

  let data: ISectionPhotos;

  try {
    data = await getPhotosBySection(section); //guardo lo que recibo por la api
  } catch (err) {
    return notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-chocolate text-3xl font-bold mb-6 capitalize">{section.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")}
      </h1>
      {Object.entries(data).map(([group, data]) => (
        <GroupPreview 
          key={group} 
          section={section} 
          group={group} 
          images={data.images}
          displayName={data.title} />
      ))}
    </div>
  );
}
