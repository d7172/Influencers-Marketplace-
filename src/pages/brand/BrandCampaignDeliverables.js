import React from 'react'

function BrandCampaignDeliverables({ mainRoute, setDocReqDialog, route, setPaymentDialog, setDocumentPhaseDialog, deliverableDetails }) {
    let bidTotal = 0;
    return (
        <div>
            <div className="mt-8">
                <h1 className="mb-2 text-start text-lg font-bold" >Social media platform & Deliverables </h1>
                <p className="w-[77%] mb-4 text-sm font-[400] text-[#93939399]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 my-4">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="flex w-auto mb-4">
                                    {(route === "admin/active-campaign") && <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[137px] mr-8">Influencer name</th>}
                                    <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[137px] mr-8">Social Platform</th>
                                    <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[155px] mr-8">Deliverables</th>
                                    <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[80px] mr-8">Duration</th>
                                    <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[75px] mr-8">Amount</th>
                                    {(route === "admin/active-campaign") && <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[120px] mr-8">Document link</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {deliverableDetails.map((data, index) => {
                                    return (
                                        <tr key={index} className="flex mb-8">
                                            {(route === "admin/active-campaign") && <td className="flex flex-col gap-4 w-[155px] mr-8"><p>{data.infName}</p></td>}
                                            <td className="flex items-start w-[137px] mr-8 capitalize"><img src={`/svgs/${data.socialPlatform}.svg`} className="w-[20px] h-[20px] mr-2" />{data.socialPlatform}</td>
                                            <td className="flex flex-col gap-4 w-[155px] mr-8">{data.deliverables.map((data) => { return <p>{data}</p> })}</td>
                                            <td className="flex flex-col gap-4 w-[80px] mr-8">{data.duration.map((data) => { return <p>{data}</p> })}</td>
                                            <td className="flex flex-col gap-4 w-[75px] mr-8 text-[#3751FF]">{data.amount.map((data) => {
                                                bidTotal += data;
                                                return <p>&#8377;{data}</p>
                                            })}</td>
                                            {(route === "admin/active-campaign") &&
                                                <td className='flex flex-col gap-4 w-[75px] mr-8'>
                                                    {data.documentsLinks.map((data) => {
                                                        return (
                                                            ((data === "link") ? (<a className='underline text-[#3751FF] cursor-pointer'>Click here</a>) : (<a className='underline text-[#3751FF] cursor-pointer' onClick={()=>setDocReqDialog(true)} >Request to upload Document</a>))
                                                        )
                                                    })
                                                    }
                                                </td>}
                                            {(route === "brand/active-campaign") &&
                                                <td className='flex flex-col gap-4 w-[75px] mr-8'>
                                                    {data.documentsLinks.map((data) => {
                                                        return (
                                                            <a className='underline text-[#3751FF] cursor-pointer'>Click here</a>
                                                        )
                                                    })
                                                    }
                                                </td>}
                                            {(route === "admin/active-campaign" || route === "brand/active-campaign") && <a className='underline text-[#3751FF] cursor-pointer' onClick={() => setDocumentPhaseDialog(true)}>View Documents</a>
                                            }
                                        </tr>
                                    )
                                })}
                                <div className="w-[505px]">
                                    <div className="w-[578px] my-8 h-[2px] bg-[#EEEEEE]" ></div>
                                    <div className="my-16 flex w-full justify-end gap-4">
                                        <h1 className="text-2xl font-bold mr-4">{(route.includes("admin") ? `Influencers Bid Total` : `Portal Quotation`)}</h1>
                                        <p className="font-bold text-2xl text-[#3751FF]">&#8377;{bidTotal}</p>
                                    </div>
                                    <div className="w-72 ml-auto h-1  bg-[#EEEEEE]" ></div>
                                    <div className="my-16 flex w-full justify-end gap-4">
                                        <h1 className="text-2xl font-bold mr-4 w-[235px]">{(route.includes("admin") ? `Your Bid` : `Your Amount`)}</h1>
                                        <p className="font-bold text-2xl text-[#3751FF]">&#8377;6000</p>
                                    </div>
                                    <div className="w-[578px] my-8 h-[2px] bg-[#EEEEEE]" ></div>
                                    {route === "admin/assigned-campaign" && <div className="my-16 items-end flex flex-col text-right w-full justify-end gap-4">
                                        <h1 className="text-2xl font-bold ml-8 w-[235px]">Your margin</h1>
                                        <input type="text" className='w-[177px] h-12 px-4 text-[#3751FF] border rounded-sm text border-gray-400 focus:outline-none' />
                                    </div>}
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {(route === "brand/active-campaign" || route === "brand/assigned-campaign") && <div className="mt-14 flex w-[50%] justify-end">
                <div>
                    <button
                        // onClick={() => setPlaceBid(true)}
                        className="bg-[#3751FF] rounded-full text-white w-[171px] h-[54px] mr-10"
                    >
                        Accept
                    </button>
                    <button
                        // onClick={() => setRejectBid(true)}
                        className="text-[#3751FF] border-[#3751FF] rounded-full bg-white border-2 w-[171px] h-[54px]"
                    >
                        Reject
                    </button>
                </div>
            </div>}
            {(route === "admin/assigned-campaign") && <div className="mt-14 flex w-[50%] justify-end">
                <div>
                    <button
                        // onClick={() => setPlaceBid(true)}
                        className="bg-[#3751FF] rounded-full text-white w-[271px] h-[54px] mr-10"
                    >
                        Assigned Quotation to Brand
                    </button>
                    <button
                        // onClick={() => setRejectBid(true)}
                        className="text-[#455880] border-[#3751FF] rounded-full bg-white border-2 w-[171px] h-[54px]"
                    >
                        Cancle
                    </button>
                </div>
            </div>}
            {(route === "admin/active-campaign" || route === "brand/active-campaign") && <div>
                <div className="flex p items-start my-8">
                    <div className="flex flex-col">
                        <h1 className='font-[600]'>Payment Sent Details by Brand</h1>
                        <table>
                            <thead>
                                <tr className="flex my-4 text-left">
                                    <th className="w-[200px]">Date</th>
                                    <th className="w-[200px]">Amount</th>
                                    <th className="w-[200px]">Source</th>
                                    <th className="w-[200px]">UTR Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="flex my-4">
                                    <td className="w-[200px]">12 / 2 / 2020</td>
                                    <td className="w-[200px]">&#8377;5500</td>
                                    <td className="w-[200px]">Brand</td>
                                    <td className="w-[200px]">0123456789</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h1 className='font-[600]'>Hold Payment: &#8377;4840</h1>
                        <p className='text-sm' >(This payment will be released on 26 /11 / 2022)</p>
                    </div>
                </div>
                <div className="w-[50%] mt-10">
                    <button onClick={() => setPaymentDialog(true)} className="bg-[#3751FF] px-8 py-4 rounded-full text-white mr-10">Define Payment Terms</button>
                </div>

            </div>}
        </div>
    )
}

export default BrandCampaignDeliverables