import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-base-100/80 backdrop-blur-lg p-4 rounded-xl shadow-xl border border-base-content/10 flex flex-col items-center gap-6">
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
  );
};

export default SocialLinks;
