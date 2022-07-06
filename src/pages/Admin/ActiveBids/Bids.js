import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DetailsTable from "./DetailsTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveBidsCampaignPoolData,
  getActiveBidsAssignInfluencerData,
} from "../../../store/Admin/ActiveBids/action";
import Pagination from "../../../components/Pagination";
import Breadcrumbs from "../../../components/Breadcrumbs";

// import MyDialog from "./MyDialog";
// import PalceBid from "./PalceBid";

const  Bids = () => {
  // const [placeBid, setPlaceBid] = useState(false);
  let tableData = [];
  const [activePage, setActivePage] = useState(1);
  const [campaignPool, setCampaignPool] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {};
    campaignPool
      ? dispatch(getActiveBidsCampaignPoolData(payload, activePage))
      : dispatch(getActiveBidsAssignInfluencerData(payload, activePage));
  }, [campaignPool, activePage]);

  const AdminActiveBids = useSelector((state) => state?.AdminActiveBids);
  tableData = AdminActiveBids?.results;

  const infTableCol = ["User ID", "Influencer Name", "Influencer Bids Number"];
  const navigate = useNavigate();
  const [detailsTable, setDetailsTable] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleIndex = (index) => {
    activeIndex !== index && setActiveIndex(index);
    setDetailsTable(!detailsTable);

    

  };
  const [query, setQuery] = useState("");
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
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs
          options={[
            {
              title: "Dashboard",
              onClick: () => {
                navigate(`/admin/dashboard`);
              },
            },
            { title: "Active Bids" },
          ]}
        />
      </div>
      <div className="flex flex-col relative max-w-[1280px]">
        <div className="flex gap-4 px-4 m-4 w-[450px] h-[50px] bg-[#F1F1F1]">
          <SearchIcon className="w-7" />
          <input
            type="search"
            placeholder="Search here by campaign ID"
            className="outline-none border-0 w-full bg-[#F1F1F1] "
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4 px-4 mx-4">
          <div className="flex gap-4 items-center">
            <div>
              <p className="text-sm text-[#939393]">Which bid you want to see</p>
            </div>
            <div>
              <button
                className={`border px-4 py-2 rounded-lg shadow ${campaignPool && `border-[#3751FF]`}`}
                onClick={() => setCampaignPool(true)}
              >
                Campaign Pool
              </button>
            </div>
            <div>
              <button
                className={`border px-4 py-2 rounded-lg shadow ${!campaignPool && `border-[#3751FF]`}`}
                onClick={() => setCampaignPool(false)}
              >
                Assign to Influencers
              </button>
            </div>
          </div>
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
                    <th scope="col" className="text-[18px] w-[220px] font-[500] text-gray-900 pl-4 py-4 text-left">
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
                  {search(tableData)?.map((data, i) => {
                    return (
                      <>
                        <tr key={i} className="bg-[#F2F2F2] flex">
                          <td className="pl-4 py-4 whitespace-nowrap text-sm w-[140px]  font-medium text-[#3751FF] underline">
                            <Link to={`/admin/campaign/new-campaign/${data?.campaign_details?.id}`}>
                              <p className="cursor-pointer">{data?.campaign_details?.id}</p>
                            </Link>
                          </td>
                          <td className="text-sm w-[140px] text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                            {data?.campaign_details?.brand_name}
                          </td>
                          <td className="text-sm w-[200px] text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                            {data?.campaign_details?.title}
                          </td>
                          <td className="text-sm w-[220px] text-gray-900 font-light pl-10 py-4 whitespace-nowrap">
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
                        {activeIndex === i && detailsTable && (
                          <tr>
                            {" "}
                            <DetailsTable
                              key={i}
                              campaignId={data?.campaign_details?.id}
                              columnData={infTableCol}
                              rowData={data?.campaign_details}
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
        {tableData?.length ? (
          <div className="w-full mt-2 px-4">
            <Pagination link={AdminActiveBids} activePage={activePage} setActivePage={setActivePage} />
          </div>
        ) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Bids;
