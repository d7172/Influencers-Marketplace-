import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminCampaignTable from "../../../components/AdminCampaignTable";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";
import { getNewCampaignData } from "../../../store/Admin/Campaign/NewCampaign/action";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdowns";
import { assignToInf, getAssignProcessData } from "../../../store/Admin/Campaign/AssignProcess/action";
import BackArrowBtn from "../../../components/BackArrowBtn";

import { SearchIcon } from "@heroicons/react/solid";

const AdmNewCampaign = ({ route }) => {
  let tableData = [];
  const [activePage, setActivePage] = useState(1);
  const [infTable, setInfTable] = useState(false);
  // const [campId, setCampId] = useState(null);
  const [infTableData, setInfTableData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getNewCampaignData(payload, activePage));
    dispatch(getAssignProcessData());
  }, [activePage]);
  const AdminNewCampaign = useSelector((state) => state?.AdminNewCampaign);
  tableData = AdminNewCampaign?.results;
  const navigate = useNavigate();
  console.log(infTable);
  const assignProcessData = useSelector((state) => state?.AdminAssignProcess?.results);
  console.log(assignProcessData);

  const [query, setQuery] = useState("");

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
          <CampaignSearchBar placeHolder={"Search here"} setQuery={setQuery} />
          {!infTable && (
            <div
              className="border-2 border-[#3751FF] text-[#3751FF] px-6 py-3 hover:bg-[#3751FF] hover:text-white"
              onClick={() => navigate("/admin/campaign/new-campaign/add")}
            >
              <button> + Add New Campaign </button>
            </div>
          )}
        </div>
        {!infTable && (
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
        )}
        {infTable ? (
          <InfTable infTableData={infTableData} setInfTable={setInfTable} />
        ) : (
          <>
            <div className="flex items-center py-4 px-8">
              <AdminCampaignTable
                tableData={tableData}
                mainRoute={"campaign"}
                setInfTableData={setInfTableData}
                setInfTable={setInfTable}
                route={route}
                activePage={activePage}
                query={query}
              />
            </div>
            {tableData?.length ? (
              <div className="w-full mt-2 px-4">
                <Pagination link={AdminNewCampaign} activePage={activePage} setActivePage={setActivePage} />
              </div>
            ) : (
              <div className="text-center mt-4">
                <p className="text-gray-500">No data to display.</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AdmNewCampaign;

function InfTable({ infTableData, setInfTable, search }) {
  const dispatch = useDispatch();
  let tableData = [];

  useEffect(() => {
    const payload = {
      campaign_id: infTableData?.id,
      category: infTableData?.category,
      social_platform: infTableData?.platform,
    };
    dispatch(getAssignProcessData(payload, 1));
  }, []);

  tableData = useSelector((state) => state?.AdminAssignProcess?.results)[0];
  console.log(tableData);
  const handleOnClick = (infId) => {
    const payload = {
      influencers: infId,
      campaign: infTableData?.id,
      extra: {},
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));

    dispatch(assignToInf(data));
  };
  const assignToInfData = useSelector((state) => state?.AdminAssignProcess?.results);
  console.log(assignToInfData);
  return (
    <div className="my-4 mx-8">
      <div className="flex justify-between px-2 mb-2">
        <p className="font-bold ">Assigned to Influencers in Same Category</p>
        <BackArrowBtn onClick={() => setInfTable(false)} />
      </div>
      <div className="grid grid-cols-5 gap-x-2 mb-6 text-lg p-2 border-b-2">
        <div>
          <p>User Id</p>
        </div>
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>Completed Campaign</p>
        </div>
        <div>
          <p>Social Platform</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-2 p-2 text-sm">
        {search(tableData)?.influencerdetails?.map((data) => {
          return (
            <>
              <div className="mb-6">
                <p>{data?.id}</p>
              </div>
              <div className="mb-6">
                <p className="capitalize">{data?.first_name + " " + data?.last_name}</p>
              </div>
              <div className="mb-6">
                <p>{data?.complete_campaign}</p>
              </div>
              <div className="flex relative mb-6">
                {data?.social_media_deliverables?.map((item, i) => {
                  return (
                    <img
                      key={i}
                      src={`/svgs/${item?.platform}.svg`}
                      className={`absolute z-40 w-[20px] `}
                      alt="social_platform"
                      style={{ left: `${(i + 1) * 12}px` }}
                    />
                  );
                })}
                <p className="absolute right-16">+2 more</p>
              </div>
              <div className="mb-6">
                <p className="underline text-[#3751FF] cursor-pointer" onClick={() => handleOnClick(data?.id)}>
                  Assign
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
