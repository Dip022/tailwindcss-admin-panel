import React from "react";
import Card from "../../component/Card/Card";

const Alerts = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6"> Alerts</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="alert alert-primary" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="alert alert-secondary" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="alert alert-danger" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="alert alert-info" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="alert alert-light" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="alert alert-dark" role="alert">
                  This is a primary alert—check it out!
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Dismissing Alerts</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <span className="badge  badge-primary">Success</span>
                  {"  "}
                  You successfully read this important alert.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="alert alert-primary alert-dismissible fade show"
                  role="alert"
                >
                  <span className="badge  bg-primary">Success</span>
                  {"  "}
                  You successfully read this important alert.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="alert alert-secondary alert-dismissible fade show"
                  role="alert"
                >
                  <span className="badge  bg-secondary">Success</span>
                  {"  "}
                  You successfully read this important alert.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <span className="badge  badge-warning">Success</span>
                  {"  "}
                  You successfully read this important alert.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <span className="badge  badge-danger">Success</span>
                  {"  "}
                  You successfully read this important alert.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="alert alert-info alert-dismissible fade show"
                  role="alert"
                >
                  <span className="badge  badge-info">Success</span>
                  {"  "}
                  You successfully read this important alert.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Link Color Alerts</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="alert alert-primary" role="alert">
                  This is a primary alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </div>
                <div className="alert alert-secondary" role="alert">
                  This is a secondary alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </div>
                <div className="alert alert-success" role="alert">
                  This is a success alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </div>
                <div className="alert alert-danger" role="alert">
                  AThis is a danger alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </div>
                <div className="alert alert-warning" role="alert">
                  This is a warning alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </div>
                <div className="alert alert-info" role="alert">
                  This is a info alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </div>
                <div className="alert alert-light" role="alert">
                  This is a light alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </div>
                <div className="alert alert-dark" role="alert">
                  AThis is a dark alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Contents</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div role="alert" className="alert alert-success">
                  <h4 className="alert-heading fs-5">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </div>
                <div role="alert" className="alert alert-warning">
                  <h4 className="alert-heading fs-5">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </div>
                <div role="alert" className="alert alert-danger">
                  <h4 className="alert-heading fs-5">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </div>
              </>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
