import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AdminCampaignTable from "../../../components/AdminCampaignTable";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CampaignDeliverables from "../../../components/CampaignDeliverables";
import CampaignSearchBar from "../../../components/CampaignSearchBar";
import Pagination from "../../../components/Pagination";

const AdmAssignCampaign = ({ route }) => {
  const tableData = [
    {
      id: "0001",
      brandName: "Perfect Status",
      title: "Enjoy the videos and music",
      days_remaining: "03",
      campaign_date: "2 / 5 / 2021",
      category: "Fashion, DIY",
      amount: "5553"
    },
    {
      id: "0002",
      brandName: "Perfect Status",
      title: "Enjoy the videos and music",
      days_remaining: "03",
      campaign_date: "2 / 5 / 2021",
      category: "Fashion, DIY",
      amount: "5553"
    }
  ];
  const subTableData = [
    {
      userId: "000001",
      assigned_inf_name: "nitin",
      inf_completed_camp: "02",
      num_of_bids: "02"
    }
  ];

  return (
    <div className="pt-4 relative">
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: route }]} />
      </div>
      <div className="flex items-center py-4 px-8">
        <CampaignSearchBar placeHolder={"Search here"} />
      </div>
      <CampaignTable tableData={tableData} subTableData={subTableData} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
};

export default AdmAssignCampaign;
function CampaignTable({ tableData, subTableData }) {
  const navigate = useNavigate();
  const [detailsTable, setDetailsTable] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleIndex = (index) => {
    activeIndex !== index && setActiveIndex(index)
    setDetailsTable(!detailsTable);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="">
            <table className="min-w-full">
              <thead className="border-b">
                <tr className="flex">
                  <th scope="col" className="text-[18px] w-[133px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Campaign Id
                  </th>
                  <th scope="col" className=" text-[18px] w-[155px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Brand Name
                  </th>
                  <th scope="col" className=" text-[18px] w-[210px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Campaign title
                  </th>
                  <th scope="col" className="text-[18px] w-[172px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Days Remaining
                  </th>
                  <th scope="col" className="text-[18px] w-[170px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Campaign Date
                  </th>
                  <th scope="col" className=" text-[18px] w-[125px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className=" text-[18px] font-[500] text-gray-900 pl-6 py-4 text-left">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, id) => {
                  return (
                    <>
                      <tr key={id} className="bg-[#F2F2F2] flex">
                        <td className="text-sm text-[#3751FF] w-[132px] font-[500] pl-6 py-4 whitespace-nowrap underline  cursor-pointer"
                        // onClick={() => navigate(`/admin/influencer/activeUser/0001`)}
                        >
                          {data?.id}
                        </td>

                        <td className="text-sm w-[135px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data?.brandName}
                        </td>
                        <td className="text-sm flex gap-4 items-center justify-center min-w-[240px] max-w-[240px] overflow-hidden text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data?.title}
                        </td>
                        <td className="pl-6 py-4 whitespace-nowrap text-sm w-[170px] font-medium text-gray-900">
                          {data?.days_remaining}
                        </td>
                        <td className="text-sm w-[170px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data?.campaign_date}
                        </td>
                        <td className="text-sm w-[125px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          {data?.category}
                        </td>
                        <td className="text-sm w-[100px] text-gray-900 font-light pl-6 py-4 whitespace-nowrap">
                          &#8377;{data?.amount}
                        </td>
                        <td
                          onClick={() => handleIndex(id)}
                          className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer ">
                          View All Bids
                        </td>
                      </tr>
                      {((activeIndex === id) && (detailsTable)) && (
                        <tr>{" "}<Subtable subTableData={subTableData} /></tr>)}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
};

function Subtable({ subTableData }) {
  const deliverableDetails = [
    {
      infName: "Steven Sloan",
      socialPlatform: "instagram",
      deliverables: ["Story", "Reels", "Swipe up Story / Link", "IGTV"],
      duration: ["1 Days", "1 Days", "1 Days", "1 Days"],
      amount: [500, 500, 500, 500],
      documentsLinks: ["link", "link", "link", "link"]
    },
    {
      infName: "Jhon deo",
      socialPlatform: "facebook",
      deliverables: ["Create Post", "Create Story"],
      duration: ["1 Days", "1 Days"],
      amount: [500, 500],
      documentsLinks: ["xyz", "xyz"]
    }];

  let bidTotal = 0;
  return (
    <>
      <div className="">
        <table className="w-full">
          <thead>
            <tr>
              <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                User Id
              </th>
              <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                Assigned Influencers Name
              </th>
              <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                Influencers Completed Campaign
              </th>
              <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                Number of Bids
              </th>
            </tr>
          </thead>
          <tbody>
            {subTableData.map((data, i) => {
              return (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">{data.userId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">{data.assigned_inf_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">{data.inf_completed_camp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">{data.num_of_bids}</td>
                  <td className="text-sm text-[#3751FF] font-[500] pl-6 py-4 whitespace-nowrap underline cursor-pointer ">View Bids</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="p-4">
          <div className="border-2 w-[180px] my-4 justify-between flex border-dashed border-[#3751FF] p-2">
            <p >Bid Number 1:</p>
            <p className="text-[#3751FF]">&#8377;5553</p>
          </div>
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
                        <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg mr-8"></th>
                        <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[137px] mr-8">Social Platform</th>
                        <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[155px] mr-8">Deliverables</th>
                        <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[80px] mr-8">Duration</th>
                        <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[75px] mr-8">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliverableDetails.map((data, index) => {
                        return (
                          <tr key={index} className="flex mb-8">
                            <td scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg mr-8"><input type="checkbox" name={`${data.socialPlatform}`} /></td>
                            <td className="flex items-start w-[137px] mr-8 capitalize"><img src={`/svgs/${data.socialPlatform}.svg`} className="w-[20px] h-[20px] mr-2" />{data.socialPlatform}</td>
                            <td className="flex flex-col gap-4 w-[155px] mr-8">{data.deliverables.map((data) => { return <p>{data}</p> })}</td>
                            <td className="flex flex-col gap-4 w-[80px] mr-8">{data.duration.map((data) => { return <p>{data}</p> })}</td>
                            <td className="flex flex-col gap-4 w-[75px] mr-8 text-[#3751FF]">{data.amount.map((data) => {
                              bidTotal += data;
                              return <p>&#8377;{data}</p>
                            })}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}