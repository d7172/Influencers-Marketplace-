import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import BrandUserTable from "../../../components/BrandUserTable";
import { useDispatch, useSelector } from "react-redux";
import { getBrandActiveUserData } from "../../../store/Admin/Brand/ActiveUser/action";
import { useNavigate } from "react-router-dom";

function BrandActiveUser({ route}) {
  const navigate = useNavigate();
  let tableData = [];
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getBrandActiveUserData(payload, activePage));
  }, [activePage]);
  const brandActiveUser = useSelector((state) => state?.BrandActiveUser);
  console.log("brandActiveUser", brandActiveUser);
  tableData = brandActiveUser?.results
  // console.log("tableData", brandtableData);
  
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard", onClick: () => { navigate(`/admin/dashboard`) } }, { title: "All Users" }, { title: "Active Brands" }]} />
      </div>
      <div className="max-w-[1280px] pt-6 relative">

        <div className="flex items-center px-8">
          <CampaignSearchBar placeHolder={"Search here by userID"} setQuery={setQuery} />
        </div>
        <BrandUserTable tableData={tableData} route={"active-user"}  query={query} />
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={brandActiveUser} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default BrandActiveUser;
