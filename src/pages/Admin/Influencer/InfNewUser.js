import React, { useEffect } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import AdminUserTable from "../../../components/AdminUserTable";
import { useDispatch, useSelector } from "react-redux";
import { getInfNewUserData } from "../../../store/Admin/Influencer/NewUser/action";

function InfNewUser({ route }) {
  let tableData = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfNewUserData());
  }, []);
  tableData = useSelector((state) => state?.infNewUser?.results);

  return (
    <div className="max-w-[1280px] pt-6 relative">
      {console.log(tableData, "table data")}
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Influencer" }, { title: "New User" }]} />

        <CampaignSearchBar placeHolder={"Search here by userID"} />
      </div>
      <AdminUserTable tableData={tableData} route={route} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default InfNewUser;
