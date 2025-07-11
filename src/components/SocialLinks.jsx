import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const links = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Gungun2555",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/gungun-sachdeva-here",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    url: "https://mail.google.com/mail/?view=cm&to=gungunsachdevahere@gmail.com",
    label: "Email",
  },
];

const SocialLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50">
      {/* Toggle button - visible only on mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-base-200 text-base-content px-2 py-1 rounded-r-lg shadow-lg"
      >
        {open ? <FiChevronLeft /> : <FiChevronRight />}
      </button>

      {/* Social Links - always visible on desktop, toggle on mobile */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } md:flex bg-base-100/80 backdrop-blur-lg p-4 rounded-r-xl shadow-xl border border-base-content/10 flex-col items-center gap-6 transition-all`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            className="text-2xl text-base-content/70 hover:text-primary transition-transform hover:scale-110"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
