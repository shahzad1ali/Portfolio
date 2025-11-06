"use client";

import { Button } from "./ui/button";
import Nav from "./Nav";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToHome = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const DownloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "/assets/Shahzad.pdf";
      link.download = "Shahzad_Ali_CV.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      window.open("/assets/Shahzad.pdf", "_blank");
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-primary text-white py-4 sm:py-6 lg:py-5 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left side - Logo */}
        <a
          href="#home"
          onClick={scrollToHome}
          className="z-50 cursor-pointer"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-primary">
            SA<span className="text-accent">.</span>
          </h1>
        </a>

        {/* Center Navigation (Desktop only) */}
        <div className="hidden pl-32 lg:flex items-center gap-6 xl:gap-8">
          <Nav />
        </div>

        {/* Right side - CV button & Socials */}
        <div className="hidden lg:flex items-center gap-5">

          <Socials
            containerStyles="flex gap-3"
            iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center items-center text-accent text-sm hover:bg-accent hover:text-primary hover:transition-all duration-300"
          />
             <Button
            variant="outline"
            size="md"
            className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary"
            onClick={DownloadCV}
          >
            <span>Download CV</span>
            <FiDownload className="text-lg" />
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 p-2 text-white hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-primary z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Nav isMobile={true} onLinkClick={() => setIsMenuOpen(false)} />
          <Button
            onClick={DownloadCV}
            className="bg-accent hover:bg-accent-hover text-primary font-primary cursor-pointer"
          >
            Download CV
          </Button>
          <Socials
            containerStyles="flex gap-6 mt-4"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
