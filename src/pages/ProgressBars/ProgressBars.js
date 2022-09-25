import React from "react";
import Card from "../../component/Card/Card";
import ProgressBar from "../../component/ProgressBar/ProgressBar";

const ProgressBars = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Background</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="py-4">
                  <ProgressBar
                    progressBg="bg-success"
                    progressWidth={{ minWidth: "25%" }}
                    currentValue="25"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-info"
                    progressWidth={{ minWidth: "50%" }}
                    currentValue="50"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-warning"
                    progressWidth={{ minWidth: "75%" }}
                    currentValue="75"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-danger"
                    progressWidth={{ minWidth: "100%" }}
                    currentValue="100"
                  ></ProgressBar>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Animated Background</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="py-4">
                  <ProgressBar
                    progressBg="bg-success"
                    progressWidth={{ width: "25%" }}
                    currentValue="25"
                    title="25"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-info"
                    progressWidth={{ width: "50%" }}
                    currentValue="50"
                    title="50"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-warning"
                    progressWidth={{ width: "75%" }}
                    currentValue="75"
                    title="75"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-danger"
                    progressWidth={{ width: "100%" }}
                    currentValue="100"
                    title="100"
                  ></ProgressBar>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Labels</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="py-4">
                  <ProgressBar
                    progressBg="bg-success"
                    progressWidth={{ minWidth: "25%" }}
                    currentValue="25"
                    title="25"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-info"
                    progressWidth={{ minWidth: "50%" }}
                    currentValue="50"
                    title="50"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-warning"
                    progressWidth={{ minWidth: "75%" }}
                    currentValue="75"
                    title="75"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-danger"
                    progressWidth={{ minWidth: "100%" }}
                    currentValue="100"
                    title="100"
                  ></ProgressBar>
                </div>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Animated Labels</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <div className="py-4">
                  <ProgressBar
                    progressBg="bg-success"
                    progressWidth={{ width: "25%" }}
                    currentValue="25"
                    title="25"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-info"
                    progressWidth={{ width: "50%" }}
                    currentValue="50"
                    title="50"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-warning"
                    progressWidth={{ width: "75%" }}
                    currentValue="75"
                    title="75"
                  ></ProgressBar>
                  <ProgressBar
                    progressBg="bg-danger"
                    progressWidth={{ width: "100%" }}
                    currentValue="100"
                    title="100"
                  ></ProgressBar>
                </div>
              </>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
