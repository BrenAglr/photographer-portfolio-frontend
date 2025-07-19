// src/app/sections/[section]/page.tsx

import { SectionGalleryClient } from "@/components/sectionGalleryClient";

type Props = {
  params: {
    section: string;
  };
};

export default function SectionGallery({ params }: Props) {
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
