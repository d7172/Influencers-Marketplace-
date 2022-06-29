import React, { useState } from 'react'
import { useSelector } from "react-redux";
import BackArrowBtn from "../../../components/BackArrowBtn";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignBudget from "../../../components/CampaignBudget";
import BrandCampaignDeliverables from "../../brand/BrandCampaignDeliverables"
import CampaignRequirement from "../../../components/CampaignRequirement";
import MyDialog from "../../../components/MyDialog";
import CloseBtn from '../../../components/CloseBtn';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function CampaignDetails({ route }) {
    const location = useLocation();
    const { id } = useParams();

    const isAssigned = location.pathname.includes("assigned-campaign");
    const isActive = location.pathname.includes("active-campaign");
    const isRejected = location.pathname.includes("rejected-campaign");

    const campaignDetails = useSelector((state) =>
        isAssigned ? state?.AdminAssigned?.results?.filter((i) => i?.campaigndetails?.id == id)[0]
            : isActive ? state?.AdminActiveCampaign?.results?.filter((i) => i.id == id)[0]
                : state?.AdminRejectedCampaign?.results?.filter((i) => i.id == id)[0]
    );
    // const AdmActiveCampDetails = AdmActiveCamp.results.filter((i) => i.id == id)[0];

    // console.log(activeCampaignDetails, 'activeCampaignDetails');
    const [documentPhaseDialog, setDocumentPhaseDialog] = useState(false);
    const [sendBtn, setSentBtn] = useState(true);
    const [reasonDialog, setReasonDialog] = useState(false);
    const [paymentDialog, setPaymentDialog] = useState(false);
    const [docReqDialog, setDocReqDialog] = useState(false);

    const navigate = useNavigate();
    const social_media_deliverables = [
        {
            infName: "Steven Sloan",
            platform: "instagram",
            deliverables: ["Story", "Reels", "Swipe up Story / Link", "IGTV"],
            duration_in_day: ["1 Days", "1 Days", "1 Days", "1 Days"],
            engagement_rate: 3,
            amount: [500, 500, 500, 500],
            documentsLinks: ["link", "link", "link", "link"]
        },
        {
            infName: "Jhon Deo",
            platform: "facebook",
            deliverables: ["Story", "Reels", "Swipe up Story / Link", "IGTV"],
            duration_in_day: ["1 Days", "1 Days", "1 Days", "1 Days"],
            engagement_rate: 2.5,
            amount: [500, 500, 500, 500],
            documentsLinks: ["link", "link", "link", "link"]
        }
    ]
    // console.log(location.pathname.slice(0, location.pathname.lastIndexOf("/")));
    return (
        <div>
            <div className='w-full bg-[#F2F2F2] py-4 px-8'>
                <Breadcrumbs options={[{ title: "Campaign" }, { title: isAssigned ? "Assigned Campaign" : isActive ? "Active Campaign" : "Rejected Campaign", onClick: () => { navigate(location.pathname.slice(0, location.pathname.lastIndexOf("/"))) } }, { title: id }]} />
            </div>
            <div className="mt-6 px-6 pb-10">
                <MyDialog isOpen={documentPhaseDialog} close={() => setDocumentPhaseDialog(false)} className="rounded-8">
                    <div className="w-[550px] h-auto flex justify-center items-center flex-col">
                        <CloseBtn onClick={() => { setDocumentPhaseDialog(false) }} className="absolute right-5 top-7" />
                        <h1 className="text-[28px] font-[500] mb-2 ">Document Phase</h1>
                        <p className="w-390 text-gray-500 text-sm text-left mb-2">
                            Log in to your account using email and password provided during registration.
                        </p>
                        <div>
                            <img src="/svgs/what-to-post-on-instagram 1.svg" alt="" className='w-[200px]' />
                        </div>
                        <div className='flex items-center justify-center my-4 w-full'>
                            <input type="checkbox" name="brandCheck" id="brandCheck" onChange={() => setSentBtn(!sendBtn)} className='mr-4' />
                            <div className='text-left mr-4'>
                                <p className='text-[#00000099]' >Brand name</p>
                                <label htmlFor='brandCheck' className='cursor-pointer' >BoAt</label>
                            </div>
                            <div className='text-left'>
                                <p className='text-[#00000099]' >Campaign Id</p>
                                <p>000001</p>
                            </div>
                        </div>
                        <div className='text-left w-full px-16'>
                            <label className="font-[400] text-[16px] text-[#00000099] ">Enter your Description</label>
                            <textarea
                                className="block w-full h-auto mt-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                            />
                        </div>
                        <div className='flex justify-center items-center'>
                            <button disabled={sendBtn} className="bg-[#3751FF] my-4 rounded-full disabled:bg-[#8a9aff] text-white w-full px-16 h-[54px] mr-10" onClick={() => { setDocumentPhaseDialog(false); setSentBtn(true) }}>Send</button>
                            <button className="border rounded-full text-[#455880] border-[#3751FF] px-16 w-full h-[54px] mr-10" onClick={() => { setDocumentPhaseDialog(false); setSentBtn(true) }}>Reject</button>
                        </div>
                    </div>
                </MyDialog>
                <MyDialog isOpen={reasonDialog} close={() => setReasonDialog(false)} className="rounded-8">
                    <div className="w-[550px] h-[550px] flex justify-center items-center flex-col">
                        <CloseBtn onClick={() => { setReasonDialog(false) }} className="absolute right-5 top-7" />
                        <h1 className="text-[28px] font-[500] mb-2 ">Reason for rejection</h1>
                        <p className="w-390 text-gray-500 text-sm text-left">
                            Log in to your account using email and password provided during registration.
                        </p>
                        <div className="text-left mt-14">
                            <p className="block w-[390px] h-auto mt-1 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia est necessitatibus dignissimos aliquam optio accusamus dolorem hic amet labore, id, perferendis tenetur pariatur nostrum quidem expedita officia reprehenderit doloremque itaque ea. Ipsam ab saepe nostrum ratione suscipit amet laudantium libero culpa dignissimos nam, nesciunt aperiam cupiditate quos voluptatum, odit consequuntur commodi non quia natus.</p>
                        </div>
                        <button onClick={() => { setReasonDialog(false) }} className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10">
                            Close
                        </button>
                    </div>
                </MyDialog>
                <MyDialog isOpen={paymentDialog} close={() => setPaymentDialog(false)} className="rounded-8">
                    <div className="w-[550px] flex justify-center items-center flex-col">
                        <CloseBtn onClick={() => setPaymentDialog(false)} className="absolute right-5 top-7" />
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
                        <button onClick={() => setPaymentDialog(false)} className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10">
                            Add
                        </button>
                    </div>
                </MyDialog>
                <MyDialog isOpen={docReqDialog} close={() => setDocReqDialog(false)} className="rounded-8">
                    <div className="w-[550px] h-[550px] flex justify-center items-center flex-col">
                        <CloseBtn onClick={() => setDocReqDialog(false)} className="absolute right-5 top-7" />
                        <h1 className="text-[28px] font-[500] mb-2 ">Request to upload Document</h1>
                        <p className="w-390 text-gray-500 text-sm">
                            Log in to your account using email and password provided during registration.
                        </p>
                        <div className="text-left mt-14">
                            <label className="font-[400] text-[16px] ">Enter your Description</label>
                            <textarea
                                className="block w-[390px] h-[200px] mt-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                            />
                        </div>
                        <button onClick={() => setDocReqDialog(false)} className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10">
                            Send
                        </button>
                    </div>
                </MyDialog>
                <div className="ml-4">
                    <BackArrowBtn onClick={() => { navigate(location.pathname.slice(0, location.pathname.lastIndexOf("/"))) }} />
                    <div className='flex w-full justify-between'>
                        <div className="mt-6">
                            <h1 className="text-[32px] font-[600]">Campaign id</h1>
                            <p className="text-[18px] font-[500] text-[#969BA0]  "> {campaignDetails?.id} </p>
                        </div>
                        {isRejected && <div>
                            <h1 className="text-start text-xl font-bold mt-6 mb-1">Influencer Rejected this Campaign</h1>
                            <p className="w-390 inline-block text-start text-[14px] font-[500] text-[#93939399] mb-4">
                                relying on meaningful content. Lorem ipsum
                            </p>
                            <p onClick={() => setReasonDialog(true)}
                                className="text-sm text-start underline text-[14px] font-[500] text-[#3751FF] cursor-pointer mb-4">
                                View reason
                            </p>
                        </div>}
                        {(isActive || isAssigned) &&
                            <div className='flex'>
                                <div className='flex flex-col mr-8'>
                                    <h1 className="text-start text-[18px] font-bold mt-6 mb-1">Assigned Influencer</h1>
                                    <p className="inline-block text-start font-[500] mb-4">
                                        Steven Sloan
                                    </p>
                                    <p className="inline-block text-start font-[500] mb-4">
                                        Jhon Deo
                                    </p>
                                </div>
                                {isActive && <div className='flex flex-col mr-8'>
                                    <h1 className="text-start text-[18px] font-bold mt-6 mb-1">Days Remaining</h1>
                                    <p className="inline-block text-start font-[500] mb-4">
                                        03
                                    </p>
                                </div>}
                            </div>}
                    </div>
                    <div className="mt-6">
                        <p className="text-[#969BA0] font-[600] text-[16px]">Brand Description</p>
                        <h1 className="text-[18px] font-[600]  mt-1 ">{campaignDetails?.brand_name}</h1>
                        <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut publishing and
                            graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                            or a typeface without relying on meaningful content. Lorem ipsum
                        </p>
                    </div>
                    <hr className="my-8" />
                    <CampaignRequirement campaignDetails={campaignDetails} />
                    <hr className="my-8" />
                    {isAssigned &&
                        <div className="mt-6">
                            <h1 className="text-[26px] font-[600]">Quotation Phase</h1>
                            <p className=" text-[14px] mt-1 leading-[21px] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                            <div className='flex' >
                                <div className='mr-6 text-center'>
                                    <p className='font-bold'>Quotion</p>
                                    <p className='font-bold'>1.</p>
                                    <button className='px-6 my-4 py-2 border-2 border-dashed border-[#969BA0] text-[#969BA0]'>&#8377;5553</button>
                                    <p className='underline text-[#969BA0]'>Quotion rejected</p>
                                    <p className='underline text-[#969BA0]' >Click here</p>
                                </div>
                                <div className='mr-6 text-center'>
                                    <p className='font-bold'>Quotion</p>
                                    <p className='font-bold'>2.</p>
                                    <button className='px-6 my-4 py-2 border-2 border-dashed border-[#969BA0] text-[#3751FF]'>&#8377;5553</button>
                                    <p className='underline text-[#3751FF]' >Click here</p>
                                </div>
                                <div className='mr-6 text-center'>
                                    <p className='font-bold'>Quotion</p>
                                    <p className='font-bold'>3.</p>
                                    <button className='px-6 my-4 py-2 border-2 border-dashed border-[#969BA0] text-[#969BA0]'>&#8377;5553</button>
                                    <p className='underline text-[#969BA0]' >Click here</p>
                                </div>
                            </div>
                        </div>
                    }
                    {isActive &&
                        <div className="my-6">
                            <h1 className="text-[20px] font-[600]">Document Phase</h1>
                            <p className=" mt-1 leading-[21px] text-[#969BA0]">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                            <div className='flex mt-6' >
                                <div className='mr-8 text-center'>
                                    <p className='font-[600]'>Document</p>
                                    <p className='font-[600]'>1.</p>
                                    <p className='underline text-[#969BA0]'>Document rejected</p>
                                    <p className='underline text-[#969BA0] cursor-pointer' >Click here</p>
                                </div>
                                <div className='mr-8 text-center'>
                                    <p className='font-[600]'>Document</p>
                                    <p className='font-[600]'>2.</p>
                                    <p className='underline text-[#3751FF] cursor-pointer' >Click here</p>
                                </div>
                                <div className='mr-8 text-center'>
                                    <p className='font-[600]'>Document</p>
                                    <p className='font-[600]'>3.</p>
                                    <p className='underline text-[#969BA0] cursor-pointer' >Click here</p>
                                </div>
                            </div>
                        </div>
                    }
                    {(isActive || isRejected) &&
                        <CampaignBudget campaignDetails={campaignDetails} />
                    }
                    <hr className="my-8" />
                    <BrandCampaignDeliverables route={route} setDocReqDialog={setDocReqDialog} setDocumentPhaseDialog={setDocumentPhaseDialog} setPaymentDialog={setPaymentDialog} deliverableDetails={campaignDetails?.social_media_deliverables} />
                    <hr className="my-8" />
                    {(isActive || isRejected) && <div>
                        <div className="mt-6">
                            <p className="text-[#969BA0] text-[16px]">Note from Admin</p>
                            <p className="max-w-[967px] text-[14px] mt-1 leading-[21px] text-[#969BA0]">
                                {campaignDetails?.note_from_admin}
                            </p>
                        </div>
                        <hr className="my-8" />
                        <div>
                            <h1>Terms & Conditions</h1>
                            <p className="max-w-[967px] text-[14px] text-[#969BA0] my-2">{campaignDetails?.terms_and_condition} </p>
                        </div>
                        <hr className="my-8" />
                    </div>}
                    {isRejected &&
                        <div>
                            <div className="mb-8 w-[77%]">
                                <h1 className="text-xl font-[600] mb-4">Reason for rejection</h1>
                                <p className="block w-full h-auto mt-1 px-3 py-1.5 text-[#93939399] text-base font-normal border border-solid border-gray-300 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia est necessitatibus dignissimos aliquam optio accusamus dolorem hic amet labore, id, perferendis tenetur pariatur nostrum quidem expedita officia reprehenderit doloremque itaque ea. Ipsam ab saepe nostrum ratione suscipit amet laudantium libero culpa dignissimos nam, nesciunt aperiam cupiditate quos voluptatum, odit consequuntur commodi non quia natus.</p>
                            </div>
                            <div className="mt-14 flex ">
                                <button
                                    type="button"
                                    className="rounded-[50px] bg-primary text-white px-4 py-2"
                                >
                                    Reassigned to Influencers
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate(`/admin/campaign/rejected-campaign`)}
                                    className="rounded-[50px] text-[#969BA0] px-4 py-2 underline"
                                >
                                    Cancle
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default CampaignDetails