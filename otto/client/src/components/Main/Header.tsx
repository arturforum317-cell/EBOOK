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
          Artur Mídia
        </Link>

        {/* Nav + CTA alinhados à direita */}
        <div className="hidden md:flex items-center gap-8">

          {/* Menu */}
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="/" className="hover:text-orange-400 transition-colors">início</a>
            <a href="#footer" className="hover:text-orange-400 transition-colors">Contatos</a>
            <a href="/About
            " className="hover:text-orange-400 transition-colors">Sobre</a>
          </nav>

          {/* CTA */}
          <Link
            href="/ban"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md transition-colors"
          >
            Produtos
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="md:hidden bg-gray-800 text-white p-6 space-y-4 absolute top-full left-0 right-0 shadow-lg">
          <a href="#beneficios" className="block py-2 hover:bg-orange-700 transition-colors">Resultados</a>
          <a href="#contato" className="block py-2 hover:bg-orange-700 transition-colors">Contatos</a>
          <a href="Sob" className="block py-2 hover:bg-orange-700 transition-colors">Sobre</a>

          <Link
            href="#comprar"
            className="block bg-green-600 hover:bg-green-700 text-center transition text-white font-semibold px-5 py-2 rounded-md"
          >
            Produtos
          </Link>
        </nav>
      )}
    </header>
  );
}