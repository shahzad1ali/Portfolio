'use client';

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Services from "@/app/services/page";
import Resume from "@/app/resume/page";
import Work from "@/app/work/page";
import Contact from "@/app/contact/page";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const DownloadCV = () => {
    try {
      console.log("Download CV clicked");
      const link = document.createElement("a");
      link.href = "/assets/Shahzad.pdf";
      link.download = "Shahzad_Ali_CV.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log("Download initiated");
    } catch (error) {
      console.error("Download failed:", error);
      window.open("/assets/Shahzad.pdf", "_blank");
    }
  };

  return (
    <>
      <section id="home" className="mt-20 lg:mt-16 h-full min-h-screen">
        <div className="container mx-auto h-full px-4 sm:px-6">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, staggerChildren: 0.12 }}
              className="order-2 mt-5 text-center xl:order-none xl:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-sm uppercase tracking-[0.2em] text-accent sm:text-xl"
              >
                Full-Stack Developer
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h1 mb-6 mt-3"
              >
                Hello I'm
                <br />
                <span className="text-accent">
                  <Typewriter
                    words={["Shahzad Ali"]}
                    loop={true}
                    cursor
                    cursorStyle=""
                    typeSpeed={400}
                    deleteSpeed={200}
                    delaySpeed={1000}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mx-auto mb-9 max-w-[620px] text-sm leading-7 text-white/75 sm:text-base xl:mx-0"
              >
                I build end-to-end web and mobile products, from responsive
                React and Next.js interfaces to backend APIs, database-backed
                workflows, and third-party integrations. My project experience
                includes service marketplaces, driver onboarding, fleet route
                optimization, learning platforms, e-commerce, real-time
                messaging, payments, and location-aware features. I care about
                clear user journeys,
                reliable implementation, and details that make software easier
                to use.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-col items-center gap-8 lg:hidden xl:flex-row"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="interactive-card flex items-center gap-2 uppercase"
                  onClick={DownloadCV}
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
