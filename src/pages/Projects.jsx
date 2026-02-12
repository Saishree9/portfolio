import React from "react";

const projectsData = [
  {
    name: "Orbit Billing System",
    tech: "React.js, Tailwind CSS",
    description:
      "Standalone internal finance tool to generate professional invoices, manage client records, and track payments.",
    impact:
      "Eliminated manual spreadsheet errors and automated tax calculations with dynamic PDF generation.",
  },
  {
    name: "Salmara – Dashboard & E-commerce",
    tech: "React.js, Node.js, MongoDB, Tailwind CSS",
    description:
      "Full-stack e-commerce platform with a role-based admin dashboard for real-time inventory and sales analytics.",
    impact:
      "Enabled real-time inventory tracking and improved operational efficiency.",
    link: "https://salmara.uur.co.in/",
  },

  {
    name: "BeeBuy – E-commerce Platform",
    tech: "React.js, Tailwind CSS",
    description:
      "Mobile-first perfume e-commerce platform focused on seamless navigation and conversion optimization.",
    impact:
      "Improved user engagement through responsive design and performance optimization.",
    link: "https://beebuy.in/",
  },
  {
    name: "Internal Admin Dashboard",
    tech: "React.js, REST APIs, Tailwind CSS",
    description:
      "Developed a dynamic role-based dashboard with analytics widgets and secure API integrations.",
    impact:
      "Improved decision-making with structured reporting and faster data visualization.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-[#d3ae7f] mb-2 text-center">
          Portfolio
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300"
            >
              {/* Accent Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#d3ae7f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl"></div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {project.name}
              </h3>

              <p className="text-sm text-[#d3ae7f] font-medium mb-4">
                {project.tech}
              </p>

              <p className="text-gray-600 mb-3 leading-7">
                {project.description}
              </p>

              <p className="text-gray-500 text-sm mb-5">
                <span className="font-semibold text-slate-900">Impact:</span>{" "}
                {project.impact}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-900 font-medium hover:text-[#d3ae7f] transition"
                >
                  View Live →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
