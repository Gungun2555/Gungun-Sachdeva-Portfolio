import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 py-12 bg-base-200 text-base-content"
    >
      {/* Lottie Animation */}
      <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
        <DotLottieReact
          src="src/assets/lootie.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* About Text with Square Gradient Border + Pointer */}
      <div className="relative">
        {/* Gradient Box */}
        <div className="bg-gradient-to-r from-primary to-secondary p-1 rounded-xl">
          <div
            className="bg-base-200 rounded-xl flex flex-col justify-center items-center text-center p-4 md:p-6"
            style={{ width: "320px", height: "320px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              About Me
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-base-content/80">
              Hi, I'm{" "}
              <span className="font-semibold text-base-content">
                Gungun Sachdeva
              </span>
              , a Full Stack Developer passionate about clean design, strong
              backend architecture, and intuitive UI/UX.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-base-content/70 mt-2">
              I love turning creative ideas into real-world web apps that solve
              problems and delight users with seamless experiences.
            </p>
          </div>
        </div>

        {/* Gradient Pointer */}
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2"
          style={{
            width: 0,
            height: 0,
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderTop: "15px solid",
            borderTopColor: "var(--tw-gradient-from, #3b82f6)", // fallback
            background:
              "linear-gradient(to right, var(--tw-gradient-from, #3b82f6), var(--tw-gradient-to, #8b5cf6))",
          }}
        />
      </div>
    </section>
  );
}
