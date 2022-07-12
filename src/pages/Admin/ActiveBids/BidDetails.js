import React, { useState } from "react";
import MyDialog from "../../../components/MyDialog";
// import CloseBtn from "../../../components/CloseBtn";
import ResonForRejction from "../../../components/ResonForRejction";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CampaignRequirement from "../../../components/CampaignRequirement";
import CampaignBudget from "../../../components/CampaignBudget";
import CampaignDeliverables from "../../../components/CampaignDeliverables";
import BackArrowBtn from "../../../components/BackArrowBtn";
import { AdminAssignCampaignToBrand } from "../../../store/Admin/ActiveBids/action";

// import { useNavigate } from "react-router-dom";
function BidDetails({ inf_id }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const active = "#3751FF";
  const inactive = "#969BA0";

  const [dialog, setDialog] = useState(false);
  const [bidTab, setBidTab] = useState(1);
  const dispatch = useDispatch();
  const AdmActiveBid = useSelector((state) => state.AdminActiveBids);
  const AdmActiveBidDetails = AdmActiveBid.results.filter((i) => i.campaign_details.id == id)[0];
  // const [reason, setReason] = useState("");
  const handleSubmit = (amount, revise_amount) => {
    const data = {
      campaign_id: JSON.parse(id),
      bid_id: AdmActiveBidDetails?.campaign_details?.influencer_details[0]?.bids[0]?.id,
      bid_amount: amount,
      margin_amount: revise_amount,
      description: "testing",
    };
    dispatch(AdminAssignCampaignToBrand(data, navigate));
  };
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs
          options={[
            {
              title: "Dashboard",
              onClick: () => {
                navigate(`/admin/dashboard`);
              },
            },
            {
              title: "Active Bids",
              onClick: () => {
                navigate(`/admin/active-bids`);
              },
            },
            {
              title:
                AdmActiveBidDetails?.campaign_details?.influencer_details[0]?.first_name +
                " " +
                AdmActiveBidDetails.campaign_details?.influencer_details[0].last_name,
            },
            { title: AdmActiveBidDetails?.campaign_details?.id },
          ]}
        />
      </div>
      <div className="ml-10">
        <div className="px-8 py-5">
          <MyDialog isOpen={dialog} close={() => setDialog(false)} className="rounded-8">
            <ResonForRejction close={() => setDialog(false)} />
          </MyDialog>
          <BackArrowBtn
            className=""
            onClick={() => {
              navigate(location.pathname.slice(0, location.pathname.lastIndexOf("/")));
            }}
          />
          <h4 className="text-start text-2xl font-bold mt-6 mb-2">Campaign Id</h4>
          <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">#{id}</p>

          {AdmActiveBidDetails?.campaign_details.influencer_details[0]?.bid_details?.map((data) => (
            <div className="flex mt-8 gap-20" key={data.id}>
              <div
                className={`w-[258px] h-[184px] top-[393px] left-[440px] flex flex-col items-center justify-center cursor-pointer pr-4 border-solid border-2 border-[${
                  bidTab === data.id ? active : inactive
                }]`}
                onClick={() => setBidTab(data.id)}
              >
                <h4 className="text-[18px] font-[500] text-[#000000] my-2">Bid Number :{data.id}</h4>
                <div
                  className={`text-[${bidTab === data.id ? active : inactive}] border-[${
                    bidTab === data.id ? active : inactive
                  }] font-bold border-2 border-dashed w-[165px] h-[42px] top-[473px] left-[485px] flex items-center justify-center`}
                >
                  <h4>&#8377;{data.influencer_bid_amount}</h4>
                </div>
                <h4 className={`text-[${bidTab === data.id ? active : inactive}] underline mt-4 cursor-pointer`}>
                  Click here
                </h4>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <h4 className="text-[#00000099] text-[16px] font-bold ">Brand Descripation</h4>
            <h4 className="mb-2 text-start text-xl font-bold ">Cardboard paper style</h4>
            <p className=" w-[77%] my-4 text-[14px] font-[500] text-[#93939399] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut publishing
              and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
              document or a typeface without relying on meaningful content. Lorem ipsum
            </p>
          </div>
          <CampaignRequirement campaignDetails={AdmActiveBidDetails.campaign_details} />
          <div className="w-full my-8 h-[2px] bg-[#EEEEEE]"></div>
          <CampaignBudget campaignDetails={AdmActiveBidDetails.campaign_details} />
          <div className="w-full my-8 h-[2px] bg-[#EEEEEE]"></div>
          <CampaignDeliverables campaignDetails={AdmActiveBidDetails.campaign_details} />
          <div className="w-full my-8 h-[2px] bg-[#EEEEEE]"></div>
          <div>
            <div className="mb-8 w-[77%]">
              <h4 className="text-[#00000099] font-[500]">Note from Brand</h4>
              <p classname="text-sm font-[400] text-[#93939399]">
                {AdmActiveBidDetails.campaign_details?.note_from_brand}
              </p>
            </div>
            <div className="w-full my-8 h-[2px] bg-[#EEEEEE]"></div>
            <div className="mb-8 w-[77%]">
              <h4 className="text-[#00000099] font-[500]">Note from Admin</h4>
              {/* <p className="text-xl font-[600]">Jhon Deo</p> */}
              <p classname="text-sm font-[400] text-[#93939399]">
                {AdmActiveBidDetails.campaign_details?.note_from_admin}
              </p>
            </div>
            <div className="w-full my-8 h-[2px] bg-[#EEEEEE]"></div>
            <div className="mb-8 w-[77%]">
              <h4 className="text-xl font-[600] mb-4">Terms & Conditions</h4>
              <p classname="text-sm font-[400] text-[#93939399]">
                {AdmActiveBidDetails.campaign_details?.terms_and_condition}{" "}
              </p>
            </div>
          </div>
          <div className="mt-14 flex ">
            <button
              type="button"
              className="rounded-[50px] bg-primary text-white px-4 py-2"
              onClick={() =>
                handleSubmit(
                  AdmActiveBidDetails.campaign_details?.amount,
                  AdmActiveBidDetails.campaign_details?.revise_amount
                )
              }
            >
              Move To quotation
            </button>
            <button
              type="button"
              onClick={() => setDialog(true)}
              className="rounded-[50px] text-[#bcd6ef] px-4 py-2 underline"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BidDetails;
