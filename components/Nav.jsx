
"use client";

import { useEffect, useState } from "react";

const links = [
  {
    name: "About",
    path: "#home",
  },
  {
    name: "services",
    path: "#services",
  },
  {
    name: "resume",
    path: "#resume",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

const Nav = ({ isMobile = false, onLinkClick }) => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (e, path) => {
    e.preventDefault();
    const sectionId = path.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    if (onLinkClick) {
      onLinkClick();
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = links.map(link => link.path.replace('#', ''));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Check on mount

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <nav className={`flex ${isMobile ? 'flex-col gap-6' : 'gap-4 lg:gap-6 xl:gap-8'}`}>
      {links.map((link, index) => {
        const sectionId = link.path.replace('#', '');
        const isActive = activeSection === sectionId;
        
        return (
          <a
            href={link.path}
            key={index}
            onClick={(e) => handleScroll(e, link.path)}
            className={`${
              isActive && "text-accent"
            } ${
              isMobile 
                ? "text-2xl font-medium hover:text-accent transition-all duration-300 cursor-pointer" 
                : "capitalize font-medium hover:text-accent transition-all cursor-pointer"
            } ${
              !isMobile && isActive && "border-b-2 border-accent"
            }`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}

export default Nav
