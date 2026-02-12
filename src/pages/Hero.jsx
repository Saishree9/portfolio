import React from "react";
import { Link } from "react-scroll";
import img from "../assets/myImg1.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 gap-8 py-20"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight mt-10">
          Hi, I'm <span className="text-[#d3ae7f]">Saishree L</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-600">
          Front-End Developer with 2+ years of experience building
          high-performance React applications and scalable UI systems.
          Passionate about clean architecture, performance optimization, and
          user-focused design.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            to="projects"
            smooth
            duration={500}
           className="px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-700 transition"

          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="px-5 py-2 rounded-lg shadow-lg border border-[#FAEBD7] text-[#d3ae7f] hover:scale-105 transition duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=16ILIgqI3qIupSnaElGYP6_YaKC9Bc3He"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg shadow-lg border border-[#FAEBD7] text-[#d3ae7f] hover:scale-105 transition duration-300 cursor-pointer"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={img}
          alt="Saishree L"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-[#FAEBD7]"
        />
      </div>
    </section>
  );
}
