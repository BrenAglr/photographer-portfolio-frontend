"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    if (!isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHome]);

  const navBgClass = isHome
    ? "bg-transparent"
    : scrolled
    ? "bg-transparent"
    : "bg-chocolate";

  const sections = [
    { slug: "Eventos-sociales", label: "Eventos sociales" },
    { slug: "Naturaleza", label: "Naturaleza" },
    { slug: "Foto-producto", label: "Foto producto" },
    { slug: "Sesiones", label: "Sesiones de fotos" },
    { slug: "Contenido-para-redes", label: "Contenido para redes" },
  ];

  const desktopLinkStyle =
    "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-wheat after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav
      className={`${navBgClass} backdrop-blur-[2px] text-wheat shadow-lg fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <div className="flex items-center">
            <img src="/photos/cisaque.png" alt="Logo" className="h-8 w-auto" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center relative text-sm md:text-base">
          <Link href="/" className={desktopLinkStyle}>
            Inicio
          </Link>
          <Link href="/about" className={desktopLinkStyle}>
            Acerca de mí
          </Link>
          <Link href="/contact" className={desktopLinkStyle}>
            Contacto
          </Link>

          {/* Dropdown: Secciones */}
          <div className="relative">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className={`${desktopLinkStyle} transition`}
            >
              Secciones ▼
            </button>

            <div
              className={`absolute -left-3 mt-2 w-56 bg-wheat border rounded-xl shadow-lg z-10 origin-top transition-all duration-200 ease-out ${
                isSubMenuOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {sections.map(({ slug, label }, index) => (
                <Link
                  key={slug}
                  href={`/sections/${slug}`}
                  onClick={() => setIsSubMenuOpen(false)}
                  className={`block px-4 py-2 text-chocolate transition-colors hover:bg-chocolate hover:text-wheat ${
                    index === 0 ? "rounded-t-xl" : ""
                  } ${index === sections.length - 1 ? "rounded-b-xl" : ""}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile hamburger icon */}
        <button
          className="md:hidden text-wheat focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="px-4 py-2 space-y-2 md:hidden animate-fade-in-down">
          <Link href="/" className="block hover:text-wheat transition">
            Inicio
          </Link>
          <Link href="/about" className="block hover:text-wheat transition">
            Acerca de mí
          </Link>
          <Link href="/contact" className="block hover:text-wheat transition">
            Contacto
          </Link>

          <button
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            className="w-full text-left hover:text-wheat transition"
          >
            Secciones {isSubMenuOpen ? "▲" : "▼"}
          </button>

          {isSubMenuOpen && (
            <div className="ml-4 space-y-1 animate-fade-in-down">
              {sections.map(({ slug, label }) => (
                <Link
                  key={slug}
                  href={`/sections/${slug}`}
                  className="block hover:text-wheat transition"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSubMenuOpen(false);
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
