import React from "react";
import Card from "../../component/Card/Card";
import LineChart from "../../component/Chart/LineChart";
import BarChart from "../../component/Chart/BarChart";
import DoughnutChart from "../../component/Chart/DoughnutChart";
import RadarChart from "../../component/Chart/RadarChart";
import PieChart from "../../component/Chart/PieChart";
import PolarAreaChart from "../../component/Chart/PolarAreaChart";
const ChartJS = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Line Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <LineChart></LineChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Bar Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <BarChart></BarChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Doughnut Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <DoughnutChart></DoughnutChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Radar Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <RadarChart></RadarChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Pie Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <PieChart></PieChart>
              </>
            }
          ></Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <Card
            cardHeader={
              <>
                <strong className="fs-6">Polar Area Chart</strong>
              </>
            }
            cardBodyBg="bg-white"
            cardBody={
              <>
                <PolarAreaChart></PolarAreaChart>
              </>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default ChartJS;
