import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminCampaignTable from "../../../components/AdminCampaignTable";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import { getActiveCampaignData } from "../../../store/Admin/Campaign/ActiveCampaign/action";

const AdmActiveCampaign = ({ route }) => {
  const [activePage, setActivePage] = useState(1);
  let tableData = [];

  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getActiveCampaignData(payload, activePage));
  }, [activePage]);

  const AdminActiveCampaign = useSelector((state) => state?.AdminActiveCampaign);
  tableData = AdminActiveCampaign?.results;
  console.log(tableData);

  const [query, setQuery] = useState("");

  return (
    <div className="pt-4 relative">
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: route }]} />
      </div>
      <div className="flex items-center py-4 px-8">
        <CampaignSearchBar placeHolder={"Search here"}  setQuery={setQuery}/>
      </div>
      <div className="flex items-center py-4 px-8">
        <AdminCampaignTable tableData={tableData} mainRoute={"campaign"} route={route} query={query} />
      </div>
      {tableData?.length ? (<div className="w-full mt-2 px-4">
        <Pagination link={AdminActiveCampaign} activePage={activePage} setActivePage={setActivePage} />
      </div>) : (
        <div className="text-center mt-4">
          <p className="text-gray-500">No data to display.</p>
        </div>
      )}
    </div>
  );
};

export default AdmActiveCampaign;
