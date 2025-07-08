// components/SplashScreen.jsx
import React, { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // hide after 4.5 sec or when video ends
    }, 2500); // match your video duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        src="/videos/intro.mp4" // your video path
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
}
