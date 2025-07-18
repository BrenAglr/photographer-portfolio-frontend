"use client";

import Link from "next/link";

export default function contactButton() {
  return (
    <Link
        href="/contacto"
        className="inline-block px-6 py-2 rounded-full text-white bg-white/10 border border-white hover:bg-white/20 transition-all duration-300"
    >
        Charlemos
    </Link>
  );
}
