import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import DateRange from "../../../components/DateRange";
import Pagination from "../../../components/Pagination";
import { DownloadTransStatementData, getTransitionStatementData } from "../../../store/infTransitionStatement/action";
import moment from "moment";

let transitionStatementState = [];

function Statement() {
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {};
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getTransitionStatementData(data));
  }, []);

  const downloadStatement = () => {
    const payload = {};
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    DownloadTransStatementData(data);
  };
  transitionStatementState = useSelector((state) => state?.infTransitionStatement?.results);
  let transitionState = useSelector((state) => console.log(state, "state"));
  console.log(transitionState);
  return (
    <div className="ml-10">
      <div className="flex items-center pr-8 mt-8">
        <Breadcrumbs options={[{ title: "Transition" }, { title: "Statement" }]} />
        <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
      </div>
      <div className="flex justify-between items-center mt-8">
        <DateRange />
        <button className="underline text-[#2979FF] text-[16px]" onClick={downloadStatement}>
          Download Statement{" "}
        </button>
      </div>
      <StatementTable />
      <div className="absolute bottom-4 right-6">
        <Pagination />
      </div>
    </div>
  );
}

export default Statement;

function StatementTable() {
  return (
    <div className="flex flex-col max-w-[1280px] mt-6">
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
                    Campaign Title
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Date
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Total Amount
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Amount Received
                  </th>
                </tr>
              </thead>
              <tbody>
                {transitionStatementState?.map((transStatement, id) => {
                  return (
                    <tr className="" key={id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                        {transStatement?.campaign_id}
                      </td>
                      <td className="text-sm flex gap-4 items-center justify-center min-w-[250px] max-w-[250px] overflow-hidden text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
                        {transStatement?.campaign_title}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {moment(transStatement?.date).format("DD/MM/YYYY")}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {transStatement?.campaign_category}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        &#8377;{transStatement?.total_amt}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        &#8377;{transStatement?.received_amt}
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
  );
}
