import React from "react";
import "./MailNotification.scss";

const MailNotification = ({
  location,
  userName,
  timeCount,
  message,
  message_bg,
}) => {
  return (
    <div
      className={`mail-notification-menu dropdown-item d-flex gap-3 py-2 px-3 text-white ${message_bg}`}
    >
      <img src={location} alt="mail-usar" />
      <div className="w-100">
        <div className="d-flex justify-content-between">
          <small>{userName}</small>
          <small>{timeCount}</small>
        </div>
        <p className="m-0">{message}</p>
      </div>
    </div>
  );
};

export default MailNotification;
