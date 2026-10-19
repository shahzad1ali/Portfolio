
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (e, path) => {
    const sectionId = path.replace('#', '');
    const element = document.getElementById(sectionId);

    if (element) {
      e.preventDefault();
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (pathname !== "/") {
      e.preventDefault();
      router.push(`/#${sectionId}`);
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
            aria-current={isActive && pathname === "/" ? "location" : undefined}
            className={`${
              isActive && "text-accent"
            } ${
              isMobile 
                ? "rounded-md px-3 py-1 text-2xl font-medium transition-all duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                : "rounded-sm capitalize font-medium transition-all hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
