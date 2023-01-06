import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { SiGoogleanalytics } from "react-icons/si";
import { FaUserCog } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const menuAdmin = [
  {
    label: "Thống kê",
    href: "/statistics",
    icon: <SiGoogleanalytics />,
  },
  {
    label: "Tài khoản",
    href: "/dashboard",
    icon: <FaUserCog />,
  },
];

const NavAdmin = ({ zoomOutMenu }: { zoomOutMenu: boolean }) => {
  const [name, setName] = useState<string>();
  const [pathSelected, setPathSelected] = useState("dashboard");
  const router = useRouter();
  const path = router.pathname;
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      const decoded: any = jwt_decode(token);
      setName(decoded.firstName + "" + decoded.lastName);
    }
  }, [token]);

  useEffect(() => {
    setPathSelected(path);
  }, [path]);
  return (
    <div>
      <div
        className={`h-full overflow-y-auto fixed top-0 transition-all duration-300 left-0 ${
          zoomOutMenu ? "w-[90px]" : "w-[280px]"
        }`}
      >
        <div className={`${zoomOutMenu ? "px-1.5" : "px-5"}`}>
          {zoomOutMenu ? (
            <div className="w-full flex items-center justify-center my-4">
              <img src="/images/logo.svg" className="w-10 h-10" alt="" />
            </div>
          ) : (
            <div className="pt-6 pb-4">
              <img src="/images/logo.svg" className="w-10 h-10" alt="" />
              <div className="flex w-full items-center space-x-4 px-5 py-4 bg-[rgba(145,158,171,0.12)] rounded-lg mt-6">
                <img
                  src="/images/avatar_admin.jpg"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="text-sm">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-[rgb(145,158,171)]">admin</p>
                </div>
              </div>
            </div>
          )}
          <div className="space-y-1">
            {menuAdmin.map((menu, idx) => (
              <div
                key={idx}
                className={`cursor-pointer flex items-center ${
                  zoomOutMenu ? "flex-col space-y-1" : "space-x-3"
                }  py-3 pl-4 pr-3 rounded-md 
                  ${
                    pathSelected === menu.href
                      ? "text-[rgb(91,229,132)] bg-[rgba(0,171,85,0.16)] font-semibold"
                      : "font-medium text-[rgb(145,158,171)] hover:bg-[rgba(145,158,171,0.08)]"
                  }`}
              >
                <div className={`${zoomOutMenu ? "text-lg" : "text-lg"}`}>
                  {menu.icon}
                </div>
                <Link
                  className={`${zoomOutMenu ? "text-[10px]" : "text-sm"}`}
                  href={menu.href}
                >
                  {menu.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
