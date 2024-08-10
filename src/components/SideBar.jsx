import React, { useState } from "react";
import logo from "../assets/Logo and company.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Items from "./Items";
import { useTheme } from "./ThemeContext";

const SideBar = () => {
  const [open, setOpen] = useState(true); // Sidebar open state
  const { theme } = useTheme();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } md:h-[150vh] relative flex flex-col justify-between ${
        open ? "w-[250px]" : "w-[60px]"
      } transition-all duration-300`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between p-4">
          {open && (
            <img
              alt="dashboard"
              src={logo}
              className="w-[111px] h-[42px] mt-[49px] ml-[20px]"
            />
          )}
          <div
            className={`cursor-pointer mt-4 ${open ? "ml-auto" : "mr-0"}`}
            onClick={toggleSidebar}
          >
            {open ? (
              <HiChevronLeft size={24} />
            ) : (
              <HiChevronRight size={24} />
            )}
          </div>
        </div>
        <div className={`hidden md:flex ${open ? "flex-col" : "items-center"}`}>
          <Items open={open} />
        </div>
      </div>

      <div className={`flex justify-center mb-4 ${open ? "" : "hidden"}`}>
        
      </div>
    </div>
  );
};

export default SideBar;
