/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "Basic Python",
    "Git",
    "GitHub",
  ];
  return (
    <motion.div
      className=" mt-20 px-5 lg:px-30"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-xl font-bold">Skills</h1>
      <div className="mt-5">
        <ul className="list-none flex gap-6 flex-wrap ">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-200 text-#0D141C px-2 py-1 rounded-lg "
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Skills;
