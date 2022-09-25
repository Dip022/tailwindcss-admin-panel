import React, { useEffect, useRef, useState } from "react";
import "./ToggleMenu.scss";

const ToggleMenu = ({ icon, title, isOpen, submenu }) => {
  const [toggleMenu, setToggleMenu] = useState(true);

  let dropRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setToggleMenu(true);
      }
    });
  }, []);

  return (
    <>
      <div ref={dropRef} className="dropdown relative">
        {isOpen ? (
          <div>
            <button
              type="button"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={`lg:flex lg:gap-5 items-center border-0 w-full relative text-menu-color hover:text-white ${
                toggleMenu ? "show-memu" : "show-down"
              }`}
            >
              <i className={`${icon}`}></i>{" "}
              <span className="hidden 2lg:block toggle-menu-title">
                {title}
              </span>
            </button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={() => setToggleMenu(!toggleMenu)}
              className="border-0 w-full "
            >
              <i className={`text-menu-color hover:text-white ${icon}`}></i>
            </button>
          </div>
        )}

        <ul
          className={`${
            toggleMenu ? "hidden" : "block pl-9 pt-4"
          }  flex flex-col  ${
            isOpen
              ? ""
              : "absolute top-0 left-10 w-[150px] z-50 bg-left-panel-bg pl-0 flex flex-col items-center transition-all rounded-r-md"
          }`}
        >
          {submenu}
        </ul>
      </div>
    </>
  );
};

export default ToggleMenu;
