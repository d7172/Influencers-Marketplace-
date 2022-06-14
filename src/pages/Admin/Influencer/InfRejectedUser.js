import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import AdminUserTable from "../../../components/AdminUserTable";
import { getInfRejectedUserData } from "../../../store/Admin/Influencer/RejectedUser/action";
import { useDispatch, useSelector } from "react-redux";

function InfRejectedUser({ route }) {
  let tableData = [];
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getInfRejectedUserData(payload, activePage));
  }, [activePage]);
  const infRejectedUser = useSelector((state) => state?.infRejectedUser);
  tableData = infRejectedUser?.results;
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Influencer" }, { title: "Rejected User" }]} />

        <CampaignSearchBar placeHolder={"Search here by userID"} />
      </div>
      <AdminUserTable tableData={tableData} route={route} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination link={infRejectedUser} activePage={activePage} setActivePage={setActivePage}/>
      </div>
    </div>
  );
}

export default InfRejectedUser;
