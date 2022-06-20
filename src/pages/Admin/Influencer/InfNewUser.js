import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import AdminUserTable from "../../../components/AdminUserTable";
import { useDispatch, useSelector } from "react-redux";
import { getInfNewUserData } from "../../../store/Admin/Influencer/NewUser/action";
import { useNavigate } from "react-router-dom";

function InfNewUser({ route }) {
  let tableData = [];
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getInfNewUserData(payload, activePage));
  }, [activePage]);
  const infNewUser = useSelector((state) => state?.infNewUser);
  tableData = infNewUser?.results;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard", onClick: ()=>{navigate(`/admin/dashboard`)} }, { title: "All Users" }, { title: "New Users" }]} />
      </div>
      <div className="max-w-[1280px] pt-6 relative">
        <div className="flex items-center p-4 justify-between w-full mb-5">
          <CampaignSearchBar placeHolder={"Search here"} />
          {/* <div
          className="border-2 border-[#3751FF] text-[#3751FF] px-6 py-3 hover:bg-[#3751FF] hover:text-white"
          onClick={() => navigate("/admin/influencer/new-user/add")}
        >
          <button> + Add New Influencer </button>
        </div> */}
        </div>
        <AdminUserTable tableData={tableData} route={route} />
        <div className="absolute bottom-[-100px] right-0">
          <Pagination link={infNewUser} activePage={activePage} setActivePage={setActivePage} />
        </div>
      </div>
    </>
  );
}

export default InfNewUser;
