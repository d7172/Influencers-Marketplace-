import React from 'react'
import { SearchIcon } from "@heroicons/react/solid";
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';
// import Breadcrumbs from '../../components/Breadcrumbs';
// import facebookIcon from '../../../public/svgs/facebook.svg'
// import instagramIcon from '../../../public/svgs/instagram.svg'
// import linkedinIcon from '../../../public/svgs/linkedin.svg'
// import youtubeIcon from '../../../public/svgs/youtube.svg'

function ActiveCampaign() {
  return (
    <>
      <div className="mt-6 flex flex-col relative">
        <div className='flex p-4 justify-between w-full mb-5'>
          <div className="flex gap-4 px-4  w-[450px] h-[50px] bg-[#F1F1F1]">
            <SearchIcon className="w-7" />
            <input
              type="search"
              placeholder="Search here by campaign ID"
              className="outline-none border-0 w-full bg-[#F1F1F1] "
            />
          </div>
        </div>

        <div className='p-4'>
          <CampaignTable campaignType="active-campaign" />
        </div>
        <div className="absolute bottom-[-100px] right-0 w-full p-4">
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default ActiveCampaign;

function CampaignTable({ campaignType }) {
  const navigate = useNavigate();

  return (
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
              <tr className="bg-[#F2F2F2]">
                <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                  #0001
                </td>
                <td className="text-sm w-auto text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Enjoy the videos and music
                </td>
                <td className="text-sm w-auto text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Fashion, DIY
                </td>
                <td className="text-sm w-auto text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  &#8377;5553
                </td>
                <td className="text-[16px] w-auto min-w-[170px] flex  relative text-gray-900  font-light px-6 py-4 whitespace-nowrap">
                  <img
                    className="absolute z-40 w-[20px] "
                    src="/svgs/facebook.svg"
                    alt="face"
                  />
                  <img
                    className="absolute z-40 w-[20px] "
                    src="/svgs/instagram.svg"
                    alt="face"
                  />
                  <img
                    className="absolute z-40 w-[20px] "
                    src="/svgs/linkedin.svg"
                    alt="face"
                  />
                  <img
                    className="absolute z-40 w-[20px] "
                    src="/svgs/youtube.svg"
                    alt="face"
                  />
                  +2 more
                </td>
                <td
                  onClick={() => navigate(`/brand/campaign/${campaignType}/00001`)}
                  className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                >
                  View Details
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}