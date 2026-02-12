import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
 <nav className="bg-white border-b border-gray-200 z-50">
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-slate-900">Saishree L</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                className="text-gray-700 hover:text-slate-900 cursor-pointer transition"
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
        <ul className="md:hidden flex flex-col items-center bg-gray-50 space-y-6 py-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#d3ae7f] cursor-pointer transition duration-300"
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
