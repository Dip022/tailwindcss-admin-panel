import React from "react";
import Counter from "../../component/Counter/Counter";

const Dashboard = () => {
  return (
    <div className="full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="mb-5">
          <Counter
            counterBg="bg-revenue"
            count={23569}
            dolar="$"
            count_name="Revenue"
            icon="fa-solid fa-cart-shopping"
          ></Counter>
        </div>
        <div className="mb-5">
          <Counter
            counterBg="bg-sales-increase"
            count={85}
            percentage="%"
            count_name="Sales Increase"
            icon="fa-solid fa-cart-shopping"
          ></Counter>
        </div>
        <div className="mb-5">
          <Counter
            counterBg="bg-total-clients"
            count={6596}
            count_name="Total Clients"
            icon="fa-solid fa-user-group"
          ></Counter>
        </div>
        <div className="">
          <Counter
            counterBg="bg-users"
            count={1490}
            count_name="New Users"
            icon="fa-solid fa-cart-shopping"
          ></Counter>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
