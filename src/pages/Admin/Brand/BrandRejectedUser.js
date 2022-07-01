import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import BrandUserTable from "../../../components/BrandUserTable";
import { getBrandRejectedUserData } from "../../../store/Admin/Brand/RejectedUser/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BrandRejectedUser({ route }) {
  const navigate = useNavigate();
  let tableData = [];
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getBrandRejectedUserData(payload, activePage));
  }, [activePage]);
  const BrandRejectedUser = useSelector((state) => state?.brandrejecteduser);
  console.log("BrandRejectedUser", BrandRejectedUser);
  tableData = BrandRejectedUser?.results;
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard", onClick: () => { navigate(`/admin/dashboard`) } }, { title: "All Users" }, { title: "Rejected Brands" }]} />
      </div>
      <div className="max-w-[1280px] pt-6 relative">
        <div className="flex items-center px-8">
          <CampaignSearchBar placeHolder={"Search here by userID"} />
        </div>
        <BrandUserTable tableData={tableData} route={route} />
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={BrandRejectedUser} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default BrandRejectedUser;
