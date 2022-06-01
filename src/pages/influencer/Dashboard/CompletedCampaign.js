import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
// import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import MyDialog from "../../../components/MyDialog";
// import PalceBid from "../../../components/PalceBid";

function CompletedCampaign() {
  const infCampaignPool = {
    results: [
      {
        id: "00001",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
      {
        id: "00002",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
      {
        id: "00003",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
    ],
  };
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Bids" }, { title: "Completed Campaign" }]} />
        <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
      </div>
      <CampaignTable data={infCampaignPool} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default CompletedCampaign;

function CampaignTable({ data }) {
  const infCampaignPool = data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-w-[1280px] overflow-hidden">
      {/* <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
        <PalceBid close={() => setPlaceBid(false)} />
      </MyDialog> */}
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign ID
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign Title
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    From
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Duration
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Amount
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Social Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {infCampaignPool.results.map((pool, i) => {
                  return (
                    <tr className="">
                      <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[150px] font-medium text-gray-900">
                        #{pool.id}
                      </td>
                      <td className="text-sm flex gap-4 items-center justify-center min-w-[240px] max-w-[240px] overflow-hidden text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />
                        {pool.title}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        2/5/2022
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {pool.project_duration_in_days} Day
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {pool.category}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        &#8377; 5,553
                      </td>
                      <td className="text-[16px] max-w-[150px] min-w-[170px] flex  relative text-gray-900  font-light pl-6 py-4 whitespace-nowrap">
                        <img
                          className="absolute z-40 w-[20px] "
                          src={`/svgs/${pool.social_platform[0]}.svg`}
                          alt="face"
                        />
                        {/* <img
                          className="absolute z-30 left-[34px] w-[20px] h-[20px]"
                          src="/svgs/instagram.svg"
                          alt="face"
                        />
                        <img
                          className="absolute z-20 left-[44px] w-[20px] h-[20px]"
                          src="/svgs/youtube.svg"
                          alt="face"
                        />
                        <img
                          className="absolute z-10 left-[55px] w-[20px] h-[20px]"
                          src="/svgs/linkedin.svg"
                          alt="face"
                        /> */}

                        {/* <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1> */}
                      </td>
                      <td
                        onClick={() => navigate(`/influencer/campaign/campaign-pool/${pool.id}`)}
                        className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer "
                      >
                        View Details
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
