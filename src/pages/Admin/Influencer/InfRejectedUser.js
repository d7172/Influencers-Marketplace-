import React, { useEffect } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import AdminUserTable from "../../../components/AdminUserTable";
import { getInfRejectedUserData } from "../../../store/Admin/Influencer/RejectedUser/action";
import { useDispatch, useSelector } from "react-redux";

function InfRejectedUser({ route }) {
  let tableData = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfRejectedUserData());
  }, []);
  tableData = useSelector((state) => state?.infRejectedUser?.results);
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Influencer" }, { title: "rejected User" }]} />

        <CampaignSearchBar placeHolder={"Search here by userID"} />
      </div>
      <AdminUserTable tableData={tableData} route={route} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default InfRejectedUser;
