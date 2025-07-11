import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const themes = [
  { name: "synthwave", colors: ["#8a4fff", "#ff3ebf", "#00f5d4", "#000000"] },
  { name: "dark", colors: ["#3b82f6", "#ec4899", "#10b981", "#000000"] },
  { name: "light", colors: ["#8b5cf6", "#f43f5e", "#14b8a6", "#0f172a"] },
  { name: "aqua", colors: ["#06b6d4", "#7c3aed", "#facc15", "#1e293b"] },
  { name: "coffee", colors: ["#4B2E2E", "#7B4B4B", "#A9704A", "#FFECCC"] },
];

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState("synthwave");
  const [open, setOpen] = useState(false);

  const handleThemeChange = (theme) => {
    document.querySelector("html").setAttribute("data-theme", theme);
    setActiveTheme(theme);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-row-reverse items-center gap-2">
      {/* Toggle button - only for mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden bg-base-200 text-base-content px-2 py-1 rounded-l-lg shadow-lg"
      >
        {open ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      {/* Theme box - always visible on desktop, toggle on mobile */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } sm:flex flex-col bg-base-100/80 backdrop-blur-lg p-4 rounded-xl shadow-xl border border-base-content/10 w-64`}
      >
        <h2 className="text-center text-sm font-semibold uppercase text-base-content/80 mb-3">
          Themes
        </h2>

        <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
          {themes.map(({ name, colors }) => (
            <div
              key={name}
              className={`cursor-pointer flex flex-col items-center gap-1 p-2 rounded-lg transition-all min-w-[72px] sm:min-w-0 ${
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
    </div>
  );
};

export default ThemeToggle;
