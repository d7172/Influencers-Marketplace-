import React, { useEffect, useState } from 'react'
import { SearchIcon } from "@heroicons/react/solid";
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';
import BrandCampaignTable from './BrandCampaignTable';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useSelector, useDispatch } from 'react-redux';
import { getBrandActiveCampaignData } from '../../store/Brand/Campaign/ActiveCampaign/action';

function ActiveCampaign() {
  const [activePage, setActivePage] = useState(1);
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      status: "active",
      brand_id: loggedInUserData.id
    }
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getBrandActiveCampaignData(payload, activePage));
  }, [activePage])

  const brandCampActive = useSelector((state) => state?.BrandActiveCampaign);
  let tableData = brandCampActive?.results;

  const [query, setQuery] = useState("");

  return (
    <>
      <div className='w-full bg-[#F2F2F2] py-4 px-8'>
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: "Active Campaign" }]} />
      </div>
      <div className="mt-6 flex flex-col relative">
        <div className='flex p-4 justify-between w-full'>
          <div className="flex gap-4 px-4  w-[450px] h-[50px] bg-[#F1F1F1]">
            <SearchIcon className="w-7" />
            <input
              type="search"
              placeholder="Search here by campaign ID"
              className="outline-none border-0 w-full bg-[#F1F1F1] "
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className='p-4'>
          <BrandCampaignTable route={"active-campaign"} campaignRows={tableData} query={query} />
        </div>
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={brandCampActive} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ActiveCampaign;