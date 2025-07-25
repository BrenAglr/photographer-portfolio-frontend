"use client"

import AcercaDatos from "@/components/acerca/acercaDatos";
import AcercaFrase from "@/components/acerca/acercaFrase";
import AcercaIntro from "@/components/acerca/acercaIntro";
import Image from "next/image";



const AcercaPage = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col lg:flex-row px-8 py-8 gap-12 relative bg-cover bg-center bg-amber-100">
       <Image
            src="/photos/decorativa.jpg"
            alt="Fondo"
            fill
            className="object-cover object-center z-0"
            priority
          />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 space-y-20">
            <AcercaIntro />
            <AcercaDatos />
            <AcercaFrase />
        </div>
    </section>
  );
}

export default AcercaPage