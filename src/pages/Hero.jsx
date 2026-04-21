import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import img from "../assets/myImg1.jpg";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-20 gap-12 py-24 overflow-hidden bg-white"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#faf3e8] opacity-60 blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#faf3e8] opacity-40 blur-2xl -z-10 -translate-x-1/3 translate-y-1/4" />

      {/* Left Content */}
      <div
        className="flex-1 flex flex-col items-center md:items-start"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <span className="text-xs uppercase tracking-[0.25em] text-[#d3ae7f] font-semibold mb-4">
          Front-End Developer · React.js
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-[1.1] text-slate-900">
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="text-[#d3ae7f]">Saishree L</span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#d3ae7f] opacity-30 rounded-full" />
          </span>
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-xl text-gray-500 leading-8">
          2+ years building high-performance React applications and scalable UI
          systems — from healthcare SaaS dashboards to finance automation tools.
          Passionate about clean architecture and user-focused design.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <Link
            to="projects"
            smooth
            duration={500}
            className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition font-medium cursor-pointer shadow-md hover:shadow-lg"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="px-6 py-3 rounded-lg border border-[#e6c79d] text-[#c49a5a] bg-[#faf3e8] hover:bg-[#f5e8d0] transition font-medium cursor-pointer"
          >
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=16ILIgqI3qIupSnaElGYP6_YaKC9Bc3He"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-200 text-slate-700 hover:border-[#d3ae7f] hover:text-[#c49a5a] transition font-medium"
          >
            ↓ Resume
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-10 flex gap-8 text-center md:text-left">
          {[["2+", "Years Experience"], ["5+", "Projects Shipped"], ["2", "Industries"]].map(([num, label]) => (
            <div key={label}>
              <p className="text-2xl font-bold text-slate-900">{num}</p>
              <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div
        className="flex-1 flex justify-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#d3ae7f] opacity-10 scale-110 blur-xl" />
          <img
            src={img}
            alt="Saishree L"
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-black"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-2 -right-2 bg-[#a1e69d] border border-black rounded-xl px-3 py-2 shadow-md text-xs font-semibold text-slate-700 whitespace-nowrap">
            ⚡ Open to Work
          </div>
        </div>
      </div>
    </section>
  );
}