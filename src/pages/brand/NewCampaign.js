import React, { useEffect, useState } from 'react'
import { SearchIcon } from "@heroicons/react/solid";
import BrandCampaignTable from './BrandCampaignTable';
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getBrandNewCampaignData } from '../../store/Brand/Campaign/NewCampaign/action';
import { useDispatch, useSelector } from 'react-redux';

// import facebookIcon from '../../../public/svgs/facebook.svg'
// import instagramIcon from '../../../public/svgs/instagram.svg'
// import linkedinIcon from '../../../public/svgs/linkedin.svg'
// import youtubeIcon from '../../../public/svgs/youtube.svg'

function NewCampaign() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState(1);
    useEffect(() => {
        dispatch(getBrandNewCampaignData(null, activePage))
    }, [activePage])
    let campaignData = useSelector((state) => state?.BrandNewCampaign);
    let tableData = campaignData?.results;
    return (
        <>
            <div className='w-full bg-[#F2F2F2] py-4 px-8'>
                <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: "New Campaign" }]} />
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
                    <div className='  border-2 border-[#3751FF] text-[#3751FF] px-6 py-3 hover:bg-[#3751FF] hover:text-white'>
                        <button onClick={() => navigate(`/brand/campaign/new-campaign/add`)}>+ Add New Campaign</button>
                    </div>
                </div>

                <div className='p-4'>
                    <BrandCampaignTable route={"new-campaign"} campaignRows={tableData} />
                </div>
                {tableData?.length ? (<div className="w-full mt-2 px-4">
                    <Pagination link={campaignData} activePage={activePage} setActivePage={setActivePage} />
                </div>) : (
                    <div className="text-center mt-4">
                        <p className="text-gray-500">No data to display.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default NewCampaign