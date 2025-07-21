import { SectionGalleryClient } from "@/components/sectionGalleryClient";

export default function SectionGallery({
  params,
  searchParams, // Añade esto aunque no lo uses
}: {
  params: { section: string };
  searchParams?: { [key: string]: string | string[] | undefined };
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