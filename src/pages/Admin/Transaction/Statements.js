import React, { useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import DateRange from '../../../components/DateRange';
import Dropdown from '../Dropdowns';
// import Dropdown from '../../../components/Dropdown';

function Statements() {
    const [category, setCategory] = useState("Brand");
    const [brand, setBrand] = useState("");
    const [influencer, setInfluencer] = useState("");
    const handleCategory = (props) => { setCategory(props.lable) }
    const handleBrand = (props) => { setBrand(props.lable) }
    const handleInfluencer = (props) => { setInfluencer(props.lable) }
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
                        <div className='flex items-center'>
                            <p className='text-[#939393] pr-2 text-sm ' >Select Category</p>
                            <Dropdown
                                lable={category.length ? category : "Brand"}
                                options={[
                                    {
                                        lable: "Brand"
                                    },
                                    {
                                        lable: "Influencer"
                                    }]}
                                func={handleCategory}
                            />
                        </div>
                        {(category === "Brand") && (
                            <div className='flex items-center'>
                                <p className='text-[#939393] pr-2 text-sm ' >Select Brand</p>
                                <Dropdown
                                    lable={brand.length ? brand : "BoAt"}
                                    options={[
                                        {
                                            lable: "BoAt"
                                        },
                                        {
                                            lable: "JBL"
                                        }
                                    ]}
                                    func={handleBrand}
                                />
                            </div>
                        )}
                        {(category === "Influencer") && (
                            <div className='flex items-center'>
                                <p className='text-[#939393] pr-2 text-sm ' >Select Influencer</p>
                                <Dropdown
                                    lable={influencer.length ? influencer : "Jhon Deo"}
                                    options={[
                                        {
                                            lable: "Jhon Deo"
                                        },
                                        {
                                            lable: "Barbara Searcy"
                                        },
                                        {
                                            lable: "Steven Sloan"
                                        }]}
                                    func={handleInfluencer}
                                />
                            </div>
                        )}
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
                            <td className=' pl-4 py-4 whitespace-nowrap text-[#3571FF] overflow-hidden underline cursor-pointer relative' onClick={() => { }}>View details</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    </div>
}