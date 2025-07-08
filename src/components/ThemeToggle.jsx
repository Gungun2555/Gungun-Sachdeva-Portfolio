import React, { useState, useEffect } from "react";

const themes = [
  { name: "synthwave", colors: ["#8a4fff", "#ff3ebf", "#00f5d4", "#000000"] },
  { name: "dark", colors: ["#3b82f6", "#ec4899", "#10b981", "#000000"] },
  { name: "light", colors: ["#8b5cf6", "#f43f5e", "#14b8a6", "#0f172a"] },
  { name: "aqua", colors: ["#06b6d4", "#7c3aed", "#facc15", "#1e293b"] },
  { name: "coffee", colors: ["#4B2E2E", "#7B4B4B", "#A9704A", "#FFECCC"] },
];

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState("synthwave");

  const handleThemeChange = (theme) => {
    document.querySelector("html").setAttribute("data-theme", theme);
    setActiveTheme(theme);
  };

  return (
    <div
      className={`
        fixed z-50 bg-base-100/80 backdrop-blur-lg p-4 rounded-xl shadow-xl border border-base-content/10
        w-72 sm:w-28
        bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:bottom-auto sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0
      `}
    >
      <h2 className="text-center text-sm font-semibold uppercase text-base-content/80 mb-3">
        Themes
      </h2>

      <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
        {themes.map(({ name, colors }) => (
          <div
            key={name}
            className={`cursor-pointer flex flex-col items-center gap-1 p-2 rounded-lg transition-all min-w-[72px] sm:min-w-0
              ${
                activeTheme === name
                  ? "bg-base-300 border border-primary"
                  : "hover:bg-base-200"
              }`}
            onClick={() => handleThemeChange(name)}
          >
            <span className="text-[11px] capitalize text-base-content/60 font-medium">
              {name}
            </span>
            <div className="flex gap-[2px] w-16 h-5">
              {colors.map((c, i) => (
                <span
                  key={i}
                  className="flex-1 rounded"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
