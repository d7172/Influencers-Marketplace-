import React from "react";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyDialog from "./MyDialog";
import PalceBid from "./PalceBid";

function BrandCampaignTable({ campaignData, campaignColumns }) {
  const [placeBid, setPlaceBid] = useState(false);
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
                  {/* <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign ID
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Brand name
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign Title
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
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Status
                  </th> */}
                {campaignColumns.map((col, index)=>(
                  <th key={index} scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">{col}</th>
                ))}
                </tr>
              </thead>
              <tbody>
                {campaignData.map((data, i) => {
                  return (
                    <tr key={i} className="bg-[#F2F2F2]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                        #{data.campaignId}
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.brandName}
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.campaignTitle}
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.category}
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                       &#8377; {data.amount}
                      </td>
                      <td className="text-[16px] w-auto min-w-[170px] flex  relative text-gray-900  font-light px-6 py-4 whitespace-nowrap">
                        <img
                          className="absolute z-40 w-[20px] "
                          src="/svgs/facebook.svg"
                          alt="face"
                        />
                        <img
                          className="absolute z-40 w-[20px] "
                          src="/svgs/instagram.svg"
                          alt="face"
                        />
                        <img
                          className="absolute z-40 w-[20px] "
                          src="/svgs/linkedin.svg"
                          alt="face"
                        />
                        <img
                          className="absolute z-40 w-[20px] "
                          src="/svgs/youtube.svg"
                          alt="face"
                        />
                        +2 more
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.status}
                      </td>
                      <td
                        onClick={() => navigate(`/brand/campaign/new-campaign/${data.campaignId}`)}
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

export default BrandCampaignTable;
