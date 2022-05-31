import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { Disclosure } from "@headlessui/react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import MyDialog from "./MyDialog";
// import PalceBid from "./PalceBid";

function Bids() {
  // const [placeBid, setPlaceBid] = useState(false);
  const rowData = [
    {
      campaignId: "0001",
      brandName: "Perfect Status",
      campaignTitle: "Enjoy the videos and music",
      numOfBids: 10,
      category: "Fashion, DIY",
      amount: "5553",
    },
    {
      campaignId: "0002",
      brandName: "Perfect Status",
      campaignTitle: "Enjoy the videos and music",
      numOfBids: 10,
      category: "Fashion, DIY",
      amount: "5553",
    }];
  const columnData = ["Campaign Id", "Brand Name", "Campaign Title", "Total Number of Bids", "Category", "Social Platform", "Amount"];
  const bidDetails = [
    {
      userId: "00001",
      infName: "Steven Sloan",
      infBidNum: "01"
    },
    {
      userId: "00002",
      infName: "Steven Sloan",
      infBidNum: "01"
    },
    {
      userId: "00003",
      infName: "Steven Sloan",
      infBidNum: "01"
    },
    {
      userId: "00004",
      infName: "Steven Sloan",
      infBidNum: "01"
    },
    {
      userId: "00005",
      infName: "Steven Sloan",
      infBidNum: "01"
    },
    {
      userId: "00006",
      infName: "Steven Sloan",
      infBidNum: "01"
    }
  ]
  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-w-[1280px]">
      {/* <MyDialog isOpen={placeBid} close={() => setPlaceBid(false)} className="rounded-8">
        <PalceBid close={() => setPlaceBid(false)} />
      </MyDialog> */}
      <div className="flex gap-4 px-4 m-4 w-[450px] h-[50px] bg-[#F1F1F1]">
        <SearchIcon className="w-7" />
        <input
          type="search"
          placeholder="Search here by campaign ID"
          className="outline-none border-0 w-full bg-[#F1F1F1] "
        />
      </div>
      <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  {columnData.map((data, index) => (
                    <th key={index} scope="col" className="text-[18px] font-[500] text-gray-900 pl-4 py-4 text-left">{data}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rowData.map((data, i) => {
                  return (
                    <tr key={i} className="bg-[#F2F2F2]">
                      <td className="pl-4 py-4 whitespace-nowrap text-sm max-w-[170px]  font-medium text-[#3751FF] underline">
                        <Link to={`/brand/campaign/new-campaign/${data.campaignId}`}><p className="cursor-pointer">#{data.campaignId}</p></Link>
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                        {data.brandName}
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                        {data.campaignTitle}
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                        {data.numOfBids}
                      </td>
                      <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                        {data.category}
                      </td>
                      <td className="text-[16px] w-auto min-w-[170px] flex  relative text-gray-900  font-light pl-4 py-4 whitespace-nowrap">
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
                      <td className="text-sm w-auto text-gray-900 font-light pl-4 py-4 whitespace-nowrap">
                        &#8377;{data.amount}
                      </td>
                      <td
                        className=" pl-4 py-4 whitespace-nowrap overflow-hidden underline cursor-pointer relative"
                      ><button className="text-sm text-[#3751FF] font-[500]">View details</button>
                      </td>
                      <div className="w-full">
                        <table>
                          <thead>
                            <tr className="flex">
                              <th>User Id</th>
                              <th>Influencer Name</th>
                              <th>Influencers Bid Number</th>
                            </tr>
                          </thead>
                          <tbody>
                            {bidDetails.map((data,i)=>{
                              return(
                                <tr key={i} className="flex">
                                  <td>{data.userId}</td>
                                  <td>{data.infName}</td>
                                  <td>{data.infBidNum}</td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
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

export default Bids;

/*
<div class="accordion" id="accordionExample">
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne">
      <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" 
      type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingTwo">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

*/