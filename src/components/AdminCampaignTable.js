import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMoveToCampaignPoolData } from "../store/Admin/Campaign/MoveToPool/action";
import { deleteCampaignData, getNewCampaignData } from "../store/Admin/Campaign/NewCampaign/action";
import CustomToolTip from "./Tooltip";
import { SearchIcon } from "@heroicons/react/solid";


function AdminCampaignTable({ tableData, mainRoute, route, setInfTable, setInfTableData, activePage , query }) {
  console.log("mainRoute", mainRoute);
  console.log("route", route);

  const [searchParams] = useState(["id","brand_name"]);
  
  function search(items) {
    return items?.filter((item) => {
      return searchParams?.some((newItem) => {
        return (
          item[newItem]?.toString()?.toLowerCase()?.indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col max-w-[1280px]">
       {/* <div className="flex gap-4 px-4 w-[450px] h-[50px] bg-[#F1F1F1]">
          <SearchIcon className="w-7" />
          <input type="search" placeholder={"Search here"} className="outline-none border-0 w-full bg-[#F1F1F1] "
            onChange={(e) => setQuery(e.target.value)}
          />
        </div> */}
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className={`overflow-x-auto ${tableData?.length&& `min-h-[43vh]`}`}>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-[18px] min-w-[130px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Campaign Id
                  </th>
                  <th scope="col" className="text-[18px] min-w-[140px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Brand Name
                  </th>
                  <th scope="col" className="text-[18px] min-w-[252px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Campaign title
                  </th>
                  {route === "admin/assigned-campaign" && (
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                      Days Remaining
                    </th>
                  )}
                  {route === "admin/assigned-campaign" && (
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                      Campaign Date
                    </th>
                  )}
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Amount
                  </th>
                  {route !== "admin/rejected-campaign" && route !== "admin/assigned-campaign" && (
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                      Social Platform
                    </th>
                  )}
                  {route === "active-campaign" ? (
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                      Assigned Influencers
                    </th>
                  ) : (
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      status
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {search(tableData)?.map((data, id) => {
                  console.log("data", data);
                  return (
                    <tr className="relative min-h-[56px]" key={id}>
                      <td className="text-sm text-gray-900 font-[500] pl-6 py-4 whitespace-nowrap">{data?.id}</td>

                      <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                        {data?.brand_name}
                      </td>
                      <td className="text-sm min-w-[250px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.title}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.category}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        &#8377;{data?.amount}
                      </td>
                      {route !== "rejected-campaign" && (
                        <td className="text-[16px] max-w-[170px] min-w-[170px] flex  relative text-gray-900  font-light pl-6 py-4 whitespace-nowrap">
                          <img
                            className="absolute z-30 left-[34px] w-[20px] h-[20px]"
                            src="/svgs/instagram.svg"
                            alt="face"
                          />
                          <img
                            className="absolute z-20 left-[44px] w-[20px] h-[20px]"
                            src="/svgs/youtube.svg"
                            alt="face"
                          />
                          <img
                            className="absolute z-10 left-[55px] w-[20px] h-[20px]"
                            src="/svgs/linkedin.svg"
                            alt="face"
                          />

                          <h1 className="ml-[70px] text-[16px] font-[400]">+2 more</h1>
                        </td>
                      )}
                      {route === "active-campaign" || route === "rejected-campaign" ? (
                        <td className="text-sm max-w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          John Deo <br />
                          Bill Marry
                        </td>
                      ) : (
                        <td className="text-sm max-w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data?.status_camp}
                        </td>
                      )}
                      <td
                        onClick={() => navigate(`/admin/${mainRoute}/${route}/${data?.id}`)}
                        className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                      >
                        View Details
                      </td>
                      {route === "new-campaign" && (
                        <CustomToolTip
                          actionButton={() => (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 cursor-pointer mr-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                          )}
                          items={[
                            {
                              title: "Assigned to Influencers",
                              onClick: () => {
                                // setCampId(data?.id)
                                setInfTableData({id: data?.id, category: data?.category, platform: data?.social_platform[0]})
                                setInfTable(true);
                              }
                            },
                            {
                              title: "Move to Campaign Pool",
                              onClick: () => {
                                dispatch(getMoveToCampaignPoolData(data?.id));
                                window.location.reload();
                              },
                            },
                            {
                              title: "Delete",
                              onClick: () => {
                                dispatch(deleteCampaignData({ influencer_id: data?.id }));
                                window.location.reload();
                                dispatch(getNewCampaignData(null, activePage));
                              },
                            },
                          ]}
                          itemStyle={"cursor-pointer"}
                        />
                      )}
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

export default AdminCampaignTable;
