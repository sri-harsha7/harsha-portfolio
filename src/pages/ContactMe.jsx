import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ContactMe = () => {
  const FormId = import.meta.env.VITE_CONTACTFORM_ID;
  return (
    <motion.div
      className="mt-20 px-5 lg:px-30"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Contact
      </h2>
      <form action={`https://formspree.io/f/${FormId}`} method="POST">
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#101518] text-base font-medium leading-normal pb-2">
              Name
            </p>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border border-[#d4dce2] bg-gray-50 focus:border-[#d4dce2] h-14 placeholder:text-[#5c748a] p-[15px] text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#101518] text-base font-medium leading-normal pb-2">
              Email
            </p>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border border-[#d4dce2] bg-gray-50 focus:border-[#d4dce2] h-14 placeholder:text-[#5c748a] p-[15px] text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#101518] text-base font-medium leading-normal pb-2">
              Message
            </p>
            <textarea
              type="text"
              name="message"
              placeholder="Your message"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border border-[#d4dce2] bg-gray-50 focus:border-[#d4dce2] h-14 placeholder:text-[#5c748a] p-[15px] text-base font-normal leading-normal"
            ></textarea>
          </label>
        </div>
        <div className="flex px-4 py-3 justify-start">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0a80ed] text-[#f7fafc] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Send</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactMe;
