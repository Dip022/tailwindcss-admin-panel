import React, { useEffect, useRef, useState } from "react";
import "./AdminMessage.scss";

const AdminMessage = ({
  icon,
  count,
  coun_bg,
  rightPosition,
  notification,
}) => {
  const [message, setMessage] = useState(false);

  let dropRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setMessage(false);
      }
    });
  }, []);

  return (
    <div ref={dropRef} className="position-relative">
      <div className="navbar-container d-flex">
        <div>
          <button
            onClick={() => setMessage(!message)}
            className="border-0 bg-white"
          >
            <i className={icon}></i>
          </button>
          <span className={coun_bg}>{count}</span>
        </div>

        <div
          className={`${
            !message ? "d-none" : "d-block"
          } ${rightPosition} admin-message`}
        >
          {notification}
        </div>
      </div>
    </div>
  );
};

export default AdminMessage;
