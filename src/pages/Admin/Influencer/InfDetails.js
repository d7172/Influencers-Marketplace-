import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";

function InfDetails({ route }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const activeCampaign = [
    {
      id: "00001",
      title: "Enjoy the video and music",
      from_date: "2/5/21",
      number_of_days: "1",
      category: "Fashion, DIY",
      amount: "500",
      social_platform: ["facebook", "instagram"],
    },
    {
      id: "00001",
      title: "Enjoy the video and music",
      from_date: "2/5/21",
      number_of_days: "1",
      category: "Fashion, DIY",
      amount: "5050",
      social_platform: ["facebook"],
    },
  ];
  const completedCampaign = [
    {
      id: "00002",
      title: "Enjoy the video and music",
      from_date: "2/5/21",
      number_of_days: "1",
      category: "Fashion, DIY",
      amount: "500",
      social_platform: ["facebook", "instagram"],
    },
  ];
  const rejectedCampaign = [
    {
      id: "00003",
      title: "Enjoy the video and music",
      from_date: "2/5/21",
      number_of_days: "1",
      category: "Fashion, DIY",
      amount: "500",
      social_platform: ["facebook", "instagram"],
    },
    {
      id: "00003",
      title: "Enjoy the video and music",
      from_date: "2/5/21",
      number_of_days: "1",
      category: "Fashion, DIY",
      amount: "5050",
      social_platform: ["facebook"],
    },
    {
      id: "00003",
      title: "Enjoy the video and music",
      from_date: "2/5/21",
      number_of_days: "1",
      category: "Fashion, DIY",
      amount: "5050",
      social_platform: ["facebook"],
    },
  ];
  const [campaignTab, setCampaignTab] = useState(1);
  const activeTabStyle = "border-[#ffab2d]  bg-[#ffab2d1a]";
  const [tableData, setTableData] = useState(activeCampaign);

  const infActiveUserDetails = useSelector((state) =>
    state?.infActiveUser?.results?.filter((r) => r.influencerDetail.id == id)
  )[0];
  console.log("infActiveUserDetails", infActiveUserDetails);

  const brandActiveUserDetails = useSelector((state) =>
    state?.BrandActiveUser?.results?.filter((r) => r.id == id)[0]
  );
  console.log("brandActiveUserDetails", brandActiveUserDetails);
  // const userDetails = useSelector((state) => state?.infActiveUser);
  const infDetails = infActiveUserDetails?.influencerDetail;
  // const brandDetails = brandActiveUserDetails?.brandDetail;
  const date = new Date(infDetails.created_at);
  return (
    <>
      <div className="flex gap-4 px-4 w-[100%] justify-center items-center h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs
          options={[
            { title: "influencer" },
            {
              title: route,
              onClick: () => {
                navigate(`/admin/influencer/${route}`);
              },
            },
            { title: infDetails.id},
          ]}
        />
      </div>
      <div className="flex flex-col boxShadow px-4 relative ml-4">
        <div className="mt-4 text-[16px] font-[600] w-[180px]">Influencers Profile</div>
        <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
          Lorem ipsum dolor sit amet, consectetur
        </div>

        <div className="flex">
          <div className="mt-1 flex w-230">
            <img className="w-360 rounded-md" src={infDetails.profile_pic} alt="avtar" />
          </div>
          <div className="ml-4">
            <div className="text-[22px] font-[700] w-[180px] capitalize">
              {infDetails.first_name + " " + infDetails.last_name}
            </div>
            <div className="text-[16px] mt-1 font-[400] w-[180px]">@{infDetails.user_name}</div>
            <div className="text-[16px] mt-4 font-[500] w-[180px]">
              Join on {date.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
            </div>
            <div className="text-[16px] mt-4 font-[400] w-[180px]">{infDetails.email}</div>
            <div className="text-[16px] font-[400] w-[180px]">{infDetails.contact_number}</div>
          </div>
          <div className="ml-10 items-center">
            <div className="flex border border-[#ffab2d] border-solid bg-[#ffab2d1a] justify-center ">
              <img className="w-45 h-[50px] m-2 rounded-md" src="/svgs/2-user.svg" alt="avtar" />
              <div className="ml-2 items-center">
                <div className="mt-2 text-[18px] font-[600] w-[180px]">5.23k</div>
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Earning Till Date</div>
              </div>
            </div>
          </div>
          <div className="ml-10 items-center">
            <div className="flex border border-[#DC3CCC] border-solid bg-[#dc3ccc1a] justify-center ">
              <img className="w-45 h-[50px] m-2 rounded-md" src="/svgs/10-todo.svg" alt="avtar" />
              <div className="ml-2 items-center">
                <div className="mt-2 text-[18px] font-[600] w-[180px]">3.50</div>
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Bid to Win Ratio</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex ">
          <div
            className="items-center  box-shadow-button cursor-pointer"
            onClick={() => {
              setCampaignTab(1);
              setTableData(activeCampaign);
            }}
          >
            <div className={`flex border border-solid ${campaignTab === 1 && activeTabStyle} justify-center`}>
              <img className="w-45 h-[50px] m-2 rounded-md" src="/svgs/2-user.svg" alt="avtar" />
              <div className="ml-2 items-center">
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Total Active Campaign</div>
                <div className="mt-2 text-[18px] font-[600] w-[180px]">02</div>
              </div>
            </div>
          </div>
          <div
            className="ml-10 items-center  box-shadow-button cursor-pointer"
            onClick={() => {
              setCampaignTab(2);
              setTableData(completedCampaign);
            }}
          >
            <div className={`flex border border-solid ${campaignTab === 2 && activeTabStyle}  justify-center `}>
              <img className="w-45 h-[50px] m-2 rounded-md" src="/svgs/47-team.svg" alt="avtar" />
              <div className="ml-2 items-center">
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Completed Campaign</div>
                <div className="mt-2 text-[18px] font-[600] w-[180px]">05</div>
              </div>
            </div>
          </div>
          <div
            className="ml-10 items-center  box-shadow-button cursor-pointer"
            onClick={() => {
              setCampaignTab(3);
              setTableData(rejectedCampaign);
            }}
          >
            <div className={`flex border border-solid ${campaignTab === 3 && activeTabStyle}  justify-center `}>
              <img className="w-45 h-[50px] m-2 rounded-md" src="/svgs/10-todo (1).svg" alt="avtar" />
              <div className="ml-2 items-center">
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Rejected Campaigning</div>
                <div className="mt-2 text-[18px] font-[600] w-[180px]">35</div>
              </div>
            </div>
          </div>
        </div>

        {/* <CampaignTable /> */}
        <div className="mt-6 pr-4">
          <div className="flex gap-10 border-b-2 pb-2.5 text-[12px] font-[500]">
            <h5 className="w-[110px]">Campaign ID</h5>
            <h5 className="w-[220px]">Campaign Title</h5>
            <h5 className="w-[60px]">From</h5>
            <h5 className="w-[60px]">Duration</h5>
            <h5 className="w-[70px]">Category</h5>
            <h5 className="w-[60px]">Amount</h5>
            <h5 className="w-[130px]">Social Platform</h5>
          </div>
          {tableData.map((data, i) => (
            <div className="flex gap-10 px-2 py-4 text-sm text-gray-900 whitespace-nowrap items-start">
              <div className=" w-[95px] font-medium">{data.id}</div>
              <div className="flex gap-4 items-center justify-center w-[220px] overflow-hidden">
                <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
                {data.title}
              </div>
              <div className=" w-[60px] font-medium">{data.from_date}</div>
              <div className=" w-[60px] font-medium">{data.number_of_days}</div>
              <div className=" w-[70px] font-medium">{data.category}</div>
              <div className="w-[60px] ml-1.5">&#8377;{data.amount}</div>
              <div className="relative w-[130px]  ">
                <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
                <img className="absolute z-30 left-[14px] w-[20px] h-[20px]" src="/svgs/instagram.svg" alt="face" />
                <img className="absolute z-20 left-[24px] w-[20px] h-[20px]" src="/svgs/youtube.svg" alt="face" />
                <img className="absolute z-10 left-[35px] w-[20px] h-[20px]" src="/svgs/linkedin.svg" alt="face" />
                <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
              </div>
              <div onClick={() => {}} className="text-[#3751FF] font-[500]  underline cursor-pointer ">
                View Details
              </div>
            </div>
          ))}
          {/* <div>
            <div className="flex gap-10 px-2 py-4 text-sm text-gray-900 whitespace-nowrap items-start">
              <div className=" w-[95px] font-medium">#00001</div>
              <div className="flex gap-4 items-center justify-center w-[220px] overflow-hidden">
                <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
                Enjoy the video and music
              </div>
              <div className=" w-[60px] font-medium">2/5/2020</div>
              <div className=" w-[60px] font-medium">1 Day</div>
              <div className=" w-[70px] font-medium">Fashion, DIY</div>
              <div className="w-[60px] ml-1.5">&#8377; 5,553</div>
              <div className="relative w-[130px]  ">
                <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
                <img className="absolute z-30 left-[14px] w-[20px] h-[20px]" src="/svgs/instagram.svg" alt="face" />
                <img className="absolute z-20 left-[24px] w-[20px] h-[20px]" src="/svgs/youtube.svg" alt="face" />
                <img className="absolute z-10 left-[35px] w-[20px] h-[20px]" src="/svgs/linkedin.svg" alt="face" />
                <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
              </div>
              <div onClick={() => { }} className="text-[#3751FF] font-[500]  underline cursor-pointer ">
                View Details
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default InfDetails;

export const imageSvg = (
  <svg
    className="mx-auto h-12 w-12 text-gray-400"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
