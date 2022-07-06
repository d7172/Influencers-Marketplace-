import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Dropdown from "../../../components/Dropdown";
import Pagination from "../../../components/Pagination";
import { getInfBidData } from "../../../store/infBid/action";

let infBids = [];
function Bids() {
  const [activePage, setActivePage] = useState(1);
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  console.log(JSON.parse(localStorage?.userInfo)?.data, "local storage");
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      influencer_id: loggedInUserData?.id,
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getInfBidData(data, activePage));
  }, [activePage]);
  const infBidsObj = useSelector((state) => state?.infBids);
  infBids = infBidsObj?.results;
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Bids" }, { title: "Active Bids" }]} />
      </div>
      <div className="px-4 relative">
        <div className="flex justify-between mt-6">
          <div className="flex gap-4 items-center">
            <label className="text-[12px] text-[#939393]">Sort By Status</label>
            <Dropdown
              label="Pending for Approval"
              options={[{ label: "Pending for Approval" }]}
              dropdownStyle="w-[200px]"
              className="w-[200px] h-[38px]"
            />
            <button className="rounded-[8px] w-[55px] h-[37px] border border-[#C4C4C4] shadow-dateRange">GO</button>
          </div>
          <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
        </div>
        <BidTable />
        {infBids?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={infBidsObj} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Bids;

function BidTable() {
  const navigate = useNavigate();
  const [detailsTable, setDetailsTable] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleIndex = (index) => {
    activeIndex !== index && setActiveIndex(index);
    setDetailsTable(!detailsTable);
  };
  return (
    <div className="mt-6 pr-4">
      <div className="flex gap-10 border-b-2 pb-2.5 text-[14px] font-[500]">
        <h1 className="w-[150px] text-[18px] font-[500] text-gray-900 text-left">Campaign ID</h1>
        <h1 className="w-[180px] text-[18px] font-[500] text-gray-900 text-left">Campaign Title</h1>
        <h1 className="w-[80px]  text-[18px] font-[500] text-gray-900 text-left">Amount</h1>
        <h1 className="w-[130px] text-[18px] font-[500] text-gray-900 text-left">Social Platform</h1>
        <h1 className="w-[150px] text-[18px] font-[500] text-gray-900 text-left">Number of bids</h1>
      </div>
      {infBids?.map((bid, id) => {
        return (
          <>
            <div className="flex gap-10 px-2 py-4 text-sm text-gray-900 whitespace-nowrap items-start">
              <div className=" w-[95px] font-medium">{bid?.campaign_details?.id}</div>
              <div className="flex gap-4 items-center justify-center w-[230px] overflow-hidden">
                <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
                {bid?.campaign_details?.title}
              </div>
              <div className="w-[80px] ml-1.5">&#8377; {bid?.campaign_details?.amount}</div>
              <div className="relative w-[130px]  ">
                <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
              </div>
              <div className="w-[125px] font-medium">1</div>
              <div onClick={() => handleIndex(id)} className=" text-[#3751FF] font-[500]  underline cursor-pointer ">
                View Details
              </div>
            </div>
            {activeIndex === id && detailsTable && (
              <div className="flex mt-4 gap-4">
                <div className="w-[140px] flex flex-col items-center justify-center border-r-2 pr-4">
                  <h1 className="text-[18px] font-[500]">Bid Number</h1>
                  <h1 className="text-[18px] font-[500] mb-1">1.</h1>
                  <div className=" text-[18px]  text-[#3751FF] border-[#3751FF] font-bold border-2 border-dashed w-[110px] h-[40px] flex items-center justify-center">
                    <h1 className="text-[18px] font-[500] mb-1">&#8377; {bid?.influencer_bid_amount}</h1>
                  </div>
                  <h1 className="text-[#2BC155] mt-2  text-[18px] font-[500]">
                    <div className="w-[12px] h-[12px] inline-block rounded-full bg-[#2BC155]"></div>
                    {bid?.campaign_details?.status_camp}
                  </h1>
                  <h1
                    className="text-[#3751FF] underline mt-1 cursor-pointer text-[18px] font-[500]"
                    onClick={() => navigate(`/influencer/bids/active-bids/${bid?.campaign_details?.id}`)}
                  >
                    View Details
                  </h1>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
