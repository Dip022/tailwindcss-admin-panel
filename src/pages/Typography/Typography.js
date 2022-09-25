import React from "react";
import Card from "../../component/Card/Card";

const Typography = () => {
  return (
    <div className="container-fluid p-0">
      <Card
        cardHeader={
          <>
            <strong className="fs-6">Typography </strong>
          </>
        }
        cardBodyBg="bg-light"
        cardBody={
          <>
            <div>
              <h1 className="display-1">Very Important Information H1</h1>
              <h2 className="display-2">Very Important Information H2</h2>
              <h3 className="display-3">Very Important Information H3</h3>
              <h4 className="display-4">Very Important Information H4</h4>
              <h5 className="display-5">Very Important Information H5</h5>
              <h6 className="display-6">Very Important Information H6</h6>
            </div>
            <div className="mt-5">
              <p className="lh-2 text-secondary text-start">
                The unique stripes of zebras make them one of the animals most
                familiar to people. They occur in a variety of habitats, such as
                grasslands, savannas,{" "}
                <span className="bg-primary text-light">woodlands</span> ,
                thorny scrublands, mountains , and coastal hills. However,
                various anthropogenic factors have had a severe impact on zebra
                populations, in particular hunting for skins and habitat
                destruction. Grévy's zebra and the mountain{" "}
                <mark>highlighted text</mark> {"  "}zebra are endangered.
              </p>
              <blockquote className="text-secondary text-end">
                <p>
                  Blockquotes. However, various anthropogenic factors have had a
                  severe impact on zebra populations, in particular hunting for
                  skins.
                </p>
                <footer className="blockquote-footer">Jefferey Lebowski</footer>
              </blockquote>
              <p>
                lthough zebra species may have overlapping ranges, they do not
                interbreed. In captivity, plains zebras have been crossed with
                mountain zebras. The hybrid foals{" "}
                <span className="bg-primary text-light">selected text</span>{" "}
                lacked a dewlap and resembled their
              </p>
            </div>
            <div className="row">
              <h3 className="fw-bold mt-4">Lists</h3>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h2 className="fw-bold mt-2">Unordered</h2>
                <ul>
                  <li>
                    A wide variety of hypotheses have been proposed to account
                    for the evolution of the striking stripes of zebras.
                  </li>
                  <li>
                    The more traditional of these (1 and 2, below) relate to
                    camouflage.
                  </li>
                  <li>
                    The vertical striping may help the zebra hide in the grass
                    by disrupting its outline.
                  </li>
                  <li>
                    In addition, even at moderate distances, the striking
                    striping merges to an apparent grey.
                    <ul>
                      <li>
                        However, the camouflage has been contested with
                        arguments that most of a zebra's predator.
                      </li>
                      <li>
                        Such as lions and hyenas cannot see well at a distance.
                      </li>
                      <li>More likely to have smelled or heard a zebra.</li>
                    </ul>
                  </li>
                  <li>
                    Before seeing it from a distance, especially at night.
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h2 className="fw-bold mt-2">Ordered</h2>
                <ol>
                  <li>
                    A wide variety of hypotheses have been proposed to account
                    for the evolution of the striking stripes of zebras.
                  </li>
                  <li>
                    The more traditional of these (1 and 2, below) relate to
                    camouflage.
                  </li>
                  <li>
                    The vertical striping may help the zebra hide in the grass
                    by disrupting its outline.
                  </li>
                  <li>
                    In addition, even at moderate distances, the striking
                    striping merges to an apparent grey.
                    <ul>
                      <li>
                        However, the camouflage has been contested with
                        arguments that most of a zebra's predator.
                      </li>
                      <li>
                        Such as lions and hyenas cannot see well at a distance.
                      </li>
                      <li>More likely to have smelled or heard a zebra.</li>
                    </ul>
                  </li>
                  <li>
                    Before seeing it from a distance, especially at night.
                  </li>
                </ol>
              </div>
              <div className="row">
                <h3 className="fw-bold mt-4">Misc</h3>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h2 className="fw-bold mt-2">Address</h2>
                  <address>
                    <strong className="d-block">SJØNNA</strong>
                    <span className="d-block">Nezalezhnasti Ave, 13 - 28A</span>
                    <span className="d-block">Minsk, Belarus, 220141</span>
                    <span className="d-block">+375 29 319-53-98</span>
                    <b className="d-block mt-3">Vasili Savitski</b>
                    <a href="#" className="text-decoration-none text-secondary">
                      hello@examplemail.com
                    </a>
                  </address>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h2 className="fw-bold mt-2">Well</h2>
                  <div
                    style={{ backgroundColor: "#e9ecef" }}
                    className="px-3 py-5 rounded"
                  >
                    <span>
                      Zebras have excellent eyesight. It is believed that they
                      can see in color. Like most ungulates, the zebra's eyes
                      are on the sides of its head, giving it a wide field of
                      view.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      ></Card>
    </div>
  );
};

export default Typography;
