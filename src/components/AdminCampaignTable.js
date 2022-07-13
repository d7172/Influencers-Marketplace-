import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMoveToCampaignPoolData } from "../store/Admin/Campaign/MoveToPool/action";
import { deleteCampaignData, getNewCampaignData } from "../store/Admin/Campaign/NewCampaign/action";
import CustomToolTip from "./Tooltip";
function AdminCampaignTable({ tableData, mainRoute, route, setInfTable, setInfTableData, activePage, query }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useState(["id", "first_name", "last_name"]);

  function search(items) {
    return items?.filter((item) => {
      return searchParams?.some((newItem) => {
        return item[newItem]?.toString()?.toLowerCase()?.indexOf(query.toLowerCase()) > -1;
      });
    });
  }

  const [sort, setSort] = useState(null);
  const [tableDatas, setTableData] = useState(tableData);
  const [sortbyname, setSortbyname] = useState(null);
  const [tabledatabyname, setTabledatabyname] = useState(tableData);
  const [filternamedata, setFilternamedata] = useState([]);

  useEffect(() => {
    setTableData(tableData);
    setTabledatabyname(tableData);
    sortAccendingname();
    sortDecendingname();
  }, [tableData, filternamedata]);

  const sortAccending = (param) => {
    param === "id"
      ? setTableData(tableDatas?.sort((a, b) => a.id - b.id))
      : setTableData(tableDatas?.sort((a, b) => a.id - b.id));
    setSort(0);
  };
  const sortDecending = (param) => {
    param === "id"
      ? setTableData(tableDatas?.sort((a, b) => b.id - a.id))
      : setTableData(tableDatas?.sort((a, b) => b.id - a.id));
    setSort(1);
  };

  const sortAccendingname = (param) => {
    const sortingusername = tabledatabyname?.sort((a, b) => a?.brand_name?.localeCompare(b?.brand_name));
    setFilternamedata(sortingusername);
    setSortbyname(0);
  };
  const sortDecendingname = (param) => {
    const sortingusername = tabledatabyname?.sort((a, b) => b?.brand_name?.localeCompare(a?.brand_name));
    setFilternamedata(sortingusername);
    setSortbyname(1);
  };

  return (
    <div className="flex flex-col max-w-[1280px]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className={`overflow-x-auto ${tableData?.length && `min-h-[43vh]`}`}>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-[18px] min-w-[130px] font-[500] text-gray-900 pl-6 py-4 text-left flex flex-row"
                  >
                    Campaign Id
                    <div className="flex flex-row">
                      <span className="cursor-pointer ml-2 mt-1 ">
                        <img
                          src="/svgs/uparrow.svg"
                          className={`hover:invert-[.5] ${sort === 0 && "invert-[.5]"} `}
                          onClick={() => sortAccending("id", "name", "first_name", "last_name")}
                        />
                        <img
                          src="/svgs/downarrow.svg"
                          className={`hover:invert-[.5] ${sort === 1 && "invert-[.5]"} `}
                          onClick={() => sortDecending("id", "name", "first_name", "last_name")}
                        />
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="text-[18px] min-w-[150px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    <div className="flex flex-row">
                      Brand Name
                      <span className="cursor-pointer ml-2 mt-1 ">
                        <img
                          src="/svgs/uparrow.svg"
                          className={`hover:invert-[.5] ${sortbyname === 0 && "invert-[.5]"} `}
                          onClick={() => sortAccendingname()}
                        />
                        <img
                          src="/svgs/downarrow.svg"
                          className={`hover:invert-[.5] ${sortbyname === 1 && "invert-[.5]"} `}
                          onClick={() => sortDecendingname()}
                        />
                      </span>
                    </div>
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
                {tableData?.map((data, id) => {
                  return (
                    <tr className="relative min-h-[56px]" key={id}>
                      <td className="text-sm text-gray-900 font-[500] pl-6 py-4 whitespace-nowrap">
                        {data?.campaign_details?.id || data?.id}
                      </td>

                      <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                        {data?.campaign_details?.brand_name || data?.brand_name}
                      </td>
                      <td className="text-sm min-w-[250px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.campaign_details?.title || data?.title}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.campaign_details?.category || data?.category}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        &#8377;{data?.campaign_details?.amount || data?.amount}
                      </td>
                      {route !== "rejected-campaign" && (
                        <td className="text-[16px] max-w-[170px] min-w-[170px] flex  relative text-gray-900  font-light pl-6 py-4 whitespace-nowrap">
                          {(data?.campaign_details?.social_media_deliverables || data?.social_media_deliverables)?.map(
                            (smd) => {
                              return (
                                <img
                                  className="absolute z-30 left-[34px] w-[20px] h-[20px]"
                                  src={`/svgs/${smd.platform}.svg`}
                                  alt="face"
                                />
                              );
                            }
                          )}
                        </td>
                      )}
                      {route === "active-campaign" || route === "rejected-campaign" ? (
                        data?.campaign_details?.influencer_details?.map((inf) => {
                          return (
                            <td className="text-sm max-w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                              {inf.first_name + " " + inf.last_name}
                              <br />
                            </td>
                          );
                        })
                      ) : (
                        <td className="text-sm max-w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data?.status_camp}
                        </td>
                      )}
                      <td
                        onClick={() =>
                          navigate(`/admin/${mainRoute}/${route}/${data?.campaign_details?.id || data?.id}`)
                        }
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
                                setInfTableData({
                                  id: data?.id,
                                  category: data?.category,
                                  platform: data?.social_platform[0],
                                });
                                setInfTable(true);
                              },
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
                                dispatch(deleteCampaignData({ campaign_id: data?.id }));
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
