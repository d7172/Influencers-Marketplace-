import React from "react";

function CampaignTable() {
  return (
    <div className="flex flex-col max-w-[1280px]">
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
                <tr className="">
                  <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                    #00001
                  </td>
                  <td className="text-sm flex gap-4 items-center justify-center min-w-[250px] max-w-[250px] overflow-hidden text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
                    Enjoy the video and music
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    2/5/2022
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">1 Day</td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Fashion, DIY
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    &#8377; 5,553
                  </td>
                  <td className="text-sm max-w-[170px] relative text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
                    <img className="absolute z-30 left-[34px] w-[20px] h-[20px]" src="/svgs/instagram.svg" alt="face" />
                    <img className="absolute z-20 left-[44px] w-[20px] h-[20px]" src="/svgs/youtube.svg" alt="face" />
                    <img className="absolute z-10 left-[55px] w-[20px] h-[20px]" src="/svgs/linkedin.svg" alt="face" />

                    <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
                  </td>
                  <td className="text-sm max-w-[170px] text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer">
                    Quick Bid
                  </td>
                  <td className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer ">
                    View Details
                  </td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                    #00001
                  </td>
                  <td className="text-sm flex gap-4 items-center justify-center min-w-[250px] max-w-[250px] overflow-hidden text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
                    Enjoy the video and music
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    2/5/2022
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">1 Day</td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Fashion, DIY
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    &#8377; 5,553
                  </td>
                  <td className="text-sm max-w-[170px] relative text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
                    <img className="absolute z-30 left-[34px] w-[20px] h-[20px]" src="/svgs/instagram.svg" alt="face" />
                    <img className="absolute z-20 left-[44px] w-[20px] h-[20px]" src="/svgs/youtube.svg" alt="face" />
                    <img className="absolute z-10 left-[55px] w-[20px] h-[20px]" src="/svgs/linkedin.svg" alt="face" />

                    <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
                  </td>
                  <td className="text-sm max-w-[170px] text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer">
                    Quick Bid
                  </td>
                  <td className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer ">
                    View Details
                  </td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                    #00001
                  </td>
                  <td className="text-sm flex gap-4 items-center justify-center min-w-[250px] max-w-[250px] overflow-hidden text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <img className="w-[24px]" src="/svgs/facebook.svg" alt="face" />
                    Enjoy the video and music
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    2/5/2022
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">1 Day</td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Fashion, DIY
                  </td>
                  <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    &#8377; 5,553
                  </td>
                  <td className="text-sm max-w-[170px] relative text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <img className="absolute z-40 w-[20px] " src="/svgs/facebook.svg" alt="face" />
                    <img className="absolute z-30 left-[34px] w-[20px] h-[20px]" src="/svgs/instagram.svg" alt="face" />
                    <img className="absolute z-20 left-[44px] w-[20px] h-[20px]" src="/svgs/youtube.svg" alt="face" />
                    <img className="absolute z-10 left-[55px] w-[20px] h-[20px]" src="/svgs/linkedin.svg" alt="face" />

                    <h1 className="ml-[70px] text-[16px] font-[400] underline">+2 more</h1>
                  </td>
                  <td className="text-sm max-w-[170px] text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer">
                    Quick Bid
                  </td>
                  <td className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer ">
                    View Details
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignTable;
