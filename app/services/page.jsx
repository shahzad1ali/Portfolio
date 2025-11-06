"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Experienced in modern web development with React, Next.js, TypeScript, Redux, and Shadcn UI.Delivered projects like ASSANHOME real estate booking, an e-commerce store, and a learning platform.Implemented multi-payment support (Stripe, PayPal, cash) and token-based verification.Added secure Google/GitHub authentication and responsive, user-friendly UIs.',
    href: ''
  },
    {
    num: '02',
    title: 'UI/UX Design',
    description: 'Designing intuitive and user-friendly interfaces that enhance user experience.Focusing on responsive layouts, accessibility, and modern design principles.Transforming ideas into engaging digital products with seamless usability.',
    href: ''
  },
    {
    num: '03',
    title: 'Logo Design',
    description: 'Designed creative and professional logos that reflect brand identity.Focused on simplicity, uniqueness, and timeless visual appeal.Delivered versatile designs adaptable for both digital and print use',
    href: ''
  },
];

const Services = () => {
  return (
<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
  <div className="container mx-auto">
    {/* Section Title */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="mb-12 xl:mb-16 pt-16 xl:pt-24 text-center"
    >
      <h2 className="text-4xl xl:text-5xl font-bold text-white hover:text-accent transition-colors duration-300">
        Services
      </h2>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
    >
      {services.map((service, index) => {
        return (
          <div key={index} className="flex-1 flex flex-col gap-6 justify-center group">
            {/* top  */}
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}
              </div>
              <Link href={service.href}
              className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
              >
              <BsArrowDownRight className="text-primary text-2xl lg:text-3xl" />
              </Link>
            </div>
            {/* title  */}
            <h2
            className="text-[30px] lg:text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
            >{service.title}</h2>
            {/* description  */}
            <p>{service.description} </p>
            {/* border  */}
            <div className="border-b border-white/20 w-full"></div>
          </div>
        );
      })}
    </motion.div>
  </div>
</section>
  )
};

export default Services;