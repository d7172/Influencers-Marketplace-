import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import CampaignSearchBar from "../../components/CampaignSearchBar";
import DateRange from "../../components/DateRange";
import Pagination from "../../components/Pagination";
import moment from "moment";
import { getBrandTransitionStatementData, getBrandStatementFilterData, DownloadBrandStatementData } from "../../store/Brand/BrandTransitionStatement/action";


function Statement() {

  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tableData, setTableData] = useState([]);

  const statementData = useSelector((state) => state?.BrandTransactionStatement?.response)
  const filteredData = useSelector((state) => state?.BrandTransactionStatementFilter?.response);

  useEffect(() => {
    const payload = {
      brand_id: loggedInUserData?.id
    };

    dispatch(getBrandTransitionStatementData(payload));
  }, []);

  const downloadStatement = () => {
    const payload = {
      brand_id: loggedInUserData?.id
    };

    dispatch((DownloadBrandStatementData(payload)));
  };
  const handleFilter = () => {
    const payload = {
      brand_id: loggedInUserData?.id,
      date_from: fromDate,
      date_to: toDate
    }
    dispatch(getBrandStatementFilterData(payload));
    setFromDate("");
    setToDate("");
  }

  useEffect(() => {
    setTableData(statementData)
  }, [statementData]);

  useEffect(() => {
    setTableData(filteredData);
  }, [filteredData]);
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Transaction" }, { title: "Statement" }]} />
      </div>
      <div className="mx-10">
        <div className="flex justify-end mt-8">
          <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
        </div>
        <div className="flex justify-between items-center mt-8">
          <DateRange setFromDate={setFromDate} fromDate={fromDate} toDate={toDate} setToDate={setToDate} onClick={handleFilter} />
          <button className="underline text-[#2979FF] text-[16px]" onClick={downloadStatement}>
            Download Statement
          </button>
        </div>
        <StatementTable tableData={tableData} />
        {tableData?.length === 0 && <div className="text-center mt-4">
          <p className="text-gray-500">No data to display.</p>
        </div>}
      </div>
    </>
  );
}

export default Statement;

function StatementTable({ tableData }) {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="w-full text-left">
        <thead className="border-b ">
          <tr>
            <th scope="col" class="text-lg text-gray-900 font-[500] px-6 py-3">
              Campaign ID
            </th>
            <th scope="col" class="text-lg text-gray-900 font-[500] px-6 py-3">
              Campaign Title
            </th>
            <th scope="col" class="text-lg text-gray-900 font-[500] px-6 py-3">
              Date
            </th>
            <th scope="col" class="text-lg text-gray-900 font-[500] px-6 py-3">
              Category
            </th>
            <th scope="col" class="text-lg text-gray-900 font-[500] px-6 py-3">
              Total Amount
            </th>
            <th scope="col" class="text-lg text-gray-900 font-[500] px-6 py-3">
              Amount Given
            </th>
            <th scope="col" class="text-lg text-gray-900 font-[500] px-6 py-3">
              Amount Pending
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {tableData?.map((data, id) => {
            return (
              <tr className="" key={id}>
                <td scope="row" className="px-6 py-4 whitespace-nowrap" >
                  <p className="cursor-pointer text-[#3751FF] underline w-fit" >#{data?.id}</p>
                </td>
                <td className="px-6 py-4">
                  {data?.title}
                </td>
                <td className="px-6 py-4">
                  {moment(data?.date).format("DD/MM/YYYY")}
                </td>
                <td className="px-6 py-4">
                  {data?.category}
                </td>
                <td className="px-6 py-4">
                  &#8377;{data?.amount}
                </td>
                <td className="px-6 py-4">
                  &#8377;{data?.credit}
                </td>
                <td className="px-6 py-4">
                  &#8377;{data?.amount_pending}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
