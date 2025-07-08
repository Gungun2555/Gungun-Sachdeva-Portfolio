"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Organ chain",
    github: "https://github.com/yourusername/portfolio",
    description:
      "A JavaScript-based organ donation platform featuring real-time donor-recipient matching, AI-powered compatibility scoring, and secure data handling with MongoDB. Includes user-friendly dashboards, fraud detection, and dynamic visualizations for efficient healthcare support.",
    video: "/videos/Organ-chain Project.mp4",
  },
  {
    title: "PostBox",
    github: "https://github.com/Gungun2555/fullstack-chat-app",
    description:
      "A full-stack chat application built with Socket.IO, Zustand, React, and Vite, enabling seamless real-time messaging. It features user authentication, live message updates, typing indicators, and a responsive UI. Designed for fast communication and smooth user experience.",
    video: "/videos/PostBox -Project.mp4",
  },
  {
    title: "Notebrary",
    github: "https://github.com/yourusername/task-manager",
    description:
      "Developed a full‑stack book management web app with features like book listing, rating, user notes, and Google OAuth implementation using Open Library API, Node.js, Express, PostgreSQL, and EJS templating.",
    video: "/videos/notebrary-project.mp4",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-base-100 text-base-content"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
        <p className="text-base-content/70 text-lg">
          Some of the projects I have built with React and Tailwind
        </p>
      </div>

      <div className="space-y-24 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Video with animated gradient glow */}
            <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden flex items-center justify-center">
              {/* Glow Background */}
              <div className="absolute inset-0 z-0 animate-pulse">
                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-30"></div>
              </div>

              {/* Video */}
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full h-auto object-cover rounded-xl z-10 shadow-lg"
              />
            </div>

            {/* Project Info */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                {project.title}
              </h3>
              <p className="text-base-content/80">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                {/* <FaGithub size={20} /> */}
                {/* View on GitHub */}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
