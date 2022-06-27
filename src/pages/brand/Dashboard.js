import React, { useEffect, useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import Dropdown from '../../components/Dropdown'
import { getBrandDashboardData } from "../../store/Brand/Dashboard/action";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

function BrandDashboard() {

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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage?.getItem('userInfo'));
    if (!userInfo || userInfo.type !== "brand")
      navigate(`/login`)
    const payload = {
      brand_id: userInfo?.data[0]?.id
    }
    dispatch(getBrandDashboardData(payload));
  }, [])
  const dashboardData = useSelector((state) => state?.BrandDashboard)
  // console.log(dashboardData);

  var chartData2 = {
    labels: ["Given to portal", "Pending to Portal"],
    datasets: [
      {
        data: [dashboardData?.payment_overview?.given_pay_per, dashboardData?.payment_overview?.peding_pay_per],
        backgroundColor: ["#FF844B", "#3751FF"],
        hoverBackgroundColor: ["#FF844B", "#3751FF"],
      },
    ],
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
  return (
    <div className=" w-[1200px] ">
      <div className="flex px-8 gap-10 justify-between mt-6">
        {/* 1 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">{dashboardData?.total_complete_campaign}</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Total Completed campaign</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon1.svg" alt="im g" />
        </div>
        {/* 2 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">{dashboardData?.total_ongoing_campaign}</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Total Ongoing campaign</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon2.svg" alt="im g" />
        </div>
        {/* 3 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">&#8377;{dashboardData?.payment_givin_till_date}</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Payment Givin till date</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon3.svg" alt="im g" />
        </div>
        {/* 4 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">&#8377;{dashboardData?.payment_pending_till_date}</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Payment pending till date</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon4.svg" alt="im g" />
        </div>
      </div>
      {/* Chart 1 */}
      <div className="w-full">
        <div className="gap-4 justify-center px-2 w-auto h-auto box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[300px]">
              <h1 className="text-[24px] font-[600]">Total Spend Overview</h1>
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
      </div>
      {/* Chart 2 */}
      <div className="flex px-8  justify-between">
        {/* 1 */}
        <div>
          <div className="gap-4 px-2 w-[500px] h-[375px] box-shadow-sidebar">
            <div className="flex px-4 gap-5 justify-between mt-6">
              <div className="w-[500px]">
                <h1 className="text-[20px] font-[600]">Payment Overview</h1>
                <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="flex px-4 gap-5 justify-between mt-6">
              <div className="w-[300px]">
                <Doughnut data={chartData2} options={options2} />
              </div>
              <div className="w-[300px]">
                <h1 className="text-[24px] font-[600]">{dashboardData?.payment_overview?.given_pay_per}</h1>
                <p className=" text-[12px] font-[400] text-[#969BA0]">Given to portal</p>
                <h1 className="text-[24px] font-[600]">{dashboardData?.payment_overview?.peding_pay_per}</h1>
                <p className=" text-[12px] font-[400] text-[#969BA0]">Pending to Portal</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className="gap-4 px-2 w-[500px] h-[375px] box-shadow-sidebar">
            <div className="flex px-4 gap-5 justify-between mt-6">
              <div className="w-[500px]">
                <h1 className="text-[20px] font-[600]">Query to Conversion Ration </h1>
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
      </div>

    </div>
  );
}

export default BrandDashboard;
