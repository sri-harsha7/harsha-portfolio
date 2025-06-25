/* eslint-disable no-unused-vars */
import React from "react";
import certificateIcon from "../assets/certifications.svg";
import { motion } from "motion/react";

const Certifications = () => {
  const certificates = [
    {
      title: "Full Stack Web Development (MERN Stack)",
      issuer: "Cuvette",
      date: "Oct 2024 – Jun 2025 (Ongoing)",
      link: "na",
    },

    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Score: 72%, 2023",
      link: "https://drive.google.com/file/d/1V4aZaG9fqbG6hMsmKDvw5RuLIfeIZc9W/view",
    },
    {
      title: "The Joy of Computing using Python",
      issuer: "NPTEL",
      date: "Score: 64%, 2023",
      link: "https://drive.google.com/file/d/1nnG2wpHEcTa1-5zfBehSWOp0QivmJRAG/view",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      date: "Score: 87%, 2022",
      link: "https://drive.google.com/file/d/1I1ONLBhzf9EgFl6-Vb-65fmWJeyi6zIh/view",
    },
  ];

  const handleViewCertificate = (link) => {
    window.open(link, "_blank");
  };
  return (
    <motion.div
      className=" mt-20 px-5 lg:px-30"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 class="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Certifications
      </h2>
      {certificates.map((certificate, index) => (
        <div
          class="flex items-center gap-4 bg-gray-50 px-4 min-h-14 mt-10"
          key={index}
        >
          <div
            class="text-[#101518] flex items-center justify-center rounded-lg bg-[#eaedf1] shrink-0 size-10"
            data-icon="Certificate"
            data-size="24px"
            data-weight="regular"
          >
            <img src={certificateIcon} alt="" />
          </div>
          <div className="flex justify-between items-center w-full">
            <div class="flex flex-col gap-1 ">
              <p class="text-[#101518] text-base font-normal  flex-1 ">
                {certificate.title}
              </p>

              <p class="text-[#101518] text-base font-normal  flex-1 ">
                {certificate.issuer}
              </p>
              <p class="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">
                {certificate.date}
              </p>
            </div>
            <span className="hidden lg:block">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal w-fit"
                onClick={() => handleViewCertificate(certificate.link)}
              >
                <span class="truncate">View Certificate</span>
              </button>
            </span>

            <span className="lg:hidden">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal w-fit"
                onClick={() => handleViewCertificate(certificate.link)}
              >
                <span class="truncate">View</span>
              </button>
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Certifications;
