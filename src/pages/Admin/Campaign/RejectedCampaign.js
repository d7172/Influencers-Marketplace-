import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminCampaignTable from "../../../components/AdminCampaignTable";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import { getRejectedCampaignData } from "../../../store/Admin/Campaign/RejectedCampaign/action";

const AdmRejectedCampaign = ({ route }) => {
  // const tableData = [
  //   {
  //     campaignId: "0001",
  //     brandName: "Perfect Status",
  //     campaignTitle: "Enjoy the video and music",
  //     category: "Fashion",
  //     amount: "5553",
  //     status: "active",
  //   },
  // ];
  let tableData = [];
  const [activePage, setActivePage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getRejectedCampaignData(payload, activePage));
  }, []);
  const AdmRejectedCampaign = useSelector((state) => state?.AdmRejectedCampaign);
  tableData = AdmRejectedCampaign?.results;
  return (
    <div className="pt-4 relative">
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: route }]} />
      </div>
      <div className="flex items-center py-4 px-8">
        <CampaignSearchBar placeHolder={"Search here"} />
      </div>
      <div className="flex items-center py-4 px-8">
        <AdminCampaignTable tableData={tableData} route={route} />
      </div>
      <div className="w-full mt-2 px-4">
        <Pagination link={AdmRejectedCampaign} activePage={activePage} setActivePage={setActivePage}/>
      </div>
    </div>
  );
};

export default AdmRejectedCampaign;
