import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavCleint from "../NavBar/NavCleint";
import { motion, useScroll } from "framer-motion";

const HeaderCleint = () => {
  const { scrollYProgress } = useScroll();
  const [headerChange, setHeaderChange] = useState("h-[88px]");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setHeaderChange(
          "h-[72px] bg-[rgba(22,28,36,0.8)] backdrop-blur-[5px] shadow-xl"
        );
      } else {
        setHeaderChange("h-[88px]");
      }
    });
  });

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-[1400] transition-all duration-500  ${headerChange}`}
    >
      <div
        className={`h-full flex items-center justify-between max-w-[1200px] mx-auto`}
      >
        <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
        <NavCleint />
      </div>
      <motion.div
        className="progress-bar rounded-r-lg"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default HeaderCleint;
