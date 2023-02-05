import React from "react";
import { ChildrenProps } from "../../interfaces/main";
import MenuFixed from "../MenuSidebar/MenuFixed";
import HeaderClient from "../Header/HeaderClient";
import Cart from "../MenuSidebar/Cart";
import { useRouter } from "next/router";

const MainClient = ({ children }: ChildrenProps) => {
  const router = useRouter();
  return (
    <div className="overflow-y-auto ">
      <header>
        <HeaderClient />
      </header>
      <main className="bg-dark min-h-screen pt-[80px]">
        <div
          className={`${!(router.asPath === "/") && "max-w-[1200px] mx-auto"}`}
        >
          {children}
        </div>
      </main>
      {router.asPath.includes("product") ? <Cart /> : <></>}
      <MenuFixed />
    </div>
  );
};

export default MainClient;
