import React from "react";

import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import ContactMe from "./ContactMe";
import Certifications from "./Certifications";

const Home = () => {
  return (
    <div>
      <section id="profile">
        <Profile />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
