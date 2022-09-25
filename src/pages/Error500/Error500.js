import React from "react";
import { Link } from "react-router-dom";

const Error500 = () => {
  return (
    <div className="container-fluid p-0">
      <div className="error-wrapper d-flex justify-content-center align-items-center">
        <div className="position-relative text-center">
          <h1 className="display-5 fw-bold text-white">500</h1>
          <span className="text-white fs-5 fw-bold">
            Houston, we have a problem!
          </span>
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

export default Error500;
