import { SectionGalleryClient } from "@/components/sectionGalleryClient";

export const SectionGallery: React.FC<{params: { section: string }}> = ({params}) => {
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

export default SectionGallery