// src/components/Navbar.jsx

import React from "react";
import resumePDF from "../assets/resume.pdf";

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 w-full z-50 bg-base-100/60 backdrop-blur-md shadow-md border-b border-base-content/10">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-primary bg-neutral text-primary flex items-center justify-center text-lg font-bold">
            GS
          </div>
          <span className="text-lg font-semibold text-primary">
            Gungun Sachdeva
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex space-x-6 font-medium text-base-content">
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center space-x-3">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline border-primary text-primary hover:bg-primary hover:text-base-100 shadow-sm transition"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="btn btn-sm btn-primary text-base-100 hover:brightness-110 shadow transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
