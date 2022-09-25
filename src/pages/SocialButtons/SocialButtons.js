import React from "react";
import "./SocialButtons.scss";
import Card from "../../component/Card/Card";

const SocialButtons = () => {
  return (
    <div className="container-flowit">
      <div className="row g-4">
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong className="fs-6">Social Buttons </strong>
                  <small>(Rounded)</small>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="social-buttons"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100">
                <a href="#" className="social__button mail">
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="#" className="social__button facebook ">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="social__button linkedin">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="social__button github">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" className="social__button codepen">
                  <i class="fa-brands fa-codepen"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong className="fs-6">Social Buttons </strong>
                  <small>(Square)</small>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="social-buttons"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2">
                <a
                  href="#"
                  className="text-decoration-none border border-dark social__square_button"
                >
                  <i className="fa-brands fa-facebook-f fs-4 text-dark"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none border border-dark social__square_button"
                >
                  <i className="fa-brands fa-twitter fs-4 text-dark"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none border border-dark social__square_button"
                >
                  <i className="fa-brands fa-instagram fs-4 text-dark"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none border border-dark social__square_button"
                >
                  <i className="fa-brands fa-vimeo-v fs-4 text-dark"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none border border-dark social__square_button"
                >
                  <i className="fa-brands fa-behance fs-4 text-dark"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none border border-dark social__square_button"
                >
                  <i className="fa-brands fa-dribbble fs-4 text-dark"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none border border-dark social__square_button"
                >
                  <i className="fa-brands fa-github fs-4 text-dark"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none border border-dark social__square_button"
                >
                  <i className="fa-brands fa-pied-piper fs-4 text-dark"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong className="fs-6">Aeneas Effect</strong>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="social-buttons"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect aeneas">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong className="fs-6">Jaques Effect</strong>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="social-buttons"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect jaques">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong className="fs-6">Egeon Effect</strong>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="social-buttons"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect egeon">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong className="fs-6">Claudio Effect</strong>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="social-buttons"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect claudio">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong className="fs-6">Laertes Effect</strong>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="social-buttons"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect laertes">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <div className="d-flex justify-content-between">
                <div>
                  <strong className="fs-6">Jinae Effect</strong>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <a href="#" type="button" className="text-secondary">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </div>
            }
            cardBodyBg="social-buttons"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect jinae">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
