"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "I build web applications from the user interface through backend APIs and data storage. I work across the product lifecycle, connecting clear, responsive experiences to practical application logic.",
    details: [
      "Responsive React and Next.js interfaces",
      "REST APIs and backend features with Node.js or Django",
      "Authentication, forms, and application state",
      "Database-backed workflows with MySQL or MongoDB",
    ],
  },
  {
    num: "02",
    title: "Product Features & Integrations",
    description:
      "I integrate the services that make a product useful in real workflows, including payments, maps, notifications, and real-time communication.",
    details: [
      "Payment and identity provider integrations",
      "Location-aware job discovery and service-radius matching",
      "Real-time messaging, push notifications, and email",
      "Admin dashboards, reviews, and role-based workflows",
    ],
  },
  {
    num: "03",
    title: "Responsive UI & Interaction",
    description:
      "I turn product requirements into consistent, accessible interfaces. Thoughtful layouts, clear states, and purposeful motion help users understand what to do next on any screen.",
    details: [
      "Reusable component systems",
      "Mobile-first responsive layouts",
      "Accessible interaction and focus states",
      "Guided onboarding forms and clear validation feedback",
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-14 xl:px-0 xl:py-16"
    >
      <div className="container mx-auto">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="mb-10 text-center xl:mb-14"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            How I can help
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Full-Stack Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            From planning a feature to implementing it across the frontend and
            backend, I focus on practical, maintainable software and a polished
            experience for the people using it.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.num}
              variants={reveal}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="interactive-card group rounded-2xl p-6 sm:p-8"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-4xl font-extrabold text-transparent text-outline transition-colors duration-300 group-hover:text-outline-hover">
                  {service.num}
                </span>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(0,255,153,0.7)]"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                {service.description}
              </p>
              <ul className="space-y-3 border-t border-white/10 pt-5">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-3 text-sm leading-6 text-white/75"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
