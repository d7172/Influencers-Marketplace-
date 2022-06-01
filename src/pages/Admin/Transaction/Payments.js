import React, {useState} from 'react'
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import DateRange from '../../../components/DateRange';
import Pagination from "../../../components/Pagination";

function Payments() {
    const [brand, setBrand] = useState(true);
    return (
        <>
            <div className="flex flex-col px-8 pt-4">
                {/* <Breadcrumbs options={[{ title: "Transaction" }, { title: "Payments" }]} /> */}
                <div><CampaignSearchBar /></div>
                <div className='flex justify-between my-4 px-8'>
                    <div className='flex gap-4 items-center'>
                        <div><p>Select</p></div>
                        <div>
                            <button className='px-4 py-2 rounded-lg shadow' onClick={()=>setBrand(true)}>Brand</button>
                        </div>
                        <div>
                            <button className='px-4 py-2 rounded-lg shadow' onClick={()=>setBrand(false)}>Influencers</button>
                        </div>
                    </div>
                    <DateRange />
                </div>
            </div>
            <div className="max-w-[1280px] pt-6 relative">
                <div className="flex flex-col max-w-[1280px]">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                Campaign ID
                                            </th>
                                            <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                {brand ? "Brand Name" : "Influencer Name"}
                                            </th>
                                            <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                Total Number of Campaign
                                            </th>
                                            {brand && <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                Total Number of Completed
                                            </th>}
                                            <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                Total Number of ongoing
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td className="pl-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                #00001
                                            </td>
                                            {brand ? (<td className="text-sm flex gap-4 items-center justify-center overflow-hidden text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />BoAt
                                            </td>) : (<td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                John Deo
                                            </td>)}
                                            <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                10
                                            </td>
                                            {brand && <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1
                                            </td>}
                                            <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1
                                            </td>
                                            <td
                                                onClick={(() => { })}
                                                className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                                            >
                                                View Details
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-100px] w-full px-4 right-0">
                    <Pagination />
                </div>
            </div>
        </>

    )
}

export default Payments