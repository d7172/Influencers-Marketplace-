import React from "react";

function Dashboard() {
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
    </div>
  );
}

export default Dashboard;
