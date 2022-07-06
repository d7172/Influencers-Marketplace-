import React from "react";
import { useNavigate } from "react-router-dom";
import BidDetails from "./BidDetails";

function DetailsTable({ campaignId, columnData, rowData }) {
  const navigate = useNavigate();
  return (
    <div className="">
      <table className="w-full">
        <thead className="border-b">
          <tr>
            {columnData.map((data, index) => (
              <th key={index} scope="col" className="text-[18px] font-[500] text-gray-900 pl-4 py-4 text-left">
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {console.log(rowData, "-----row data-----")}
          {rowData?.influencer_details.map((inf) => {
            return (
              <tr key={inf?.id}>
                <td className="pl-4 py-4 whitespace-nowrap text-sm max-w-[170px]  font-medium text-[#3751FF] underline">
                  {inf?.id}
                </td>
                <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                  {inf?.first_name}
                </td>
                <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                  {inf?.bids?.[0]?.id}
                </td>
                <td
                  className=" pl-4 py-4 whitespace-nowrap text-[#3571FF] overflow-hidden underline cursor-pointer relative"
                  onClick={() => navigate(`/admin/active-bids/${campaignId}`)}
                >
                  View Bids
                </td>
                {window.location.pathname === `/admin/active-bids/${campaignId}` && <BidDetails inf_id={inf?.id} />}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DetailsTable;
