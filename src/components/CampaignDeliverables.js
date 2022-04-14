import React from "react";

function CampaignDeliverables() {
  return (
    <div>
      <h1>Social media platform & Deliverables</h1>
      <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="flex flex-col gap-6 mt-6">
        <div className="flex gap-10 text-gray-600 text-[18px] font-[500]">
          <h1 className="w-[125px] ">Social Platform</h1>
          <h1 className="w-[125px]">Social Platform</h1>
          <h1 className="w-[125px]"> Social Platform</h1>
          <h1 className="w-[125px]">Social Platform</h1>
        </div>
        <div className="flex gap-10 items-start">
          <div className="flex gap-4 w-[125px]">
            <img className="w-[20px]" src="/svgs/facebook.svg" alt="instagram" />
            <h1>Facebook</h1>
          </div>
          <div className="w-[125px] font-[600] text-[16px] flex flex-col gap-2">
            <h1>Story</h1>
            <h1>Reels</h1>
            <h1>Swipe Up Story</h1>
            <h1>Story</h1>
          </div>
          <h1 className="w-[125px] font-[600] text-[16px]">1 Days</h1>
          <h1 className="font-[600] text-[16px]">3 %</h1>
        </div>
        <div className="flex gap-10 items-start">
          <div className="flex gap-4 w-[125px]">
            <img className="w-[20px]" src="/svgs/instagram.svg" alt="instagram" />
            <h1>Instagram</h1>
          </div>
          <div className="w-[125px] font-[600] text-[16px] flex flex-col gap-2">
            <h1>Create Post</h1>
            <h1>Create Story</h1>
            <h1>Create Reel</h1>
          </div>
          <h1 className="w-[125px] font-[600] text-[16px]">1 Days</h1>
          <h1 className="font-[600] text-[16px]">2.5 %</h1>
        </div>
      </div>
    </div>
  );
}

export default CampaignDeliverables;
