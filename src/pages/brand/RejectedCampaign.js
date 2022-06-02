import React from 'react'
import { SearchIcon } from "@heroicons/react/solid";
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';
import BrandCampaignTable from './BrandCampaignTable';
import Breadcrumbs from '../../components/Breadcrumbs';
// import facebookIcon from '../../../public/svgs/facebook.svg'
// import instagramIcon from '../../../public/svgs/instagram.svg'
// import linkedinIcon from '../../../public/svgs/linkedin.svg'
// import youtubeIcon from '../../../public/svgs/youtube.svg'

function RejectedCampaign() {
  const campaignData = [
    {
      id: "0001",
      title: "Enjoy the videos and music",
      category: "Fashion, DIY",
      amount: "5553",
      socialPlatform: ["facebook", "instagram", "linkedin", "youtube"],
    },
    {
      id: "0002",
      brandName: "Perfect Status",
      title: "Enjoy the videos and music",
      category: "Fashion, DIY",
      amount: "5553",
      socialPlatform: ["facebook", "instagram", "linkedin", "youtube"],
    },
  ]
  return (
    <>
      <div className='w-full bg-[#F2F2F2] py-4 px-8'>
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: "Rejected Campaign" }]} />
      </div>
      <div className="mt-6 flex flex-col relative">
        <div className='flex p-4 justify-between w-full mb-5'>
          <div className="flex gap-4 px-4  w-[450px] h-[50px] bg-[#F1F1F1]">
            <SearchIcon className="w-7" />
            <input
              type="search"
              placeholder="Search here by campaign ID"
              className="outline-none border-0 w-full bg-[#F1F1F1] "
            />
          </div>
        </div>

        <div className='p-4'>
          <BrandCampaignTable route={"rejected-campaign"} campaignRows={campaignData} />
        </div>
        <div className="absolute bottom-[-100px] right-0 w-full p-4">
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default RejectedCampaign;