import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";
import { getCampaignAssignedData } from "../../../store/infCampaignAssigned/action";

function AssignedCampaign() {
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      influencer_id: 1,
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getCampaignAssignedData(data));
  }, []);
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Campaign" }, { title: "Assigned Campaign" }]} />
        <CampaignSearchBar />
      </div>
      <CampaignTable />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default AssignedCampaign;
