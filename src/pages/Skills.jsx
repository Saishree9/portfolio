import React from "react";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";

const skillsData = [
  { name: "React JS", icon: <FaReact size={40} /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt size={40} /> },
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-8 px-6 max-w-5xl mx-auto">
      <h2 className="text-lg md:text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="p-6 bg-gray-800 rounded-lg hover:bg-pink-500 hover:scale-105 transform transition duration-300"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
