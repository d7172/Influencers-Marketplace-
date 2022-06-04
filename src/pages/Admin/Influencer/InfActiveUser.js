import React, { useEffect } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import AdminUserTable from "../../../components/AdminUserTable";
import { useDispatch, useSelector } from "react-redux";
import { getInfActiveUserData } from "../../../store/Admin/Influencer/ActiveUser/action";

function InfActiveUser({ route }) {
  let tableData = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfActiveUserData());
  }, []);
  tableData = useSelector((state) => state?.infActiveUser?.results.map((r) => r?.influencerDetail));
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Influencer" }, { title: "Active User" }]} />

        <CampaignSearchBar placeHolder={"Search here by userID"} />
      </div>
      <AdminUserTable tableData={tableData} route={route} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default InfActiveUser;
