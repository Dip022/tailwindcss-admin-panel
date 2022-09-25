import React from "react";
import Card from "../../component/Card/Card";

const Button = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Badges </strong>
                <small>
                  Use this class <code>{`<a>`}</code>, <code>{`<button>`}</code>{" "}
                  {" or "}
                  <code>{`<input>`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
                <button type="button" class="btn btn-secondary">
                  Secondary
                </button>
                <button type="button" class="btn btn-success">
                  Success
                </button>
                <button type="button" class="btn btn-danger">
                  Danger
                </button>
                <button type="button" class="btn btn-warning">
                  Warning
                </button>
                <button type="button" class="btn btn-info">
                  Info
                </button>
                <button type="button" class="btn btn-light">
                  Light
                </button>
                <button type="button" class="btn btn-dark">
                  Dark
                </button>
                <button type="button" class="btn btn-link">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Outline Buttons </strong>
                <small>
                  Use this class <code>{`<a>`}</code>, <code>{`<button>`}</code>{" "}
                  {" or "}
                  <code>{`<input>`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-outline-primary">
                  Primary
                </button>
                <button type="button" class="btn btn-outline-secondary">
                  Secondary
                </button>
                <button type="button" class="btn btn-outline-success">
                  Success
                </button>
                <button type="button" class="btn btn-outline-danger">
                  Danger
                </button>
                <button type="button" class="btn btn-outline-warning">
                  Warning
                </button>
                <button type="button" class="btn btn-outline-info">
                  Info
                </button>
                <button type="button" class="btn btn-outline-light text-dark">
                  Light
                </button>
                <button type="button" class="btn btn-outline-dark">
                  Dark
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Button tags </strong>
                <small>
                  Use this class <code>{`.btn`}</code>
                  {" or "}
                  <code>{`<button>`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <a href="#" role="button" type="button" class="btn btn-primary">
                  Link
                </a>
                <button type="submit" class="btn btn-danger">
                  Button
                </button>
                <input type="button" value="Input" className="btn btn-info" />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success"
                />
                <input type="reset" value="Reset" className="btn btn-warning" />
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Button tags </strong>
                <small>
                  Use this class <code>{`.btn`}</code>
                  {" or "}
                  <code>{`<button>`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <a
                  href="#"
                  role="button"
                  type="button"
                  class="btn btn-outline-primary"
                >
                  Link
                </a>
                <button type="submit" class="btn btn-outline-danger">
                  Button
                </button>
                <input
                  type="button"
                  value="Input"
                  className="btn btn-outline-info"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-outline-success"
                />
                <input
                  type="reset"
                  value="Reset"
                  className="btn btn-outline-warning"
                />
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Disabled state </strong>
                <small>
                  Use this class <code>{`disabled="disabled"`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-primary"
                >
                  Primary
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-secondary"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-success"
                >
                  Success
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-danger"
                >
                  Danger
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-warning"
                >
                  Warning
                </button>
                <button type="button" disabled="disabled" class="btn btn-info">
                  Info
                </button>
                <button type="button" disabled="disabled" class="btn btn-light">
                  Light
                </button>
                <button type="button" disabled="disabled" class="btn btn-dark">
                  Dark
                </button>
                <button type="button" disabled="disabled" class="btn btn-link">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Disabled state </strong>
                <small>
                  Use this class <code>{`disabled="disabled"`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-primary"
                >
                  Primary
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-secondary"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-success"
                >
                  Success
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-danger"
                >
                  Danger
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-warning"
                >
                  Warning
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-info"
                >
                  Info
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-light text-dark"
                >
                  Light
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-dark"
                >
                  Dark
                </button>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn btn-outline-link"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Button with Icons </strong>
                <small>
                  Use <code>{`<i>`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-primary">
                  <i className="fa fa-star"></i> Primary
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-lightbulb"></i> Secondary
                </button>
                <button type="button" class="btn btn-success">
                  <i class="fa fa-magic"></i> Success
                </button>
                <button type="button" class="btn btn-warning">
                  <i className="fa-solid fa-triangle-exclamation"></i> Warning
                </button>
                <button type="button" class="btn btn-danger">
                  <i class="fa fa-rss"></i> Danger
                </button>
                <button type="button" class="btn btn-link">
                  <i className="fa fa-link"></i> Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Button with Icons </strong>
                <small>
                  Use <code>{`<i>`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-outline-primary">
                  <i className="fa fa-star"></i> Primary
                </button>
                <button type="button" class="btn btn-outline-secondary">
                  <i class="fa fa-lightbulb"></i> Secondary
                </button>
                <button type="button" class="btn btn-outline-success">
                  <i class="fa fa-magic"></i> Success
                </button>
                <button type="button" class="btn btn-outline-warning">
                  <i className="fa-solid fa-triangle-exclamation"></i> Warning
                </button>
                <button type="button" class="btn btn-outline-danger">
                  <i class="fa fa-rss"></i> Danger
                </button>
                <button type="button" class="btn btn-outline-link">
                  <i className="fa fa-link"></i> Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Small Button </strong>
                <small>
                  Use this class <code>{`.btn-sm `}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-primary btn-sm">
                  Primary
                </button>
                <button type="button" class="btn btn-secondary btn-sm">
                  Secondary
                </button>
                <button type="button" class="btn btn-success btn-sm">
                  Success
                </button>
                <button type="button" class="btn btn-warning btn-sm">
                  Warning
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Danger
                </button>
                <button type="button" class="btn btn-link btn-sm">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Small Button </strong>
                <small>
                  Use this class <code>{`.btn-sm `}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-outline-primary btn-sm">
                  Primary
                </button>
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  Secondary
                </button>
                <button type="button" class="btn btn-outline-success btn-sm">
                  Success
                </button>
                <button type="button" class="btn btn-outline-warning btn-sm">
                  Warning
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  Danger
                </button>
                <button type="button" class="btn btn-outline-link btn-sm">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Small Button with Icons </strong>
                <small>
                  Use this class <code>{`.btn-sm `}</code>
                </small>
              </>
            }
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-primary btn-sm">
                  <i className="fa fa-star"></i> Primary
                </button>
                <button type="button" class="btn btn-secondary btn-sm">
                  <i class="fa fa-lightbulb"></i> Secondary
                </button>
                <button type="button" class="btn btn-success btn-sm">
                  <i class="fa fa-magic"></i> Success
                </button>
                <button type="button" class="btn btn-warning btn-sm">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  Warning
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  <i class="fa fa-rss"></i> Danger
                </button>
                <button type="button" class="btn btn-link btn-sm">
                  <i className="fa fa-link"></i> Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Small Button with Icons </strong>
                <small>
                  Use this class <code>{`.btn-sm `}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-outline-primary btn-sm">
                  <i className="fa fa-star"></i> Primary
                </button>
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  <i class="fa fa-lightbulb"></i> Secondary
                </button>
                <button type="button" class="btn btn-outline-success btn-sm">
                  <i class="fa fa-magic"></i> Success
                </button>
                <button type="button" class="btn btn-outline-warning btn-sm">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  Warning
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  <i class="fa fa-rss"></i> Danger
                </button>
                <button type="button" class="btn btn-outline-link btn-sm">
                  <i className="fa fa-link"></i> Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Large Button </strong>
                <small>
                  Use this class <code>{`.btn-lg `}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-primary btn-lg">
                  Primary
                </button>
                <button type="button" class="btn btn-secondary btn-lg">
                  Secondary
                </button>
                <button type="button" class="btn btn-success btn-lg">
                  Success
                </button>
                <button type="button" class="btn btn-warning btn-lg">
                  Warning
                </button>
                <button type="button" class="btn btn-danger btn-lg">
                  Danger
                </button>
                <button type="button" class="btn btn-link btn-lg">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Large Button </strong>
                <small>
                  Use this class <code>{`.btn-lg `}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-outline-primary btn-lg">
                  Primary
                </button>
                <button type="button" class="btn btn-outline-secondary btn-lg">
                  Secondary
                </button>
                <button type="button" class="btn btn-outline-success btn-lg">
                  Success
                </button>
                <button type="button" class="btn btn-outline-warning btn-lg">
                  Warning
                </button>
                <button type="button" class="btn btn-outline-danger btn-lg">
                  Danger
                </button>
                <button type="button" class="btn btn-outline-link btn-lg">
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Large Button </strong>
                <small>
                  Use this class <code>{`.btn-lg .active`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-primary btn-lg active">
                  Primary
                </button>
                <button type="button" class="btn btn-secondary btn-lg active">
                  Secondary
                </button>
                <button type="button" class="btn btn-success btn-lg active">
                  Success
                </button>
                <button type="button" class="btn btn-warning btn-lg active">
                  Warning
                </button>
                <button type="button" class="btn btn-danger btn-lg active">
                  Danger
                </button>
                <button
                  type="button"
                  class="btn btn-link btn-lg active text-primary"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Large Button </strong>
                <small>
                  Use this class <code>{`.btn-lg .active`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-lg active"
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg active"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-success btn-lg active"
                >
                  Success
                </button>
                <button
                  type="button"
                  class="btn btn-outline-warning btn-lg active"
                >
                  Warning
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-lg active"
                >
                  Danger
                </button>
                <button
                  type="button"
                  class="btn btn-outline-link btn-lg active text-primary"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>

        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Block Level Buttons </strong>
                <small>
                  Use this class <code>{`.btn-block`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-column gap-2 w-100">
                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-secondary btn-lg btn-block"
                >
                  Secondary
                </button>
                <button type="button" class="btn btn-success btn-lg btn-block">
                  Success
                </button>
                <button type="button" class="btn btn-warning btn-lg btn-block">
                  Warning
                </button>
                <button type="button" class="btn btn-danger btn-lg btn-block">
                  Danger
                </button>
                <button
                  type="button"
                  class="btn btn-link btn-lg btn-block text-primary"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Block Level Buttons </strong>
                <small>
                  Use this class <code>{`.btn-block`}</code>
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <div className="d-flex flex-column gap-2 w-100">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-lg btn-block"
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg btn-block"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-success btn-lg btn-block"
                >
                  Success
                </button>
                <button
                  type="button"
                  class="btn btn-outline-warning btn-lg btn-block"
                >
                  Warning
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-lg btn-block"
                >
                  Danger
                </button>
                <button
                  type="button"
                  class="btn btn-outline-link btn-lg btn-block text-primary"
                >
                  Link
                </button>
              </div>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Button;
