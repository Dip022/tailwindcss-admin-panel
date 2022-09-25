import React from "react";
import CountUp from "react-countup";

const Counter = ({ dolar, count, percentage, count_name, icon, counterBg }) => {
  return (
    <div className={`${counterBg} px-[20px] py-[25px] rounded`}>
      <div className="flex justify-between">
        <div>
          {dolar && (
            <span className="mx-1 text-white text-[1.75rem]">{dolar}</span>
          )}
          <CountUp
            className="text-white text-[1.75rem]"
            end={count}
            duration={3}
          ></CountUp>
          {percentage && (
            <span className="text-white text-[1.75rem]">{percentage}</span>
          )}

          <p className="text-white text-[16px]">{count_name}</p>
        </div>
        <div>
          <i className={`${icon} text-[3.68em] text-white`}></i>
        </div>
      </div>
    </div>
  );
};

export default Counter;
