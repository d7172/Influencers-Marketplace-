import React, {useState} from 'react'
import { SearchIcon } from "@heroicons/react/solid";
import Pagination from '../../../components/Pagination';
import MyDialog from "../../../components/MyDialog";
import PalceBid from "../../../components/PalceBid";
import { useNavigate } from "react-router-dom";


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
    const campaignColumns = ["Campaign Id", "Brand name", "Campaign Title", "Category", "Amount", "Social Platform", "Status"]
    const [placeBid, setPlaceBid] = useState(false);
    const navigate = useNavigate();
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
                    <div className='  border-2 border-[#3751FF] text-[#3751FF] px-6 py-3 hover:bg-[#3751FF] hover:text-white'
                    onClick={()=>navigate("/admin/campaign/new-campaign/add")}>
                        <button>+ Add New Campaign</button>
                    </div>
                </div>

                <div className='p-4'>
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
                                                {campaignColumns.map((col, index) => (
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
                                                            onClick={() => navigate(`/admin/campaign/new-campaign/${data.campaignId}`)}
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
                </div>
                <div className="absolute bottom-[-100px] right-0 w-full p-4">
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default NewCampaign