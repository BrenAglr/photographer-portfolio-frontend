import { SectionGalleryClient } from "@/components/sectionGalleryClient";

// Elimina el tipo Props y usa directamente en la función
export default function SectionGallery({
  params,
}: {
  params: { section: string };
}) {
  const { section } = params;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-chocolate text-3xl font-bold mb-6 capitalize">
        {section}
      </h1>
      <SectionGalleryClient section={section} />
    </div>
  );
}