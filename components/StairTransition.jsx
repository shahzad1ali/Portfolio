"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen"
        >
          <Stairs />
        </motion.div>
      </AnimatePresence>
      <motion.div 
      className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      />
    </>
  );
};

export default StairTransition;