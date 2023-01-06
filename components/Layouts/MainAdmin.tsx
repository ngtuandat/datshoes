import React, { useEffect, useState } from "react";
import { ChildrenProps } from "../../interfaces/main";
import HeaderAdmin from "../Header/HeaderAdmin";
import NavAdmin from "../NavBar/NavAdmin";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MenuFixed from "./../MenuSidebar/MenuFixed";

const menuNav = {
  open: {
    width: "90px",
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    width: "280px",
    transition: {
      duration: 0.3,
    },
  },
};

const MainAdmin = ({ children }: ChildrenProps) => {
  const [zoomOutMenu, setZoomOutMenu] = useState(false);
  const [headerChange, setHeaderChange] = useState("h-[88px]");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setHeaderChange(
          "h-[60px] bg-[rgba(22,28,36,0.8)] backdrop-blur-[5px] shadow-xl"
        );
      } else {
        setHeaderChange("h-[88px]");
      }
    });
  });

  return (
    <div className="bg-[rgb(22,28,36)]">
      <header
        className={`px-10 fixed left-auto right-0 top-0 transition-all duration-300 ${
          zoomOutMenu ? "widthZoomOut" : "widthZoomOutOff"
        } top-0 w-full z-[1400] ${headerChange}`}
      >
        <HeaderAdmin />
      </header>
      <div className="flex overflow-y-auto">
        <motion.nav
          initial="closed"
          animate={zoomOutMenu ? "open" : "closed"}
          variants={menuNav}
          className="relative border-r shrink-0 border-dashed border-[rgba(145,158,171,0.24)]"
        >
          <button
            onClick={() => setZoomOutMenu(!zoomOutMenu)}
            className={`fixed top-7 ${
              zoomOutMenu ? "left-[76px]" : "left-[268px]"
            } border border-dashed rounded-full border-[rgba(145,158,171,0.24)] transition-all duration-300 hover:border-[rgba(145,158,171,0.5)] text-[rgb(145,158,171)] p-1 z-[2400] bg-[rgb(22,28,36)] hover:text-white`}
          >
            {zoomOutMenu ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
          </button>
          <NavAdmin zoomOutMenu={zoomOutMenu} />
        </motion.nav>
        <main className="px-10 pt-20 flex-1">{children}</main>
      </div>
      <MenuFixed />
    </div>
  );
};

export default MainAdmin;
