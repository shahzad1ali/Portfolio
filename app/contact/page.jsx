"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+92 3001595619"
  },
   {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shahzadmobi619@gmail.com"
  },
   {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "pakistan, Lahore, bath"
  },

]

import { motion } from "framer-motion";
const Contact = () => {

   async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "8815786e-cc9e-42cc-9531-fbfa83edf5f9",
                name: e.target.name.value,
                email: e.target.email.value,
                phoneNumber: e.target.phoneNumber.value,
                message: e.target.message.value,
                subject: e.target.subject.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            toast.success("Form submitted successfully!");
            window.location.reload();
        }
    }

  return (
    <motion.section
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
  }}
  className="pb-10"
>
  <div className="container mx-auto">
    {/* Section Title */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="mb-6 xl:mb-16 pt-5 xl:pt-0 text-center"
    >
      <h2 className="text-4xl xl:text-5xl font-bold text-white hover:text-accent transition-colors duration-300">
        Contact
      </h2>
    </motion.div>
    <div className="flex flex-col xl:flex-row gap-[30px]">
      {/* form */}
      <div className="xl:w-[60%] order-2 xl:order-none">
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
          <h3 className="text-4xl text-accent">Let's work together</h3>
<p className="text-white/60">
  Interested in my projects? Let's discuss how I can help bring your vision to life. I'm ready to collaborate on your next big idea and deliver exceptional results.
</p>
{/* input */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Input type="name" name='name' placeholder="Enter your Name" />
  <Input type="email" name="email" placeholder="Email address" />
  <Input type="phone" name="phoneNumber" placeholder="Phone number" />
    <Input type="subject" name='subject' placeholder="select your subject" />

</div>
<div>
  {/* textarea */}
  <Textarea
  type="message"
  name="message"
    className="h-[200px]"
    placeholder="Type your message here."
  />
  {/* btn */}
  <Button size="md" type='submit' className="max-w-40 mt-5">
    Send message
  </Button>
</div>
        </form>
      </div>
      {/* info */}
      <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
        <ul className="flex flex-col gap-10">
  {info.map((item, index) => {
    return (
      <li key={index} className="flex items-center gap-6">
        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
          <div className="text-[28px]">{item.icon}</div>
        </div>
        <div className="flex-1">
          <p className="text-white/60">{item.title}</p>
          <h3 className="text-[15px] lg:text-xl">{item.description}</h3>
        </div>
      </li>
    );
  })}
</ul>
      </div>

    </div>
  </div>
</motion.section>
  );
};

export default Contact;
