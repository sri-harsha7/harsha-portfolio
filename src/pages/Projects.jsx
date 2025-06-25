/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      type: "Featured Project",
      name: "Imager - Text-to-Image Generator",
      description: `
    - Developed a SaaS application that generates AI-powered images from text using the ClipDrop API.
    - Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with REST APIs.
    - Designed a fully responsive, modern UI for enhanced user experience.`,
      link: "https://github.com/sri-harsha7/IMAGER",
    },
    {
      type: "Featured Project",
      name: "Hyper-Heuristics for Maximally Diverse Grouping Problem",
      description: `
    - Applied hyper-heuristic techniques like Item Swapping, Greedy Heuristic, and Destroy-Repair.
    - Solved combinatorial optimization problems using algorithms like SSGA, VNS, and IMS.
    - Evaluated and compared algorithms based on solution quality and computational efficiency.`,
    },
    {
      type: "Project",
      name: "Data Analysis on World Cup 2007 Dataset",
      description: `
    - Performed Exploratory Data Analysis (EDA) on cricket World Cup 2007 dataset.
    - Visualized data to uncover patterns and relationships between key variables.
    - Generated actionable insights using Python libraries like Pandas and Matplotlib.`,
    },
  ];

  return (
    <motion.div
      className=" mt-20 px-5 lg:px-30"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-xl font-bold">Projects</h1>
      <div class="flex items-stretch justify-between gap-4 rounded-lg bg-slate-50  ">
        <div className="flex flex-[2_2_0px] flex-col gap-4 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="mt-5 flex flex-col gap-1 shadow-[0_0_4px_rgba(0,0,0,0.1)] p-4  "
            >
              <p class="text-[#49739c] text-sm font-normal leading-normal">
                {project.type}
              </p>
              <p class="text-[#0d141c] text-base font-bold leading-tight">
                {project.name}
              </p>
              <p class="text-[#49739c] text-sm font-normal leading-normal">
                {project.description
                  .trim()
                  .split("\n")
                  .map((point, index) => (
                    <div key={index} className="text-left">
                      {point}
                    </div>
                  ))}
              </p>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal w-fit"
                onClick={() => window.open(project.link, "_blank")}
              >
                <span class="truncate">View Project</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
