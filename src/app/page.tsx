// app/page.tsx
import { getPhotosHome } from "@/api/PhotosAPI";
import BannerSlogan from "@/components/bannerSlogan";
import { SectionPreview } from "@/components/sectionPreview";
import { IPhotos } from "@/interfaces/IPhotos";

const sections = [
  { slug: "Eventos-sociales", label: "Eventos sociales" },
  { slug: "Naturaleza", label: "Naturaleza" },
  { slug: "Foto-producto", label: "Foto producto" },
  { slug: "Sesiones", label: "Sesiones de fotos" },
  { slug: "Contenido-para-redes", label: "Contenido redes" },
];

export default async function HomePage() {
  const data = await Promise.all(
    sections.map(async (section) => {
      try {
        const images = await getPhotosHome(section.slug);
        return { ...section, images };
      } catch {
        return { ...section, images: [] };
      }
    })
  );

  return (
    <main className="w-full">
      <BannerSlogan />

      <h1 className="text-4xl md:text-6xl text-center font-bold tracking-widest text-wheat my-2">
      </h1>



      {data.map(({ slug, label, images }) => (
        <SectionPreview
          key={slug}
          sectionSlug={slug}
          sectionLabel={label}
          images={images}
        />
      ))}
    </main>
  );
}
