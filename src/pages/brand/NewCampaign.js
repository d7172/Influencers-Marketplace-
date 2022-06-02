import React from 'react'
import { SearchIcon } from "@heroicons/react/solid";
import BrandCampaignTable from '../../components/BrandCampaignTable';
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';
// import Breadcrumbs from '../../components/Breadcrumbs';
// import facebookIcon from '../../../public/svgs/facebook.svg'
// import instagramIcon from '../../../public/svgs/instagram.svg'
// import linkedinIcon from '../../../public/svgs/linkedin.svg'
// import youtubeIcon from '../../../public/svgs/youtube.svg'

function NewCampaign() {
    const campaignData = [
        {
            campaignId: "0001",
            brandName: "Perfect Status",
            campaignTitle: "Enjoy the videos and music",
            category: "Fashion, DIY",
            amount: "5553",
            // socialPlatform: [ facebookIcon, instagramIcon, linkedinIcon, youtubeIcon ],
            status: "Approved"
        },
        {
            campaignId: "0002",
            brandName: "Perfect Status",
            campaignTitle: "Enjoy the videos and music",
            category: "Fashion, DIY",
            amount: "5553",
            // socialPlatform: [ facebookIcon, instagramIcon, linkedinIcon, youtubeIcon ],
            status: "Approved"
        }
    ]
    const navigate = useNavigate();
    const campaignColumns = ["Campaign Id", "Brand name", "Campaign Title", "Category", "Amount", "Social Platform", "Status"]
    return (
        <>
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
                    <div className='  border-2 border-[#3751FF] text-[#3751FF] px-6 py-3 hover:bg-[#3751FF] hover:text-white'>
                        <button onClick={()=>navigate(`/brand/campaign/new-campaign/add`)}>+ Add New Campaign</button>
                    </div>
                </div>

                <div className='p-4'>
                    <BrandCampaignTable campaignData={campaignData} campaignColumns={campaignColumns} campaignType={"new-campaign"}/>
                </div>
                <div className="absolute bottom-[-100px] right-0 w-full p-4">
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default NewCampaign