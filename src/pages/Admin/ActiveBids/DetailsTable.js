import React from 'react'
import { useNavigate } from "react-router-dom";

function DetailsTable({ campaignId ,columnData, rowData }) {
  const navigate = useNavigate();
    return (
        <div className="">
            <table className="w-full">
                <thead className="border-b">
                    <tr>
                        {columnData.map((data, index) => (
                            <th key={index} scope="col" className="text-[18px] font-[500] text-gray-900 pl-4 py-4 text-left">{data}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rowData.map((data, index) => {
                        return (
                            <tr key={index} >
                                <td className='pl-4 py-4 whitespace-nowrap text-sm max-w-[170px]  font-medium text-[#3751FF] underline'>{data.userId}</td>
                                <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">{data.infName}</td>
                                <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">{data.infBidNum}</td>
                                <td className=' pl-4 py-4 whitespace-nowrap text-[#3571FF] overflow-hidden underline cursor-pointer relative' onClick={() => navigate(`/brand/admin/active-bids/${campaignId}`)}>View details</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default DetailsTable