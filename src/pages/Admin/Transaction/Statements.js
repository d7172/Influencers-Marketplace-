import React, { useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import DateRange from '../../../components/DateRange';
// import Dropdown from '../../../components/Dropdown';

function Statements() {
    return (
        <>
            <div className="max-w-[1280px] pt-6 relative">
                <div className="bg-[#F2F2F2] w-full py-4 px-8 mb-4" >
                    <Breadcrumbs options={[{ title: "Transaction" }, { title: "Statement" }]} />
                </div>
                <div className='flex justify-between py-4 px-8 mb-4 items-center'>
                    <CampaignSearchBar />
                    <div>
                        <h1 className='text-[#3751FF] underline cursor-pointer' >Download as Statement</h1>
                    </div>
                </div>
                <div className='flex justify-between px-6' >
                    <div className='flex gap-2'>
                        <div className='flex items-center ' >
                            <p className='text-[#939393] pr-2 text-sm ' >Select Category</p>
                            <div className="flex justify-center">
                                <div>
                                    <div className="dropdown relative">
                                        <button
                                            className="dropdown-toggle px-6 py-2.5 bg-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Brand
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path
                                                    fill="currentColor"
                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                                ></path>
                                            </svg>
                                        </button>
                                        <ul
                                            className=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 px-4 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">Brand</a>
                                            </li>
                                            <li>
                                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">Brand</a>
                                            </li>
                                            <li>
                                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 ">Brand</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <p className='text-[#939393] pr-2 text-sm ' >Select Brand</p>
                            <div className="flex justify-center">
                                <div>
                                    <div className="dropdown relative">
                                        <button
                                            className="dropdown-toggle px-6 py-2.5 bg-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            BoAt
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path
                                                    fill="currentColor"
                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                                ></path>
                                            </svg>
                                        </button>
                                        <ul
                                            className=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 px-4 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#">BoAt</a>
                                            </li>
                                            <li>
                                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">BoAt</a>
                                            </li>
                                            <li>
                                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#">BoAt</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="rounded-[8px] w-[55px] h-[37px] border border-[#C4C4C4] shadow-dateRange">GO</button>
                        </div>
                    </div>
                    <div><DateRange /></div>
                </div>
                <Table />
            </div>
        </>
    )
}

export default Statements;

function Table() {
    const [detailsTable, setDetailsTable] = useState(false);
    function showTable() {
        // console.log("handlestabke");
        console.log("clicked");
        ((detailsTable) ? (setDetailsTable(false)) : (setDetailsTable(true)));
        // (detailsTable) && setDetailsTable(false)
        // console.log(detailsTable);
    }
    const infTableCol = ["Campaign ID", "Amount recived", "Amount pending"];
    const infTableRow = [
        {
            userId: "00001",
            infName: "12.3k",
            infBidNum: "4.3k"
        },
        {
            userId: "00001",
            infName: "12.3k",
            infBidNum: "4.3k"
        },
        {
            userId: "00001",
            infName: "12.3k",
            infBidNum: "4.3k"
        },
        {
            userId: "00001",
            infName: "12.3k",
            infBidNum: "4.3k"
        },
        {
            userId: "00001",
            infName: "12.3k",
            infBidNum: "4.3k"
        }
    ]
    return (
        <>
            <div className='py-4'>
                <div className='flex flex-col max-w-[1280px]'>
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                Brand Name
                                            </th>
                                            <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                Total Number of Campaign
                                            </th>
                                            <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                Total Amount Recived
                                            </th>
                                            <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                                                Total Amount Pending
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[150px] font-medium text-gray-900">
                                                <img className="w-[24px] inline" src="/svgs/campaignTitle.svg" alt="face" />
                                                <p className='inline' >BoAt</p>
                                            </td>
                                            <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[150px] font-medium text-gray-900">
                                                5
                                            </td>
                                            <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                &#8377;50.3k
                                            </td>
                                            <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                                                &#8377;50.3k
                                            </td>
                                            <td
                                                onClick={() => { showTable() }}
                                                className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer "
                                            >
                                                View Details
                                            </td>
                                        </tr>
                                        <tr> <DetailsTable campaignId={"00001"} columnData={infTableCol} rowData={infTableRow} /></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function DetailsTable({ campaignId, columnData, rowData }) {
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
                            <td className=' pl-4 py-4 whitespace-nowrap text-[#3571FF] overflow-hidden underline cursor-pointer relative' onClick={() => {}}>View details</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    </div>
}