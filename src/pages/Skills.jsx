import React, { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiAxios, SiTailwindcss, SiMui, SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaFigma } from "react-icons/fa";

// Main categories with details
const skillsData = [
  {
    name: "React JS",
    icon: <FaReact size={40} />,
    details: [
      "React Hooks (useState, useEffect, useContext)",
      "React Router DOM",
      "Component Lifecycle & Virtual DOM",
    ],
  },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJsSquare size={40} />,
    details: [
      "Async / Await & Promises",
      "Fetch API",
      "Closures & Arrow Functions",
      "Event Loop",
    ],
  },
  {
    name: "Styling & UI",
    icon: <SiTailwindcss size={40} />,
    details: [
      "Tailwind CSS",
      "Material UI (MUI)",
      "Responsive Design (Flexbox & Grid)",
      "HTML5 / CSS3",
    ],
  },
  // {
  //   name: "State Management",
  //   icon: <SiRedux size={40} />,
  //   details: ["Redux", "Context API", "Formik + Yup (form validation)"],
  // },
  {
    name: "API Integration",
    icon: <SiAxios size={40} />,
    details: ["Axios", "REST APIs", "Swagger (API testing)"],
  },
  // {
  //   name: "Backend Basics",
  //   icon: <FaNodeJs size={40} />,
  //   details: ["Node.js", "Express.js", "MongoDB"],
  // },
  {
    name: "Tools & Workflow",
    icon: <FaGithub size={40} />,
    details: ["Git & GitHub", "Deployment (Vercel)"],
  },
  {
    name: "Others",
    icon: <FaFigma size={40} />,
    details: ["Figma (UI to Code)", "Canva"],
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-8 px-6 max-w-6xl mx-auto">
      <h2 className="text-lg md:text-3xl font-bold text-center mb-8">Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            onClick={() => setSelectedSkill(skill)}
            className="cursor-pointer p-6 bg-gray-800 rounded-xl hover:bg-[#FAEBD7] hover:text-gray-900 hover:scale-105 transform transition duration-300 shadow-md"
          >
            <div className="flex justify-center mb-3">{skill.icon}</div>
            <p className="font-medium text-sm md:text-base">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-50">
          <div className="bg-[#FAEBD7] rounded-2xl shadow-lg max-w-md w-full p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setSelectedSkill(null)}
            >
              ✖
            </button>
            {/* Modal Content */}
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
              {selectedSkill.icon} {selectedSkill.name}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {selectedSkill.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
