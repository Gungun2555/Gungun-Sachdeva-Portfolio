import React, { useState } from "react";

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
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-base-100/80 backdrop-blur-lg p-5 rounded-xl shadow-xl border border-base-content/10 space-y-4 w-28">
      <h2 className="text-center text-sm font-semibold uppercase text-base-content/80">
        Themes
      </h2>

      {themes.map(({ name, colors }) => (
        <div
          key={name}
          className={`cursor-pointer flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
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
  );
};

export default ThemeToggle;
