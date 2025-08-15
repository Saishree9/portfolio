import React from "react";
import img from "../assets/myImg2.jpg"

export default function About() {
  return (
    <section id="about" className="md:py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Left Image */}
      <div className="flex-1">
        <img
          src={img}
          alt="About Saishree"
          className="rounded-lg shadow-lg hidden sm:block"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <h2 className="text-lg md:text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-sm md:text-lg leading-8">
          Front-End Developer with 1.5+ years of experience in React.js, JavaScript, and Tailwind CSS.
          Skilled in building responsive dashboards, integrating APIs, and familiar with the MERN stack.
          Passionate about delivering smooth, user-focused experiences and continuously learning new technologies.
        </p>
      </div>
    </section>
  );
}
