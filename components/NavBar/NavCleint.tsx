import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NavCleint = () => {
  const router = useRouter();
  const path = router.pathname;
  const [pathSelected, setPathSelected] = useState("/");

  useEffect(() => {
    setPathSelected(path);
  }, [path]);

  const customerNav = [
    {
      url: "/",
      label: "Trang Chủ",
    },
    {
      url: "/product",
      label: "Sản Phẩm",
    },
  ];
  return (
    <div>
      <div className="block">
        <nav className="px-2 space-x-4 flex items-center">
          {customerNav.map((item, index) => (
            <Link href={item.url} key={index}>
              <div
                key={index}
                className={` px-2 py-1 flex space-x-1 items-center text-sm font-semibold hover:opacity-75 relative ${
                  pathSelected === item.url ? " text-primary" : "text-white"
                }`}
              >
                {pathSelected === item.url ? (
                  <p className="h-[5px] w-[5px] rounded-full bg-primary "></p>
                ) : (
                  <></>
                )}
                <p>{item.label}</p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavCleint;
