import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

const HeaderAdmin = () => {
  return (
    <div className="flex items-center h-full text-[rgb(145,158,171)]">
      <div>
        <FiSearch className="text-lg" />
      </div>
      <div className="flex-1 flex items-center space-x-3 justify-end">
        <div className="p-2 cursor-pointer">
          <img src="/images/svg/flag_vn.svg" alt="" />
        </div>
        <div className="p-2 cursor-pointer">
          <IoMdNotifications className="text-xl" />
        </div>
        <div className="p-2 cursor-pointer">
          <img
            src="/images/avatar_admin.jpg"
            className="h-10 w-10 rounded-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
