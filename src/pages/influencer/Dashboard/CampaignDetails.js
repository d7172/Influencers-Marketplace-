import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignBudget from "../../../components/CampaignBudget";
import CampaignDeliverables from "../../../components/CampaignDeliverables";
import CampaignRequirement from "../../../components/CampaignRequirement";
import CampaignUploadDocuments from "../../../components/CampaignUploadDocuments";
import MyDialog from "../../../components/MyDialog";
import PalceBid from "../../../components/PalceBid";
import ResonForRejction from "../../../components/ResonForRejction";

function CampaignDetails({ route }) {
  const { id } = useParams();
  const [placeBid, setPlaceBid] = useState(false);
  const [rejectBid, setRejectBid] = useState(false);
  const infCampaignPools = useSelector((state) => state.infCampaignPool);
  const campDetails = infCampaignPools.results.filter((i) => i.id == id)[0];
  const infId = useSelector((state) => console.log(state));
  return (
    <div className="mt-6 px-6 pb-10">
      <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
        {/* <CampaignUploadDocuments /> */}
        <PalceBid close={() => setPlaceBid(false)} campaignId={id} />
      </MyDialog>
      <MyDialog isOpen={rejectBid} close={() => setRejectBid(false)} className="rounded-8">
        <ResonForRejction close={() => setRejectBid(false)} />
      </MyDialog>
      <Breadcrumbs options={[{ title: "campaign" }, { title: route }, { title: campDetails?.id }]} />
      <div className="ml-4">
        <div className="mt-6">
          <h1 className="text-[32px] font-[600]">Campaign id</h1>
          <p className="text-[18px] font-[500] text-[#969BA0]  ">{campDetails?.id} </p>
        </div>
        <div className="mt-6">
          <p className="text-[#969BA0] text-[16px]">Brand Description</p>
          <h1 className="text-[18px] font-[500] mt-1 ">{campDetails?.title}</h1>
          <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">{campDetails?.about_campaign}</p>
        </div>
        <hr className="my-8" />
        <CampaignRequirement campaignDetails={campDetails} />
        <hr className="my-8" />
        <CampaignBudget campaignDetails={campDetails} />
        <hr className="my-8" />
        <CampaignDeliverables campaignDetails={campDetails} />
        <hr className="my-8" />
        <div className="mt-6">
          <p className="text-[#969BA0] text-[16px]">Note from Brand</p>
          <h1 className="text-[18px] font-[500] mt-1 ">{campDetails?.note_from_brand}</h1>
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
          <p className="max-w-[967px] text-[14px] text-[#969BA0] my-2">{campDetails.terms_and_condition} </p>
        </div>
        <hr className="my-8" />
        <div>
          <button
            onClick={() => setPlaceBid(true)}
            className="bg-[#3751FF] rounded-full text-white w-[171px] h-[54px] mr-10"
          >
            Accept
          </button>
          <button
            onClick={() => setRejectBid(true)}
            className="text-[#3751FF] border-[#3751FF] rounded-full bg-white border-2 w-[171px] h-[54px]"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;
