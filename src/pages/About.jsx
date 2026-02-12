import React from "react";
import img from "../assets/myImg2.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={img}
            alt="About Saishree"
            className="rounded-2xl shadow-md w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          
          {/* Section Label with Accent */}
          <p className="text-sm uppercase tracking-widest text-[#d3ae7f] mb-2 font-medium">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
            Building Scalable & User-Focused Web Applications
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            I am a{" "}
            <span className="font-semibold text-slate-900">
              Front-End Developer with 2+ years of experience
            </span>{" "}
            specializing in React.js and modern JavaScript (ES6+). I take
            complete ownership of the{" "}
            <span className="font-semibold text-[#d3ae7f]">
              Software Development Life Cycle (SDLC)
            </span>{" "}
            — from architecture design to deployment.
          </p>

          <p className="text-gray-600 text-lg leading-8">
            With a background in{" "}
            <span className="font-semibold text-slate-900">
              Civil Engineering (CGPA 9.3)
            </span>
            , I bring structured problem-solving, analytical thinking, and
            system-level clarity into software development — building solutions
            that are not just functional, but scalable and efficient.
          </p>

          {/* Experience Badge with Soft Beige Background */}
          <div className="mt-8">
            <span className="inline-block px-6 py-2 bg-[#faf3e8] border border-[#e6c79d] rounded-full text-sm font-medium text-slate-900 shadow-sm">
              2+ Years Experience
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
