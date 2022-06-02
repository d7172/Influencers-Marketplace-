import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";
// import { getCampaignPoolData } from "../../../store/InfCampaignPool/action";

function CampaignPool() {
<<<<<<< HEAD
  const dispatch = useDispatch();
=======
  // const dispatch = useDispatch();
>>>>>>> c8058c9d846bf2801371b3df93565735c242dade
  // useEffect(() => {
  //   const payload = {
  //     category: "fashion",
  //   };
  //   const data = new FormData();
  //   data.append("data", JSON.stringify(payload));
  //   dispatch(getCampaignPoolData(data));
  // }, []);
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
<<<<<<< HEAD
      {
        id: "00004",
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
      {
        id: "00004",
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
      {
        id: "00004",
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
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
=======
>>>>>>> c8058c9d846bf2801371b3df93565735c242dade
    ],
  };
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Campaign" }, { title: "CampaignPool" }]} />
        <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
      </div>
      <CampaignTable data={infCampaignPool} />
<<<<<<< HEAD
      <div className="absolute bottom-[-100px] right-0 w-full">
=======
      <div className="absolute bottom-[-100px] right-0">
>>>>>>> c8058c9d846bf2801371b3df93565735c242dade
        <Pagination />
      </div>
    </div>
  );
}

export default CampaignPool;
