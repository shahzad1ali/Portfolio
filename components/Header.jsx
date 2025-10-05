"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import PageTitle from "./PageTitle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 sm:py-6 lg:py-8 xl:py-12 text-white bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Page Title */}
          <div className="flex items-center gap-4">
            <Link href="/" className="z-50">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-primary">
                Shahzad<span className="text-accent">.</span>
              </h1>
            </Link>
            <PageTitle />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Nav />
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent-hover text-primary font-primary">
                Hire me
              </Button>
            </Link>
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

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-primary z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Nav isMobile={true} onLinkClick={() => setIsMenuOpen(false)} />
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-accent hover:bg-accent-hover text-primary font-primary">
                Hire me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
