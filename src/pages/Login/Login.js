import React from "react";
import "./Login.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid p-0">
      <div className="login-wrapper">
        <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100">
          <div className="mb-5">
            <img src={logo} alt="logo" style={{ width: "200px" }} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 bg-white px-4 py-5 rounded-2">
            <h3 className="fs-1 fw-bolder text-center py-3">Login</h3>
            <div>
              <form>
                <div className="form-group mb-2">
                  <label
                    htmlFor="email_address"
                    className="mb-1 text-secondary"
                  >
                    Enter Your Email address
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                        style={{
                          borderRight: "none",
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                        }}
                      >
                        <i className="fa-solid fa-envelope fs-5 py-1"></i>
                      </span>
                    </div>
                    <input
                      id="email_address"
                      type="email"
                      className="form-control text-secondary"
                      placeholder="Email address"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label
                    htmlFor="enter_password"
                    className="mb-1 text-secondary"
                  >
                    Enter Your Password
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                        style={{
                          borderRight: "none",
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                        }}
                      >
                        <i className="fa-solid fa-lock fs-5 py-1"></i>
                      </span>
                    </div>
                    <input
                      id="enter_password"
                      type="Password"
                      className="form-control text-secondary"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                  <div>
                    <a
                      href="#"
                      className="mt-2 mb-4 text-decoration-none"
                      style={{ display: "block", textAlign: "right" }}
                    >
                      Forgotten password?
                    </a>
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <label
                    className="form-check-label text-secondary"
                    htmlFor="exampleCheck1"
                  >
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
            <div className="mt-3">
              <span className="text-secondary">Need an Account? </span>
              <Link to="/register" className="text-decoration-none">
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

export default Login;
