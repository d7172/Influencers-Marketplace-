import React, { useEffect, useState } from 'react'
import { SearchIcon } from "@heroicons/react/solid";
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';
import BrandCampaignTable from './BrandCampaignTable';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useSelector, useDispatch } from 'react-redux';
import { getBrandRejectedCampaignData } from '../../store/Brand/Campaign/RejectedCampaign/action';
// import facebookIcon from '../../../public/svgs/facebook.svg'
// import instagramIcon from '../../../public/svgs/instagram.svg'
// import linkedinIcon from '../../../public/svgs/linkedin.svg'
// import youtubeIcon from '../../../public/svgs/youtube.svg'

function RejectedCampaign() {
  const [activePage, setActivePage] = useState(1);
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      status: "reject",
      brand_id: loggedInUserData.id
    }
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getBrandRejectedCampaignData(payload, activePage));
  }, [activePage])

  const brandCampRejected = useSelector((state) => state?.BrandRejectedCampaign);
  let tableData = brandCampRejected?.results;
  
  return (
    <>
      <div className='w-full bg-[#F2F2F2] py-4 px-8'>
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: "Rejected Campaign" }]} />
      </div>
      <div className="mt-6 flex flex-col relative">
        <div className='flex p-4 justify-between w-full mb-5'>
          {/* <div className="flex gap-4 px-4  w-[450px] h-[50px] bg-[#F1F1F1]">
            <SearchIcon className="w-7" />
            <input
              type="search"
              placeholder="Search here by campaign ID"
              className="outline-none border-0 w-full bg-[#F1F1F1] "
            />
          </div> */}
        </div>

        <div className='p-4'>
          <BrandCampaignTable route={"rejected-campaign"} campaignRows={tableData} />
        </div>
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={brandCampRejected} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default RejectedCampaign;