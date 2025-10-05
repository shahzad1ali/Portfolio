"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const PageTitle = () => {
  const pathname = usePathname();

  const getPageTitle = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/services":
        return "Services";
      case "/resume":
        return "Resume";
      case "/work":
        return "Work";
      case "/contact":
        return "Contact";
      default:
        return "";
    }
  };

  const pageTitle = getPageTitle(pathname);

  if (!pageTitle) return null;

  return (
    <motion.div
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
