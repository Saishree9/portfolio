import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-8 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-lg md:text-3xl font-bold text-center mb-6">
        Contact
      </h2>
      <div className="flex justify-center gap-6 text-2xl">
        {/* Phone */}
        <a
          href="tel:+918762577498"
          className="p-1 bg-gray-800 rounded-full hover:bg-[#FAEBD7] hover:text-gray-900 hover:p-1.5 transition duration-300"
          title="Call Me"
        >
          <FaPhone className="-scale-x-100" />
        </a>

        {/* Email */}
        <a
          href="mailto:saishree0312@gmail.com"
          className="p-1 bg-gray-800 rounded-full hover:bg-[#FAEBD7] hover:text-gray-900 hover:p-1.5 transition duration-300"
          title="Send Email"
        >
          <FaEnvelope />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918762577498"
          target="_blank"
          rel="noreferrer"
          className="p-1 bg-gray-800 rounded-full hover:bg-[#FAEBD7] hover:text-gray-900 hover:p-1.5 transition duration-300"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Saishree9"
          target="_blank"
          rel="noreferrer"
          className="p-1 bg-gray-800 rounded-full hover:bg-[#FAEBD7] hover:text-gray-900 hover:p-1.5 transition duration-300"
          title="View My GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
