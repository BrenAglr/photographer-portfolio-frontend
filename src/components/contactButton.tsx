"use client";

import Link from "next/link";
import React from "react";

export const contactButton: React.FC = () => {
  return (
    <Link
        href="/contacto"
        className="inline-block px-6 py-2 rounded-full text-white bg-white/10 border border-white hover:bg-white/20 transition-all duration-300"
    >
        Charlemos
    </Link>
  );
}

export default contactButton