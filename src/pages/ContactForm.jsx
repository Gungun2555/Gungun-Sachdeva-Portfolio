/* ContactSection.jsx */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleSubmit = () => {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      "service_6n7cyc8",
      "template_zos121v",
      templateParams,
      "XALtJnvntgpilvI8J"
    );

    setSubmitted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      if (step === 0) {
        setFormData({ ...formData, name: input });
        setInput("");
        setStep(1);
      } else if (step === 1) {
        setFormData({ ...formData, email: input });
        setInput("");
        setStep(2);
      } else if (step === 2) {
        setFormData({ ...formData, message: input });
        setInput("");
        handleSubmit();
      }
    }
  };

  const getPlaceholder = () => {
    if (step === 0) return "Hey! Enter your Name?";
    if (step === 1) return "Let me know your email ";
    return "Any message for Me?";
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col items-center">
        <AnimatePresence>
          {visible && !submitted && (
            <motion.h1
              key={step < 1 ? "welcome" : "connect"}
              className="text-4xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {step < 1 ? "Hey! Welcome" : "Let's Connect"}
            </motion.h1>
          )}
        </AnimatePresence>

        {!submitted && step < 3 && (
          //   <motion.div
          //     className="mt-4 p-4 w-full max-w-md rounded-2xl backdrop-blur-md border border-white/20 shadow-lg"
          //     initial={{ opacity: 0 }}
          //     animate={{ opacity: 1 }}
          //     transition={{ delay: 1, duration: 1 }}
          //     style={{
          //       backgroundColor:
          //         "color-mix(in oklab, var(--color-base-100) 40%, transparent)",
          //     }}
          //   >
          //     <input
          //       className="input input-bordered w-full text-base bg-transparent placeholder-white/50 focus:outline-none"
          //       placeholder={getPlaceholder()}
          //       value={input}
          //       onChange={(e) => setInput(e.target.value)}
          //       onKeyDown={handleKeyDown}
          //       autoFocus
          //     />
          //   </motion.div>
          <motion.div
            className="mt-4 px-6 py-6 w-full max-w-md min-h-[5rem] flex items-center min-w-0 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--color-base-100) 40%, transparent)",
            }}
          >
            {/* <input
              className="input input-bordered w-full min-h-[3.5rem] text-sm bg-transparent placeholder-white/70 placeholder:text-sm focus:outline-none"
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
              placeholder={getPlaceholder()}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            /> */}
            <input
              className="input input-bordered w-full bg-transparent text-base-content placeholder-base-content/70 focus:outline-none"
              placeholder={getPlaceholder()}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
            />
          </motion.div>
        )}

        {submitted && (
          <motion.div
            className="mt-6 border-2 border-primary text-transparent font-bold text-3xl text-center px-6 py-3 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ WebkitTextStroke: "1px var(--color-primary)" }}
          >
            Thank You for Visiting
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
