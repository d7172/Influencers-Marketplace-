import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DetailsTable from "./DetailsTable";
import { useDispatch, useSelector } from "react-redux";
import { getActiveBidsData } from "../../../store/Admin/ActiveBids/action";
// import MyDialog from "./MyDialog";
// import PalceBid from "./PalceBid";

function Bids() {
  // const [placeBid, setPlaceBid] = useState(false);
  let tableData = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveBidsData());
  }, []);
  tableData = useSelector((state) => state?.AdminActiveBids?.results);

  const rowData = [
    {
      campaignId: "0001",
      brandName: "Perfect Status",
      campaignTitle: "Enjoy the videos and music",
      numOfBids: 10,
      category: "Fashion, DIY",
      amount: "5553",
    },
    {
      campaignId: "0002",
      brandName: "Perfect Status",
      campaignTitle: "Enjoy the videos and music",
      numOfBids: 10,
      category: "Fashion, DIY",
      amount: "5553",
    },
  ];
  const columnData = [
    "Campaign Id",
    "Brand Name",
    "Campaign Title",
    "Total Number of Bids",
    "Category",
    "Social Platform",
    "Amount",
  ];
  const infTableCol = ["User ID", "Influencer Name", "Influencer Bids Number"];
  const infTableRow = [
    {
      userId: "00001",
      infName: "Steven Sloan",
      infBidNum: "01",
    },
    {
      userId: "00002",
      infName: "Steven Sloan",
      infBidNum: "01",
    },
    {
      userId: "00003",
      infName: "Steven Sloan",
      infBidNum: "01",
    },
    {
      userId: "00004",
      infName: "Steven Sloan",
      infBidNum: "01",
    },
    {
      userId: "00005",
      infName: "Steven Sloan",
      infBidNum: "01",
    },
    {
      userId: "00006",
      infName: "Steven Sloan",
      infBidNum: "01",
    },
  ];
  const navigate = useNavigate();
  const [detailsTable, setDetailsTable] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleIndex = (index) => activeIndex !== index && setActiveIndex(index);
  return (
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
      <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr className="flex">
                  <th scope="col" className="text-[18px] w-[140px] font-[500] text-gray-900 pl-4 py-4 text-left">
                    Campaign Id
                  </th>
                  <th scope="col" className="text-[18px] w-[140px] font-[500] text-gray-900 pl-4 py-4 text-left">
                    Brand Name
                  </th>
                  <th scope="col" className="text-[18px] w-[200px] font-[500] text-gray-900 pl-4 py-4 text-left">
                    Campaign Title
                  </th>
                  <th scope="col" className="text-[18px] w-[190px] font-[500] text-gray-900 pl-4 py-4 text-left">
                    Total Number of Bids
                  </th>
                  <th scope="col" className="text-[18px] w-[130px] font-[500] text-gray-900 pl-4 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-[18px] w-[180px] font-[500] text-gray-900 pl-4 py-4 text-left">
                    Social Platform
                  </th>
                  <th scope="col" className="text-[18px] w-[100px] font-[500] text-gray-900 pl-4 py-4 text-left">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, i) => {
                  return (
                    <>
                      <tr key={i} className="bg-[#F2F2F2] flex">
                        <td className="pl-4 py-4 whitespace-nowrap text-sm w-[140px]  font-medium text-[#3751FF] underline">
                          <Link to={`/admin/campaign/new-campaign/${data.id}`}>
                            <p className="cursor-pointer">#{data?.campaign_details?.id}</p>
                          </Link>
                        </td>
                        <td className="text-sm w-[140px] text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          {data?.campaign_details?.brandName}
                        </td>
                        <td className="text-sm w-[200px] text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          {data?.campaign_details?.title}
                        </td>
                        <td className="text-sm w-[190px] text-gray-900 font-light pl-8 py-4 whitespace-nowrap">
                          {data?.campaign_details?.number_of_bids}
                        </td>
                        <td className="text-sm w-[130px] text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          {data?.campaign_details?.category}
                        </td>
                        <td className="text-[16px] w-[180px] min-w-[170px] flex  relative text-gray-900  font-light pl-4 py-4 whitespace-nowrap">
                          <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
                          <img className="absolute z-40 w-[20px] " src="/svgs/instagram.svg" alt="face" />
                          <img className="absolute z-40 w-[20px] " src="/svgs/linkedin.svg" alt="face" />
                          <img className="absolute z-40 w-[20px] " src="/svgs/youtube.svg" alt="face" />
                          +2 more
                        </td>
                        <td className="text-sm w-[100px] text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                          &#8377;{data?.campaign_details?.amount}
                        </td>
                        <td className=" pl-4 py-4 whitespace-nowrap w-[100px] underline cursor-pointer relative">
                          <button className="text-sm text-[#3751FF] font-[500]" onClick={() => handleIndex(i)}>
                            View details
                          </button>
                        </td>
                      </tr>
                      {activeIndex === i && (
                        <tr>
                          {" "}
                          <DetailsTable
                            key={i}
                            campaignId={data.campaignId}
                            columnData={infTableCol}
                            rowData={data?.bid_details}
                          />
                        </tr>
                      )}
                    </>
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

export default Bids;
