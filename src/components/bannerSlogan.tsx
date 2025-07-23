// components/BannerSlogan.tsx
"use client";

import Image from "next/image";
import ContactButton from "./contactButton";
import React from "react";

export const BannerSlogan: React.FC = () => {
  return (
    <section className="relative w-full min-h-[75vh] border-spacing-2 flex items-center justify-center text-white overflow-hidden -mt-16">
      {/* Fondo */}
      <Image
        src="/photos/fondo2.jpg"
        alt="Fondo"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Capa oscura para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Contenido */}
      <div className="z-20 flex flex-col items-center justify-center text-center space-y-6 px-4">
        {/* Logo */}
        <div className="w-40 md:w-60">
          <Image
            src="/photos/cisaque.png"
            alt="Logo"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Botón */}
        <ContactButton />
      </div>
    </section>
  );
};

export default BannerSlogan;
