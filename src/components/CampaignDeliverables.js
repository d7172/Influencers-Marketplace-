import React from "react";

function CampaignDeliverables({ campaignDetails }) {
  return (
    <div>
      <h1 className="text-[18px] font-[600] ">Social media platform & Deliverables</h1>
      <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="flex flex-col gap-6 mt-6">
        <div className="flex gap-10 text-gray-600 text-[18px] font-[500]">
          <h1 className="w-[125px] ">Social Platform</h1>
          <h1 className="w-[125px]">Deliverables</h1>
          <h1 className="w-[125px]">Duration</h1>
          <h1 className="">Engagement rate</h1>
        </div>
        <div className="flex gap-10 items-start">
          <div className="flex gap-4 w-[125px]">
            <img className="w-[20px]" src="/svgs/facebook.svg" alt="instagram" />
            <h1>{campaignDetails?.social_platform[0]}</h1>
          </div>
          <div className="w-[125px] font-[600] text-[16px] flex flex-col gap-2">
            <h1>Story</h1>
            <h1>Reels</h1>
            <h1>Swipe Up Story</h1>
            <h1>Story</h1>
          </div>
          <h1 className="w-[125px] font-[600] text-[16px]">{campaignDetails?.number_of_days}</h1>
          <h1 className="font-[600] text-[16px]">{campaignDetails?.minimum_facebook_engagement[0]} %</h1>
        </div>
      </div>
    </div>
  );
}

export default CampaignDeliverables;
