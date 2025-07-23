import { SectionGalleryClient } from "@/components/sectionGalleryClient";
import React from "react";

interface PageProps {
  params: Promise<{ section: string }>;
}

export const SectionGallery: React.FC<PageProps> = async ({params}: PageProps) => {
    const resolvedParams = await params
    const { section } = resolvedParams;

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