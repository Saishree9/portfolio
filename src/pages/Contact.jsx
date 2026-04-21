import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: <FaPhone className="-scale-x-100" />,
    label: "Phone",
    href: "tel:+918762577498",
    value: "+91 ********98",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: "mailto:saishree0312@gmail.com",
    value: "sai*********@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    href: "https://wa.me/918762577498",
    value: "Chat on WhatsApp",
    external: true,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/Saishree9",
    value: "github.com/Saishree9",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        <p className="text-xs uppercase tracking-[0.25em] text-[#d3ae7f] mb-3 text-center font-semibold">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
          Contact
        </h2>
        <p className="text-center text-gray-400 text-sm mb-14">
          Open to new opportunities — feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map(({ icon, label, href, value, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#d3ae7f] hover:shadow-md transition duration-300"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-[#faf3e8] rounded-xl text-[#c49a5a] text-lg group-hover:scale-110 transition duration-300">
                {icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-slate-800">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-10">
         Available for on-site, hybrid & remote roles
        </p>
      </div>
    </section>
  );
}