import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [errorPass, setErrorPass] = useState("");

  const handelSignUp = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const cPassword = event.target.cPassword.value;
    if (password === cPassword) {
      event.target.reset();
    } else {
      setErrorPass("your password and confirm password not marce");
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="login-wrapper">
        <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100">
          <div className="mb-5">
            <img src={logo} alt="logo" style={{ width: "200px" }} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 bg-white px-4 py-5 rounded-2">
            <h3 className="fs-1 fw-bolder text-center py-3">Sign Up</h3>
            <form onSubmit={handelSignUp}>
              <div className="form-group mb-2">
                <label htmlFor="userName" className="mb-1 text-secondary">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="userEmail" className="mb-1 text-secondary">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="userPassword" className="mb-1 text-secondary">
                  Enter Your Password
                </label>
                <input
                  type="Password"
                  name="password"
                  className="form-control"
                  id="userPassword"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label
                  htmlFor="userConfirmpassword"
                  className="mb-1 text-secondary"
                >
                  Confirm password
                </label>
                <input
                  type="Password"
                  name="cPassword"
                  className="form-control"
                  id="userConfirmpassword"
                  aria-describedby="emailHelp"
                  placeholder="Confirm password"
                  required
                />
                <span className="text-danger">{errorPass}</span>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <div className="mt-3">
              <span className="text-secondary">Have an Account? </span>
              <Link to="/login" className="text-decoration-none">
                Sing Up
              </Link>
            </div>
            <div className="sign-sosiale-media mt-4">
              <span className="text-center d-block text-secondary">
                Or Sign Up Using
              </span>
              <div className="w-100 d-flex justify-content-center gap-3 mt-3">
                <a
                  href="#"
                  className="d-flex justify-content-center align-items-center rounded-circle text-decoration-none"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#3b5998",
                  }}
                >
                  <i className="fa-brands fa-facebook-f fs-5 text-white"></i>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-center align-items-center rounded-circle text-decoration-none"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#00aced",
                  }}
                >
                  <i className="fa-brands fa-twitter fs-5 text-white"></i>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-center align-items-center rounded-circle text-decoration-none"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#dd4b39",
                  }}
                >
                  <i className="fa-brands fa-google fs-5 text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
