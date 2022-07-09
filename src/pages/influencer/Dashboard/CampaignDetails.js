import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackArrowBtn from "../../../components/BackArrowBtn";
// import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignBudget from "../../../components/CampaignBudget";
import CampaignDeliverables from "../../../components/CampaignDeliverables";
import CampaignRequirement from "../../../components/CampaignRequirement";
import CampaignUploadDocuments from "../../../components/CampaignUploadDocuments";
import CloseBtn from "../../../components/CloseBtn";
import MyDialog from "../../../components/MyDialog";
import PalceBid from "../../../components/PalceBid";
import ResonForRejction from "../../../components/ResonForRejction";

function CampaignDetails({ route }) {
  const { id } = useParams();
  const location = useLocation();
  const isInfCampPool = route === "campaign-pool";
  const isInfCompletedCamp = route === "completed-campaign";
  const isInfBids = route === "active-bids";
  const [placeBid, setPlaceBid] = useState(false);
  const [rejectBid, setRejectBid] = useState(false);
  const [reasonDialog, setReasonDialog] = useState(false);
  const infCampaignPools = useSelector((state) => state.infCampaignPool);
  const campDetails = infCampaignPools.results.filter((i) => i.id == id)[0];
  const infCampaignCompleted = useSelector((state) => state.infCampaignCompleted);
  const completedCampDetails = infCampaignCompleted.results.filter((i) => i.id == id)[0];
  // const infId = useSelector((state) => console.log(state));
  const infBids = useSelector((state) => state.infBids);
  const infBidDetails = infBids.results.filter((i) => i.campaign_details.id == id)[0];
  const navigate = useNavigate();
  console.log(infBidDetails);
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs
          options={[
            { title: "Campaign" },
            {
              title: isInfCampPool ? "Campiagn pool" : isInfCompletedCamp ? "Completed Campaign" : "Active Bids",
              onClick: () => {
                isInfBids ? navigate(`/influencer/bids`) : navigate(`/influencer/campaign/${route}`);
              },
            },
            {
              title: isInfCampPool
                ? campDetails?.id
                : isInfCompletedCamp
                ? completedCampDetails?.id
                : infBidDetails?.campaign_details?.id,
            },
          ]}
        />
      </div>
      <div className="mt-6 px-6 pb-10">
        <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
          {/* <CampaignUploadDocuments /> */}
          <PalceBid close={() => setPlaceBid(false)} campaignId={id} />
        </MyDialog>
        <MyDialog isOpen={rejectBid} close={() => setRejectBid(false)} className="rounded-8">
          <ResonForRejction close={() => setRejectBid(false)} />
        </MyDialog>
        <MyDialog isOpen={reasonDialog} close={() => setReasonDialog(false)} className="rounded-8">
          <div className="w-[550px] h-[550px] flex justify-center items-center flex-col">
            <CloseBtn
              onClick={() => {
                setReasonDialog(false);
              }}
              className="absolute right-5 top-7"
            />
            <h1 className="text-[28px] font-[500] mb-2 ">Reason for rejection</h1>
            <p className="w-390 text-gray-500 text-sm text-left">
              Log in to your account using email and password provided during registration.
            </p>
            <div className="text-left mt-14">
              <p className="block w-[390px] h-auto mt-1 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia est necessitatibus dignissimos
                aliquam optio accusamus dolorem hic amet labore, id, perferendis tenetur pariatur nostrum quidem
                expedita officia reprehenderit doloremque itaque ea. Ipsam ab saepe nostrum ratione suscipit amet
                laudantium libero culpa dignissimos nam, nesciunt aperiam cupiditate quos voluptatum, odit consequuntur
                commodi non quia natus.
              </p>
            </div>
            <button
              onClick={() => {
                setReasonDialog(false);
              }}
              className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10"
            >
              Close
            </button>
          </div>
        </MyDialog>
        {isInfCampPool ? (
          <>
            <div className="ml-4">
              <BackArrowBtn
                className=""
                onClick={() => {
                  navigate(location.pathname.slice(0, location.pathname.lastIndexOf("/")));
                }}
              />
              <div className="mt-6">
                <h1 className="text-[32px] font-[600]">Campaign id</h1>
                <p className="text-[18px] font-[500] text-[#969BA0]  ">{campDetails?.id} </p>
              </div>
              <div className="mt-6">
                <p className="text-[#969BA0] text-[16px]">Brand Description</p>
                <h1 className="text-[18px] font-[500] mt-1 ">{campDetails?.title}</h1>
                <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
                  {campDetails?.about_campaign}
                </p>
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
                <h4>Terms & Conditions</h4>
                <p className="max-w-[967px] text-[14px] text-[#969BA0] my-2">{campDetails?.terms_and_condition} </p>
              </div>
              <hr className="my-8" />
              <div>
                <button
                  onClick={() => setPlaceBid(true)}
                  className="bg-[#3751FF] rounded-full text-white w-[171px] h-[54px] mr-10"
                >
                  Place Bid
                </button>
                <button
                  onClick={() => navigate(`/influencer/campaign/campaign-pool`)}
                  className="text-[#3751FF] border-[#3751FF] rounded-full bg-white border-2 w-[171px] h-[54px]"
                >
                  Cancle
                </button>
              </div>
            </div>
          </>
        ) : isInfCompletedCamp ? (
          <>
            <div className="ml-4">
              <BackArrowBtn
                className=""
                onClick={() => {
                  navigate(location.pathname.slice(0, location.pathname.lastIndexOf("/")));
                }}
              />
              <div className="mt-6">
                <h1 className="text-[32px] font-[600]">Campaign id</h1>
                <p className="text-[18px] font-[500] text-[#969BA0]  ">{completedCampDetails?.id} </p>
              </div>
              <div className="mt-6">
                <p className="text-[#969BA0] text-[16px]">Brand Description</p>
                <h1 className="text-[18px] font-[500] mt-1 ">{completedCampDetails?.title}</h1>
                <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
                  {completedCampDetails?.about_campaign}
                </p>
              </div>
              <hr className="my-8" />
              <CampaignRequirement campaignDetails={completedCampDetails} />
              <hr className="my-8" />
              <CampaignBudget campaignDetails={completedCampDetails} />
              <hr className="my-8" />
              <CampaignDeliverables campaignDetails={completedCampDetails} />
              <hr className="my-8" />
              <div className="mt-6">
                <p className="text-[#969BA0] text-[16px]">Note from Brand</p>
                <h1 className="text-[18px] font-[500] mt-1 ">{completedCampDetails?.note_from_brand}</h1>
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
                <h4>Terms & Conditions</h4>
                <p className="max-w-[967px] text-[14px] text-[#969BA0] my-2">
                  {completedCampDetails?.terms_and_condition}{" "}
                </p>
              </div>
              <hr className="my-8" />
              {/* <div>
              <button
                onClick={() => alert("are you sure to re-activate this campaign")}
                className="bg-[#3751FF] rounded-full text-white w-[171px] h-[54px] mr-10"
              >
                Re-Activate
              </button>
              <button
                onClick={() => setRejectBid(true)}
                className="text-[#3751FF] border-[#3751FF] rounded-full bg-white border-2 w-[171px] h-[54px]"
              >
                Reject
              </button>
            </div> */}
            </div>
          </>
        ) : (
          <>
            <div className="ml-4">
              <BackArrowBtn
                className=""
                onClick={() => {
                  navigate(`/influencer/bids`);
                }}
              />
              <div className="flex justify-between">
                <div className="mt-6">
                  <h1 className="text-[32px] font-[600]">Campaign id</h1>
                  <p className="text-[18px] font-[500] text-[#969BA0]  ">{infBidDetails.campaign_details.id}</p>
                </div>
                <div className="mt-6 flex items-start border border-[#F4F5F9] rounded px-6 py-2">
                  <div className="mr-4 mt-2">
                    <span className="inline-block">
                      <img src="/svgs/calendar.svg" width="25px" height="25px" />
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-start text-xl font-bold "> You Bid No : 1</h1>
                    {infBidDetails.campaign_details.status !== 1 ? (
                      <>
                        {" "}
                        <p className="text-sm text-[#93939399]">(Bid Rejected)</p>
                        <p className=" text-start font-bold text-[#FF1800] line-through">
                          &#8377;{infBidDetails.influencer_bid_amount}
                        </p>
                        <p
                          onClick={() => setReasonDialog(true)}
                          className="text-sm text-start underline text-[14px] font-[500] text-[#3751FF] cursor-pointer mb-4"
                        >
                          View reason
                        </p>
                      </>
                    ) : (
                      <p className=" text-start font-bold text-[#3751FF]">
                        &#8377;{infBidDetails.influencer_bid_amount}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-[#969BA0] text-[16px]">Brand Description</p>
                <h1 className="text-[24px] font-bold mt-1 capitalize">{infBidDetails.campaign_details.title}</h1>
                <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
                  {infBidDetails.campaign_details.about_campaign}
                </p>
              </div>
              <hr className="my-8" />
              <CampaignRequirement campaignDetails={infBidDetails.campaign_details} />
              <hr className="my-8" />
              <CampaignBudget campaignDetails={infBidDetails.campaign_details} />
              <hr className="my-8" />
              <CampaignDeliverables campaignDetails={infBidDetails.campaign_details} />
              <hr className="my-8" />
              <div className="mt-6">
                <p className="text-[#969BA0] text-[16px]">Note from Brand</p>
                <h1 className="text-[18px] font-[500] mt-1 ">{infBidDetails.campaign_details?.note_from_brand}</h1>
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
                <p className="max-w-[967px] text-[14px] text-[#969BA0] my-2">
                  {infBidDetails.campaign_details?.terms_and_condition}{" "}
                </p>
              </div>
              {infBidDetails.campaign_details.status !== 1 && (
                <div>
                  <hr className="my-8" />
                  <button
                    onClick={() => setPlaceBid(true)}
                    className="bg-[#3751FF] rounded-full text-white w-[171px] h-[54px] mr-10"
                  >
                    Re-Bid
                  </button>
                  <button
                    onClick={() => navigate(`/influencer/bids`)}
                    className="text-[#3751FF] border-[#3751FF] rounded-full bg-white border-2 w-[171px] h-[54px]"
                  >
                    Cancle
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CampaignDetails;
