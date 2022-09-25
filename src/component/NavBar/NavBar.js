import React, { useEffect, useRef, useState } from "react";
import "./NavBar.scss";
import admin from "../../images/admin.jpg";
import AdminMessage from "../AdminMessage/AdminMessage";
import Notification from "../Notification/Notification";
import MailNotification from "../MailNotification/MailNotification";
import img1 from "../../images/avatar/1.jpg";
import img2 from "../../images/avatar/2.jpg";
import img3 from "../../images/avatar/3.jpg";
import img4 from "../../images/avatar/4.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isUser, setIsUser] = useState(true);

  let dropRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setIsUser(true);
      }
    });
  }, []);

  return (
    <>
      {isOpen ? (
        <div className="px-3 2lg:px-5 bg-white">
          <div className="flex justify-between items-center w-full py-4">
            <div className="flex gap-3 relative">
              <div className="relative w-[24px] flex ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="border-0 bg-white"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <AdminMessage
                icon={"fa fa-bell"}
                count={4}
                coun_bg="bg-danger"
                rightPosition={"admin-notification"}
                notification={
                  <>
                    <Notification
                      icon="fa fa-pencil"
                      message="You have 3 Notification"
                      message_bg="message-bg-1"
                    />
                    <Notification
                      icon="fa fa-check"
                      message="Server #1 overloaded."
                      message_bg="message-bg-2"
                    />
                    <Notification
                      icon="fa fa-info"
                      message="Server #2 overloaded."
                      message_bg="message-bg-3"
                    />
                    <Notification
                      icon="fa fa-warning"
                      message="Server #3 overloaded."
                      message_bg="message-bg-4"
                    />
                  </>
                }
              />
              <AdminMessage
                icon={"fa-solid fa-envelope"}
                count={4}
                coun_bg="bg-primary"
                rightPosition={"admin-mail"}
                notification={
                  <>
                    <p className="m-0 py-1 px-3 text-secondary">
                      You have 4 Mails
                    </p>
                    <MailNotification
                      location={img1}
                      message_bg="message-bg-2"
                      userName="Jonathan Smith"
                      timeCount="Just now"
                      message="Hello, this is an example msg"
                    />
                    <MailNotification
                      location={img2}
                      message_bg="message-bg-3"
                      userName="Jack Sanders"
                      timeCount="5 minutes ago"
                      message="Hello, this is an example msg"
                    />
                    <MailNotification
                      location={img3}
                      message_bg="message-bg-4"
                      userName="Cheryl Wheeler"
                      timeCount="10 minutes ago"
                      message="Hello, this is an example msg"
                    />
                    <MailNotification
                      location={img4}
                      message_bg="message-bg-1"
                      userName="Rachel Santos"
                      timeCount="20 minutes ago"
                      message="Hello, this is an example msg"
                    />
                  </>
                }
              />
            </div>
            <div ref={dropRef} className="position-relative ">
              <button
                type="button"
                onClick={() => setIsUser(!isUser)}
                className="border-0 bg-white user-btn"
              >
                <img src={admin} alt="admin" className="user-avatar" />
              </button>
              <div
                className={`${
                  isUser ? "d-none" : "active-user"
                } bg-white admin-menu`}
              >
                <a href="#" className="text-decoration-none block">
                  <i className="fa fa-user"></i>
                  <span>My Profile</span>
                </a>
                <a href="#" className="text-decoration-none block">
                  <i className="fa-solid fa-bell"></i>
                  <span>Notifications</span>
                  <span className="count">13</span>
                </a>
                <a href="#" className="text-decoration-none block">
                  <i className="fa-solid fa-gear"></i> Settings
                </a>
                <a href="#" className="text-decoration-none block">
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`w-full bg-[#263238] ${
            isOpen ? "" : "absolute w-full top-0 left-0"
          }`}
        >
          <div className="relative">
            <div className="flex justify-between item-center py-2 h-[80px] mx-[20px] 2lg:mx-[279px]">
              <input
                placeholder="Search ..."
                className="border-0 w-9/12 bg-[#263238] outline-none text-white"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="border-0  bg-[#263238] text-white"
              >
                <i className="fa fa-close font-black"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
