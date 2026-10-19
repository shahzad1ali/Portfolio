"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowUpRight, BsGithub } from "react-icons/bs";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function CaseStudyCard({ title, children }) {
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -4 }}
      className="interactive-card h-full rounded-2xl p-6 sm:p-8"
    >
      <h2 className="mb-4 text-xl font-semibold text-accent sm:text-2xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-white/70 sm:text-base">{children}</p>
    </motion.article>
  );
}

export default function ProjectCaseStudy({ project }) {
  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 sm:pt-36 xl:px-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={reveal}>
            <Link
              href="/#work"
              className="interactive-card mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <BsArrowLeft aria-hidden="true" />
              All projects
            </Link>
          </motion.div>

          <motion.header variants={reveal} className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-accent">
              {project.category} · Case study {project.num}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-card inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Visit project <BsArrowUpRight aria-hidden="true" />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-card inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <BsGithub aria-hidden="true" /> Source code
                </Link>
              )}
            </div>
          </motion.header>

          <motion.div
            variants={reveal}
            whileHover={{ scale: 1.01 }}
            className="interactive-card relative mb-10 aspect-[4/3] overflow-hidden rounded-2xl p-2 sm:aspect-[16/8]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={`${project.title} application preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain p-2"
              />
            </div>
          </motion.div>

          <motion.section
            variants={{
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.05 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-10 grid gap-5 md:grid-cols-2"
            aria-label="Project background"
          >
            <CaseStudyCard title="Project overview">
              {project.overview}
            </CaseStudyCard>
            <CaseStudyCard title="The challenge">
              {project.challenge}
            </CaseStudyCard>
            <CaseStudyCard title="The approach">
              {project.solution}
            </CaseStudyCard>
            <motion.article
              variants={reveal}
              whileHover={{ y: -4 }}
              className="interactive-card rounded-2xl p-6 sm:p-8"
            >
              <h2 className="mb-4 text-xl font-semibold text-accent sm:text-2xl">
                Key features
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-7 text-white/70 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          </motion.section>

          <motion.section
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="interactive-card rounded-2xl p-6 sm:p-8"
            aria-labelledby="technology-heading"
          >
            <h2
              id="technology-heading"
              className="mb-5 text-xl font-semibold text-accent sm:text-2xl"
            >
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm text-white/80"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="mb-4 text-white/70">
              Interested in working together?
            </p>
            <Link
              href="/#contact"
              className="interactive-card inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Get in touch <BsArrowUpRight aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
