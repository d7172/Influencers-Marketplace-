import React from "react";

function CampaignBudget() {
  return (
    <div>
      <h1>Campaign Budget & Payment Type</h1>
      <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="flex gap-10 mt-6">
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Budget Type</h1>
          <p className="text-[18px] font-[600] ">Fixed</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Payout Type</h1>
          <p className="text-[18px] font-[600] ">Barter</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Amount</h1>
          <p className="text-[18px] text-[#3751FF] font-[600] ">&#8377;5,553</p>
        </div>
      </div>
    </div>
  );
}

export default CampaignBudget;
