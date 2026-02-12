import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-[#d3ae7f] mb-2">
          Get In Touch
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">
          Contact
        </h2>

        <div className="flex justify-center gap-8 text-xl">
          
          {/* Phone */}
          <a
            href="tel:+918762577498"
            className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-full border border-gray-200 
                       transition-all duration-500 ease-in-out 
                       hover:scale-110 hover:border-[#d3ae7f] hover:text-[#d3ae7f]"
            title="Call Me"
          >
            <FaPhone className="-scale-x-100" />
          </a>

          {/* Email */}
          <a
            href="mailto:saishree0312@gmail.com"
            className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-full border border-gray-200 
                       transition-all duration-500 ease-in-out 
                       hover:scale-110 hover:border-[#d3ae7f] hover:text-[#d3ae7f]"
            title="Send Email"
          >
            <FaEnvelope />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918762577498"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-full border border-gray-200 
                       transition-all duration-500 ease-in-out 
                       hover:scale-110 hover:border-[#d3ae7f] hover:text-[#d3ae7f]"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Saishree9"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-full border border-gray-200 
                       transition-all duration-500 ease-in-out 
                       hover:scale-110 hover:border-[#d3ae7f] hover:text-[#d3ae7f]"
            title="View My GitHub"
          >
            <FaGithub />
          </a>

        </div>
      </div>
    </section>
  );
}
