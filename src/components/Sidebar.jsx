import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiAiqfome } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div
      className="ml-3 h-screen 
    md:overflow-hidden over-flow-auto 
    md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <React.Fragment>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3
            mt-4 flex text-xl font-extrabold tracking-tight dark:text-white
            text-slate-900"
            >
              <SiAiqfome />
              <span>Cutie Math</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                className="text-xl rounded-full p-3 hover:bg-light-gray
              mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 m-4 uppercase">{item.title}</p>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Sidebar;
