import React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 gap-8 py-20 md:py-12"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-pink-400">Saishree L</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl">
          Front-End Developer | React Developer
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            to="projects"
            smooth
            duration={500}
            className="bg-pink-400 px-5 py-2 rounded-lg shadow-lg hover:bg-pink-500 transition duration-300 cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="bg-gray-700 px-5 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=1YASHlciLv8wFnL1mWSZHIF7u4k0yBTDv"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 px-5 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src="/images/profile.jpg"
          alt="Saishree L"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-pink-400"
        />
      </div>
    </section>
  );
}
