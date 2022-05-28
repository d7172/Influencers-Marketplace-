import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

function Dashboard() {
  const [data1, setData1] = useState({
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "First Dataset",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "#FFF6E8",
        borderColor: "#FFAB2D",
        tension: 0.5,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "Second Dataset",
        data: [100, 200, 300, 350, 400, 390, 340, 250, 150, 300, 175, 225],
        backgroundColor: "#C5D0FF",
        borderColor: "#4976A9",
        tension: 0.5,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  const [data, setData] = useState({
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "First Dataset",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "#FFF6E8",
        borderColor: "#FFAB2D",
        tension: 0.5,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  return (
    <div className=" w-[1200px] ">
      <div className="flex px-8 gap-10 justify-between mt-6">
        {/* 1 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">123</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Total Completed campaign</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon1.svg" alt="im g" />
        </div>
        {/* 2 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">02</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Pending</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon2.svg" alt="im g" />
        </div>
        {/* 3 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">&#8377; 12,600</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Earning of the month</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon3.svg" alt="im g" />
        </div>
        {/* 4 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">&#8377; 120,600</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Earning till date</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon4.svg" alt="im g" />
        </div>
      </div>
      <div className="flex px-8 gap-10 justify-between mt-6">
        {/* 1 */}
        <div className="gap-4 justify-center px-2 w-[550px] h-[375px] box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[300px]">
              <h1 className="text-[24px] font-[600]">Earnings Overview</h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <Dropdown
              label="Monthly (2020)"
              options={[{ label: "Monthly (2020)" }]}
              dropdownStyle="w-[200px]"
              className="w-[200px] h-[38px]"
            />
          </div>
          <Line data={data}>Hello</Line>
        </div>
        {/* 2 */}
        <div className="gap-4 justify-center px-2 w-[550px] h-[375px] box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[300px]">
              <h1 className="text-[24px] font-[600]">Bids for compaign</h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
            </div>

            <div className="flex">
              <li className="page-item bg-[#F4F6F9] w-[71px] h-[51px] flex items-center justify-center">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-[#3751FF] focus:shadow-none"
                  href="#"
                >
                  Monthly
                </a>
              </li>
              <li className="page-item bg-[#F4F6F9] w-[71px] h-[51px] flex items-center justify-center">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-[#3751FF] focus:shadow-none"
                  href="#"
                >
                  Today
                </a>
              </li>
              <li className="page-item bg-[#3751FF] w-[71px] h-[51px] flex items-center justify-center">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded  text-white focus:shadow-none"
                  href="#"
                >
                  Weekly
                </a>
              </li>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center px-2 w-[520px] h-[75px] box-shadow-sidebar mt-2">
            <img className="w-[60px] h-[60px]" src="/svgs/recieved.svg" alt="im g" />

            <div className="flex gap-4 items-center justify-center">
              <img className="w-[30px] h-[30px]" src="/svgs/img.svg" alt="im g" />
              <h1 className="text-[18px] font-[600]">Cardboard paper style</h1>
            </div>
            <h1 className="text-[18px] font-[600]">₹ 5,553</h1>
            <h1 className="text-[18px] font-[600] text-green-600">Completed</h1>
          </div>
          <div className="flex gap-4 items-center justify-center px-2 w-[520px] h-[75px] box-shadow-sidebar mt-2">
            <img className="w-[60px] h-[60px]" src="/svgs/transfered.svg" alt="im g" />

            <div className="flex gap-4 items-center justify-center">
              <img className="w-[30px] h-[30px]" src="/svgs/img.svg" alt="im g" />
              <h1 className="text-[18px] font-[600]">Cardboard paper style</h1>
            </div>
            <h1 className="text-[18px] font-[600]">₹ 5,553</h1>
            <h1 className="text-[18px] font-[600] text-gray-600">Pending</h1>
          </div>
        </div>
      </div>
      <div className="flex px-8 gap-10 justify-between mt-6">
        <div className="gap-4 justify-center px-2 w-[800px] h-[375px] box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div>
              <h1 className="text-[24px] font-[600]">Bid to win</h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Average</p>
              <h1 className="text-[24px] font-[600]">45%</h1>
            </div>
          </div>
          <Line data={data1} height={60} width={160}>
            Hello
          </Line>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
