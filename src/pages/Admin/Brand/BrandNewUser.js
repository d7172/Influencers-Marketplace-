import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import BrandUserTable from "../../../components/BrandUserTable";
import { useDispatch, useSelector } from "react-redux";
import { getBrandNewUserData } from "../../../store/Admin/Brand/NewUser/action";
import { useNavigate } from "react-router-dom";

function BrandNewUser({ route }) {
  let tableData = [];
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getBrandNewUserData(payload, activePage));
  }, [activePage]);
  const BrandNewUser = useSelector((state) => state?.brandNewUser);
  console.log("BrandNewUser", BrandNewUser);
  // tableData = BrandNewUser?.results;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard", onClick: () => { navigate(`/admin/dashboard`) } }, { title: "All Users" }, { title: "New Brands" }]} />
      </div>
      <div className="max-w-[1280px]  relative">
        <div className="flex items-center justify-between w-full">
          {/* <CampaignSearchBar placeHolder={"Search here"} /> */}
          {/* <div
          className="border-2 border-[#3751FF] text-[#3751FF] px-6 py-3 hover:bg-[#3751FF] hover:text-white"
          onClick={() => navigate("/admin/influencer/new-user/add")}
        >
          <button> + Add New Influencer </button>
        </div> */}
        </div>
        <BrandUserTable tableData={tableData} route={"new-user"} />
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={BrandNewUser} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default BrandNewUser;
