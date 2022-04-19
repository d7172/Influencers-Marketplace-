import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Dropdown from "../../../components/Dropdown";
import Pagination from "../../../components/Pagination";

function Bids() {
  return (
    <div className="ml-10">
      <Breadcrumbs options={[{ title: "Bids" }, { title: "Active Bid" }]} />
      <div className="flex justify-between mt-2">
        <div className="flex gap-4 items-center">
          <label className="text-[12px] text-[#939393]">Sort By Status</label>
          <Dropdown
            label="Pending for Approval"
            options={[{ label: "Pending for Approval" }]}
            dropdownStyle="w-[200px]"
            className="w-[200px] h-[38px]"
          />
          <button className="rounded-[8px] w-[55px] h-[37px] border border-[#C4C4C4] shadow-dateRange">GO</button>
        </div>
        <CampaignSearchBar />
      </div>
      <BidTable />
    </div>
  );
}

export default Bids;

function BidTable() {
  const navigate = useNavigate();
  return (
    <div className="mt-6 pr-4">
      <div className="flex gap-10 border-b-2 pb-2.5 text-[18px] font-[500]">
        <h1 className="w-[110px]">Campaign ID</h1>
        <h1 className="w-[220px]">Campaign Title</h1>
        <h1 className="w-[80px]">Amount</h1>
        <h1 className="w-[130px]">Social Platform</h1>
        <h1 className="w-[125px]">Number of bids</h1>
        <h1 className="">Bid Status</h1>
      </div>
      <div className="flex gap-10 px-2 py-4 text-sm text-gray-900 whitespace-nowrap items-start">
        <div className=" w-[95px] font-medium">#00001</div>
        <div className="flex gap-4 items-center justify-center w-[220px] overflow-hidden">
          <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
          Enjoy the video and music
        </div>
        <div className="w-[80px] ml-1.5">&#8377; 5,553</div>
        <div className="relative w-[130px]  ">
          <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
          <img className="absolute z-30 left-[14px] w-[20px] h-[20px]" src="/svgs/instagram.svg" alt="face" />
          <img className="absolute z-20 left-[24px] w-[20px] h-[20px]" src="/svgs/youtube.svg" alt="face" />
          <img className="absolute z-10 left-[35px] w-[20px] h-[20px]" src="/svgs/linkedin.svg" alt="face" />
          <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
        </div>
        <div className="w-[125px] font-medium">02</div>
        <div className="w-[125px] font-medium text-[#2BC155]">pending for Approval</div>
        <div
          onClick={() => navigate("/influencer/campaign/campaign-pool/1")}
          className=" text-[#3751FF] font-[500]  underline cursor-pointer "
        >
          View Details
        </div>
      </div>
      <div className="flex mt-4 gap-4">
        <div className="w-[140px] flex flex-col items-center justify-center border-r-2 pr-4">
          <h1 className="text-[18px] font-[500]">Bid Number</h1>
          <h1 className="text-[18px] font-[500] mb-1">1.</h1>
          <div className="text-[#3751FF] border-[#3751FF] font-bold border-2 border-dashed w-[110px] h-[40px] flex items-center justify-center">
            <h1>&#8377; 5553</h1>
          </div>
          <h1 className="text-[#3751FF] underline mt-4">View Details</h1>
        </div>
        <div className="w-[140px] flex flex-col items-center justify-center border-r-2 pr-4">
          <h1 className="text-[18px] font-[500]">Bid Number</h1>
          <h1 className="text-[18px] font-[500] mb-1">2.</h1>
          <div className="text-[#3751FF] border-[#3751FF] font-bold border-2 border-dashed w-[110px] h-[40px] flex items-center justify-center">
            <h1>&#8377; 5553</h1>
          </div>
          <h1 className="text-[#3751FF] underline mt-4">View Details</h1>
        </div>
      </div>
      <div className="flex gap-10 px-2 py-4 text-sm text-gray-900 whitespace-nowrap items-start mt-8">
        <div className=" w-[95px] font-medium">#00001</div>
        <div className="flex gap-4 items-center justify-center w-[220px] overflow-hidden">
          <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
          Enjoy the video and music
        </div>
        <div className="w-[80px] ml-1.5">&#8377; 5,553</div>
        <div className="relative w-[130px]  ">
          <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
          <img className="absolute z-30 left-[14px] w-[20px] h-[20px]" src="/svgs/instagram.svg" alt="face" />
          <img className="absolute z-20 left-[24px] w-[20px] h-[20px]" src="/svgs/youtube.svg" alt="face" />
          <img className="absolute z-10 left-[35px] w-[20px] h-[20px]" src="/svgs/linkedin.svg" alt="face" />
          <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
        </div>
        <div className="w-[125px] font-medium">02</div>
        <div className="w-[125px] font-medium text-[#6418C3]">Bid Rejected</div>
        <div
          onClick={() => navigate("/influencer/campaign/campaign-pool/1")}
          className=" text-[#3751FF] font-[500]  underline cursor-pointer "
        >
          View Details
        </div>
      </div>
      <div className="flex mt-4 gap-4">
        <div className="w-[140px] flex flex-col items-center justify-center border-r-2 pr-4">
          <h1 className="text-[18px] font-[500]">Bid Number</h1>
          <h1 className="text-[18px] font-[500] mb-1">1.</h1>
          <div className="text-[#6418C3] border-[#6418C3] font-bold border-2 border-dashed w-[110px] h-[40px] flex items-center justify-center">
            <s>
              <h1>&#8377; 5553</h1>
            </s>
          </div>
          <h1 className="text-[#3751FF] underline mt-4">View Details</h1>
        </div>
        <div className="w-[140px] flex flex-col items-center justify-center border-r-2 pr-4">
          <h1 className="text-[18px] font-[500]">Bid Number</h1>
          <h1 className="text-[18px] font-[500] mb-1">2.</h1>
          <div className="text-[#6418C3] border-[#6418C3] font-bold border-2 border-dashed w-[110px] h-[40px] flex items-center justify-center">
            <s>
              <h1>&#8377; 5553</h1>
            </s>
          </div>
          <h1 className="text-[#3751FF] underline mt-4">View Details</h1>
        </div>
      </div>
    </div>
  );
}
