import React from "react";

function CampaignBudget({ campaignDetails, setDocumentPhaseDialog, isActive }) {
  return (
    <div>
      <h1 className="text-[18px] font-[600] mt-4">Campaign Budget & Payment Type</h1>
      <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="flex gap-10 mt-6">
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Budget Type</h1>
          <p className="text-[18px] font-[600] ">{campaignDetails?.budget_type}</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Payout Type</h1>
          <p className="text-[18px] font-[600] ">{campaignDetails?.payout_type} </p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Amount</h1>
          <p className="text-[18px] text-[#3751FF] font-[600] ">
            &#8377;{" "}
            {Math.floor(
              (campaignDetails?.admin_amount || campaignDetails?.brand_amount) /
                JSON.parse(campaignDetails?.number_of_influencer)
            )}
          </p>
        </div>
        {isActive && (
          <div className="mt-6">
            <button
              className="flex justify-between items-center text-[#3751FF] bg-[#DCE6FF] px-4 py-2"
              onClick={() => setDocumentPhaseDialog(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Click here
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CampaignBudget;
