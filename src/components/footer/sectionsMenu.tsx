import Link from "next/link";

export default function SectionsMenu() {
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
        <h4 className="text-sm font-semibold mb-2 uppercase">Sobre mi</h4>
        <ul className="space-y-1 text-base">
          <li><Link href="/acerca">¿Nos conocemos?</Link></li>
        </ul>
      </div>
    </div>
  );
}
