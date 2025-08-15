import React from "react";

const projectsData = [
  { name: "BeeBuy", link: "https://beebuy.in/" },
  { name: "SBPL", link: "https://sbpl-tc.com/" },
  { name: "Live Smart", link: "https://livesmartindia.com/" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-8 px-6 max-w-5xl mx-auto">
      <h2 className="text-lg md:text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectsData.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 p-6 rounded-lg hover:bg-[#FAEBD7] hover:scale-105 transition duration-300 text-center hover:text-gray-900"
          >
            <h3 className="text-sm md:text-xl font-semibold">{p.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
