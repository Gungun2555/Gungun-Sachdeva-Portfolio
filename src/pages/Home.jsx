// src/pages/Home.jsx

import React, { useState } from "react";
import avatar from "../assets/avt.mp4";
import fallbackImage from "../assets/image.png"; // 🔁 Replace with your actual image path
import resumePDF from "../assets/resume.pdf";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-10 gap-4 md:gap-2 bg-base-100 text-base-content">
      <div className="text-center md:text-left max-w-xl">
        <p className="text-base md:text-lg text-primary font-mono tracking-wider mb-2">
          my name is
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-base-content mb-6">
          Gungun Sachdeva.
        </h1>

        <p className="text-lg md:text-xl text-base-content/80 max-w-md">
          Frontend to Backend, Done Right
        </p>

        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline border-primary text-primary mt-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:bg-primary hover:text-primary-content"
        >
          View Resume
        </a>
      </div>

      <div className="relative rounded-full overflow-hidden border-2 md:border-4 border-primary shadow-xl w-40 h-40 md:w-60 md:h-60">
        {!videoLoaded && (
          <img
            src={fallbackImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        )}

        <video
          src={avatar}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
