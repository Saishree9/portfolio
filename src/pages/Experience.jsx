import React from "react";

const experienceData = [
  {
    role: "Front End Developer",
    company: "Orbit Tech Cloud Solutions",
    date: "Jun 2024 – Present",
    details: [
      "Developed and optimized responsive web interfaces using React.js, Tailwind CSS, and JavaScript.",
      "Designed and implemented interactive dashboards tailored for different roles.",
      "Collaborated within Agile Scrum teams to enhance performance and ensure cross-device compatibility.",
      "Improved page load speed and user engagement with UI/UX best practices."
    ],
  },
  {
    role: "Trainee",
    company: "Agile Health Technologies Pvt. Ltd.",
    date: "Dec 2023 – May 2024",
    details: [
      "Worked on MI Comp Website using React functional components and Redux for state management.",
      "Integrated and tested APIs using Swagger and managed code with Git/GitHub.",
      "Implemented form validation with Formik and Yup, improving input accuracy.",
      "Enhanced UI with Material UI and advanced JavaScript concepts."
    ],
  },
  {
    role: "Junior Design Engineer",
    company: "Ipools India Pvt. Ltd.",
    date: "Oct 2022 – Apr 2023",
    details: [
      "Contributed to major projects including Prestige Aerocity and Prestige Fairfield.",
      "Collaborated with architects and engineers to deliver accurate design plans.",
      "Used AutoCAD and design tools to create detailed layouts.",
      "Maintained quality standards and met strict project deadlines."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-8 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-lg md:text-3xl font-bold text-center mb-6">Experience</h2>

      <div className="flex flex-col space-y-12">
        {experienceData.map((job, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[80%] hover:scale-105 transition duration-300">
              <h3 className="text-sm md:text-xl font-bold">{job.role}</h3>
              <p className="text-pink-400 text-sm md:text-base">
                {job.company} | {job.date}
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-300 text-xs md:text-base">
                {job.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
