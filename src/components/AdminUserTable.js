import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyDialog from "./MyDialog";
import PalceBid from "./PalceBid";

function AdminUserTable({ tableData }) {
  const [placeBid, setPlaceBid] = useState(false);
  const infCampaignPool = useSelector((state) => state.infCampaignPool);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-w-[1280px]">
      <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
        <PalceBid close={() => setPlaceBid(false)} />
      </MyDialog>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                    User Id
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Name
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Number
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    E-mail
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Active Since
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data) => {
                  return (
                    <tr className="">
                      <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                        {data?.userId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                        {data?.name}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data?.number}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data?.email}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data?.activeSince}
                      </td>
                      <td
                        onClick={() => navigate(`/admin/influencer/active-user/0001`)}
                        className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                      >
                        View profile
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

export default AdminUserTable;
