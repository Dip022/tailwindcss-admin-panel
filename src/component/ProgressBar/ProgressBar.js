import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ progressBg, progressWidth, currentValue, title }) => {
  console.log(progressWidth);
  return (
    <div className="progress mb-2">
      <div
        className={`progress-bar ${progressBg}`}
        data-v-4dd0e00e
        role="progressbar"
        style={progressWidth}
        aria-valuenow={currentValue}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {title && <span className="title">{title}%</span>}
      </div>
    </div>
  );
};

export default ProgressBar;
