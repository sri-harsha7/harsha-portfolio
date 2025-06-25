/* eslint-disable no-unused-vars */
import React from "react";

import { Download, Linkedin, Github, Mail, Phone } from "lucide-react";
import Resume from "../assets/Resume.pdf";
import profilePic from "../assets/Profile.jpeg";
import { motion } from "motion/react";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 items-center mt-10 text-center">
      <div>
        <img
          src={profilePic}
          alt=""
          className="w-50 h-50 object-cover rounded-full "
        />
      </div>
      <h1 className="text-3xl font-bold">Sri Harsha</h1>
      <p>Full Stack Developer</p>
      <p>Recent Computer Science Engineering Graduate from India</p>
      <div className="flex flex-wrap items-center  gap-4 mt-4 mx-10 ">
        <button variant="outline" asChild className="hover-glow">
          <a
            className="flex items-center"
            href="mailto:sriharshabasavala@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="mr-2 h-4 w-4" />
            sriharshabasavala@gmail.com
          </a>
        </button>
        <button variant="outline" asChild className="hover-glow">
          <a
            className="flex items-center"
            href="tel:+91-8897227735"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="mr-2 h-4 w-4" />
            +91-8897227735
          </a>
        </button>

        <button variant="outline" asChild className="hover-glow">
          <a
            className="flex items-center"
            href="https://linkedin.com/in/sriharshabasavala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </button>
        <button variant="outline" asChild className="hover-glow">
          <a
            className="flex items-center"
            href="https://github.com/sri-harsha7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </button>
      </div>
      <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full mt-5 h-10 px-4 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] w-50 max-w-[480px] @[480px]:w-auto">
        <span class="truncate">
          <a
            href={Resume}
            download={Resume}
            className="flex gap-2 items-center"
          >
            Download Resume <Download className="mr-2 h-4 w-4" />
          </a>
        </span>
      </button>
    </div>
  );
};

export default Profile;
