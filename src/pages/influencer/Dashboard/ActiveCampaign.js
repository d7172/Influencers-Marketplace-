import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Dropdown from "../../../components/Dropdown";
import { getCampaignActiveData } from "../../../store/infCampaignActive/action";

let tableData = [];

function ActiveCampaign() {
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      category: "fashion",
      status: "active",
      influencer_id: 2,
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getCampaignActiveData(payload));
  }, []);

  tableData = useSelector((state) => state?.infCampaignActive?.results);
  return (
    <div className="ml-10">
      <Breadcrumbs options={[{ title: "campaign" }, { title: "Active campaign" }]} />
      <div className="flex justify-between mt-2">
        <div className="flex gap-4 items-center">
          <label className="text-[12px] text-[#939393]">Sort By Status</label>
          <Dropdown
            label="Pending for Approval"
            options={[{ label: "Pending for Approval" }]}
            dropdownStyle="w-[200px]"
            className="w-[200px] h-[38px]"
          />
          <button className="rounded-[8px] w-[55px] h-[37px] border border-[#C4C4C4] shadow-dateRange">GO</button>
        </div>
        <CampaignSearchBar />
      </div>
      <ActiveCampaignTable />
    </div>
  );
}

export default ActiveCampaign;

function ActiveCampaignTable() {
  const navigate = useNavigate();
  console.log(tableData, "table data");
  return (
    <div className="mt-6 pr-4">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign ID
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign Title
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    From
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Duration
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Amount
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Social Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, i) => {
                  return (
                    <tr className="">
                      <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[150px] font-medium text-gray-900">
                        {data?.id}
                      </td>
                      <td className="text-sm flex gap-4 items-center justify-center min-w-[240px] max-w-[240px] overflow-hidden text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />
                        {data?.title}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.from_date}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.project_duration_in_days}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.category}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        &#8377; {data?.amount}
                      </td>

                      <td className="text-[16px] max-w-[150px] min-w-[170px] flex  relative text-gray-900  font-light pl-6 py-4 whitespace-nowrap">
                        <img
                          className="absolute z-40 w-[20px] "
                          src={`/svgs/${data?.social_platform[0]}.svg`}
                          alt="face"
                        />

                        {/* <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1> */}
                      </td>

                      <td
                        onClick={() => navigate(`/influencer/campaign/active-campaign/${data?.id}`)}
                        className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer "
                      >
                        View Details
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
