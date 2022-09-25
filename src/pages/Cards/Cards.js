import React from "react";
import Card from "../../component/Card/Card";
import cardImg from "../../images/admin.jpg";
import placeholder from "../../images/placeholder.png";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Profile Card </strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={cardImg}
                    alt="Card image"
                    className="rounded-circle inline-blocks w-50"
                  />
                  <span className="mt-2">Steven Lee</span>
                  <span>
                    <i className="fa-solid fa-location-dot"></i> California,
                    United States
                  </span>
                  <hr className="w-100 bg-secondary" />
                  <div className="d-flex gap-2">
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-pinterest "></i>
                    </a>
                  </div>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={cardImg}
                    alt="Card image"
                    className="rounded-circle inline-blocks w-50"
                  />
                  <span className="mt-2">Steven Lee</span>
                  <span>
                    <i className="fa-solid fa-location-dot"></i> California,
                    United States
                  </span>
                  <hr className="w-100 bg-secondary" />
                  <div className="d-flex gap-2">
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-pinterest "></i>
                    </a>
                  </div>
                </div>
              </>
            }
            cardFooter={
              <>
                <>
                  <strong className="fs-6">Profile Card </strong>
                </>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <i className="fa-solid fa-user"></i>
                <strong className="fs-6"> Profile Card</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={cardImg}
                    alt="Card image"
                    className="rounded-circle inline-blocks w-50"
                  />
                  <span className="mt-2">Steven Lee</span>
                  <span>
                    <i className="fa-solid fa-location-dot"></i> California,
                    United States
                  </span>
                  <hr className="w-100 bg-secondary" />
                  <div className="d-flex gap-2">
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fa-brands fa-pinterest "></i>
                    </a>
                  </div>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <div className="d-flex gap-4 align-items-center bg-dark rounded-top p-3">
                <img
                  src={cardImg}
                  alt=""
                  className="w-25 rounded-circle border border-5 border-secondary"
                />
                <div>
                  <h1 className="text-light display-6 m-0">Jim Doe</h1>
                  <p className="text-secondary m-0">Project Manager</p>
                </div>
              </div>
            }
            userInfo="p-0 border-0"
            cardBodyBg="bg-white p-0"
            cardBody={
              <>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      href="#"
                      className="d-flex justify-content-between text-decoration-none"
                    >
                      <span className="text-secondary">
                        <i className="fa-solid fa-envelope"></i>
                        {"  "}Mail Inbox
                      </span>
                      <span className="badge bg-primary">10</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="#"
                      className="d-flex justify-content-between text-decoration-none"
                    >
                      <span className="text-secondary">
                        <i className="fa fa-tasks"></i>
                        {"  "}Recent Activity
                      </span>
                      <span className="badge badge-danger">15</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="#"
                      className="d-flex justify-content-between text-decoration-none"
                    >
                      <span className="text-secondary">
                        <i className="fa-solid fa-bell"></i>
                        {"  "}Notification
                      </span>
                      <span className="badge badge-primary">11</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="#"
                      className="d-flex justify-content-between text-decoration-none"
                    >
                      <span className="text-secondary">
                        <i className="fa-solid fa-message"></i>
                        {"  "}Message
                      </span>
                      <span className="badge badge-warning">3</span>
                    </a>
                  </li>
                </ul>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardBodyBg="bg-white"
            cardBody={
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img src={cardImg} alt="" className="w-25 rounded-circle" />
                <h2>Kanye West</h2>
                <p className="text-secondary text-center fs-6 px-3">
                  Just got a pretty neat project via{" "}
                  <a href="#" className="text-decoration-none text-secondary">
                    @ooomf
                  </a>{" "}
                  - Give it a try{" "}
                  <a href="#" className="text-decoration-none text-secondary">
                    http://t.co/e02DwGEeOJ
                  </a>
                </p>
              </div>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <div className="wtt-mark rounded-top">
                <i className="fa-brands fa-twitter d-flex justify-content-end p-2 text-light fs-5"></i>
                <div className="d-flex gap-4 align-items-center rounded-top px-3">
                  <img src={cardImg} alt="" className="w-25 rounded-circle" />
                  <div>
                    <h1 className="text-light display-6 m-0">Jim Doe</h1>
                    <p className="text-light m-0">Project Manager</p>
                  </div>
                </div>
              </div>
            }
            userInfo="p-0"
            cardBodyBg="bg-white p-0"
            cardBody={
              <>
                <div className="py-3 d-flex">
                  <div className="weather-category">
                    <span>750</span>
                    <span className="d-block">Tweets</span>
                  </div>
                  <div className="weather-category">
                    <span>865</span>
                    <span className="d-block">Following</span>
                  </div>
                  <div className="weather-category">
                    <span>3645</span>
                    <span className="d-block">Followers</span>
                  </div>
                </div>
                <div className="px-3 py-3">
                  <textarea
                    placeholder="Write your Tweet and Enter"
                    rows="1"
                    className="w-100 form-control"
                  ></textarea>
                  <div className="mt-2 d-flex justify-content-between">
                    <div>
                      <a href="#" className="text-secondary">
                        <i className="fa-solid fa-camera"></i>
                      </a>{" "}
                      <a href="#" className="text-secondary">
                        <i className="fa-solid fa-location-dot"></i>
                      </a>{" "}
                      <span className="text-secondary">New Castle, UK</span>
                    </div>
                    <span className="text-secondary">32</span>
                  </div>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Card with switch</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <p className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <strong className="fs-6">Card with Label</strong>
                <span className="badge badge-primary">Success</span>
              </div>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <p className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <strong className="fs-6">Card with Label</strong>
                <span className="badge badge-danger ">49</span>
              </div>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <p className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Card Outline</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <p className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Card Outline</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <p className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Card Outline</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <p className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardBodyBg="bg-danger"
            cardBody={
              <>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="m-0 blockquote-footer text-light">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>{" "}
                </footer>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardBodyBg="bg-warning"
            cardBody={
              <>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="m-0  blockquote-footer text-light">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>{" "}
                </footer>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardBodyBg="bg-primary "
            cardBody={
              <>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="m-0  blockquote-footer text-light">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>{" "}
                </footer>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Card with Label</strong>
              </>
            }
            userInfo="bg-secondary text-white"
            cardBodyBg="bg-primary "
            cardBody={
              <>
                <p className="text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. .
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Card with Label</strong>
              </>
            }
            userInfo="bg-dark text-white"
            cardBodyBg="bg-danger"
            cardBody={
              <>
                <p className="text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. .
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Card with Label</strong>
              </>
            }
            userInfo="bg-dark text-white"
            cardBodyBg="bg-warning"
            cardBody={
              <>
                <p className="text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. .
                </p>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardBodyBg="bg-white p-0"
            cardBody={
              <div>
                <img src={placeholder} alt="" className="w-100" />
                <div className="p-3">
                  <h3 className="fs-6">Card Image Title</h3>
                  <p className="text-secondary">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardBodyBg="bg-white p-0"
            cardBody={
              <div>
                <img src={placeholder} alt="" className="w-100" />
                <div className="p-3">
                  <h3 className="fs-6">Card Image Title</h3>
                  <p className="text-secondary">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <Card
            cardBodyBg="bg-white p-0"
            cardBody={
              <div>
                <img src={placeholder} alt="" className="w-100" />
                <div className="p-3">
                  <h3 className="fs-6">Card Image Title</h3>
                  <p className="text-secondary">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
