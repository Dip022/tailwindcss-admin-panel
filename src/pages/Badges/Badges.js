import React from "react";
import Card from "../../component/Card/Card";

const Badges = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Badges </strong>
                <small>
                  Use <code>{`.badge`}</code> class within{" "}
                  <code>{`<span>`}</code> elements to create badges:
                </small>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <>
                <a
                  href="#"
                  className="d-block fs-6 text-decoration-none text-black-50"
                >
                  News <span className="badge bg-primary">5</span>
                </a>
                <a
                  href="#"
                  className="d-block fs-6 text-decoration-none text-black-50"
                >
                  Comments{" "}
                  <span className="badge bg-warning text-dark">10</span>
                </a>
                <a
                  href="#"
                  className="d-block fs-6 text-decoration-none text-black-50"
                >
                  Updates <span className="badge badge-primary">2</span>
                </a>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Badges in Buttons</strong>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <>
                <p className="text-black-50 text-muted">
                  Use <code>{`.badge`}</code> class within{" "}
                  <code>{`<span>`}</code> elements to create badges:
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-primary">
                    Primary <span className="badge bg-light text-dark">7</span>
                  </button>
                  <button type="button" className="btn btn-success">
                    Success <span className="badge bg-light text-dark">7</span>
                  </button>
                  <button type="button" className="btn btn-info">
                    Info <span className="badge bg-light text-dark">7</span>
                  </button>
                  <button type="button" className="btn btn-warning">
                    Warning <span className="badge bg-light text-dark">7</span>
                  </button>
                  <button type="button" className="btn btn-danger">
                    Danger <span className="badge bg-light text-dark">7</span>
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Labels</strong>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <>
                <p className="text-black-50 text-muted">
                  Use the <code>{`.label`}</code> class, followed by one of the
                  six contextual classes <code>{`.label-default`}</code>,
                  <code>{` .label-primary`}</code>,
                  <code>{` .label-success`}</code>
                  <code>{` .label-info`}</code>,<code>{` .label-warning`}</code>
                  {" or "}
                  <code>{` .label-danger`}</code>, within a{" "}
                  <code>{`<span>`}</code>, elements to create badges:
                </p>
                <h1>
                  Example heading{" "}
                  <span className="badge bg-secondary">New</span>
                </h1>
                <h2>
                  Example heading{" "}
                  <span className="badge bg-secondary">New</span>
                </h2>
                <h3>
                  Example heading{" "}
                  <span className="badge bg-secondary">New</span>
                </h3>
                <h4>
                  Example heading{" "}
                  <span className="badge bg-secondary">New</span>
                </h4>
                <h5>
                  Example heading{" "}
                  <span className="badge bg-secondary">New</span>
                </h5>
                <h6>
                  Example heading{" "}
                  <span className="badge bg-secondary">New</span>
                </h6>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Labels</strong>
              </>
            }
            cardBodyBg="bg-light"
            cardBody={
              <>
                <p className="text-black-50 text-muted">
                  Use the <code>{`.label`}</code> class, followed by one of the
                  six contextual classes <code>{`.label-default`}</code>,
                  <code>{` .label-primary`}</code>,
                  <code>{` .label-success`}</code>
                  <code>{` .label-info`}</code>,<code>{` .label-warning`}</code>
                  {" or "}
                  <code>{` .label-danger`}</code>, within a{" "}
                  <code>{`<span>`}</code>, elements to create badges:
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">Primary</span>
                  <span className="badge bg-secondary">Secondary</span>
                  <span className="badge bg-success">Success</span>
                  <span className="badge bg-danger">Danger</span>
                  <span className="badge bg-warning text-dark">Warning</span>
                  <span className="badge bg-info text-dark">Info</span>
                  <span className="badge bg-light text-dark">Light</span>
                  <span className="badge bg-dark">Dark</span>
                </div>
              </>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Badges;
