import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
  const data = {
    labels: ["Vue Js", "Ember Js", "React Js", "Angular Js"],
    datasets: [
      {
        label: "# of Votes",
        data: [40, 20, 80, 10],
        backgroundColor: [
          "rgba(31,193,120, 1)",
          "rgba(228, 102, 80,1)",
          "rgba(0,195,230,1)",
          "rgba(219,7,0,1)",
        ],
        borderColor: [
          "rgba(31,193,120, 1)",
          "rgba(228, 102, 80,1)",
          "rgba(0,195,230,1)",
          "rgba(7219,7,0,1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: "450px" }} className="mx-auto">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
