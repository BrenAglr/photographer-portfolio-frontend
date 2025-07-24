import Link from "next/link";
import React from "react";

export const SectionsMenu: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
      <div>
        <h4 className="text-sm font-semibold mb-2 uppercase">Secciones</h4>
        <ul className="space-y-1 text-base">
          <li><Link href="/sections/Eventos-sociales">Eventos sociales</Link></li>
          <li><Link href="/sections/Naturaleza">Naturaleza</Link></li>
          <li><Link href="/sections/Foto-producto">Foto producto</Link></li>
          <li><Link href="/sections/Sesiones">Sesiones de fotos</Link></li>
          <li><Link href="/sections/Contenido-para-redes">Contenido para redes</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-2 uppercase">Conoce a CISA</h4>
        <ul className="space-y-1 text-base">
          <li><Link href="/about">Sobre mi</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default SectionsMenu