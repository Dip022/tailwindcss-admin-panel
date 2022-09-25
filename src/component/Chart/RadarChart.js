import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {
  const data = {
    labels: [
      "Eating",
      "Drinking",
      "SleePing",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: "rgba(179, 181, 198, 0.3)",
        borderColor: "#B3B5C6",
        borderWidth: 3,
      },
      {
        label: "My Second dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#FF6283",
        borderWidth: 3,
      },
    ],
  };
  return (
    <div style={{ width: "450px" }} className="mx-auto">
      <Radar data={data} />
    </div>
  );
};

export default RadarChart;
