import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignBudget from "../../../components/CampaignBudget";
import CampaignDeliverables from "../../../components/CampaignDeliverables";
import CampaignRequirement from "../../../components/CampaignRequirement";
import CampaignUploadDocuments from "../../../components/CampaignUploadDocuments";
import MyDialog from "../../../components/MyDialog";
import PalceBid from "../../../components/PalceBid";
import ResonForRejction from "../../../components/ResonForRejction";

function CampaignDetails() {
  // const { id } = useParams();
  const [placeBid, setPlaceBid] = useState(false);
  const [rejectBid, setRejectBid] = useState(false);
  const [uploadDocsuments, setUploadDocsuments] = useState(false);
  //   const infCampaignPools = useSelector((state) => state.infCampaignPool);
  // const campaignDetails = infCampaignPools.results.filter((i) => i.id == id)[0];
  const campaignDetails = {
    from_date: "24/2/2021",
    to_date: "26/2/2021",
    project_duration_in_days: "2",
    category: "Fashion, DIY",
    age_group: [18, 24],
    number_of_followers: "1k - 10k",
    number_of_influencer: "02",
    budget_type: "Fixed",
    payout_type: "Barter",
    budget_per_influencer: 5553,
    terms_and_condition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi praesentium deserunt ab at esse necessitatibus debitis ad libero iusto enim consequatur eius, deleniti dolorum nemo! Deserunt praesentium, maxime adipisci nisi, magni a autem sint quo voluptas accusamus eligendi aliquid? Delectus quod dolores ipsum eaque, similique veniam quae corrupti, incidunt, iusto laboriosam a! Quidem, minima?"
  }
  return (
    <div className="mt-6 px-6 pb-10">
      <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
        {/* <CampaignUploadDocuments /> */}
        <PalceBid close={() => setPlaceBid(false)} />
      </MyDialog>
      <MyDialog isOpen={rejectBid} close={() => setRejectBid(false)} className="rounded-8">
        <ResonForRejction close={() => setRejectBid(false)} />
      </MyDialog>
      <MyDialog isOpen={uploadDocsuments} close={() => setUploadDocsuments(false)} className="rounded-8">
        <CampaignUploadDocuments close={() => setUploadDocsuments(false)} />
      </MyDialog>
      <Breadcrumbs options={[{ title: "Campaign" }, { title: "Assigned Campaign" }, { title: "#00001" }]} />
      <div className="ml-4">
        <div className="flex justify-between items-start" >
          <div className="mt-6">
            <h1 className="text-[32px] font-[600]">Campaign id</h1>
            <p className="text-[18px] font-[500] text-[#969BA0]  ">#00001 </p>
          </div>
          <div className="mt-6">
            <h1 className="text-[28px] font-[600]">Submited for Approval</h1>
            <p className="text-[18px] font-[500] text-[#969BA0]  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, voluptatem? </p>
          </div>
          <div className="mt-6">
            <button className="flex justify-between items-center text-[#3751FF] bg-[#DCE6FF] px-4 py-2" onClick={() => setUploadDocsuments(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Click here
            </button>
          </div>
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
        <CampaignRequirement campaignDetails={campaignDetails} />
        <hr className="my-8" />
        <CampaignBudget campaignDetails={campaignDetails} />
        <hr className="my-8" />
        <CampaignDeliverables />
        <hr className="my-8" />
        <div className="mt-6">
          <p className="text-[#969BA0] text-[16px]">Note from Brand</p>
          <h1 className="text-[18px] font-[500] mt-1 ">Cardboard paper style</h1>
          <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
            {campaignDetails.note_from_brand}
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
          <p className="max-w-[967px] text-[14px] text-[#969BA0] my-2">{campaignDetails.terms_and_condition} </p>
        </div>
        <hr className="my-8" />
        <div className="flex justify-between items-start">
          <div className="mt-6">
            <h1 className="text-[28px] font-[600]">Submited for Approval</h1>
            <p className="text-[18px] font-[500] text-[#969BA0]  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, voluptatem? </p>
          </div>
          <div className="mt-6">
            <button className="flex justify-between items-center text-[#3751FF] bg-[#DCE6FF] px-4 py-2" onClick={() => setUploadDocsuments(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Click here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;
