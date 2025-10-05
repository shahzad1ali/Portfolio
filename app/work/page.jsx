'use client'

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Mern Stack",
    title: "E-commerce Website",
    description: "Developed a full-stack e-commerce platform using the MERN stack with product buying and selling features.Integrated Google authentication, multiple payment methods (Stripe, PayPal, cash), and token-based user verification.Enhanced scalability by creating a reusable custom NPM package and managing state with Redux.",
    stack: [{ name: "React" },{ name: "Tailwind.css" },{ name: "Node.js" }],
    image: "/assets/projects/e-shop.png",
    live: "https://e-shop-zeta-indol.vercel.app/",
    github: 'https://github.com/shahzad1ali/multivendor',
  },
   {
    num: "02",
    category: "Mern Stack",
    title: "E-Learning Website",
    description: "Developed a comprehensive LMS using Next.js and TypeScript with Shadcn for responsive UI.Implemented Google/GitHub login, token-based verification, and OTP-based authentication.Integrated Stripe for paid courses with multi-payment support (cards, PayPal, cash).Built admin dashboards for course creation, video uploads, messaging, reviews, and analytics.",
    stack: [{ name: "Next.js" },{ name: "Tailwind.css" },{ name: "Typescript" },{ name: "RTQ" },{ name: "Node.js" }],
    image: "/assets/projects/lms.png",
    live: "https://lms-rosy-omega.vercel.app/",
    github: 'https://github.com/shahzad1ali/LMS-server',
  },
   {
    num: "03",
    category: "Mern Stack",
    title: "Mobile-movie App",
    description: "Developed a React Native app (Expo) with movie browsing, search, and watch functionality.Integrated Google OAuth for secure authentication and personalized access.Featured top-rated movies and ensured newly added titles appear at the top.",
    stack: [{ name: "ReactNative" },{ name: "Tailwind.css" },{ name: "typescript" }],
    image: "/assets/projects/mobile-app.jpg",
    live: "",
    github: 'https://github.com/shahzad1ali/Mobile-Movie-App',
  },
  {
    num: "04",
    category: "Frontend",
    title: "Gym and Yoga App",
    description: "Created a React.js + Tailwind CSS Gym app showcasing yoga and workout classes.Used Framer Motion to add dynamic, interactive animations.Delivered a responsive and visually appealing design.",
    stack: [{ name: "React.js" },{ name: "Tailwind.css" },{ name: "javascript" }],
    image: "/assets/projects/yoga.png",
    live: "https://gym-project-snowy.vercel.app/",
    github: 'https://github.com/shahzad1ali/Gym-Project',
  },
  {
    num: "05",
    category: "Frontend",
    title: "MindLeap",
    description: "A MindLeap web application built with React, Vite, and TailwindCSS to display stylish chair products with a clean and responsive UI. It includes smooth animations using Framer Motion, tab-based navigation with React Tabs, and reusable components for a seamless browsing experience.",
    stack: [{ name: "React.js" },{ name: "Tailwind.css" },{ name: "javascript" }],
    image: "/assets/projects/mindleap.png",
    live: "https://mindleap-react-app-black.vercel.app/",
    github: 'https://github.com/shahzad1ali/mindleap-react-app',
  },
  {
    num: "06",
    category: "Frontend",
    title: "ChainCross",
    description: "Developed CrossChain Frontend using React, Vite, and Tailwind CSS for high performance and responsive UI.Built specifically for the Solana ecosystem with features like token launches, vesting, and staking.Focused on security, decentralization, and community trust.",
    stack: [{ name: "React.js" },{ name: "Tailwind.css" },{ name: "javascript" }],
    image: "/assets/projects/chaincross.png",
    live: "https://chain-cross-app.vercel.app/",
    github: 'https://github.com/shahzad1ali/Chain-Cross-App',
  },
]

export default function Work() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const project = projects[currentProjectIndex];

  const handlePrevious = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 , transition: {delay: 2.4, duration: 0.6, ease: 'easeIn'} }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
     <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        {/* Project Details - Left Side */}
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          {/* outline num */}
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>
          {/* project category */}
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.category} project
          </h2>
          {/* project title */}
          <h3 className="text-2xl font-semibold text-accent mb-2">
            {project.title}
          </h3>
          {/* project description */}
          <p className="text-white/60 text-lg leading-relaxed">{project.description}</p>
          
          {/* stack */}
          <div className="flex flex-wrap pt-4 pb-4 gap-2">
            {project.stack.map((tech, index) => (
              <span key={index} className="text-accent text-sm font-medium">
                {tech.name}
                {index < project.stack.length - 1 && ', '}
              </span>
            ))}
          </div>
          
          {/* border */}
          <div className="border border-white/20 w-full"></div>
          
          {/* buttons */}
          <div className="flex items-center gap-4 mt-4">
            {/* Live Project button  */}
            <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-all duration-300">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent className='bg-white text-black'>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>

            {/* Github Project button  */}
            <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-all duration-300">
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent className='bg-white text-black'>
                    <p>Github repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>

        {/* Fixed Image - Right Side */}
        <div className="w-full xl:w-[65%] relative">
          <div className="xl:h-[590px] mb-12">
            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
              {/* overlay */}
              <div className="absolute top-0 bottom-0 w-full h-full bg-primary"></div>
              {/* image container with proper aspect ratio */}
              <div className="relative w-full h-full rounded-[8px]">
                <Image
                  src={project.image}
                  fill
                  className="object-contain"
                  alt={project.title}
                />
              </div>
              
              {/* Navigation Buttons - Left Bottom of Image */}
              <div className="absolute left-0 bottom-0 flex gap-2 z-20">
                <button 
                  className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  onClick={handlePrevious}
                >
                  <PiCaretLeftBold />
                </button>
                <button 
                  className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  onClick={handleNext}
                >
                  <PiCaretRightBold />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </motion.section>
  );
}