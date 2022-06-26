import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminCampaignTable from "../../../components/AdminCampaignTable";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import { getNewCampaignData } from "../../../store/Admin/Campaign/NewCampaign/action";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdowns";
import { getAssignProcessData } from "../../../store/Admin/Campaign/AssignProcess/action";

const AdmNewCampaign = ({ route }) => {
  let tableData = [];
  const [activePage, setActivePage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getNewCampaignData(payload, activePage));
    dispatch(getAssignProcessData());
  }, [activePage]);
  const AdminNewCampaign = useSelector((state) => state?.AdminNewCampaign);
  tableData = AdminNewCampaign?.results;
  const navigate = useNavigate();
  console.log(AdminNewCampaign, "After delete");
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs
          options={[
            {
              title: "Dashboard",
              onClick: () => {
                navigate(`/admin/dashboard`);
              },
            },
            { title: "Campaign" },
            { title: route },
          ]}
        />
      </div>
      <div className="pt-4 relative">
        <div className="flex items-center p-4 justify-between w-full mb-5">
          <CampaignSearchBar placeHolder={"Search here"} />
          <div
            className="border-2 border-[#3751FF] text-[#3751FF] px-6 py-3 hover:bg-[#3751FF] hover:text-white"
            onClick={() => navigate("/admin/campaign/new-campaign/add")}
          >
            <button> + Add New Campaign </button>
          </div>
        </div>
        <div className="flex gap-4 items-center ml-4">
          <label className="text-[12px] text-[#939393]">Sort By Status</label>
          <Dropdown
            lable="Pending for Approval"
            options={[{ lable: "Pending for Approval" }, { lable: "Approved" }]}
            dropdownStyle="w-[200px]"
            className="w-[200px] h-[38px]"
          />
          <button className="rounded-[8px] w-[55px] h-[37px] border border-[#C4C4C4] shadow-dateRange">GO</button>
        </div>
        <div className="flex items-center py-4 px-8">
          <AdminCampaignTable tableData={tableData} mainRoute={"campaign"} route={route} activePage={activePage} />
        </div>
        <div className="w-full mt-2 px-4">
          <Pagination link={AdminNewCampaign} activePage={activePage} setActivePage={setActivePage} />
        </div>
      </div>
    </>
  );
};

export default AdmNewCampaign;
