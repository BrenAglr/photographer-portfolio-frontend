// components/ImageModal.tsx
"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  imgUrl: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ImageModal: React.FC<Props> = ({ imgUrl, onClose, onPrev, onNext }) => {
  // ESC para cerrar
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  // Evitar que los botones de navegación cierren el modal al hacer clic
  const handleNavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] p-4"
      >
        <img
          src={imgUrl}
          alt="fullscreen-img"
          className="max-h-[80vh] w-auto object-contain rounded-lg"
        />
      </div>

      {/* Cerrar (X) en la esquina superior derecha */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-wheat hover:text-powder z-50"
      >
        <X size={30} />
      </button>

      {/* Botones de navegación en los costados de la pantalla */}
      <button 
        onClick={(e) => { handleNavClick(e); onPrev(); }} 
        className="absolute top-1/2 left-4 -translate-y-1/2 text-wheat hover:text-powder z-50"
      >
        <ChevronLeft size={40} />
      </button>
      <button 
        onClick={(e) => { handleNavClick(e); onNext(); }} 
        className="absolute top-1/2 right-4 -translate-y-1/2 text-wheat hover:text-powder z-50"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
};
