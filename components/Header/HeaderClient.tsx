import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import NoSign from "../CheckSign/NoSign";
import NavClient from "./../NavBar/NavClient";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import Logged from "../CheckSign/Logged";
import Link from "next/link";
import { getProfile } from "../../services/user";

const HeaderClient = () => {
  const { scrollYProgress } = useScroll();
  const [headerChange, setHeaderChange] = useState("h-[88px]");
  const [name, setName] = useState<string>();
  const [avatar, setAvatar] = useState<string>();

  const token = Cookies.get("token");

  const fetchProfile = async (email: string) => {
    const res = await getProfile(email);
    setAvatar(res.data.profile.profile.avatar);
  };

  useEffect(() => {
    if (token) {
      const decoded: any = jwt_decode(token);
      setName(decoded.firstName + " " + decoded.lastName);
      fetchProfile(decoded.email);
    }
  }, [token]);

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
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <div className="flex items-center space-x-5">
          <NavClient />
          {name ? <Logged name={name} avatar={avatar} /> : <NoSign />}
        </div>
      </div>
      <motion.div
        className="progress-bar rounded-r-lg"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default HeaderClient;
