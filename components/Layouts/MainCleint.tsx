import React from "react";
import MenuFixed from "../MenuSidebar/MenuFixed";
import HeaderCleint from "./../Header/HeaderCleint";

interface ChildrenProps {
  children?: React.ReactNode;
}

const MainCleint = ({ children }: ChildrenProps) => {
  return (
    <div className="overflow-y-auto ">
      <header>
        <HeaderCleint />
      </header>
      <main>
        <div>{children}</div>
      </main>
      <MenuFixed />
    </div>
  );
};

export default MainCleint;
