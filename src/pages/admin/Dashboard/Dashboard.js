import React from "react";
import Dropdown from "../../../components/Dropdown";

function Dashboard() {
  return (
    <div className=" w-[1200px] ">
      <div className="flex px-8 gap-10 justify-between mt-6">
        {/* 1 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">10K</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Total Active User ( Influencers & Brands ) </p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon2.svg" alt="im g" />
        </div>
        {/* 2 */}
        <div className="flex gap-4 items-center justify-center px-2 w-[260px] h-[128px] box-shadow-sidebar ">
          <div className="w-[150px]">
            <h1 className="text-[24px] font-[600]">12.5K</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">Number of Campaign Done Till date</p>
          </div>
          <img className="w-[60px] h-[60px]" src="/svgs/inf-dashboard-icon1.svg" alt="im g" />
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
        <div className="gap-4 justify-center px-2 w-[700px] h-[500px] box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[300px]">
              <h1 className="text-[24px] font-[600]">Overview of Earnings</h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div className="flex px-4 gap-5 align-center mt-6">
            <h1 className="text-[24px] font-[600]">₹12.6 K</h1>
            <p className=" text-[12px] font-[400] text-[#969BA0]">last month $563,443</p>
          </div>
        </div>
        {/* 2 */}
        <div className="gap-4 px-2 w-[500px] h-[375px] box-shadow-sidebar">
          <div className="flex px-4 gap-5 justify-between mt-6">
            <div className="w-[500px]">
              <h1 className="text-[20px] font-[600]">Payment from Brand Till Date </h1>
              <p className=" text-[12px] font-[400] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur</p>
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
}

export default Dashboard;
