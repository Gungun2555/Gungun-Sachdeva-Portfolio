import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import SocialLinks from "./components/SocialLinks";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import Footer from "./pages/Footer";
import SplashScreen from "./components/SplashScreen"; // 👈 Add this line

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
          <Navbar />
          <ThemeToggle />
          <SocialLinks />
          <main className="flex-grow">
            <Home />
            <About />
            <Skills />
            <Projects />
            <ContactForm />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default App;
