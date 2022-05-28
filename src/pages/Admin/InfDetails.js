import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

function InfDetails({ route }) {
  return (
    <>
      <div className="flex gap-4 px-4 w-[100%] justify-center items-center h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "influencer" }, { title: route }, { title: "0001" }]} />
      </div>
      <div className="flex flex-col boxShadow gap-6 ml-10 pt-4 relative bg-white">
        <div className="mt-4 text-[16px] font-[600] w-[180px]">Influencers Profile</div>
        <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
          Lorem ipsum dolor sit amet, consectetur
        </div>

        <div className="flex">
          <div className="mt-1 flex w-230">
            <img className="w-360 rounded-md" src="/images/profile.png" alt="avtar" />
          </div>
          <div className="ml-4">
            <div className="text-[22px] font-[700] w-[180px]">Thomas Aldox</div>
            <div className="text-[16px] mt-1 font-[400] w-[180px]">@thomasdox</div>
            <div className="text-[16px] mt-4 font-[500] w-[180px]">Join on 24 March 2017</div>
            <div className="text-[16px] mt-4 font-[400] w-[180px]">test@domain.com</div>
            <div className="text-[16px] font-[400] w-[180px]">+91 987456123</div>
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
                <div className="mt-2 text-[18px] font-[600] w-[180px]">3.5%</div>
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Bid to Win Ratio</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex ">
          <div className="items-center box-shadow-button">
            <div className="flex border border-[#ffab2d] border-solid bg-[#ffab2d1a] justify-center ">
              <img className="w-45 h-[50px] m-2 rounded-md" src="/svgs/2-user.svg" alt="avtar" />
              <div className="ml-2 items-center">
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Total Active Campaign</div>
                <div className="mt-2 text-[18px] font-[600] w-[180px]">02</div>
              </div>
            </div>
          </div>
          <div className="ml-10 px-10 items-center box-shadow-button">
            <div className="flex justify-center ">
              <img className="w-45 h-[50px] m-2 rounded-md" src="/svgs/47-team.svg" alt="avtar" />
              <div className="ml-2 items-center">
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Completed Campaign</div>
                <div className="mt-2 text-[18px] font-[600] w-[180px]">05</div>
              </div>
            </div>
          </div>
          <div className="ml-10 px-10 items-center box-shadow-button">
            <div className="flex justify-center ">
              <img className="w-45 h-[50px] m-2 rounded-md" src="/svgs/10-todo (1).svg" alt="avtar" />
              <div className="ml-2 items-center">
                <div className="mt-1 text-[16px] font-[400] w-[180px]">Rejected Campaigning</div>
                <div className="mt-2 text-[18px] font-[600] w-[180px]">3.5%</div>
              </div>
            </div>
          </div>
        </div>

        {/* <CampaignTable /> */}
        <div className="mt-6 pr-4">
          <div className="flex gap-10 border-b-2 pb-2.5 text-[18px] font-[500]">
            <h1 className="w-[110px]">Campaign ID</h1>
            <h1 className="w-[220px]">Campaign Title</h1>
            <h1 className="w-[60px]">From</h1>
            <h1 className="w-[60px]">Duration</h1>
            <h1 className="w-[70px]">Category</h1>
            <h1 className="w-[60px]">Amount</h1>
            <h1 className="w-[130px]">Social Platform</h1>
          </div>
          <div>
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
              <div onClick={() => {}} className="text-[#3751FF] font-[500]  underline cursor-pointer ">
                View Details
              </div>
            </div>
          </div>
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
