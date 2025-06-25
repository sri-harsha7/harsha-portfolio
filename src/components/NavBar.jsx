import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 lg:text-2xl border-b border-solid border-b-[#e4eaf1] px-10 py-6">
      <div className=" text-2xl lg:text-4xl font-medium">Sri Harsha</div>
      <div className="hidden lg:flex">
        <ul className="flex gap-4">
          <li className={styles.active}>
            <a href="#about">About</a>
          </li>
          <li className={styles.active}>
            <a href="#skills">Skills</a>
          </li>
          <li className={styles.active}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.active}>
            <a href="#education">Education</a>
          </li>
          <li className={styles.active}>
            <a href="#certifications">Certifications</a>
          </li>
          <li className={styles.active}>
            <a href="#contact">Contact Me</a>
          </li>
          <li className={styles.active}>
            <a
              href="https://drive.google.com/file/d/1s1UrSs2nd2k2uX6cVd-o18lJNkw-RPop/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          <a href="#contact">Hire Me</a>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
