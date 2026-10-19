"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { projects } from "@/lib/projects";

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Work() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const project = projects[currentProjectIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrentProjectIndex((current) => (current + 1) % projects.length);
      }
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const showPreviousProject = () => {
    setCurrentProjectIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const showNextProject = () => {
    setCurrentProjectIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="px-4 py-12 sm:px-6 sm:py-14 xl:px-0 xl:py-16"
    >
      <div className="container mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center xl:mb-14"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Selected projects
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            A selection of full-stack products, mobile experiences, and
            responsive interfaces. Open a case study to explore the goals,
            features, and technologies behind each project.
          </p>
        </motion.header>

        <div className="grid items-center gap-8 xl:grid-cols-2 xl:gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.slug}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -12, transition: { duration: 0.18 } }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.04 },
                },
              }}
              className="order-2 flex flex-col gap-5 xl:order-1"
            >
              <motion.div
                variants={textVariants}
                className="flex items-center gap-4"
              >
                <span className="text-6xl font-extrabold leading-none text-transparent text-outline sm:text-7xl">
                  {project.num}
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-xs uppercase tracking-wider text-accent">
                  {project.category}
                </span>
              </motion.div>

              <motion.div variants={textVariants}>
                <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  {project.description}
                </p>
              </motion.div>

              <motion.ul
                variants={textVariants}
                aria-label="Technology stack"
                className="flex flex-wrap gap-2"
              >
                {project.stack.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-accent sm:text-sm"
                  >
                    {technology}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                variants={textVariants}
                className="mt-2 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="interactive-card inline-flex min-h-12 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  View case study
                  <BsArrowUpRight aria-hidden="true" />
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live project in a new tab`}
                    className="interactive-card inline-flex h-12 w-12 items-center justify-center rounded-full text-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <BsArrowUpRight aria-hidden="true" className="text-xl" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} GitHub repository in a new tab`}
                    className="interactive-card inline-flex h-12 w-12 items-center justify-center rounded-full text-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <BsGithub aria-hidden="true" className="text-xl" />
                  </Link>
                )}
              </motion.div>

              <motion.div
                variants={textVariants}
                className="mt-1 flex flex-wrap items-center gap-3"
              >
                <motion.button
                  type="button"
                  aria-label="Previous project"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={showPreviousProject}
                  className="interactive-card flex h-11 w-11 items-center justify-center rounded-full text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <PiCaretLeftBold aria-hidden="true" />
                </motion.button>
                <span className="text-sm tabular-nums text-white/60">
                  {project.num} / {String(projects.length).padStart(2, "0")}
                </span>
                <motion.button
                  type="button"
                  aria-label="Next project"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={showNextProject}
                  className="interactive-card flex h-11 w-11 items-center justify-center rounded-full text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <PiCaretRightBold aria-hidden="true" />
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={`${project.slug}-image`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="order-1 xl:order-2"
          >
            <Link
              href={`/work/${project.slug}`}
              aria-label={`Read the ${project.title} case study`}
              className="interactive-card group relative block aspect-[4/3] overflow-hidden rounded-2xl p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:aspect-[16/10]"
            >
              <motion.div
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  fill
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  alt={`${project.title} project preview`}
                />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-xs font-medium text-accent opacity-100 shadow-lg transition sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  Explore case study <BsArrowUpRight aria-hidden="true" />
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
