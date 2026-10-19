"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, MapPin, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactDetails = [
  {
    icon: Phone,
    label: "Call me",
    value: "+92 3001595619",
    href: "tel:+923001595619",
    iconTone: "text-cyan-300",
    iconSurface: "border-cyan-300/15 from-cyan-400/15 to-blue-400/[0.06]",
  },
  {
    icon: Mail,
    label: "Email me",
    value: "shahzadmobi619@gmail.com",
    href: "mailto:shahzadmobi619@gmail.com",
    iconTone: "text-violet-300",
    iconSurface: "border-violet-300/15 from-violet-400/15 to-fuchsia-400/[0.06]",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Lahore, Pakistan",
    iconTone: "text-amber-300",
    iconSurface: "border-amber-300/15 from-amber-400/15 to-orange-400/[0.06]",
  },
];

const fieldClass =
  "interactive-card h-12 w-full rounded-xl border-white/10 bg-[#17191f]/75 px-4 text-sm text-white placeholder:text-white/40 focus:border-accent focus:ring-2 focus:ring-accent/20 sm:text-base";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8815786e-cc9e-42cc-9531-fbfa83edf5f9",
          name: formData.get("name"),
          email: formData.get("email"),
          phoneNumber: formData.get("phoneNumber"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "The message could not be sent.");
      }

      toast.success("Message sent. Thanks for reaching out!");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      toast.error("Could not send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative isolate overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12 xl:px-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-emerald-500/10 blur-[120px]"
      />
      <div className="container mx-auto">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="mx-auto mb-10 max-w-2xl text-center xl:mb-14"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Open to opportunities
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s make something{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Have a project in mind or want to talk through an idea? Send a
            message and I&apos;ll get back to you.
          </p>
        </motion.header>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.85fr)] lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={reveal}
            className="group relative order-1"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-px rounded-[26px] bg-gradient-to-br from-emerald-400/70 via-teal-400/20 to-cyan-400/50 opacity-50 blur-[1px] transition-opacity duration-500 group-hover:opacity-90"
            />
            <form
              onSubmit={handleSubmit}
              className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[25px] border border-white/10 bg-gradient-to-br from-[#17251f] via-[#191b21] to-[#172323] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"
              />
              <div className="relative">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300/80">
                  Start a conversation
                </p>
                <h3 className="text-2xl font-semibold sm:text-3xl">
                  Tell me about your project
                </h3>
              </div>

              <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-white/70">
                  Your name
                  <Input
                    className={fieldClass}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-white/70">
                  Email address
                  <Input
                    className={fieldClass}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-white/70">
                  Phone <span className="text-white/35">(optional)</span>
                  <Input
                    className={fieldClass}
                    type="tel"
                    name="phoneNumber"
                    autoComplete="tel"
                    placeholder="+1 555 0100"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/70">
                  Subject
                  <Input
                    className={fieldClass}
                    type="text"
                    name="subject"
                    placeholder="What would you like to build?"
                    required
                  />
                </label>
              </div>

              <label className="relative space-y-2 text-sm text-white/70">
                Your message
                <Textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="A little about the project, goals, and timeline..."
                  className="interactive-card min-h-36 w-full resize-y rounded-xl border-white/10 bg-[#17191f]/75 px-4 py-3 text-sm leading-6 text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-emerald-400/30 sm:text-base"
                />
              </label>

              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/button h-12 w-full gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-6 text-sm font-bold text-[#07140f] shadow-[0_10px_35px_rgba(16,185,129,0.2)] transition-all hover:from-emerald-300 hover:to-cyan-300 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {isSubmitting ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
                  ) : (
                    <Send
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover/button:translate-x-1"
                    />
                  )}
                </Button>
                <p className="text-center text-xs text-white/40 sm:text-left">
                  Your details are only used to reply to your message.
                </p>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
            }}
            className="flex flex-col gap-4 lg:order-2"
            aria-label="Contact information"
          >
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-inner shadow-white/5 sm:h-14 sm:w-14 ${detail.iconSurface} ${detail.iconTone}`}>
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.16em] text-white/45">
                      {detail.label}
                    </span>
                    <span className="mt-1 block break-words text-base font-medium text-white sm:text-lg">
                      {detail.value}
                    </span>
                  </span>
                  {detail.href && (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-white/35 transition-all group-hover:text-emerald-300"
                    />
                  )}
                </>
              );

              return (
                <motion.div
                  key={detail.label}
                  variants={reveal}
                  whileHover={{ y: -3, x: 2 }}
                  className="group"
                >
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="interactive-card flex min-h-[100px] items-center gap-4 rounded-2xl p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:gap-5 sm:p-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="interactive-card flex min-h-[100px] items-center gap-4 rounded-2xl p-4 sm:gap-5 sm:p-5">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}

            <motion.div
              variants={reveal}
              className="mt-auto rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-emerald-300">
                <Check aria-hidden="true" className="h-4 w-4" />
                <p className="text-sm font-medium">What I can help with</p>
              </div>
              <p className="text-sm leading-6 text-white/55">
                Full-stack web applications, frontend experiences, API
                integrations, and turning product ideas into working software.
              </p>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}
