// components/GalleryGrid.tsx
import { IPhotos } from "@/interfaces/IPhotos";

interface Props {
  images: IPhotos[];
  onImageClick: (index: number) => void;
}

export const GalleryGrid: React.FC<Props> = ({ images, onImageClick }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 px-4 pb-8">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.url}
          alt={`img-${i}`}
          onClick={() => onImageClick(i)}
          className="w-full rounded-lg mb-4 break-inside-avoid shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
        />
      ))}
    </div>
  );
};
