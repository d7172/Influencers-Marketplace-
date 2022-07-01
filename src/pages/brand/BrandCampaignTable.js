import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function BrandCampaignTable({ route, campaignRows }) {
    const navigate = useNavigate();
    const [sort, setSort] = useState(null);
    const [tableData, setTableData] = useState(campaignRows);

    const sortAccending = (param) => {
        param === 'id' ? setTableData(tableData.sort((a, b) => a.id - b.id)) : setTableData(tableData.sort((a, b) => a.amount - b.amount));
        setSort(0);
    };
    const sortDecending = (param) => {
        param === 'id' ? setTableData(tableData.sort((a, b) => b.id - a.id)) : setTableData(tableData.sort((a, b) => b.amount - a.amount));
        setSort(1);
    };
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="border-b">
                    <tr>
                        <th scope="col" className="text-lg text-gray-900 font-[500] px-6 py-3">
                            Campaign ID
                            {/* <span className='cursor-pointer'><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('id')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('id')} /></span> */}
                        </th>
                        {(route === "new-campaign") && <th scope="col" className="text-lg text-gray-900 font-[500] px-6 py-3">
                            Brand Name
                        </th>}
                        <th scope="col" className="text-lg text-gray-900 font-[500] px-6 py-3">
                            Campaign Title
                        </th>
                        {(route === "assigned-campaign") && <th scope="col" className="text-lg text-gray-900 font-[500] px-6 py-3">
                            Campaign Date
                        </th>}
                        <th scope="col" className="text-lg text-gray-900 font-[500] px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="text-lg text-gray-900 font-[500] px-6 py-3">
                            Amount
                            {/* <span className='cursor-pointer'><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('amount')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('amount')} /></span> */}
                        </th>
                        <th scope="col" className="text-lg text-gray-900 font-[500] px-6 py-3">
                            Social Platform
                        </th>
                        {(route === "new-campaign") && <th scope="col" className="text-lg text-gray-900 font-[500] px-6 py-3">
                            Status
                        </th>}
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-900 capitalize">
                    {campaignRows?.map((data, i) => {
                        let platforms = data?.social_media_deliverables?.map((item) => { return item.platform });
                        return (
                            <tr className="" key={i}>
                                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                    <p className={`${route === "new-campaign" ? `text-gray-900 ` : 'cursor-pointer text-[#3751FF] underline'}`}>#{data?.id}</p>
                                </td>
                                {(route === "new-campaign") && <td className="px-6 py-4">
                                    {data?.brand_name}
                                </td>}
                                <td className="px-6 py-4 flex gap-2 items-center justify-center">
                                    <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />
                                    {data?.title}
                                </td>
                                {(route === "assigned-campaign") && <td className="px-6 py-4">
                                    {data?.from_date}
                                </td>}
                                {/* <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                    {data.project_duration_in_days} Day
                                                </td> */}
                                <td className="px-6 py-4">
                                    {data?.category}
                                </td>
                                <td className="px-6 py-4">
                                    &#8377; {data?.amount}
                                </td>
                                <td className="px-6 py-4 flex relative">
                                    {
                                        platforms?.map((item, i) => {
                                            return (
                                                <img
                                                    key={i}
                                                    className={`absolute z-40 w-[20px] `}
                                                    src={`/svgs/${item}.svg`}
                                                    alt="social_platform"
                                                    style={{ left: `${(i + 1) * 12}px` }}
                                                />
                                            )
                                        })
                                    }
                                    <h1 className="ml-[40px] text-sm">+2 more</h1>
                                </td>
                                {route === "new-campaign" && <td className="px-6 py-4">
                                    {data?.status_camp}
                                </td>}
                                <td
                                    onClick={() => navigate(`/brand/campaign/${route}/${data?.id}`)}
                                    className=" text-[#3751FF] px-6 py-4 underline cursor-pointer"
                                >
                                    View Details
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default BrandCampaignTable