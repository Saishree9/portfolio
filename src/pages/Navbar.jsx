import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-400">Saishree L</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                className="hover:text-pink-400 cursor-pointer transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 space-y-6 py-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-400 cursor-pointer transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
