import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";
import { getCampaignPoolData } from "../../../store/InfCampaignPool/action";

function CampaignPool() {
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      category: "fashion",
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getCampaignPoolData(data));
  }, []);
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs />
        <CampaignSearchBar />
      </div>
      <CampaignTable />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default CampaignPool;
