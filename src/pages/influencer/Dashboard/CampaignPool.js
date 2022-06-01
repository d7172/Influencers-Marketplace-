import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";
import { getCampaignPoolData } from "../../../store/InfCampaignPool/action";

function CampaignPool() {
  const dispatch = useDispatch();
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
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00002",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00003",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"]
      }
    ]
  }
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Campaign" }, { title: "CampaignPool" }]}/>
        <CampaignSearchBar />
      </div>
      <CampaignTable data={infCampaignPool}/>
      <div className="absolute bottom-[-100px] right-0 w-full">
        <Pagination />
      </div>
    </div>
  );
}

export default CampaignPool;
