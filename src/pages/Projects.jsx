import React, { useState } from "react";

const projectsData = [
  // {
  //   name: "Multi-Speciality Healthcare Platform",
  //   tag: "Current Project",
  //   tech: ["React.js", "Tailwind CSS", "REST APIs"],
  //   description:
  //     "A dynamic healthcare platform supporting both clinics and multi-speciality hospitals with role-based access control.",
  //   details: [
  //     "Architected a role-based permission matrix for granular module access control.",
  //     "Implemented dynamic UI rendering based on user roles and permissions.",
  //     "Built scalable dashboards supporting multiple departments and workflows.",
  //   ],
  //   color: "#d3ae7f",
  // },
  {
    name: "OrbitCare – OPD Management Dashboard",
    tag: "Current Project",
    tech: ["React.js", "Tailwind CSS", "REST APIs"],
    description:
      "Medical OPD management system handling patient registration, appointments, and doctor workflows.",
    details: [
      "Built reusable React components for scalable healthcare modules.",
      "Integrated backend services for real-time patient data management.",
      "Developed interfaces for patient registration and appointment scheduling.",
    ],
    color: "#8fa8c8",
  },
  {
    name: "Orbit Billing System",
    tag: "Finance",
    tech: ["React.js", "Tailwind CSS"],
    description:
      "Internal finance tool to generate professional invoices, manage client records, and track payments.",
    details: [
      "Implemented automated GST/tax calculation logic.",
      "Built dynamic PDF invoice generation feature.",
      "Eliminated manual spreadsheet workflows for the finance team.",
    ],
    color: "#a8c4a2",
  },
  {
    name: "Salmara – Dashboard & E-commerce",
    tag: "E-commerce",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "Full-stack e-commerce platform with a role-based admin dashboard for real-time inventory and sales analytics.",
    details: [
      "Developed full-stack inventory and sales management dashboard.",
      "Implemented role-based admin panels and responsive UI components.",
      "Enabled real-time inventory tracking and operational efficiency.",
    ],
    link: "https://salmara.uur.co.in/",
    color: "#c4a8c8",
  },
  // {
  //   name: "BeeBuy – E-commerce Platform",
  //   tag: "E-commerce",
  //   tech: ["React.js", "Tailwind CSS"],
  //   description:
  //     "Mobile-first perfume e-commerce platform focused on seamless navigation and conversion optimization.",
  //   details: [
  //     "Improved user engagement through responsive design.",
  //     "Focused on performance optimization and conversion.",
  //   ],
  //   link: "https://beebuy.in/",
  //   color: "#c8b8a2",
  // },
  // {
  //   name: "Internal Admin Dashboard",
  //   tag: "Admin",
  //   tech: ["React.js", "REST APIs", "Tailwind CSS"],
  //   description:
  //     "Dynamic role-based dashboard with analytics widgets and secure API integrations.",
  //   details: [
  //     "Built structured reporting for improved decision-making.",
  //     "Integrated analytics widgets for faster data visualization.",
  //   ],
  //   color: "#a2b8c8",
  // },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs uppercase tracking-[0.25em] text-[#d3ae7f] mb-3 text-center font-semibold">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
          Selected Projects
        </h2>
        <p className="text-center text-gray-400 text-sm mb-16">
          {projectsData.length} projects across healthcare, finance &amp; e-commerce
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Color bar */}
              <div className="h-1 w-full" style={{ backgroundColor: project.color, opacity: 0.5 }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Tags row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-500 font-medium">
                    {project.tag}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#d3ae7f] hover:underline font-medium"
                    >
                      Live →
                    </a>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {project.name}
                </h3>

                <p className="text-gray-500 text-sm leading-6 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-white border border-gray-200 rounded text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expandable details */}
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="text-xs text-[#c49a5a] font-medium text-left hover:underline"
                >
                  {expanded === index ? "▲ Less" : "▼ Key highlights"}
                </button>

                {expanded === index && (
                  <ul className="mt-3 space-y-2">
                    {project.details.map((d, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-500 leading-5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#d3ae7f] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}