"use client"

import React, { useState, useEffect } from "react";
import SectionsMenu from "./sectionsMenu";
import ContactInfo from "./contactInfo";


export const Footer: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-chocolate text-wheat px-6 pt-12 pb-12">
      {/* Secciones principales */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
        {/* Servicios (colapsable en mobile) */}
        <div className="w-full lg:w-1/2">
          <div className="lg:hidden mb-4">
            <button
              className="text-wheat px-2 py-2 underline"
              onClick={() => setShowServices(!showServices)}
            >
              Información
            </button>
          </div>

          {isClient && showServices && (
            <div className="lg:hidden">
              <SectionsMenu />
            </div>
          )}

          <div className="hidden lg:block">
            <SectionsMenu />
          </div>
        </div>

        {/* Contacto */}
        <div className="w-full lg:w-1/2">
          <ContactInfo />
        </div>
      </div>

    </footer>
  );
}

export default Footer