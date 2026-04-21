import React from "react";

const skills = [
  {
    title: "Frontend",
    icon: "⚛️",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "State Management",
    icon: "🔄",
    items: ["Redux", "Context API", "React Hooks"],
  },
  {
    title: "Styling & UI",
    icon: "🎨",
    items: ["Tailwind CSS", "Material UI (MUI)", "Responsive Design", "Figma-to-Code"],
  },
  {
    title: "Tools & Workflow",
    icon: "🛠️",
    items: ["Git & GitHub", "Postman", "Swagger", "Agile Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs uppercase tracking-[0.25em] text-[#d3ae7f] mb-3 text-center font-semibold">
          Expertise
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#d3ae7f] hover:shadow-md transition duration-300 overflow-hidden"
            >
              {/* Accent bar on hover */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#d3ae7f] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-bold text-slate-900">{skill.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 font-medium group-hover:border-[#e6c79d] transition duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}