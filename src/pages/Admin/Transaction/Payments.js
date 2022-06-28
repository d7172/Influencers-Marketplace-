import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import DateRange from "../../../components/DateRange";
import Pagination from "../../../components/Pagination";
import { getBrandPaymentData, getInfPaymentData } from "../../../store/Admin/Transactions/Payments/action";

function AdmPayments() {
  const [brand, setBrand] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    const payload = null;
    dispatch(getBrandPaymentData(payload, activePage));
    dispatch(getInfPaymentData(payload, activePage));
  }, [brand, activePage]);
  const AdminBrandPayment = useSelector((state) => state?.AdminBrandPayment);
  const AdminInfPayment = useSelector((state) => state?.AdminInfPayment);
  let tableData = (brand) ? (AdminBrandPayment?.results) : (AdminInfPayment?.results);
  console.log(tableData);
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Transaction" }, { title: "Payments" }]} />
      </div>
      <div className="flex flex-col px-8 pt-4">
        <div>
          <CampaignSearchBar placeHolder={"Search here"} />
        </div>
        <div className="flex justify-between my-4 px-2">
          <div className="flex gap-4 items-center">
            <div>
              <p className="text-sm text-[#939393]">Select</p>
            </div>
            <div>
              <button className={`border px-4 py-2 rounded-lg shadow ${brand && `border-[#3751FF]`}`} onClick={() => setBrand(true)}>
                Brand
              </button>
            </div>
            <div>
              <button className={`border px-4 py-2 rounded-lg shadow ${!brand && `border-[#3751FF]`}`} onClick={() => setBrand(false)}>
                Influencers
              </button>
            </div>
          </div>
          <DateRange />
        </div>
      </div>
      <div className="max-w-[1280px] pt-6 relative">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-4 py-4 text-left">
                      Campaign ID
                    </th>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-4 py-4 text-left">
                      {brand ? "Brand Name" : "Influencer Name"}
                    </th>
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Total Number of Campaign
                    </th>
                    {brand && (
                      <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                        Total Number of Completed
                      </th>
                    )}
                    <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                      Total Number of ongoing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData?.map((data, i) => {
                    return (
                      <tr className="" key={i}>
                        <td className="pl-4 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">#00001</td>
                        {brand ? (
                          <td className="text-sm flex gap-2 w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                            <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />
                            {data?.brand_detail[0]?.first_name}
                          </td>
                        ) : (
                          <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap capitalize">
                            {data?.influ_details[0]?.first_name + " " + data?.influ_details[0]?.last_name}
                          </td>
                        )}
                        <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">{brand ? (data?.campaign_Details?.length) : (data?.campaign_detail?.length)}</td>
                        {brand && (
                          <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                            10
                          </td>
                        )}
                        <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">1</td>
                        {brand ? (<td
                          onClick={() => navigate(`/admin/transaction/payments/brand/${data?.brand_detail[0]?.id}`)}
                          className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                        >
                          View Details
                        </td>) : (
                          <td
                            onClick={() => navigate(`/admin/transaction/payments/influencer/${data?.influ_details[0]?.id}`)}
                            className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                          >
                            View Details
                          </td>
                        )
                        }
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={brand ? AdminBrandPayment : AdminInfPayment} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default AdmPayments;
