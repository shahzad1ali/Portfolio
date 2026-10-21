'use client'

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: 2,
    text: "Years of Experience",
  },
   {
    num: 12,
    text: "Projects Showcased",
  },
   {
    num: 8,
    text: "Core Technologies",
  },
   {
    num: 902,
    text: "Code commits", 
  },
]

const Stats = () => {
  return (
    <section className="pb-12 xl:pt-0 xl:pb-0">
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="mx-auto flex max-w-[80vw] flex-wrap gap-6 sm:max-w-none xl:max-w-none"
    >
      {stats.map((item, index) => {
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex min-w-[135px] flex-1 items-center justify-center gap-3 sm:min-w-[180px] sm:gap-4 xl:justify-start"
            key={index}
          >
            <CountUp
              end={item.num}
              duration={5}
              delay={2}
              className="text-4xl font-extrabold sm:text-5xl xl:text-6xl"
            />
            <p className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} text-xs leading-snug text-white/80 sm:text-sm`} >{item.text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>
  )
}

export default Stats
