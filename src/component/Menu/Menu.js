import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = ({
  to,
  displayStyle,
  icon,
  title,
  badge,
  badge_bg = "",
  isOpen,
}) => {
  return (
    <>
      {isOpen ? (
        <Link
          to={to}
          className="2lg:flex justify-between items-center decoration-0"
        >
          <div className={`flex items-center item-hover ${displayStyle}`}>
            <i className={`${icon}`}></i>
            <span className=" text-menu-color text-sm hidden 2lg:block ">
              {title}
            </span>
          </div>
          {badge && (
            <span
              className={`px-1 rounded-sm text-sm  ${badge_bg} hidden 2lg:block`}
            >
              {badge}
            </span>
          )}
        </Link>
      ) : (
        <Link
          to={to}
          className="flex justify-between items-center decoration-0 "
        >
          <i className={`${icon} hover:text-white`}></i>
        </Link>
      )}
    </>
  );
};

export default Menu;
