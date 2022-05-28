import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";

function CompletedCampaign() {
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Bids" }, { title: "Completed Campaign" }]} />
        <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
      </div>
      <CampaignTable />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default CompletedCampaign;
