import React from "react";
import { useNavigate } from "react-router-dom";

function AdminCampaignTable({ tableData, mainRoute, route }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-w-[1280px]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign Id
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Brand Name
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign title
                  </th>
                  {(route === "admin/assigned-campaign") && <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Days Remaining
                  </th>}
                  {(route === "admin/assigned-campaign") && <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign Date
                  </th>}
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Amount
                  </th>
                  {(route !== "admin/rejected-campaign" && route !== "admin/assigned-campaign") && (
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Social Platform
                    </th>
                  )}
                  {route === "admin/active-campaign" ? (
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
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
                    <tr className="" key={id}>
                      <td
                        className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer"
                        onClick={() => navigate(`/admin/influencer/activeUser/0001`)}
                      >
                        {data?.id}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                        {data?.brandName}
                      </td>
                      <td className="text-sm max-w-[190px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data?.title}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data?.category}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        &#8377;{data?.amount}
                      </td>
                      {route !== "rejected-campaign" && (
                        <td className="text-[16px] max-w-[170px] min-w-[170px] flex  relative text-gray-900  font-light px-6 py-4 whitespace-nowrap">
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

                          <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
                        </td>
                      )}
                      {route === "active-campaign" || route === "rejected-campaign" ? (
                        <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          John Deo <br />
                          Bill Marry
                        </td>
                      ) : (
                        <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data?.status_camp}
                        </td>
                      )}

                      <td
                        onClick={() => navigate(`/admin/${mainRoute}/${route}/0001`)}
                        className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
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

export default AdminCampaignTable;
