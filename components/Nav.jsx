
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = ({ isMobile = false, onLinkClick }) => {
  const pathname = usePathname();
  
  return (
    <nav className={`flex ${isMobile ? 'flex-col gap-6' : 'gap-4 lg:gap-6 xl:gap-8'}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            onClick={onLinkClick}
            className={`${
              link.path === pathname && "text-accent"
            } ${
              isMobile 
                ? "text-2xl font-medium hover:text-accent transition-all duration-300" 
                : "capitalize font-medium hover:text-accent transition-all"
            } ${
              !isMobile && link.path === pathname && "border-b-2 border-accent"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav
