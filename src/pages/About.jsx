import React from "react";
import img from "../assets/myImg2.jpg";

const highlights = [
  { label: "React.js & ES6+", sub: "Core expertise" },
  { label: "Healthcare & Finance SaaS", sub: "Domain experience" },
  { label: "CGPA 9.3 — Civil Engg.", sub: "Analytical foundation" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left Image */}
        <div className="flex-1 relative hidden md:block">
          <div className="absolute -top-6 -left-6 w-48 h-48 rounded-2xl bg-[#f0dfc0] -z-10" />
          <img
            src={img}
            alt="About Saishree"
            className="rounded-2xl shadow-lg w-full max-w-sm mx-auto relative z-10"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-slate-100 -z-10" />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d3ae7f] mb-3 font-semibold">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
            Building Scalable &<br />User-Focused Web Apps
          </h2>

          <p className="text-gray-500 text-base leading-8 mb-4">
            I'm a{" "}
            <span className="font-semibold text-slate-900">
              Front-End Developer with 2+ years of experience
            </span>{" "}
            specializing in React.js — building responsive dashboards, integrating REST APIs, and architecting modular UI systems.
          </p>

          <p className="text-gray-500 text-base leading-8 mb-8">
            I've shipped production products across{" "}
            <span className="font-semibold text-[#c49a5a]">healthcare SaaS</span> (OPD management, multi-speciality platforms) and{" "}
            <span className="font-semibold text-[#c49a5a]">finance automation</span> (billing, invoicing). My{" "}
            <span className="font-semibold text-slate-900">Civil Engineering background (CGPA 9.3)</span>{" "}
            gives me a systems-thinking edge — I build things that are not just functional, but maintainable and scalable.
          </p>

          {/* Highlight chips */}
          <div className="flex flex-col gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#d3ae7f] shrink-0" />
                <span className="text-sm font-semibold text-slate-900">{h.label}</span>
                <span className="text-xs text-gray-400">— {h.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}