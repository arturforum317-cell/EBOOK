"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          HoraDeSecar
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Início
            </Link>

            <Link href="#footer" className="hover:text-orange-400 transition-colors">
              Contato
            </Link>

            <Link href="/sobre" className="hover:text-orange-400 transition-colors">
              Sobre
            </Link>
          </nav>

          <Link
            href="/ban"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md transition-colors"
          >
            Produtos
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-gray-800 text-white p-6 space-y-4 absolute top-full left-0 right-0 shadow-lg">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block py-2 hover:bg-orange-700 transition-colors"
          >
            Início
          </Link>

          <Link
            href="/sobre"
            onClick={() => setOpen(false)}
            className="block py-2 hover:bg-orange-700 transition-colors"
          >
            Sobre
          </Link>

          <Link
            href="#footer"
            onClick={() => setOpen(false)}
            className="block py-2 hover:bg-orange-700 transition-colors"
          >
            Contato
          </Link>

          <Link
            href="/ban"
            onClick={() => setOpen(false)}
            className="block bg-green-600 hover:bg-green-700 text-center text-white font-semibold px-5 py-2 rounded-md"
          >
            Produtos
          </Link>
        </nav>
      )}
    </header>
  );
}
