import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import AdminUserTable from "../../../components/AdminUserTable";
import { getInfRejectedUserData } from "../../../store/Admin/Influencer/RejectedUser/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function InfRejectedUser({ route }) {
  const navigate = useNavigate();
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
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard", onClick: () => { navigate(`/admin/dashboard`) } }, { title: "All Users" }, { title: "Rejected Users" }]} />
      </div>
      <div className="max-w-[1280px] pt-6 relative">
        <div className="flex items-center px-8">
          <CampaignSearchBar placeHolder={"Search here by userID"} />
        </div>
        <AdminUserTable tableData={tableData} route={route} />
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={infRejectedUser} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default InfRejectedUser;
