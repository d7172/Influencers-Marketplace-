import React from 'react'
// import AdminCampaignTable from '../../../components/AdminCampaignTable'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CampaignSearchBar from '../../../components/CampaignSearchBar'
import Pagination from '../../../components/Pagination'

function AssignCampaignDetails({route}) {
    const tableData = [
        {
            campaignId: "00001",
            brandName: "Perfect Status",
            campaignTitle: "Enjoy the videos and music",
            days_remaining: "03",
            capaign_date: "2 / 5 / 2021",
            category: "Fashion, DIY",
            amount: 5553
        },
        {
            campaignId: "00001",
            brandName: "Perfect Status",
            campaignTitle: "Enjoy the videos and music",
            days_remaining: "03",
            capaign_date: "2 / 5 / 2021",
            category: "Fashion, DIY",
            amount: 5553
        }
    ]
    return (
        <div className="pt-4 relative">
            <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
                <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: route }]} />
            </div>
            <div className="flex items-center p-4 justify-between w-full mb-5">
                <CampaignSearchBar placeHolder={"Search here"} />
            </div>
            <div className="flex items-center py-4 px-8">
                <CampaignTable tableData={tableData} mainRoute={"campaign"} route={route} />
            </div>
            <div className="absolute bottom-[-100px] right-0">
                <Pagination />
            </div>
        </div>
    )
}

export default AssignCampaignDetails;

function CampaignTable({tableData}) {
    return (
        <div className="flex flex-col max-w-[1280px]">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                                        Campaign Id
                                    </th>
                                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                        Brand Name
                                    </th>
                                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                        Campaign title
                                    </th>
                                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                        Days Remaining
                                    </th>
                                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                        Campaign Date
                                    </th>
                                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                        Category
                                    </th>
                                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                        Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData?.map((data, id) => {
                                    return (
                                        <tr className="" key={id}>
                                            <td
                                                className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer"
                                                // onClick={() => navigate(`/admin/influencer/activeUser/0001`)}
                                            >
                                                {data?.campaignId}
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                                                {data?.brandName}
                                            </td>
                                            <td className="text-sm max-w-[190px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {data?.campaignTitle}
                                            </td>
                                            <td className="text-sm max-w-[190px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {data?.days_remaining}
                                            </td>
                                            <td className="text-sm max-w-[190px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {data?.capaign_date}
                                            </td>
                                            <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {data?.category}
                                            </td>
                                            <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                &#8377;{data?.amount}
                                            </td>
                                            <td
                                                // onClick={() => navigate(`/admin/${mainRoute}/${route}/0001`)}
                                                className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                                            >
                                                View All Bids
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
    )
}