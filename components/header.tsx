"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white text-green-600  sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="text-center text-5xl font-[family-name:var(--font-name-sans)] pt-1">
              LS
            </span>
          </Link>
          <button
            className="md:hidden block text-green-600 border rounded p-1 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#about" className="hover:text-green-300">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="#competitions" className="hover:text-green-300">
                  Wettbewerbe
                </Link>
              </li>
              <li>
                <Link href="#my-work" className="hover:text-green-300">
                  My Work
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="hover:text-green-300">
                  Sponsoren
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-green-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="block hover:text-green-300"
                  onClick={closeMenu}
                >
                  Über mich
                </Link>
              </li>
              <li>
                <Link
                  href="#competitions"
                  className="block hover:text-green-300"
                  onClick={closeMenu}
                >
                  Wettbewerbe
                </Link>
              </li>
              <li>
                <Link
                  href="#my-work"
                  className="block hover:text-green-300"
                  onClick={closeMenu}
                >
                  My Work
                </Link>
              </li>
              <li>
                <Link
                  href="#sponsors"
                  className="block hover:text-green-300"
                  onClick={closeMenu}
                >
                  Sponsoren
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block hover:text-green-300"
                  onClick={closeMenu}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
