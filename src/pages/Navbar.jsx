import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-base font-bold text-slate-900 tracking-tight">
          Saishree<span className="text-[#d3ae7f]"> L</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                spy
                activeClass="text-slate-900 font-semibold"
                className="text-sm text-gray-500 hover:text-slate-900 cursor-pointer transition duration-200"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile icon */}
        <button
          className="md:hidden text-slate-700 hover:text-slate-900 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="flex flex-col items-center gap-5 py-6">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-gray-600 hover:text-[#d3ae7f] cursor-pointer transition duration-300 font-medium"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}