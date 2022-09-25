import React from "react";
import "./Notification.scss";

const Notification = ({ icon, message, message_bg }) => {
  return (
    <div className="notification-menu dropdown-item p-0">
      <a
        href=" #"
        className={`d-flex gap-3 align-items-center text-white text-decoration-none py-2 px-3 ${message_bg}`}
      >
        <i className={`${icon} `}></i> <p className="m-0">{message}</p>
      </a>
    </div>
  );
};

export default Notification;
