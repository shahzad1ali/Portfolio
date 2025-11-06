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
      {/* Home Section */}
      <section id="home" className="mt-20 lg:mt-16 h-full min-h-screen">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center mt-5 xl:text-left order-2 xl:order-none">
              <span className="text-xl">Mern Stack Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm
                <br />
                <span className="text-accent">
                  <Typewriter
                    words={["Shahzad Ali"]}
                    loop={true}
                    cursor
                    cursorStyle=""
                    typeSpeed={300}
                    deleteSpeed={200}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p className="max-w-[500px] mb-9 text-white/80">
                Mern Stack Developer with 1 year of experience in building scalable Mern-stack applications using MERN. Developed
                projects like a real-time mentorship platform, secure LMS. Skilled in RESTful API payment gateways, and real-time features.
                Passionate about solving complex problems and delivering innovative, user-focused solutions.
              </p>

              {/*  Buttons and socials - only visible on mobile */}
              <div className="flex flex-col xl:flex-row items-center gap-8 lg:hidden">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
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
              </div>
              {/*  On larger screens, these buttons will be hidden */}
            </div>

            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen">
        <Services />
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen">
        <Resume />
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen">
        <Work />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </>
  );
};

export default Home;
