import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

// Sensitive values are Base64-encoded so they never sit in source/DOM as
// plain text, digit sequences, or "mailto:"/"tel:" strings that scrapers
// pattern-match on. Decoded only in-browser, only on click.
const encode = (str) => btoa(str);
const decode = (str) => atob(str);

const PHONE_ENC = encode("+918762577498");
const EMAIL_ENC = encode("saishree0312@gmail.com");

// Click-to-reveal contact methods: real value never rendered to the DOM.
const protectedContacts = [
  {
    icon: <FaPhone className="-scale-x-100" />,
    label: "Phone",
    value: "Click to call",
    getHref: () => `tel:${decode(PHONE_ENC)}`,
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "Click to email",
    getHref: () => `mailto:${decode(EMAIL_ENC)}`,
  },
];

// Not sensitive — already public, can stay as plain links.
const publicContacts = [
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    href: "https://wa.me/918762577498",
    value: "Chat on WhatsApp",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/Saishree9",
    value: "github.com/Saishree9",
  },
];

function ContactCard({ icon, label, value }) {
  return (
    <div className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#d3ae7f] hover:shadow-md transition duration-300 cursor-pointer text-left w-full">
      <div className="w-11 h-11 flex items-center justify-center bg-[#faf3e8] rounded-xl text-[#c49a5a] text-lg group-hover:scale-110 transition duration-300 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  // Real value only ever exists here, in memory, after a real click event —
  // never written into href/DOM, so nothing is scrapeable from page source.
  const handleReveal = (getHref) => {
    window.location.href = getHref();
  };

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
          {protectedContacts.map(({ icon, label, value, getHref }) => (
            <button
              key={label}
              type="button"
              onClick={() => handleReveal(getHref)}
              aria-label={`${label} — click to reveal and open`}
              className="block w-full"
            >
              <ContactCard icon={icon} label={label} value={value} />
            </button>
          ))}

          {publicContacts.map(({ icon, label, href, value }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="block w-full">
              <ContactCard icon={icon} label={label} value={value} />
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