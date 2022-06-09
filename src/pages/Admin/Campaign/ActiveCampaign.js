import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminCampaignTable from "../../../components/AdminCampaignTable";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import { getActiveCampaignData } from "../../../store/Admin/Campaign/ActiveCampaign/action";

const AdmActiveCampaign = ({ route }) => {
  let tableData = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveCampaignData());
  }, []);

  tableData = useSelector((state) => state?.AdminActiveCampaign?.results);
  console.log(tableData);
  return (
    <div className="pt-4 relative">
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: route }]} />
      </div>
      <div className="flex items-center py-4 px-8">
        <CampaignSearchBar placeHolder={"Search here"} />
      </div>
      <div className="flex items-center py-4 px-8">
        <AdminCampaignTable tableData={tableData} mainRoute={"campaign"} route={route} />
      </div>
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
};

export default AdmActiveCampaign;
