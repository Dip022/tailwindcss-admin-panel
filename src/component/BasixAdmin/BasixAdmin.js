import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const BasixAdmin = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full kk h-full">
      <div className="flex h-screen">
        <div className=" bg-left-panel-bg">
          <div className={`${isOpen ? "w-[60px] 2lg:w-[280px]" : "w-[70px]"}`}>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}></SideBar>
          </div>
        </div>
        <div className="w-full">
          <div>
            <NavBar></NavBar>
          </div>
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasixAdmin;
