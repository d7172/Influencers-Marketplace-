import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import CustomToolTip from "./Tooltip";
import { SearchIcon } from "@heroicons/react/solid";

function BrandUserTable({ tableData, route , query }) {

  const [tableDatas, setTableData] = useState(tableData);
  const [searchParams] = useState(["id","brand_name"]);


  useEffect(() => {
    setTableData(tableData);
  }, [tableData]);

  function search(items) {
    return items?.filter((item) => {
      return searchParams?.some((newItem) => {
        return (
          item[newItem]?.toString()?.toLowerCase()?.indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }
  
const [sort, setSort] = useState(null);

  const sortAccending = (param) => {
    param === 'id' ? setTableData(tableDatas?.sort((a, b) => a.id - b.id)) : setTableData(tableDatas?.sort((a, b) => a.id - b.id));
    setSort(0);
};
const sortDecending = (param) => {
    param === 'id' ? setTableData(tableDatas?.sort((a, b) => b.id - a.id)) : setTableData(tableDatas?.sort((a, b) => b.id - a.id));
    setSort(1);
};

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col max-w-[1280px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className={`overflow-x-auto ${tableData?.length && `min-h-[43vh]`}`}>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    {route === "active-user" && (
                      <div>
                      <th scope="row" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 flex flex-row">
                        Brand Id
                     <div className="ml-2 mt-1">
                     <span className='cursor-pointer'><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('id')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('id')} /></span>
                     </div>
                      </th>
                      </div>
                    )}
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Brand Name
                    {/* <div className="ml-2 mt-1">
                     <span className='cursor-pointer'><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('id')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('id')} /></span>
                     </div> */}
                    </th>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Number
                    </th>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      E-mail
                    </th>
                    {route !== "active-user" && <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Date of Enroll
                    </th>}
                    {route === "active-user" && (<th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Active Since
                    </th>)}
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(tableData, "data in table compo")} */}
                  {search(tableData)?.map((data) => {
                    return (
                      <tr className="">
                        {route === "active-user" && (
                          <td
                            className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer"
                          // onClick={() => navigate(`/admin/influencer/activeUser/${data?.id}`)}
                          >
                            {data?.id}
                          </td>
                        )}
                        <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                          {data.brand_name}
                        </td>
                        <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data?.contact_number || data?.number}
                        </td>
                        <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data?.email || "-"}
                        </td>
                        {route !== "active-user" && <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {moment(data?.created_at).format("DD/MM/YYYY") || data?.activeSince}
                        </td>}
                        {route === "active-user" && <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data?.activeSince || "-"}
                        </td>}
                        <td
                          // onClick={() => navigate(`/admin/influencer/${route}/${data?.id}`)}
                          onClick={() => alert("Not found page")}
                          className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                        >
                          View profile
                        </td>
                        {route === "rejected-user" && (
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
                                title: "Re-active",
                                // onClick: () => {
                                //   // setCampId(data?.id)
                                // }
                              },
                              {
                                title: "Delete",
                                // onClick: () => {
                                //   dispatch(deleteCampaignData({ influencer_id: data?.id }));
                                //   window.location.reload();
                                //   dispatch(getNewCampaignData(null, activePage));
                                // },
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
    </>
  );
}

export default BrandUserTable;
