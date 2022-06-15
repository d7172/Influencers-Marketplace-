import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Dropdown from "../../../components/Dropdown";
import MyDialog from "../../../components/MyDialog";
import CloseBtn from "../../../components/CloseBtn";
// import ReasonForRejection from "../../../components/ResonForRejction";
import { getCampaignActiveData } from "../../../store/infCampaignActive/action";
import Pagination from "../../../components/Pagination";

let tableData = [];

function ActiveCampaign() {
  const [activePage, setActivePage] = useState(1);
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  console.log(JSON.parse(localStorage?.userInfo)?.data, "local storage");
  // console.log(loggedInUserData, "logged in user");
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      category: loggedInUserData.category || "beauty",
      status: "active",
      influencer_id: loggedInUserData.id,
    };
    const data = new FormData();
    data.append("data", JSON.stringify(payload));
    dispatch(getCampaignActiveData(payload, activePage));
  }, [activePage]);

  const infCampaignActive = useSelector((state) => state?.infCampaignActive);
  tableData = infCampaignActive?.results;
  return (
    <div className="px-4 relative">
      <Breadcrumbs options={[{ title: "campaign" }, { title: "Active campaign" }]} />
      <div className="flex justify-between mt-2">
        <div className="flex gap-4 items-center">
          <label className="text-[12px] text-[#939393]">Sort By Status</label>
          <Dropdown
            label="Pending for Approval"
            options={[{ label: "Pending for Approval" }]}
            dropdownStyle="w-[200px]"
            className="w-[200px] h-[38px]"
          />
          <button className="rounded-[8px] w-[55px] h-[37px] border border-[#C4C4C4] shadow-dateRange">GO</button>
        </div>
        <CampaignSearchBar placeHolder={"Search here by campaign ID"} />
      </div>
      <ActiveCampaignTable tableData={tableData} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination link={infCampaignActive} activePage={activePage} setActivePage={setActivePage}/>
      </div>
    </div>
  );
}

export default ActiveCampaign;

function ActiveCampaignTable({ tableData }) {
  const [detailsTable, setDetailsTable] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [reasonDialog, setReasonDialog] = useState(false);

  const handleIndex = (index) => {
    activeIndex !== index && setActiveIndex(index);
    setDetailsTable(!detailsTable);
  };
  return (
    <div className="flex flex-col max-w-[1280px] overflow-hidden">
      <MyDialog isOpen={reasonDialog} close={() => setReasonDialog(false)} className="rounded-8">
        <div className="w-[550px] h-[550px] flex justify-center items-center flex-col">
          <CloseBtn
            onClick={() => {
              setReasonDialog(false);
            }}
            className="absolute right-5 top-7"
          />
          <h1 className="text-[28px] font-[500] mb-2 ">Reason for rejection</h1>
          <p className="w-390 text-gray-500 text-sm text-left">
            Log in to your account using email and password provided during registration.
          </p>
          <div className="text-left mt-14">
            <p className="block w-[390px] h-auto mt-1 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia est necessitatibus dignissimos
              aliquam optio accusamus dolorem hic amet labore, id, perferendis tenetur pariatur nostrum quidem expedita
              officia reprehenderit doloremque itaque ea. Ipsam ab saepe nostrum ratione suscipit amet laudantium libero
              culpa dignissimos nam, nesciunt aperiam cupiditate quos voluptatum, odit consequuntur commodi non quia
              natus.
            </p>
          </div>
          <button
            onClick={() => {
              setReasonDialog(false);
            }}
            className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10"
          >
            Close
          </button>
        </div>
      </MyDialog>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="">
            <table className="min-w-full">
              <thead className="border-b">
                <tr className="flex">
                  <th scope="col" className="text-[18px] min-w-[130px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Campaign ID
                  </th>
                  <th scope="col" className="text-[18px] min-w-[252px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Campaign Title
                  </th>
                  <th scope="col" className="text-[18px] min-w-[120px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    From
                  </th>
                  <th scope="col" className="text-[18px] min-w-[115px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Duration
                  </th>
                  <th scope="col" className="text-[18px] min-w-[118px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-[18px] min-w-[110px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Amount
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Social Platform
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, i) => {
                  return (
                    <>
                      <tr className="flex">
                        <td className="pl-6 py-4 min-w-[130px] whitespace-nowrap text-sm font-medium text-gray-900">
                          #{data?.id}
                        </td>
                        <td className="text-sm flex gap-2 items-center justify-center min-w-[250px] overflow-hidden text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          <img className="w-[24px]" src="/svgs/campaignTitle.svg" alt="face" />
                          {data?.title}
                        </td>
                        <td className="text-sm min-w-[120px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data.from_date}
                        </td>
                        <td className="text-sm min-w-[115px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data?.number_of_days} Day
                        </td>
                        <td className="text-sm min-w-[118px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data?.category}
                        </td>
                        <td className="text-sm min-w-[110px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          &#8377; {data?.amount}
                        </td>
                        <td className="text-[16px] min-w-[170px] flex  relative text-gray-900  font-light pl-6 py-4 whitespace-nowrap">
                          <img
                            className="absolute z-40 w-[20px] "
                            // src={`/svgs/${data?.social_platform[0]}.svg`}
                            alt="face"
                          />

                          {/* <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1> */}
                        </td>
                        <td className="text-sm min-w-[110px] max-w-[150px] text-[#2BC155] font-light pl-6 py-4 whitespace-nowrap">
                          Pending for approval
                        </td>
                      </tr>
                      <tr className="w-auto flex justify-between items-center">
                        <td>
                          <input type="checkbox" className="w-[16px]" />
                          <label className="text-[14px] text-[#3751FF] font-[400] ml-2.5">Submit for Approval</label>
                        </td>
                        <td
                          onClick={() => handleIndex(i)}
                          className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer "
                        >
                          View Details
                        </td>
                      </tr>
                      {activeIndex === i && detailsTable && (
                        <tr>
                          {" "}
                          <Details setReasonDialog={setReasonDialog} id={data?.id}/>{" "}
                        </tr>
                      )}
                    </>
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

function Details({ setReasonDialog, id }) {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="flex flex-col items-center gap-4 mr-4">
        <h1 className="text-[22px] font-bold">Campaign Number</h1>
        <h1 className="text-[22px] font-bold">1.</h1>
        <h1 className="text-sm text-[#939393]">(Approval rejected)</h1>
        <h1 className="underline text-[#3751FF] text-sm cursor-pointer" onClick={() => setReasonDialog(true)}>
          View Reason
        </h1>
        <h1
          className="underline text-[#3751FF] text-sm cursor-pointer"
          onClick={() => navigate(`/influencer/campaign/active-campaign/${id}`)}
        >
          Re Apply
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4 mr-4">
        <h1 className="text-[22px] font-bold">Campaign Number</h1>
        <h1 className="text-[22px] font-bold">2.</h1>
        <h1 className="text-sm text-[#939393]">(Approval rejected)</h1>
        <h1 className="underline text-[#3751FF] text-sm cursor-pointer" onClick={() => setReasonDialog(true)}>
          View Reason
        </h1>
        <h1
          className="underline text-[#3751FF] text-sm cursor-pointer"
          onClick={() => navigate(`/influencer/campaign/active-campaign/${id}`)}
        >
          Re Apply
        </h1>
      </div>
    </div>
  );
}
