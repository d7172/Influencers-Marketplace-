import React from "react";

function CampaignRequirement({ campaignDetails }) {
  return (
    <div>
      <h1 className="text-[18px] font-[500] ">Campaign Requirement</h1>
      <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="flex gap-10 flex-wrap mt-6">
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">From</h1>
          <p className="text-[18px] font-[600] tracking-[3px]">
            {campaignDetails.from_date} - {campaignDetails.to_date}
          </p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Duration</h1>
          <p className="text-[18px] font-[600]">{campaignDetails.project_duration_in_days} Days</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Category</h1>
          <p className="text-[18px] font-[600] ">{campaignDetails.category}</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Age Group</h1>
          <p className="text-[18px] font-[600] ">{campaignDetails.age_group[0]} Years</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Gender</h1>
          <p className="text-[18px] font-[600] ">{campaignDetails?.gender}</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Country</h1>
          <p className="text-[18px] font-[600] ">India</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">State</h1>
          <p className="text-[18px] font-[600] ">Maharastra</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">City</h1>
          <p className="text-[18px] font-[600] ">Mumbai, Pune</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Number of Followers</h1>
          <p className="text-[18px] font-[600] ">{campaignDetails.number_of_followers}</p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Number of Influencer</h1>
          <p className="text-[18px] font-[600] ">{campaignDetails.number_of_influencer} </p>
        </div>
        <div>
          <h1 className="text-[16px] font-[500] mb-1 text-gray-600">Promotion Goal</h1>
          <p className="text-[18px] font-[600] ">Brand promation</p>
        </div>
      </div>
    </div>
  );
}

export default CampaignRequirement;
