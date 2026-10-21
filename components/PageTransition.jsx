"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { DriverIcon, TruckIcon } from "@/components/FleetRoutePreview";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isProjectDetail = /^\/work\/[^/]+$/.test(pathname);

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        >
          {isProjectDetail && (
            <div
              role="status"
              aria-label="Loading project details"
              className="absolute inset-0 flex items-center justify-center px-6"
            >
              <div className="w-full max-w-xs rounded-2xl border border-white/10 bg-[#20252b]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:p-6">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/55">
                  <span>Loading project</span>
                  <DriverIcon className="h-5 w-4 text-sky-200" />
                </div>
                <div className="relative flex h-12 items-center overflow-hidden">
                  <div className="absolute left-0 right-0 top-7 border-t border-dashed border-white/20" />
                  <motion.div
                    initial={reduceMotion ? { x: "65%" } : { x: "-10%" }}
                    animate={reduceMotion ? { x: "65%" } : { x: "540%" }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.1,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 text-accent drop-shadow-[0_0_12px_rgba(0,255,153,0.45)]"
                  >
                    <TruckIcon className="h-8 w-12" />
                  </motion.div>
                  <motion.span
                    aria-hidden="true"
                    initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0.2 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: reduceMotion ? 0 : 0.8 }}
                    className="absolute left-0 top-7 h-px w-full origin-left bg-gradient-to-r from-accent/80 to-transparent"
                  />
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Preparing project details...
                </p>
              </div>
            </div>
          )}
        </motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;