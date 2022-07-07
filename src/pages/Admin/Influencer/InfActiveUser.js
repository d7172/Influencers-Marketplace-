import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import AdminUserTable from "../../../components/AdminUserTable";
import { useDispatch, useSelector } from "react-redux";
import { getInfActiveUserData } from "../../../store/Admin/Influencer/ActiveUser/action";
import { useNavigate } from "react-router-dom";

function InfActiveUser({ route }) {
  const navigate = useNavigate();
  let tableData = [];
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getInfActiveUserData(payload, activePage));
  }, [activePage]);
  const infActiveUser = useSelector((state) => state?.infActiveUser);
  console.log('infActiveUser', infActiveUser);
  tableData = infActiveUser?.results.map((r) => r?.influencerDetail)

  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard", onClick: () => { navigate(`/admin/dashboard`) } }, { title: "All Users" }, { title: "Active Users" }]} />
      </div>
      <div className="max-w-[1280px] pt-6 relative">
        <div className="flex items-center px-8">
          <CampaignSearchBar placeHolder={"Search here by userID"} setQuery={setQuery} />
        </div>
        <AdminUserTable tableData={tableData} route={route} query={query} />
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={infActiveUser} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default InfActiveUser;
