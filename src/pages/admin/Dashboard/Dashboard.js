import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { Doughnut, Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const options = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  const options2 = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  var chartData = {
    labels: ["On Going Campaign", "Completed Compaign", "Rejected campaign"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["#3751FF", "#fff"],
        hoverBackgroundColor: ["#3751FF", "#fff"],
      },
      {
        data: [100, 200],
        backgroundColor: ["#6A7EFF", "#fff"],
        hoverBackgroundColor: ["#6A7EFF", "#fff"],
      },
      {
        data: [100, 200],
        backgroundColor: ["#BAC9FF", "#fff"],
        hoverBackgroundColor: ["#BAC9FF", "#fff"],
      },
    ],
  };

  var chartData2 = {
    labels: ["Completed", "On progress"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["#FF844B", "#3751FF"],
        hoverBackgroundColor: ["#FF844B", "#3751FF"],
      },
    ],
  };

  const dataLabels = [
    {
      id: 1,
      month: "January",
      amount: 2000,
    },
    {
      id: 1,
      month: "February",
      amount: 3000,
    },
    {
      id: 1,
      month: "March",
      amount: 1500,
    },
    {
      id: 1,
      month: "April",
      amount: 3000,
    },
    {
      id: 1,
      month: "May",
      amount: 5000,
    },
    {
      id: 1,
      month: "June",
      amount: 6000,
    },
    {
      id: 1,
      month: "July",
      amount: 500,
    },
    {
      id: 1,
      month: "August",
      amount: 4500,
    },
    {
      id: 1,
      month: "September",
      amount: 5070,
    },
    {
      id: 1,
      month: "October",
      amount: 5400,
    },
    {
      id: 1,
      month: "November",
      amount: 5200,
    },
    {
      id: 1,
      month: "December",
      amount: 5470,
    },
  ];

  const [barData, setBarData] = useState({
    labels: dataLabels.map((data) => data.month),
    datasets: [
      {
        label: "Earnings",
        data: dataLabels.map((data) => data.amount),
        backgroundColor: ["#ACC3FF"],
        borderRadius: 10,
        hoverBackgroundColor: "#3751FF",
      },
    ],
  });
  const barOptions = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        maxWidth: "1200px",
        reverse: true,
        maxHeight: "1200px",
      },
      labels: {
        color: "red",
      },
    },
    scales: {
      y: {
        suggestedMax: 7000,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };

  const [data5, setData1] = useState({});

  useEffect(() => {
    fetch(`https://influencer-portal-api-v3.herokuapp.com/home/api/admin-dashboard/`)
      .then((response) => response.json())
      .then((res) => setData1(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" w-[1200px] ">
      <div className="flex px-8 gap-10 justify-between mt-6">
        {/* 1 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">10k</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Total Active User ( Influencers & Brands ) </p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon2.svg" alt="im g" />
        </div>
        {/* 2 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">10k</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Number of Campaign Done Till date</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon1.svg" alt="im g" />
        </div>
        {/* 3 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">&#8377; 10k</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Earning of the month</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon3.svg" alt="im g" />
        </div>
        {/* 4 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">&#8377; 10k</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Earning till date</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon4.svg" alt="im g" />
        </div>
      </div>
      <div className="flex px-8 gap-10 justify-between mt-6">
        {/* 1 */}
        <div className="gap-4 justify-center px-2 w-[700px] h-[500px] box-shadow-sidebar">
          <div className="flex px-8 gap-10 justify-between mt-6">
            <div className="flex px-4 gap-5 justify-between mt-6">
              <div className="w-[300px]">
                <h1 className="text-[24px] font-[600]">Overview of Earnings</h1>
                <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="flex px-4 gap-5 align-center mt-6">
              <p className=" text-[12px] font-[400] text-[#969BA0]">last month $1930</p>
            </div>
          </div>
          <Bar data={barData} options={barOptions} />
        </div>
        {/* 2 */}
        <div className="gap-4 px-2 w-[500px] h-[375px] box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[500px]">
              <h1 className="text-[20px] font-[600]">Payment from Brand Till Date </h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[300px]">
              <Doughnut data={chartData2} options={options2} />
            </div>
            <div className="w-[300px]">
              <h1 className="text-[24px] font-[600]">19</h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Received from brand</p>
              <h1 className="text-[24px] font-[600]">19</h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Remaining from brand</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-8 gap-10 justify-between mt-6">
        {/* 1 */}
        <div className="gap-4 justify-center px-2 w-[700px] h-[500px] box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[300px]">
              <h1 className="text-[24px] font-[600]">Campaign Chart</h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <Dropdown
              label="Weekly (2020)"
              options={[{ label: "Weekly (2020)" }]}
              dropdownStyle="w-[200px]"
              className="w-[200px] h-[38px]"
            />
          </div>
          <div className="flex px-4 gap-5 justify-between">
            <div className="w-[500px]">
              <Doughnut data={chartData} options={options} />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="gap-4 px-2 w-[500px] h-[375px] box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[500px]">
              <h1 className="text-[20px] font-[600]">Payment Given to Influencer </h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <Dropdown
              label="Weekly (2020)"
              options={[{ label: "Weekly (2020)" }]}
              dropdownStyle="w-[200px]"
              className="w-[200px] h-[38px]"
            />
          </div>
        </div>
      </div>

      <div className="flex px-8 gap-50 justify-between mt-6">
        {/* 1 */}
        <div className="flex gap-4 items-center px-2 w-[550px] h-[128px] box-shadow-sidebar">
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon2.svg" alt="im g" />
          <div className="w-[150px]">
            <p className=" text-[12px] font-[400] text-[#969BA0]">Total Active Influencers </p>
            <h1 className="text-[24px] font-[600]">10K</h1>
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-4 items-center px-2 w-[550px] h-[128px] box-shadow-sidebar ">
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon1.svg" alt="im g" />
          <div className="w-[200px]">
            <p className=" text-[12px] font-[400] text-[#969BA0]">Pending Influencer Approval</p>
            <h1 className="text-[24px] font-[600]">12.5K</h1>
          </div>
        </div>
      </div>
      <div className="flex px-8 gap-50 justify-between mt-6">
        {/* 1 */}
        <div className="flex gap-4 items-center px-2 w-[550px] h-[128px] box-shadow-sidebar">
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon2.svg" alt="im g" />
          <div className="w-[150px]">
            <p className=" text-[12px] font-[400] text-[#969BA0]">Total Active Campaigns </p>
            <h1 className="text-[24px] font-[600]">10K</h1>
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-4 items-center px-2 w-[550px] h-[128px] box-shadow-sidebar ">
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon1.svg" alt="im g" />
          <div className="w-[200px]">
            <p className=" text-[12px] font-[400] text-[#969BA0]">Pending Campaign Approvals</p>
            <h1 className="text-[24px] font-[600]">12.5K</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
