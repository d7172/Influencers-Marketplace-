import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Cart as ChartJS } from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { getTransitionEarningData, getLatestTransitionData } from "../../../store/infTransitionEarning/action";

let transitionEarningState = [];
let latestTransactionState = [];

function Earning() {
  // const loggedInUserData = useSelector((state) => state?.login?.data[0]);
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  console.log(JSON.parse(localStorage?.userInfo)?.data, "local storage");
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      influencer_id: loggedInUserData?.id,
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getTransitionEarningData(payload));
    dispatch(getLatestTransitionData(payload));
  }, []);
  transitionEarningState = useSelector((state) => state?.infTransitionEarning?.results);
  latestTransactionState = useSelector((state) =>
    state?.infLatestTransition?.results?.map((data) => {
      return data?.campaign_details;
    })
  );
  console.log(latestTransactionState, "latestTransactionState");

  const monthlyData = transitionEarningState?.map((data) => data.monthly?.map((data) => data));

  const [barData, setBarData] = useState({
    labels: data.map((data) => data.month),
    datasets: [
      {
        label: "Earnings",
        data: data.map((data) => data.amount),
        backgroundColor: ["#ACC3FF"],
        borderRadius: 10,
        hoverBackgroundColor: "#3751FF",
      },
    ],
  });
  const options = {
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
  return (
    <div className="pb-20">
      <div className="flex px-8 gap-10 justify-between mt-6">
        {transitionEarningState?.map((transEarning, id) => {
          return (
            <React.Fragment key={id}>
              {/* 1 */}
              <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar">
                <div className="w-[150px]">
                  <h1 className="text-[24px] font-[600]">{transEarning?.total_amount}</h1>
                  <p className=" text-[12px] font-[400] text-[#969BA0]">Total Completed campaign</p>
                </div>
                <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon1.svg" alt="im g" />
              </div>
              {/* 2 */}
              <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
                <div className="w-[150px]">
                  <h1 className="text-[24px] font-[600]">{transEarning?.pending_amt}</h1>
                  <p className=" text-[12px] font-[400] text-[#969BA0]">Pending</p>
                </div>
                <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon2.svg" alt="im g" />
              </div>
              {/* 3 */}
              <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
                <div className="w-[150px]">
                  <h1 className="text-[24px] font-[600]">&#8377; {transEarning?.this_month_transition}</h1>
                  <p className=" text-[12px] font-[400] text-[#969BA0]">Earning of the month</p>
                </div>
                <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon3.svg" alt="im g" />
              </div>
              {/* 4 */}
              <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
                <div className="w-[150px]">
                  <h1 className="text-[24px] font-[600]">&#8377; {transEarning?.earning_till_date}</h1>
                  <p className=" text-[12px] font-[400] text-[#969BA0]">Earning till date</p>
                </div>
                <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon4.svg" alt="im g" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="w-[1000px] h-[600px] ml-10 mt-6">
        <h1 className="text-[28px] font-[600] mb-4">Earning Summary </h1>
        <Bar data={barData} options={options} />
      </div>
      <h1 className="text-[28px] font-[600] mb-4 ml-10 mt-8">Latest Transaction </h1>
      <div className="flex flex-col max-w-[1280px] ml-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Campaign ID
                    </th>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Campaign Title
                    </th>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Amount
                    </th>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Payment Type
                    </th>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Payment Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {latestTransactionState?.map((transaction) => {
                    return (
                      <tr className="">
                        <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                          {transaction?.id}
                        </td>
                        <td className="text-sm flex gap-4 items-center justify-center min-w-[250px] max-w-[250px] overflow-hidden text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
                          {transaction?.title}
                        </td>
                        <td className="text-sm max-w-[170px] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          &#8377; {transaction?.amount}
                        </td>
                        <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {transaction?.payout_type}
                        </td>
                        <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap flex items-center gap-4">
                          <div className="bg-red-500 w-[8px] h-[8px] rounded-full" />
                          {transaction?.status_camp}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earning;

const data = [
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
