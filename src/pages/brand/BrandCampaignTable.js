import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function BrandCampaignTable({ route, campaignRows }) {
    const navigate = useNavigate();
    const [sort, setSort] = useState(null);
    const [tableData, setTableData] = useState(campaignRows);

    const sortAccending = (param)=>{
        param==='id'?setTableData(tableData.sort((a,b) => a.id - b.id)):setTableData(tableData.sort((a,b) => a.amount - b.amount));
        setSort(0);
    };
    const sortDecending = (param)=>{
        param==='id'?setTableData(tableData.sort((a,b) => b.id - a.id)):setTableData(tableData.sort((a,b) => b.amount - a.amount));
        setSort(1);
    };
    return (
        <div className='p-4'>
            <div className='flex flex-col max-w-[1280px] overflow-hidden' >
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-[18px] flex justify-between items-center min-w-[155px] font-[500] text-gray-900 pr-6 py-4 text-left">
                                            Campaign ID  <span className='cursor-pointer'><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('id')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('id')} /></span>
                                        </th>
                                        {(route === "new-campaign") && <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                                            Brand Name
                                        </th>}
                                        <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                            Campaign Title
                                        </th>
                                        {(route === "assigned-campaign") && <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                            Campaign Date
                                        </th>}
                                        <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                            Category
                                        </th>
                                        <th scope="col" className="text-[18px] flex justify-between items-center min-w-[110px] font-[500] text-gray-900 pr-6 py-4 text-left">
                                            Amount <span className='cursor-pointer'><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('amount')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('amount')} /></span>
                                        </th>
                                        <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                            Social Platform
                                        </th>
                                        {(route === "new-campaign") && <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                            Status
                                        </th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {campaignRows.map((data, i) => {
                                        return (
                                            <tr className="" key={i}>
                                                <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[150px] font-medium text-gray-900">
                                                    #{data.id}
                                                </td>
                                                {(route === "new-campaign") && <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                    {data.brandName}
                                                </td>}
                                                <td className="text-sm flex gap-4 items-center justify-center min-w-[240px] max-w-[240px] overflow-hidden text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                    <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />
                                                    {data.title}
                                                </td>
                                                {(route === "assigned-campaign") && <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                    {data.date}
                                                </td>}
                                                {/* <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                    {data.project_duration_in_days} Day
                                                </td> */}
                                                <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                    {data.category}
                                                </td>
                                                <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                    &#8377; {data.amount}
                                                </td>
                                                <td className="text-[16px] max-w-[150px] min-w-[170px] flex  relative text-gray-900  font-light pl-6 py-4 whitespace-nowrap">
                                                    <img
                                                        className="absolute z-40 w-[20px] "
                                                        src="/svgs/facebook.svg"
                                                        alt="face"
                                                    />
                                                    <img
                                                        className="absolute z-30 left-[34px] w-[20px] h-[20px]"
                                                        src="/svgs/instagram.svg"
                                                        alt="face"
                                                    />
                                                    <img
                                                        className="absolute z-20 left-[44px] w-[20px] h-[20px]"
                                                        src="/svgs/youtube.svg"
                                                        alt="face"
                                                    />
                                                    <img
                                                        className="absolute z-10 left-[55px] w-[20px] h-[20px]"
                                                        src="/svgs/linkedin.svg"
                                                        alt="face"
                                                    />

                                                    <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
                                                </td>
                                                {/* <td
                                                    onClick={() => setPlaceBid(true)}
                                                    className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer"
                                                >
                                                    Quick Bid
                                                </td> */}
                                                <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                    {data.status}
                                                </td>
                                                <td
                                                    onClick={() => navigate(`/brand/campaign/${route}/${data.id}`)}
                                                    className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer "
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
    )
}

export default BrandCampaignTable