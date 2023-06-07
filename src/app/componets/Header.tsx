"use client";

import Link from "next/link";
import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import CrossIcon from "./CrossIcon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Jordan&apos;s Blog
            </Link>
          </div>
          <div className="hidden md:block">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="inline-block py-2 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? <CrossIcon /> : <HamburgerIcon />}
            </button>
            {isMenuOpen && (
              <div className="absolute top-14 right-5 bg-gray-100 text-base z-50 list-none divide-y divide-gray-100 rounded shadow">
                <ul className="py-1" aria-labelledby="dropdown">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-lg hover:bg-gray-200 text-gray-700 block px-4 py-2">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
