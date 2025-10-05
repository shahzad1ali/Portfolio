'use client';

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
const DownloadCV = () => {
  try {
    console.log('Download CV clicked');
    const link = document.createElement('a');
    link.href = '/assets/Shahzad.pdf';
    link.download = 'Shahzad_Ali_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Download initiated');
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback: open in new tab
    window.open('/assets/Shahzad.pdf', '_blank');
  }
}
  
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Mern Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Shahzad Ali</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Mern Stack Developer with 1 year of experience in building scalable Mern-stack applications using MERN. Developed
              projects like a real-time mentorship platform, secure LMS. Skilled in RESTful API payment gateways, and real-time features.
              Passionate about solving complex problems and delivering innovative, user-focused solutions.
            </p>
           {/* btn and socials */}
<div className="flex flex-col xl:flex-row items-center gap-8">
  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" onClick={DownloadCV}>
    <span>Download CV</span>
    <FiDownload className="text-xl" />
  </Button>
  <div className="mb-8 xl:mb-0">
    <Socials containerStyles="flex gap-6"
    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
     />
  </div>
</div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;