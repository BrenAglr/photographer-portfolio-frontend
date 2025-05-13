"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const sections = [
    { slug: "eventos-sociales", label: "Eventos Sociales" },
    { slug: "naturaleza", label: "Naturaleza" },
    { slug: "foto-producto", label: "Foto Producto" },
    { slug: "sesiones", label: "Sesiones de Fotos" },
  ];

  return (
    <nav className="bg-powder text-chocolate shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <div className="flex items-center">
            <img
              src="/photos/cisa.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center relative">
          <Link href="/" className="hover:text-wheat transition">
            Inicio
          </Link>
          <Link href="/acerca" className="hover:text-wheat transition">
            Acerca de mí
          </Link>
          <Link href="/contacto" className="hover:text-wheat transition">
            Contacto
          </Link>

          {/* Secciones dropdown (clic + animación) */}
          <div className="relative">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="hover:text-wheat transition"
            >
              Secciones ▼
            </button>

            <div
              className={`absolute left-0 mt-2 w-48 bg-powder border rounded-xl shadow-lg z-10 origin-top transition-all duration-200 ease-out ${
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
                  className={`block px-4 py-2 transition-colors hover:bg-wheat hover:text-powder ${
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
          className={`md:hidden focus:outline-none ${
            isMenuOpen ? "text-wheat" : "text-chocolate"
          }`}
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
          <Link href="/acerca" className="block hover:text-wheat transition">
            Acerca de mí
          </Link>
          <Link href="/contacto" className="block hover:text-wheat transition">
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
