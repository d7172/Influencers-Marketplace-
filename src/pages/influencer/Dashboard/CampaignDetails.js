import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignBudget from "../../../components/CampaignBudget";
import CampaignDeliverables from "../../../components/CampaignDeliverables";
import CampaignRequirement from "../../../components/CampaignRequirement";
import CampaignUploadDocuments from "../../../components/CampaignUploadDocuments";
import MyDialog from "../../../components/MyDialog";
import ResonForRejction from "../../../components/ResonForRejction";

function CampaignDetails() {
  return (
    <div className="mt-6 px-6 pb-10">
      <MyDialog isOpen={false} close={() => {}} className="rounded-8">
        {/* <ResonForRejction /> */}
        <CampaignUploadDocuments />
      </MyDialog>
      <Breadcrumbs />
      <div className="ml-4">
        <div className="mt-6">
          <h1 className="text-[32px] font-[600]">Campaign id</h1>
          <p className="text-[18px] font-[500] text-[#969BA0]  ">#00001</p>
        </div>
        <div className="mt-6">
          <p className="text-[#969BA0] text-[16px]">Brand Description</p>
          <h1 className="text-[18px] font-[500] mt-1 ">Cardboard paper style</h1>
          <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
            or a typeface without relying on meaningful content. Lorem ipsum
          </p>
        </div>
        <hr className="my-8" />
        <CampaignRequirement />
        <hr className="my-8" />
        <CampaignBudget />
        <hr className="my-8" />
        <CampaignDeliverables />
        <hr className="my-8" />
        <div className="mt-6">
          <p className="text-[#969BA0] text-[16px]">Note from Brand</p>
          <h1 className="text-[18px] font-[500] mt-1 ">Cardboard paper style</h1>
          <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />{" "}
            publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
            <br /> demonstrate the visual form of a document or a typeface without relying
          </p>
        </div>
        <hr className="my-8" />
        <div className="mt-6">
          <p className="text-[#969BA0] text-[16px]">Note from Admin</p>
          <h1 className="text-[18px] font-[500] mt-1 ">Jhon Deo</h1>
          <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />{" "}
            publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
            <br /> demonstrate the visual form of a document or a typeface without relying
          </p>
        </div>
        <hr className="my-8" />
        <div>
          <h1>Terms & Conditions</h1>
          <p className="text-[14px] text-[#969BA0] my-2">lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className="text-[14px] text-[#969BA0] my-2">sed do eiusmod tempor incididunt ut </p>
          <p className="text-[14px] text-[#969BA0] my-2">labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          <p className="text-[14px] text-[#969BA0] my-2">exercitation ullam covoluptate velit esse cillum</p>
        </div>
        <hr className="my-8" />
        <div>
          <button className="bg-[#3751FF] rounded-full text-white w-[171px] h-[54px] mr-10">Accept</button>
          <button className="text-[#3751FF] border-[#3751FF] rounded-full bg-white border-2 w-[171px] h-[54px]">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;
