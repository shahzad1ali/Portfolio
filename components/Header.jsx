"use client";

import { Button } from "./ui/button";
import Nav from "./Nav";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToHome = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/#home");
    }
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
        <a
          href="#home"
          onClick={scrollToHome}
          className="z-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-primary">
            SA<span className="text-accent">.</span>
          </h1>
        </a>

        <div className="hidden pl-32 lg:flex items-center gap-6 xl:gap-8">
          <Nav />
        </div>

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
        
        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="z-50 rounded-lg p-2 text-white transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, x: "8%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "8%" }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-primary px-6 lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              <Nav isMobile onLinkClick={() => setIsMenuOpen(false)} />
              <Button
                onClick={DownloadCV}
                className="interactive-card bg-accent font-primary text-primary hover:bg-accent-hover"
              >
                Download CV
              </Button>
              <Socials
                containerStyles="mt-2 flex gap-6"
                iconStyles="interactive-card flex h-10 w-10 items-center justify-center rounded-full text-accent hover:text-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
