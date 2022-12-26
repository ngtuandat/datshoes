import React from "react";
import { motion } from "framer-motion";

const minimalUi = {
  offscreenP: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  offscreenH: {
    y: -100,
    opacity: 0,
  },
};

const ContentHome = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="py-32">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.p
            initial="offscreenP"
            whileInView="onscreen"
            variants={minimalUi}
            className="uppercase text-[rgb(99,115,129)] text-xs font-bold -mt-2 mb-2"
          >
            Cuc shoes
          </motion.p>
          <motion.h1
            initial="offscreenH"
            whileInView="onscreen"
            variants={minimalUi}
            className="text-white font-extrabold text-[40px]"
          >
            Cuc Shoes
            <br />
            có gì?
          </motion.h1>
        </div>
        <motion.div
          initial="offscreenP"
          whileInView="onscreen"
          variants={minimalUi}
          className="grid grid-cols-3 gap-20 items-center"
        >
          <div className="col-span-1 px-10 py-20 text-center h-fit">
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_make_brand.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                Branding
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                Consistent design makes it easy to brand your own.
              </p>
            </div>
          </div>
          <div className="col-span-1 px-10 py-20 text-center h-fit shadow-ui rounded-2xl">
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_design.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                UI & UX Design
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                The kit is built on the principles of the atomic design system.
                It helps you to create projects fastest and easily customized
                packages for your projects.
              </p>
            </div>
          </div>
          <div className="col-span-1 px-10 py-20 text-center h-fit">
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_development.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                Development
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                Easy to customize and extend, saving you time and money.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentHome;
