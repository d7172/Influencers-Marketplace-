import React, { useEffect } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
// import CampaignTable from "../../../components/CampaignTable";
import Pagination from "../../../components/Pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignCompletedData } from "../../../store/infCampaignCompleted/action";
// import MyDialog from "../../../components/MyDialog";
// import PalceBid from "../../../components/PalceBid";

let tableData = [];
function CompletedCampaign() {
  const [activePage, setActivePage] = useState(1);
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  console.log(JSON.parse(localStorage?.userInfo)?.data, "local storage");
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      category: loggedInUserData?.category,
      influencer_id: loggedInUserData.id,
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getCampaignCompletedData(payload, activePage));
  }, [activePage]);

  const infCampaignCompleted = useSelector((state) => state?.infCampaignCompleted);
  tableData = infCampaignCompleted?.results;
  console.log(tableData, "table data");
  const infCampaignPool = {
    results: [
      {
        id: "00001",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
      {
        id: "00002",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
      {
        id: "00003",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
      {
        id: "00004",
        title: "Enjoy the videos and music",
        project_duration_in_days: 1,
        category: "Fashion, DIY",
        social_platform: ["facebook", "instagram", "linkedin", "youtube"],
      },
    ],
  }; 

  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Campaign" }, { title: "Completed Campaign" }]} />
      </div>
      <div className="max-w-[1280px] pt-6 relative">
        <div className="flex items-center px-8">
          <CampaignSearchBar placeHolder={"Search here by Campaign ID"}  setQuery={setQuery}/>
        </div>
        <CampaignTable data={tableData}  query={query}/>
        {tableData?.length ? (<div className="w-full mt-2 px-4">
          <Pagination link={infCampaignCompleted} activePage={activePage} setActivePage={setActivePage} />
        </div>) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CompletedCampaign;

function CampaignTable({ data ,query }) {
  const infCampaignPool = data;
  const navigate = useNavigate();

  const [searchParams] = useState(["id","title"]);

  function search(items) {
      return items?.filter((item) => {
        return searchParams?.some((newItem) => {
          return (
            item[newItem]?.toString()?.toLowerCase()?.indexOf(query.toLowerCase()) > -1
          );
        });
      });
    }


    const [sort, setSort] = useState(null);

    const [tableDatas, setTableData] = useState(tableData);
    const [sortbytitle, setSortbytitle] = useState(null);
  const [filternamedata, setFilternamedata] = useState([]);

  
  useEffect(() => {
    setTableData(tableData);
    sortAccendingtitle();
    sortDecendingtitle();
}, [tableData,filternamedata])
    const sortAccending = (param) => {
      param === 'id' ? setTableData(tableDatas.sort((a, b) => a.id - b.id)) : setTableData(tableDatas.sort((a, b) => a.id - b.id));
      setSort(0);
  };
  const sortDecending = (param) => {
      param === 'id' ? setTableData(tableDatas.sort((a, b) => b.id - a.id)) : setTableData(tableDatas.sort((a, b) => b.id - a.id));
      setSort(1);
  };

  const sortAccendingtitle = () => {
    const sortingtitle = tableDatas?.sort((a, b) => a?.title?.localeCompare(b?.title));
    console.log("sortAccendingname",sortingtitle);
    setFilternamedata(sortingtitle);
    setSortbytitle(0);
  }
  const sortDecendingtitle = () => {
    const sortingtitle = tableDatas?.sort((a, b) => b?.title?.localeCompare(a?.title));
    console.log("sortDecendingname",sortingtitle);
    setFilternamedata(sortingtitle);
    setSortbytitle(1);
  }




  return (
    <div className="flex flex-col max-w-[1280px] overflow-hidden">
      {/* <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
        <PalceBid close={() => setPlaceBid(false)} />
      </MyDialog> */}
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left flex flex-row">
                    Campaign ID
                    <div className="ml-2 mt-1">
                     <span className='cursor-pointer'><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('id','name','first_name','last_name')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('id','name','first_name','last_name')} /></span>
                     </div>
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                  <div className="flex flex-row">
                            Campaign Title
                     <span className='cursor-pointer ml-2 mt-1 '><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sortbytitle===0)&&('invert-[.5]')} `} onClick={()=>sortAccendingtitle()}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sortbytitle===1)&&('invert-[.5]')} `} onClick={()=>sortDecendingtitle()} /></span>
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
                {search(tableData)?.map((data, i) => {
                  return (
                    <tr className="">
                      <td className="pl-6 py-4 whitespace-nowrap text-sm max-w-[150px] font-medium text-gray-900">
                        {data?.id}
                      </td>
                      <td className="text-sm flex gap-4 items-center justify-center min-w-[240px] max-w-[240px] overflow-hidden text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />
                        {data?.title}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.from_date}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.project_duration_in_days} Day
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        {data?.category}
                      </td>
                      <td className="text-sm max-w-[150px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                        &#8377;{data?.amount}
                      </td>
                      <td className="text-[16px] max-w-[150px] min-w-[170px] flex  relative text-gray-900  font-light pl-6 py-4 whitespace-nowrap">
                        <img
                          className="absolute z-40 w-[20px] "
                          src={`/svgs/${data?.social_platform[0]}.svg`}
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
                        onClick={() => navigate(`/influencer/campaign/completed-campaign/${data?.id}`)}
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
