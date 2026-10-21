"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss, 
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb
} from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "I am a Full-Stack Developer who builds complete web products, from responsive React and Next.js interfaces to backend APIs and database-backed workflows. My portfolio includes a location-aware service marketplace, a fleet route optimizer, a 17-step driver onboarding platform, a paid learning management system, e-commerce experiences, and mobile applications. I work with Node.js, Django, MySQL, and MongoDB, and have integrated authentication, payments, maps, push and email notifications, and real-time messaging. I focus on turning product requirements into clear user journeys and maintainable features across the stack.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shahzad Ali",
    },
     {
      fieldName: "Phone",
      fieldValue: "+92 03001595619",
    },
     {
      fieldName: "Experience",
      fieldValue: "2 Year",
    },
     {
      fieldName: "Skype",
      fieldValue: "Coding.",
    },
     {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
     {
      fieldName: "Email",
      fieldValue: "shahzadmobi619@gmail.com",
    },
     {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ]
};

// experience data
const experience = {
  icon: "/assets/resume/Shahzad.pdf",
  title: "My experience",
  description:
    "I have hands-on experience delivering web application features from interface implementation through API and service integration. My project work spans marketplace workflows, learning platforms, e-commerce, onboarding, and mobile experiences. I continue to develop my engineering skills through practical product work.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Mern Stack Developer",
      duration: "2025 - Present",
    },
       {
      company: "web Design Studio",
      position: "Mern Stack Developer",
      duration: "Start october 2024",
    },
{
  company: "Digital Agency",
  position: "UI/UX Designer",
  duration: "february 2024 - august 2024",
}
  ],
};

// Education
const education = { 
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "I am pursuing a BS in Information Technology at Virtual University. My coursework supports a strong foundation in programming and web development, which I continue to apply through hands-on full-stack projects.",
  items: [
   {
    institution: "Online Course Platform",
    degree: "Full Stack Web Development",
    duration: "2024",
  },
  {
  institution: "Codecademy",
  degree: "Front-end Track",
  duration: "2023",
},
{
  institution: "Online Course",
  degree: "Programming Course",
  duration: "2024",
},
{
  institution: "Design School",
  degree: "Diploma in Graphic Design",
  duration: "2021 - 2022",
},
{
  institution: "Punjab College",
  degree: "ICS",
  duration: "2021 - 2023",
}
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "I work across the full stack: building responsive React and Next.js interfaces, developing backend services with Python, Django, Node.js, Express, and NestJS, and persisting application data with MySQL and MongoDB. My project work also includes Firebase notifications, REST APIs, authentication, real-time messaging, and third-party integrations.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
  icon: <FaCss3 />,
  name: "css 3",
},
{
  icon: <FaJs />,
  name: "javascript",
},
{
  icon: <FaReact />,
  name: "react.js",
},
{
  icon: <SiNextdotjs />,
  name: "next.js",
},
{
  icon: <SiTailwindcss />,
  name: "tailwind.css",
},
{
  icon: <FaNodeJs />,
  name: "node.js",
},
{
  icon: <SiTypescript />,
  name: "typescript",
},
{
  icon: <SiExpress />,
  name: "express.js",
},
{
  icon: <SiMongodb />,
  name: "mongodb",
},
  ],
};

const skillGroups = [
  {
    title: "Backend development",
    description:
      "Build and integrate APIs, application logic, and server-side workflows for full-stack products.",
    skills: ["Python", "Django", "Node.js", "Express.js", "NestJS", "REST APIs"],
  },
  {
    title: "Databases & application data",
    description:
      "Work with relational and document databases to support product data and business workflows.",
    skills: ["MySQL", "MongoDB", "Redux", "RTK Query"],
  },
  {
    title: "Integrations & real-time features",
    description:
      "Connect backend workflows to communication, location, payment, and notification services.",
    skills: [
      "Firebase Web Push",
      "WebSockets",
      "Leaflet",
      "Stripe",
      "Brevo",
    ],
  },
];

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }}
  className="flex items-center justify-center px-4 pb-12 pt-14 sm:px-6 sm:pb-14 xl:px-0 xl:pb-16 xl:pt-16"
>
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8 text-center xl:mb-10"
    >
      <h2 className="text-4xl mb-6 lg:mb-0 xl:text-5xl font-bold text-white hover:text-accent transition-colors duration-300">
     Resume & Skills
      </h2>
    </motion.div>
    <Tabs
      defaultValue="experience"
      className="flex flex-col gap-6 xl:flex-row xl:items-start xl:gap-10"
    >
      <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-3 xl:mx-0 xl:w-[32%] xl:shrink-0">
  <TabsTrigger value="experience">Experience</TabsTrigger>
  <TabsTrigger value="education">Education</TabsTrigger>
  <TabsTrigger value="skills">Skills</TabsTrigger>
  <TabsTrigger value="about">About me</TabsTrigger>
</TabsList>

<div className="min-w-0 w-full flex-1">

<TabsContent value="experience" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold sm:text-4xl">{experience.title}</motion.h3>
    <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[700px] text-sm leading-7 text-white/60 mx-auto xl:mx-0 sm:text-base">{experience.description}</motion.p>
    <ScrollArea className="h-[360px] sm:h-[400px]">
      <ul className="grid grid-cols-1 gap-4 pr-3 lg:grid-cols-2 lg:gap-5">
        {experience.items.map((item, index) => {
          return (
         <motion.li
  key={index}
  whileHover={{ y: -4 }}
  className="interactive-card min-h-[184px] rounded-xl px-6 py-6 flex flex-col justify-center items-center gap-1 sm:px-8 lg:items-start"
>
  <span className="text-accent">{item.duration}</span>
  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
    {item.position}
  </h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.company}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>

  <TabsContent value="education" className="w-full">
     <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold sm:text-4xl">{education.title}</motion.h3>
    <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[700px] text-sm leading-7 text-white/60 mx-auto xl:mx-0 sm:text-base">{education.description}</motion.p>
    <ScrollArea className="h-[360px] sm:h-[400px]">
      <ul className="grid grid-cols-1 gap-4 pr-3 lg:grid-cols-2 lg:gap-5">
        {education.items.map((item, index) => {
          return (
         <motion.li
  key={index}
  whileHover={{ y: -4 }}
  className="interactive-card min-h-[184px] rounded-xl px-6 py-6 flex flex-col justify-center items-center gap-1 sm:px-8 lg:items-start"
>
  <span className="text-accent">{item.duration}</span>
  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
    {item.degree}
  </h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
  </TabsContent>

<TabsContent value="skills" className="w-full h-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold sm:text-4xl">{skills.title}</motion.h3>
      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[700px] text-sm leading-7 text-white/60 mx-auto xl:mx-0 sm:text-base">{skills.description}</motion.p>
    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
      {skills.skillList.map((skill, index) => {
        return ( 
        <motion.li key={index} whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="interactive-card w-full h-[110px] sm:h-[140px] rounded-xl flex justify-center items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon} </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="h-6 w-20 text-center justify-center rounded-[4px] capitalize bg-white text-primary">{skill.name} </p>
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>
        </motion.li>
      );
      })}
    </ul>
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group) => (
        <section
          key={group.title}
          className="interactive-card rounded-xl p-5 sm:p-6"
          aria-label={group.title}
        >
          <h4 className="text-lg font-semibold text-white">{group.title}</h4>
          <p className="mt-2 text-sm leading-6 text-white/60">
            {group.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-xs text-accent sm:text-sm"
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
      <h4 className="text-lg font-semibold text-white">
        Backend work across my projects
      </h4>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/65 sm:grid-cols-2">
        <li>
          <span className="font-medium text-white">InstallSync:</span> Django
          and MySQL workflows for job creation, installer radius and
          availability, proposals, and job status updates.
        </li>
        <li>
          <span className="font-medium text-white">Messaging & notifications:</span>{" "}
          WebSocket conversations and Firebase web push notifications using
          VAPID, alongside SMTP email.
        </li>
        <li>
          <span className="font-medium text-white">Driver Transportation:</span>{" "}
          Node.js and MySQL workflows for driver invitations, application
          submissions, administration, and load assignment.
        </li>
        <li>
          <span className="font-medium text-white">Fleet Route Optimizer:</span>{" "}
          Angular, Leaflet, NestJS, and MySQL with OSRM route optimization for
          validated multi-stop trips.
        </li>
        <li>
          <span className="font-medium text-white">Other products:</span>{" "}
          Authentication, payment integrations, and course and user workflows
          across learning, e-commerce, and mobile projects.
        </li>
      </ul>
    </div>
  </div>
</TabsContent>

 <TabsContent
  value="about"
  className="w-full text-center xl:text-left"
>
  <div className="flex flex-col gap-[30px]">
    <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold sm:text-4xl">{about.title}</motion.h3>
    <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[700px] text-sm leading-7 text-white/60 mx-auto xl:mx-0 sm:text-base">
      {about.description}
    </motion.p>
    <ul className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:mx-0">
      {about.info.map((item, index) => {
        const colorClasses = [
          "border-l-emerald-400 text-emerald-300",
          "border-l-cyan-400 text-cyan-300",
          "border-l-violet-400 text-violet-300",
          "border-l-amber-400 text-amber-300",
        ];

        return (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className={`interactive-card min-w-0 rounded-xl border-l-2 p-4 text-left sm:p-5 ${colorClasses[index % colorClasses.length]}`}
          >
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-white/50">
              {item.fieldName}
            </span>
            <span className="mt-2 block break-words text-base font-medium text-white sm:text-lg">
              {item.fieldValue}
            </span>
          </motion.li>
        );
      })}
    </ul>
  </div>
</TabsContent>
</div>
    </Tabs>
  </div>
</motion.div>
  );
};

export default Resume; 
