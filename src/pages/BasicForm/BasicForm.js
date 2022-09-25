import React from "react";
import Card from "../../component/Card/Card";
import "./BasicForm.scss";

const BasicForm = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Credit Card </strong>
                <small>form</small>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="card-title mt-4">
                  <h3 className="text-center">Pay Invoice</h3>
                </div>
                <hr className="bg-secondary " />
                <form>
                  <div className="form-group d-flex justify-content-center gap-2 p-3">
                    <a href="#" type="button" className="text-decoration-none">
                      <i className="fa-brands fa-cc-visa fs-3 text-black"></i>
                    </a>
                    <a href="#" type="button" className="text-decoration-none">
                      <i className="fa-brands fa-cc-mastercard fs-3 text-black"></i>
                    </a>
                    <a href="#" type="button" className="text-decoration-none">
                      <i className="fa-brands fa-cc-amex fs-3 text-black"></i>
                    </a>
                    <a href="#" type="button" className="text-decoration-none">
                      <i className="fa-brands fa-cc-discover fs-3 text-black"></i>
                    </a>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label mb-1">
                      Payment amount
                    </label>
                    <input
                      type="number"
                      defaultValue="1000.0"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-control-label mb-1">
                      Name on card
                    </label>
                    <input
                      type="text"
                      placeholder="Card name "
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-control-label mb-1">
                      Card number
                    </label>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group d-flex gap-2  justify-content-between mt-3">
                    <dir>
                      <label className="form-control-label mb-1">
                        Expiration
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="form-control"
                      />
                    </dir>
                    <div className="form-group ">
                      <label className="form-control-label mb-1">
                        Expiration
                      </label>
                      <div className="d-flex expiration-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Security code"
                        />
                        <span className="input-group-text fw-bold">
                          <i className="fa fa-question-circle"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mb-3">
                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn-info w-100 text-white"
                    >
                      <i className="fa fa-lock fa-md"></i>
                      {"  "}
                      <span className="fs-5">Pay $100.00</span>
                    </button>
                  </div>
                </form>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Company </strong>
                <small>form</small>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <form>
                  <div className="form-group">
                    <label className="form-control-label mb-1">Company</label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-control-label mb-1">VAT</label>
                    <input
                      type="text"
                      placeholder="DE1234567890"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-control-label mb-1">Street</label>
                    <input
                      type="text"
                      placeholder="Enter street name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-control-label mb-1">City</label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-control-label mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postal Code"
                      aria-label="Username"
                    />
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label className="form-control-label mb-1">Company</label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      className="form-control"
                    />
                  </div>
                </form>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Basic Form </strong>
                <small>Elements</small>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <form>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Static
                        </label>
                      </div>
                      <div className="col-md-9">
                        <p className="form-control-static text-secondary">
                          Username
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Text Input
                        </label>
                      </div>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Text"
                          required
                        />
                        <small className="form-text text-muted">
                          This is a help text
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Email Input
                        </label>
                      </div>
                      <div className="col-md-9">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                          required
                        />
                        <small className="form-text text-muted">
                          Please enter your email
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Password
                        </label>
                      </div>
                      <div className="col-md-9">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Password"
                          required
                        />
                        <small className="form-text text-muted">
                          Please enter a complex password
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Disabled Input
                        </label>
                      </div>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Disabled"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Textarea
                        </label>
                      </div>
                      <div className="col-md-9">
                        <textarea
                          name=""
                          id=""
                          className="form-control"
                          cols="30"
                          rows="10"
                          placeholder="Content..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Select
                        </label>
                      </div>
                      <div className="col-md-9">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>Please select</option>
                          <option defaultValue="1">Option #1</option>
                          <option defaultValue="2">Option #2</option>
                          <option defaultValue="3">Option #3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Select Large
                        </label>
                      </div>
                      <div className="col-md-9">
                        <select
                          className="form-select form-select-lg"
                          aria-label=".form-select-lg example"
                        >
                          <option>Please select</option>
                          <option defaultValue="1">Option #1</option>
                          <option defaultValue="2">Option #2</option>
                          <option defaultValue="3">Option #3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Select Large
                        </label>
                      </div>
                      <div className="col-md-9">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option>Please select</option>
                          <option defaultValue="1">Option #1</option>
                          <option defaultValue="2">Option #2</option>
                          <option defaultValue="3">Option #3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Disabled Select
                        </label>
                      </div>
                      <div className="col-md-9">
                        <select
                          className="form-select"
                          aria-label="Disabled select example"
                          disabled
                        >
                          <option>Please select</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Multiple select
                        </label>
                      </div>
                      <div className="col-md-9">
                        <select
                          className="form-select"
                          size="3"
                          aria-label="size 3 select example"
                        >
                          <option defaultValue="1">Option #1</option>
                          <option defaultValue="2">Option #2</option>
                          <option defaultValue="3">Option #3</option>
                          <option defaultValue="4">Option #4</option>
                          <option defaultValue="5">Option #5</option>
                          <option defaultValue="6">Option #6</option>
                          <option defaultValue="7">Option #7</option>
                          <option defaultValue="8">Option #8</option>
                          <option defaultValue="9">Option #9</option>
                          <option defaultValue="10">Option #10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Radios
                        </label>
                      </div>
                      <div className="col-md-9">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Option 1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Option 2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Inline Radios
                        </label>
                      </div>
                      <div className="col-md-9">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioInline1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioInline1"
                          >
                            One
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioInline2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioInline2"
                          >
                            Tow
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioInline3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioInline3"
                          >
                            Three
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Checkboxes
                        </label>
                      </div>
                      <div className="col-md-9">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault1"
                          >
                            Option 1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault2"
                          >
                            Option 2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault3"
                          >
                            Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-control-label mb-1">
                          Inline Checkboxes
                        </label>
                      </div>
                      <div className="col-md-9">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultInline1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefaultInline1"
                          >
                            One
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultInline2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefaultInline2"
                          >
                            Tow
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultInline3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefaultInline3"
                          >
                            Three
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label
                          className="d-block mb-1 form-control-label"
                          htmlFor="fileInput"
                        >
                          File input
                        </label>
                      </div>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input
                            type="file"
                            className="form-control-file"
                            id="fileInput"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3 mb-3">
                    <div className="row">
                      <div className="col-md-3">
                        <label
                          className="d-block mb-1 form-control-label"
                          htmlFor="multipleFleInput"
                        >
                          Multiple File input
                        </label>
                      </div>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input
                            type="file"
                            className="form-control-file"
                            id="multipleFleInput"
                            multiple
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa-regular fa-circle-check"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <div className="mb-4">
            <Card
              cardHeader={
                <>
                  <strong className="fs-6">Horizontal </strong>
                  <small>form</small>
                </>
              }
              cardBodyBg="bg-white"
              cardBody={
                <>
                  <form>
                    <div className="form-group mt-3 mb-3">
                      <div className="row">
                        <div className="col-md-3">
                          <label className="d-block mb-1 form-control-label">
                            Email
                          </label>
                        </div>
                        <div className="col-md-9">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email...."
                              required
                            />
                            <span className="help-block form-text">
                              Please enter your email
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3 mb-3">
                      <div className="row">
                        <div className="col-md-3">
                          <label className="d-block mb-1 form-control-label">
                            Password
                          </label>
                        </div>
                        <div className="col-md-9">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Enter password...."
                              required
                            />
                            <span className="help-block form-text">
                              Please enter your password
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              }
              cardFooter={
                <>
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fa-regular fa-circle-check"></i> Submit
                    </button>
                    <button type="submit" className="btn btn-danger btn-sm">
                      <i className="fa-solid fa-ban"></i> Submit
                    </button>
                  </div>
                </>
              }
            ></Card>
          </div>
          <div className="mb-4">
            <Card
              cardHeader={
                <>
                  <strong className="fs-6">Normal </strong>
                  <small>form</small>
                </>
              }
              cardBodyBg="bg-white"
              cardBody={
                <>
                  <form>
                    <div className="form-group">
                      <label className="d-block mb-1 form-control-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email...."
                        required
                      />
                      <span className="help-block form-text">
                        Please enter your email
                      </span>
                    </div>
                    <div className="form-group mt-2">
                      <label className="d-block mb-1 form-control-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password...."
                        required
                      />
                      <span className="help-block form-text">
                        Please enter your password
                      </span>
                    </div>
                  </form>
                </>
              }
              cardFooter={
                <>
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fa-regular fa-circle-check"></i> Submit
                    </button>
                    <button type="submit" className="btn btn-danger btn-sm">
                      <i className="fa-solid fa-ban"></i> Submit
                    </button>
                  </div>
                </>
              }
            ></Card>
          </div>
          <div className="mb-4">
            <Card
              cardHeader={
                <>
                  <span>
                    Input <strong className="fw-bold">Grid</strong>
                  </span>
                </>
              }
              cardBodyBg="bg-white"
              cardBody={
                <>
                  <form className="form-horizontal">
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-3">
                          <input
                            type="text"
                            placeholder=".col-sm-3"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-4">
                          <input
                            type="text"
                            placeholder=".col-sm-4"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-5">
                          <input
                            type="text"
                            placeholder=".col-sm-5"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-6">
                          <input
                            type="text"
                            placeholder=".col-sm-6"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-7">
                          <input
                            type="text"
                            placeholder=".col-sm-7"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-8">
                          <input
                            type="text"
                            placeholder=".col-sm-8"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-9">
                          <input
                            type="text"
                            placeholder=".col-sm-9"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-10">
                          <input
                            type="text"
                            placeholder=".col-sm-10"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-11">
                          <input
                            type="text"
                            placeholder=".col-sm-11"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="row gy-5">
                        <div className="col col-sm-12">
                          <input
                            type="text"
                            placeholder=".col-sm-12"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              }
              cardFooter={
                <>
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fa fa-user"></i> Submit
                    </button>
                    <button type="submit" className="btn btn-danger btn-sm">
                      <i className="fa-solid fa-ban"></i> Submit
                    </button>
                  </div>
                </>
              }
            ></Card>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fw-bold">Inline </strong>
                <span>Form</span>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <form className="d-flex gap-3">
                  <div className="form-group d-flex gap-2 align-items-center">
                    <label
                      className="form-control-label"
                      htmlFor="exampleInputName"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="form-group d-flex gap-2 align-items-center">
                    <label
                      className="pr-1 form-control-label"
                      htmlFor="exampleInputEmail"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail"
                      placeholder="Jane Doe"
                    />
                  </div>
                </form>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
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
                <span>
                  Input <strong className="fw-bold">Sizes</strong>
                </span>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <form className="form-horizontal">
                  <div className="row mb-3">
                    <div className="col col-sm-3">
                      <label
                        className="d-block mb-1 form-control-label"
                        htmlFor="input-small"
                      >
                        Small Input
                      </label>
                    </div>
                    <div className="col col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="input-sm form-control-sm form-control"
                          id="input-small"
                          placeholder=".form-control-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col col-sm-3">
                      <label
                        className="d-block mb-1 form-control-label"
                        htmlFor="input-normal"
                      >
                        Normal Input
                      </label>
                    </div>
                    <div className="col col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="input-normal"
                          placeholder="Normal"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col col-sm-3">
                      <label
                        className="d-block mb-1 form-control-label"
                        htmlFor="input-normal"
                      >
                        Large Input
                      </label>
                    </div>
                    <div className="col col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="input-lg form-control-lg form-control"
                          id="input-normal"
                          placeholder=".form-control-lg"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
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
                <strong className="fw-bold">Validation states </strong>
                <span>Form</span>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <form>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="inputIsValid"
                      className="form-control-label mb-1"
                    >
                      Input is valid
                    </label>
                    <input
                      type="text"
                      id="inputIsValid"
                      className="is-valid  form-control"
                    />
                  </div>
                  <div className="form-group  mb-3">
                    <label
                      htmlFor="inputIsInvalid"
                      className="form-control-label mb-1"
                    >
                      Input is invalid
                    </label>
                    <input
                      type="text"
                      id="inputIsInvalid"
                      className="is-invalid  form-control"
                    />
                  </div>
                </form>
              </>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fw-bold">Validation states </strong>
                <span>
                  with optional icons <em>(deprecated)</em>
                </span>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <form>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="inputIsSuccess"
                      className="form-control-label mb-1"
                    >
                      Input with success
                    </label>
                    <input
                      type="text"
                      id="inputIsSuccess"
                      className="form-control-success form-control"
                    />
                  </div>
                  <div className="form-group  mb-3">
                    <label
                      htmlFor="inputIsInWarning"
                      className="form-control-label mb-1"
                    >
                      Input with warning
                    </label>
                    <input
                      type="text"
                      id="inputIsInWarning"
                      className="form-control-warning form-control"
                    />
                  </div>
                  <div className="form-group  mb-3">
                    <label
                      htmlFor="inputIsInError"
                      className="form-control-label mb-1"
                    >
                      Input with error
                    </label>
                    <input
                      type="text"
                      id="inputIsInError"
                      className="form-control-danger  form-control"
                    />
                  </div>
                </form>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
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
                <strong className="fw-bold">Icon/Text </strong>
                <span>Groups</span>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultEmail"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Email"
                    required
                  />
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa fa-euro"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultEuro"
                    aria-describedby="inputGroupPrepend2"
                    placeholder=".."
                    required
                  />
                  <span className="input-group-text" id="inputGroupPrepend2">
                    .00
                  </span>
                </div>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
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
                <strong className="fw-bold">Buttons </strong>
                <span>Groups</span>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="input-group mb-3">
                  <button
                    className="btn btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    <i className="fa fa-search"></i> Search
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    Submit
                  </button>
                </div>
                <div className="input-group mb-3">
                  <button
                    className="btn btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </button>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </button>
                </div>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
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
                <strong className="fw-bold">Dropdowns </strong>
                <span>Groups</span>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="input-group mb-3">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Username"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Email"
                  />
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="input-group mb-3">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="..."
                  />
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="fa fa-user"></i> Submit
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                    <i className="fa-solid fa-ban"></i> Submit
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
                <strong className="fw-bold">
                  Use the grid for big devices!
                </strong>{" "}
                <code>.col-lg-*.col-md-*.col-sm-*</code>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <form className="form-horizontal">
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col col-md-8">
                        <input
                          type="text"
                          placeholder=".col-md-8"
                          className="form-control"
                        />
                      </div>
                      <div className="col col-md-4">
                        <input
                          type="text"
                          placeholder=".col-md-4"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col col-md-7">
                        <input
                          type="text"
                          placeholder=".col-md-7"
                          className="form-control"
                        />
                      </div>
                      <div className="col col-md-5">
                        <input
                          type="text"
                          placeholder=".col-md-5"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col col-md-6">
                        <input
                          type="text"
                          placeholder=".col-md-6"
                          className="form-control"
                        />
                      </div>
                      <div className="col col-md-6">
                        <input
                          type="text"
                          placeholder=".col-md-6"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col col-md-5">
                        <input
                          type="text"
                          placeholder=".col-md-5"
                          className="form-control"
                        />
                      </div>
                      <div className="col col-md-7">
                        <input
                          type="text"
                          placeholder=".col-md-7"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col col-md-4">
                        <input
                          type="text"
                          placeholder=".col-md-4"
                          className="form-control"
                        />
                      </div>
                      <div className="col col-md-8">
                        <input
                          type="text"
                          placeholder=".col-md-8"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
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
                <strong className="fw-bold">
                  nput Grid for small devices!
                </strong>{" "}
                <code>.col-*</code>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <form className="form-horizontal">
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder=".col-4"
                          className="form-control"
                        />
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          placeholder=".col-8"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col-5">
                        <input
                          type="text"
                          placeholder=".col-5"
                          className="form-control"
                        />
                      </div>
                      <div className="col-7">
                        <input
                          type="text"
                          placeholder=".col-7"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col-6">
                        <input
                          type="text"
                          placeholder=".col-6"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          placeholder=".col-6"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col-7">
                        <input
                          type="text"
                          placeholder=".col-7"
                          className="form-control"
                        />
                      </div>
                      <div className="col-5">
                        <input
                          type="text"
                          placeholder=".col-5"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="row gy-5">
                      <div className="col-8">
                        <input
                          type="text"
                          placeholder=".col-8"
                          className="form-control"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          type="text"
                          placeholder=".col-4"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </>
            }
            cardFooter={
              <>
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Action
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
                <strong className="fw-bold">Example Form </strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    Username
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Username"
                    required
                  />
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    Email
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="validationDefaultEmail"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Email"
                    required
                  />
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    Password
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="validationDefaultEuro"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Password"
                    required
                  />
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa fa-asterisk"></i>
                  </span>
                </div>
                <div className="form-actions form-group mb-3">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Submit
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
                <strong className="fw-bold">Example Form </strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Username"
                    required
                  />
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="validationDefaultEmail"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Email"
                    required
                  />
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="validationDefaultEuro"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Password"
                    required
                  />
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa fa-asterisk"></i>
                  </span>
                </div>
                <div className="form-actions form-group mb-3">
                  <button type="submit" className="btn btn-secondary btn-sm">
                    Submit
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
                <strong className="fw-bold">Example Form </strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="validationDefaultEmail"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fa fa-asterisk"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="validationDefaultEuro"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-actions form-group mb-3">
                  <button type="submit" className="btn btn-success btn-sm">
                    Submit
                  </button>
                </div>
              </>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
