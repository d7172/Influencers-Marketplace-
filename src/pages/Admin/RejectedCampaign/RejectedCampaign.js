import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";
import CustomToolTip from '../../../components/Tooltip';
import Breadcrumbs from "../../../components/Breadcrumbs";

function RejectedCampaign() {
  // const [placeBid, setPlaceBid] = useState(false);
  const rowData = [
    {
      campaignId: "0001",
      brandName: "Perfect Status",
      campaignTitle: "Enjoy the videos and music",
      category: "Fashion, DIY",
      amount: "5553",
      assignedInfluencer: "Steven Sloan"
    },
    {
      campaignId: "0002",
      brandName: "Perfect Status",
      campaignTitle: "Enjoy the videos and music",
      category: "Fashion, DIY",
      amount: "5553",
      assignedInfluencer: "Steven Sloan"
    }];
  const columnData = ["Campaign Id", "Brand Name", "Campaign Title", "Category", "Amount", "Assigned Influencers"];
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#F2F2F2] w-full py-4 px-8 mb-4" >
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: "Rejected Campiagn" }]} />
      </div>
      <div className="flex flex-col max-w-[1280px]">
        {/* <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
        <PalceBid close={() => setPlaceBid(false)} />
      </MyDialog> */}
        <div className="flex gap-4 px-4 m-4 w-[450px] h-[50px] bg-[#F1F1F1]">
          <SearchIcon className="w-7" />
          <input
            type="search"
            placeholder="Search here by campaign ID"
            className="outline-none border-0 w-full bg-[#F1F1F1] "
          />
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    {columnData.map((data, index) => (
                      <th key={index} scope="col" className="text-[18px] font-[500] text-gray-900 pl-4 py-4 text-left">{data}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rowData.map((data, i) => {
                    return (
                      <tr key={i} className="bg-[#F2F2F2] relative">
                        <td className="pl-4 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                          #{data.campaignId}
                        </td>
                        <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          {data.brandName}
                        </td>
                        <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          {data.campaignTitle}
                        </td>
                        <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          {data.category}
                        </td>
                        <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          &#8377;{data.amount}
                        </td>
                        <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          {data.assignedInfluencer}
                        </td>
                        <td
                          onClick={() => navigate(`/admin/campaign/rejected-campaign/${data.campaignId}`)}
                          className="text-sm text-[#3751FF] font-[500] pl-4 py-4 whitespace-nowrap underline "
                        >
                          <p className="w-fit cursor-pointer" >View Details</p>
                        </td>
                        <td>
                          <CustomToolTip
                            actionButton={() => (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            )}
                            items={["Reassigned to Influencers", "Delete"]}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default RejectedCampaign;