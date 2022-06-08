import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";
import { getCampaignPoolData } from "../../../store/InfCampaignPool/action";
// import { getCampaignPoolData } from "../../../store/InfCampaignPool/action";

function CampaignPool() {
  const loggedInUserData = useSelector((state) => state?.login?.data[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      category: loggedInUserData?.category,
      influencer_id: loggedInUserData?.id,
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getCampaignPoolData(data));
  }, []);

  const infCampaignPool = useSelector((state) => state?.infCampaignPool?.results);
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Campaign" }, { title: "CampaignPool" }]} />
        <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
      </div>
      <CampaignTable data={infCampaignPool} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default CampaignPool;
