/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      className=" mt-20 px-5 lg:px-30 "
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-xl font-bold">About Me</h1>
      <p>
        On recent computer science engineering graduate from India with passion
        for full stack development I realise in creating robust and scalable web
        applications using modern technologies by goal is to leverage my skills
        and knowledge to contribute to innovative projects and make a meaningful
        impact in the tech industry
      </p>
    </motion.div>
  );
};

export default About;
