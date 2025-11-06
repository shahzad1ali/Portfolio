"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "resume", title: "Resume" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const PageTitle = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Check on mount

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const currentSection = sections.find(s => s.id === activeSection);
  const pageTitle = currentSection ? currentSection.title : "Home";

  return (
    <motion.div
      key={pageTitle}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="text-accent font-primary font-semibold text-lg lg:text-xl"
    >
      {pageTitle}
    </motion.div>
  );
};

export default PageTitle;
