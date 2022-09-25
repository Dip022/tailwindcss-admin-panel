import React from "react";
import { Link } from "react-router-dom";
import "./Error404.scss";

const Error404 = () => {
  return (
    <div className="container-fluid p-0">
      <div className="error-wrapper d-flex justify-content-center align-items-center">
        <div className="position-relative text-center">
          <h1 className="display-5 fw-bold text-white">Oops!</h1>
          <span className="text-white fs-5 fw-bold">404 PAGE NOT FOUND</span>
          <p className="text-white">
            The page you are looking for was not found.
          </p>
          <Link
            to="/dashboard"
            className="btn btn-primary text-decoration-none"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
