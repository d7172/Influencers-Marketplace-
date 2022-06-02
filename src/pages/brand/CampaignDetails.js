import React, { useState } from 'react'
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs";
import CampaignBudget from "../../components/CampaignBudget";
import BrandCampaignDeliverables from "./BrandCampaignDeliverables"
import CampaignRequirement from "../../components/CampaignRequirement";
// import CampaignUploadDocuments from "../../components/CampaignUploadDocuments";
import MyDialog from "../../components/MyDialog";
import PalceBid from "../../components/PalceBid";
import ResonForRejction from "../../components/ResonForRejction";
import CloseBtn from '../../components/CloseBtn';

function CampaignDetails({ route }) {
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
    const [placeBid, setPlaceBid] = useState(false);
    const [rejectBid, setRejectBid] = useState(false);
    const [dialog, setDialog] = useState(false);

    const deliverableDetails = [
        {
            infName: "Steven Sloan",
            socialPlatform: "instagram",
            deliverables: ["Story", "Reels", "Swipe up Story / Link", "IGTV"],
            duration: ["1 Days", "1 Days", "1 Days", "1 Days"],
            amount: [500, 500, 500, 500],
            documentsLinks: ["link1", "link2", "link3", "link4"]
        },
        {
            infName: "Jhon deo",
            socialPlatform: "facebook",
            deliverables: ["Create Post", "Create Story"],
            duration: ["1 Days", "1 Days"],
            amount: [500, 500],
            documentsLinks: ["link1", "link2"]
        }]
        console.log(route);
    return (
        <div>
            <div className='w-full bg-[#F2F2F2] py-4 px-8'>
                <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: route }, { title: "#00001" }]} />
            </div>
            <div className="mt-6 px-6 pb-10">
                {/* <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
                     <CampaignUploadDocuments />
                    <PalceBid close={() => setPlaceBid(false)} />
                </MyDialog>
                <MyDialog isOpen={rejectBid} close={() => setRejectBid(false)} className="rounded-8">
                    <ResonForRejction close={() => setRejectBid(false)} />
                </MyDialog> */}
                <MyDialog isOpen={dialog} close={() => setDialog(false)} className="rounded-8">
                    <div className="w-[550px] flex justify-center items-center flex-col">
                        <CloseBtn onClick={() => setDialog(false)} className="absolute right-5 top-7" />
                        <h1 className="text-[28px] font-[500] mb-2 ">Payment Details for Influencers</h1>
                        <p className="w-390 text-gray-500 text-sm">
                            Log in to your account using email and password provided during registration.
                        </p>
                        <div className="text-left w-[380px] mt-14">
                            <label className="font-[400] text-[16px] ">Your Margin</label>
                            <input type="number"
                                className="block mt-1 px-3 w-full py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                id="exampleFormControlTextarea1"
                            />
                        </div>
                        <div className="text-left w-[380px] mt-14">
                            <label className="font-[400]  text-[16px] ">Amount Pending From Brand</label>
                            <input type="number"
                                className="block mt-1 px-3 w-full py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                id="exampleFormControlTextarea1"
                            />
                        </div>
                        <div className="text-left w-[380px] mt-14">
                            <label className="font-[400] text-[16px] ">Enter Custom Amount</label>
                            <input type="number"
                                className="block mt-1 px-3 w-full py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                id="exampleFormControlTextarea1"
                            />
                        </div>
                        <div className="text-left w-[380px] mt-14">
                            <label className="font-[400] text-[16px] ">Enter UTR Number</label>
                            <input type="number"
                                className="block mt-1 px-3 w-full py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                id="exampleFormControlTextarea1"
                            />
                        </div>
                        <button onClick={() => setDialog(false)} className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10">
                            Add
                        </button>
                    </div>
                </MyDialog>
                <div className="ml-4">
                    <div className='flex w-full justify-between'>
                        <div className="mt-6">
                            <h1 className="text-[32px] font-[600]">Campaign id</h1>
                            <p className="text-[18px] font-[500] text-[#969BA0]  ">#00001 </p>
                        </div>
                        {(route === "rejected-campaign") && <div>
                            <h1 className="text-start text-xl font-bold mt-6 mb-1">You Rejected this Campaign</h1>
                            <p className="w-390 inline-block text-gray-500 text-sm text-start text-[14px] font-[500] text-[#93939399] mb-4">
                                relying on meaningful content. Lorem ipsum
                            </p>
                        </div>}
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
                    { (route === "assigned-campaign") && <div className="my-6">
                        <h1 className="text-[26px] font-[600]">Quotation Phase</h1>
                        <p className=" text-[14px] mt-1 leading-[21px] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        <div className='flex' >
                            <div className='mr-6 flex flex-col px-2 gap-2 py-4 text-center'>
                                <p className='font-bold'>Quotion</p>
                                <p className='font-bold'>1.</p>
                                <button className='px-6 border-2 py-2 border-dashed border-[#969BA0] text-[#969BA0]'>&#8377;5553</button>
                                <p className='underline text-[#969BA0]'>Quotion rejected</p>
                                <p className='underline text-[#969BA0]' >Click here</p>
                            </div>
                            <div className='mr-6 flex flex-col px-2 gap-2 py-4 text-center'>
                                <p className='font-bold'>Quotion</p>
                                <p className='font-bold'>2.</p>
                                <button className='px-6 border-2 py-2 border-dashed border-[#969BA0] text-[#3751FF]'>&#8377;5553</button>
                                <p className='underline text-[#3751FF]' >Click here</p>
                            </div>
                            <div className='mr-6 flex flex-col px-2 gap-2 py-4 text-center'>
                                <p className='font-bold'>Quotion</p>
                                <p className='font-bold'>3.</p>
                                <button className='px-6 border-2 py-2 border-dashed border-[#969BA0] text-[#969BA0]'>&#8377;5553</button>
                                <p className='underline text-[#969BA0]' >Click here</p>
                            </div>
                        </div>
                    </div>}

                    {(route !== "active-campaign") && <CampaignBudget campaignDetails={campaignDetails} />}
                    <hr className="my-8" />
                    <BrandCampaignDeliverables route={route} setDialog={setDialog} deliverableDetails={deliverableDetails} />
                    <hr className="my-8" />
                    {(route === "rejected-campaign") && <div>
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
                    </div>}
                </div>
            </div>
        </div >
    )
}

export default CampaignDetails