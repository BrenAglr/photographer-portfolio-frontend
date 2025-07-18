// components/GalleryGrid.tsx
import { IPhotos } from "@/interfaces/IPhotos";

interface Props {
  images: IPhotos[];
  onImageClick: (index: number) => void;
}

export const GalleryGrid: React.FC<Props> = ({ images, onImageClick }) => {
  return (
    <div className="px-4 pb-8">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={`img-${i}`}
            onClick={() => onImageClick(i)}
            className="mb-4 w-full rounded-lg break-inside-avoid shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

