import React, { useState } from "react";

const experienceData = [
  {
    role: "Front-End Developer",
    company: "Orbit Core Tech",
    date: "June 2024 – Present",
    type: "Full-time",
    details: [
      "Developed and optimized 5+ production-grade responsive interfaces using React.js and Tailwind CSS, improving cross-device compatibility and UI performance.",
      "Built an internal Finance & Invoice Management System UI, enabling users to generate invoices, track payments, and manage client data through an intuitive dashboard.",
      "Designed reusable and modular React components, improving maintainability and reducing development time for new features.",
      "Collaborated within an Agile Scrum team, participating in sprint planning, UI reviews, and iterative feature development.",
    ],
  },
  {
    role: "Software Developer Trainee",
    company: "Agile Health Technologies Pvt. Ltd.",
    date: "Dec 2023 – May 2024",
    type: "Trainee",
    details: [
      "Built modular and reusable React functional components using Redux for state management.",
      "Assisted in developing healthcare dashboards for patient and operational workflows.",
      "Tested and debugged APIs using Swagger, reducing backend integration errors.",
    ],
  },
  {
    role: "Junior Designer",
    company: "Ipools India Pvt. Ltd.",
    date: "Oct 2022 – May 2023",
    type: "Full-time",
    details: [
      "Designed responsive UI layouts and assisted in frontend development for web applications.",
      "Collaborated with developers to translate Figma designs into functional UI components.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experienceData[active];

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs uppercase tracking-[0.25em] text-[#d3ae7f] mb-3 text-center font-semibold">
          Career
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Experience
        </h2>

        <div className="flex flex-col md:flex-row gap-6">

          {/* Left: Tab list */}
          <div className="md:w-56 flex flex-col gap-2">
            {experienceData.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition duration-200 ${
                  active === i
                    ? "bg-white border-[#d3ae7f] text-slate-900 shadow-sm"
                    : "border-transparent text-gray-400 hover:text-slate-700"
                }`}
              >
                <p className="font-semibold text-inherit leading-tight">{e.company}</p>
                <p className={`text-xs mt-0.5 ${active === i ? "text-[#d3ae7f]" : "text-gray-400"}`}>{e.date.split("–")[0].trim()}</p>
              </button>
            ))}
          </div>

          {/* Right: Detail panel */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                <p className="text-[#d3ae7f] font-medium text-sm mt-0.5">{job.company}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-gray-400">{job.date}</span>
                <span className="text-xs px-2 py-0.5 bg-[#faf3e8] border border-[#e6c79d] text-[#c49a5a] rounded-full font-medium">
                  {job.type}
                </span>
              </div>
            </div>

            <div className="mt-5 h-px bg-gray-100 mb-5" />

            <ul className="space-y-3">
              {job.details.map((d, i) => (
                <li key={i} className="flex gap-3 text-gray-500 text-sm leading-7">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d3ae7f] shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}