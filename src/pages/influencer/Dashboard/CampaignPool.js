import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";
import { getCampaignPoolData } from "../../../store/InfCampaignPool/action";
// import { getCampaignPoolData } from "../../../store/InfCampaignPool/action";

function CampaignPool() {
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  const dispatch = useDispatch();
  console.log(JSON.parse(localStorage?.userInfo)?.data, "local storage");
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    const payload = {
      category: loggedInUserData?.category.toLowerCase(),
      influencer_id: loggedInUserData?.id,
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getCampaignPoolData(data, activePage));
  }, [activePage]);

  const infCampaignPool = useSelector((state) => state?.infCampaignPool);
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Campaign" }, { title: "Campaign Pool" }]} />
      </div>
      <div className="max-w-[1280px] pt-6 relative">
        <div className="flex items-center justify-end px-4">
          <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
        </div>
        <CampaignTable data={infCampaignPool?.results} />
        {infCampaignPool?.results?.length ? (<div className="absolute bottom-[-100px] right-0">
          <Pagination link={infCampaignPool} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )
        }
      </div>
    </>
  );
}

export default CampaignPool;
