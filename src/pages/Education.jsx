/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

const Education = () => {
  return (
    <motion.div
      className=" mt-20 px-5 lg:px-30"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Education
      </h2>
      {/* Graduation */}
      <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
        <div
          className="text-[#0d141c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-12"
          data-icon="GraduationCap"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
          </svg>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[#0d141c] text-base font-medium   ">
            Dual Degree Integrated (B.Tech + M.Tech) in Computer Science
            Engineering
          </p>
          <p>
            Indian Institute of Information Technology Design and Manufacturing
            Kancheepuram, Chennai Tamil Nadu.
          </p>
          <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">
            07/2019 - 05/2024
          </p>
        </div>
      </div>
      {/* class XII */}
      <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 mt-5">
        <div
          className="text-[#0d141c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-12"
          data-icon="GraduationCap"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
          </svg>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1 ">
            class XII - Mathematics , Physics , Chemistry
          </p>
          <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1 ">
            Narayana Junior College, Visakhapatnam Andhra Pradesh
          </p>
          <p>Board of Intermediate Education Andhra Pradesh</p>
          <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">
            07/2017 - 03/2019
          </p>
        </div>
      </div>
      {/* class X */}
      <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 mt-5">
        <div
          className="text-[#0d141c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-12"
          data-icon="GraduationCap"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
          </svg>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1 ">
            class X
          </p>
          <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1 ">
            Bhashyam Public High School, Visakhapatnam Andhra Pradesh
          </p>
          <p>Board of Secondary Education Andhra Pradesh</p>
          <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">
            07/2016 - 03/2017
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
