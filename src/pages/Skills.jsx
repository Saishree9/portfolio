import React from "react";

const skills = [
  {
    title: "Frontend",
    items:
      "React.js (Hooks, Context API, Redux), JavaScript (ES6+), HTML5, CSS3",
  },
  {
    title: "Backend & Database",
    items:
      "Node.js, Express.js, MongoDB, RESTful API Design",
  },
  {
    title: "Styling & UI",
    items:
      "Tailwind CSS, Material UI (MUI), Responsive Design, Figma-to-Code",
  },
  {
    title: "Tools & Workflow",
    items:
      "Git, GitHub, Postman, Swagger, Agile Scrum",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-[#d3ae7f] mb-2 text-center">
          Expertise
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#d3ae7f] rounded-l-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {skill.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {skill.items}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
