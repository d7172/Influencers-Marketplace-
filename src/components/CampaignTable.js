import React from "react";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyDialog from "./MyDialog";
import PalceBid from "./PalceBid";

function CampaignTable({ data, query }) {
  const [placeBid, setPlaceBid] = useState(false);
  const infCampaignPool = data;
  const [deliverablesState, setDeliverablesState] = useState([]);
  const navigate = useNavigate();

  const handleClick = (data) => {
    setDeliverablesState(data);
    setPlaceBid(true);
  };

  const [searchParams] = useState(["id", "title"]);

  function search(items) {
    return items?.filter((item) => {
      return searchParams?.some((newItem) => {
        return item[newItem]?.toString()?.toLowerCase()?.indexOf(query.toLowerCase()) > -1;
      });
    });
  }

  const [sort, setSort] = useState(null);
  const [sortbytitle, setSortbytitle] = useState(null);
  const [tableData, setTableData] = useState(data);
  const [filternamedata, setFilternamedata] = useState([]);

  useEffect(() => {
    setTableData(data);
    sortAccendingtitle();
    sortDecendingtitle();
  }, [data, filternamedata]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const sortAccending = (param) => {
    param === "id"
      ? setTableData(tableData.sort((a, b) => a.id - b.id))
      : setTableData(tableData.sort((a, b) => a.id - b.id));
    setSort(0);
  };
  const sortDecending = (param) => {
    param === "id"
      ? setTableData(tableData.sort((a, b) => b.id - a.id))
      : setTableData(tableData.sort((a, b) => b.id - a.id));
    setSort(1);
  };

  const sortAccendingtitle = () => {
    const sortingtitle = tableData?.sort((a, b) => a?.title?.localeCompare(b?.title));
    setFilternamedata(sortingtitle);
    setSortbytitle(0);
  };
  const sortDecendingtitle = () => {
    const sortingtitle = tableData?.sort((a, b) => b?.title?.localeCompare(a?.title));
    setFilternamedata(sortingtitle);
    setSortbytitle(1);
  };

  return (
    <div className="flex flex-col max-w-[1280px] overflow-hidden">
      <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
        <PalceBid close={() => setPlaceBid(false)} deliverablesDetails={deliverablesState} />
      </MyDialog>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left flex flex-row"
                  >
                    Campaign ID
                    <div className="ml-2 mt-1">
                      <span className="cursor-pointer">
                        <img
                          src="/svgs/uparrow.svg"
                          className={`hover:invert-[.5] ${sort === 0 && "invert-[.5]"} `}
                          onClick={() => sortAccending("id", "name", "first_name", "last_name")}
                        />
                        <img
                          src="/svgs/downarrow.svg"
                          className={`hover:invert-[.5] ${sort === 1 && "invert-[.5]"} `}
                          onClick={() => sortDecending("id", "name", "first_name", "last_name")}
                        />
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    <div className="flex flex-row">
                      Campaign Title
                      <span className="cursor-pointer ml-2 mt-1 ">
                        <img
                          src="/svgs/uparrow.svg"
                          className={`hover:invert-[.5] ${sortbytitle === 0 && "invert-[.5]"} `}
                          onClick={() => sortAccendingtitle()}
                        />
                        <img
                          src="/svgs/downarrow.svg"
                          className={`hover:invert-[.5] ${sortbytitle === 1 && "invert-[.5]"} `}
                          onClick={() => sortDecendingtitle()}
                        />
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    From
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Duration
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Amount
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Social Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {search(infCampaignPool)?.map((pool, i) => {
                  return (
                    <tr className="">
                      <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[150px] font-medium text-gray-900">
                        {pool.id}
                      </td>
                      <td className="text-sm flex gap-4  min-w-[240px] max-w-[240px] overflow-hidden text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />
                        {pool.title}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {pool?.from_date}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {pool.project_duration_in_days} Day
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {pool.category}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        &#8377; {pool?.amount}
                      </td>
                      <td className="text-[16px] max-w-[150px] min-w-[170px] flex  relative text-gray-900  font-light pl-6 py-4 whitespace-nowrap">
                        <img
                          className="absolute z-40 w-[20px] "
                          src={`/svgs/${pool.social_platform[0]}.svg`}
                          alt="face"
                        />
                        {/* <img
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
                        /> */}

                        {/* <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1> */}
                      </td>
                      <td
                        onClick={() => {
                          const { social_media_deliverables, admin_amount, number_of_influencer } = pool;
                          handleClick({ social_media_deliverables, admin_amount, number_of_influencer });
                        }}
                        className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer"
                      >
                        Quick Bid
                      </td>
                      <td
                        onClick={() => navigate(`/influencer/campaign/campaign-pool/${pool.id}`)}
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
  );
}

export default CampaignTable;
