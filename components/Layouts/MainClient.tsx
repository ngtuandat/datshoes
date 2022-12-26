import React from "react";
import { ChildrenProps } from "../../interfaces/main";
import MenuFixed from "../MenuSidebar/MenuFixed";
import HeaderClient from "../Header/HeaderClient";

const MainClient = ({ children }: ChildrenProps) => {
  return (
    <div className="overflow-y-auto ">
      <header>
        <HeaderClient />
      </header>
      <main>
        <div>{children}</div>
      </main>
      <MenuFixed />
    </div>
  );
};

export default MainClient;
