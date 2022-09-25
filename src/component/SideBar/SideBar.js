import React from "react";
import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";
import Menu from "../Menu/Menu";
import ToggleMenu from "../ToggleMenu/ToggleMenu";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`bg-left-panel-top flex items-center py-6 2lg:py-7 px-0 ${
          isOpen
            ? "justify-center 2lg:justify-between px-5 2"
            : "justify-center 1"
        }`}
      >
        <a href=" ">
          <img
            src={isOpen ? logo : logo2}
            alt="basix-admin"
            className={`2lg:block hidden ${isOpen ? "w-[145px]" : ""}`}
          />
          <img src={logo2} alt="basix-admin" className="2lg:hidden" />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-0 relative  2lg:block hidden text-white"
        >
          {isOpen ? (
            <i className="fa-solid fa-bars-progress text-menu-color"></i>
          ) : (
            <span
              className="absolute top-[-18px] left-[8px] after:content-['\f0a4'] font-left-arrow w-[40px] 
            h-[40px] bg-red-600 rounded-full flex items-center justify-center"
            ></span>
          )}
        </button>
      </div>
      <div>
        <ul
          className={`px-0 lg:px-4 flex flex-col ${
            isOpen ? "" : "justify-center items-center"
          }`}
        >
          <li className="py-3 ">
            <Menu
              to="dashboard"
              icon="text-menu-color fa fa-dashboard"
              title="Dashboard"
              badge="New"
              badge_bg={"bg-success text-white"}
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
          {isOpen ? (
            <li className="py-2 hidden 2lg:block">
              <span className="hidden 2lg:block uppercase  fw-bold text-menu-title text-sm font-bold">
                UI elements
              </span>
            </li>
          ) : (
            <></>
          )}
          <li className="py-3">
            <ToggleMenu
              icon={"fa fa-puzzle-piece"}
              title={"Components"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className={`${isOpen ? "2lg:lg-4" : ""} pb-3`}>
                    <Menu
                      to="button"
                      icon="text-menu-color fa fa-puzzle-piece"
                      title="Button"
                      badge="New"
                      badge_bg={"bg-danger text-white"}
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:pt-0" : ""} pb-3`}>
                    <Menu
                      to="badges"
                      icon="text-menu-color fa fa fa-id-badge"
                      title="Badges"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="socialbuttons"
                      icon="text-menu-color fa fa-share-square"
                      title="Social Buttons"
                      displayStyle={"gap-4"}
                      badge="New"
                      badge_bg={"bg-success text-white"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="cards"
                      icon="text-menu-color fa fa-id-card"
                      title="Cards"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="alerts"
                      icon="text-menu-color fa fa-exclamation-triangle"
                      title="Alerts"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="progressbars"
                      icon="text-menu-color fa fa-spinner"
                      title="Progress Bars"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="modals"
                      icon="text-menu-color fa fa-fire"
                      title="Modals"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="grids"
                      icon="text-menu-color fa fa-th"
                      title="Grids"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="typography"
                      icon="text-menu-color fa fa-file-word"
                      title="Typography"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="py-3">
            <Menu
              to="tables"
              icon="text-menu-color fa fa-table"
              title="Tables"
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
          <li className="py-3">
            <ToggleMenu
              icon={"fa fa-pencil-square"}
              title={"Forms"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className={`${isOpen ? "2lg:lg-4" : ""} pb-3`}>
                    <Menu
                      to="basicform"
                      icon="text-menu-color fa fa-pencil-square"
                      title="Basic Form"
                      displayStyle={"gap-4"}
                      badge="New"
                      badge_bg={"bg-warning text-black-600"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="py-3">
            <Menu
              to="icons"
              icon="text-menu-color fa fa-star"
              title="Icons"
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
          <li className="py-3">
            <Menu
              to="widgets"
              icon="text-menu-color fa fa-calculator"
              title="Widgets"
              displayStyle={"gap-5"}
              badge="60+"
              badge_bg={"bg-info text-white"}
              isOpen={isOpen}
            />
          </li>
          <li className="py-3">
            <ToggleMenu
              icon={"fa fa-pie-chart"}
              title={"Charts"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className={`${isOpen ? "2lg:lg-4" : ""} pb-3`}>
                    <Menu
                      to="chartjs"
                      icon="text-menu-color fa fa-line-chart"
                      title="Chart JS"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="flotchart"
                      icon="text-menu-color fa fa-line-chart"
                      title="Flot Chart"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="py-3">
            <ToggleMenu
              icon={"fa-solid fa-location-dot"}
              title={"Maps"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className={`${isOpen ? "2lg:lg-4" : ""} pb-3`}>
                    <Menu
                      to="googlemaps"
                      icon="text-menu-color fa fa-map"
                      title="Google Maps"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="leafletmaps"
                      icon="text-menu-color fa fa-street-view"
                      title="Leaflet Maps"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          {isOpen ? (
            <li className="py-3 hidden 2lg:block">
              <span className="hidden 2lg:block uppercase  fw-bold text-menu-title text-sm font-bold">
                Extras
              </span>
            </li>
          ) : (
            <></>
          )}
          <li className="py-3">
            <ToggleMenu
              icon={"fa fa-paperclip"}
              title={"Pages"}
              isOpen={isOpen}
              submenu={
                <>
                  <li className={`${isOpen ? "2lg:lg-4" : ""} pb-3`}>
                    <Menu
                      to="login"
                      icon="text-menu-color fa fa fa-sign-in"
                      title="Login"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="register"
                      icon="text-menu-color fa-solid fa-user-plus"
                      title="Register"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="error404"
                      icon="text-menu-color fa-solid fa-triangle-exclamation"
                      title="Error 404"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                  <li className={`${isOpen ? "2lg:lg-0" : ""} pb-3`}>
                    <Menu
                      to="error500"
                      icon="text-menu-color fa-solid fa-triangle-exclamation"
                      title="Error 500"
                      displayStyle={"gap-4"}
                      isOpen={isOpen}
                    />
                  </li>
                </>
              }
            ></ToggleMenu>
          </li>
          <li className="py-3">
            <Menu
              to="/"
              icon="text-menu-color fa-solid fa-file-lines"
              title="Documentation"
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
          <li className="py-3">
            <Menu
              to="/"
              icon="text-menu-color fa-solid fa-shopping-cart"
              title="Purchase"
              displayStyle={"gap-5"}
              isOpen={isOpen}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
