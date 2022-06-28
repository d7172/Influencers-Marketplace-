import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { postPlaceBid } from "../store/infPlaceBid/action";
import CloseBtn from "./CloseBtn";

function PalceBid({ close, deliverablesDetails }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bid, setBid] = useState("");
  const [platform, setPlatform] = useState("");
  const [placebiddescription, setPlacebiddescription] = useState("");
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  const poolId = useSelector((state) => state?.infCampaignPool?.results[0]?.id);
  // console.log(poolid, "poolid");
  // const [platformsList, setPlatformsList] = useState(deliverablesDetails.platforms);

  const handlebid = (e) => {
    dispatch({
      type: "PLACE_BID_SUCCESS",
      data: {
        campaign_details: poolId,
        influencer: loggedInUserData.id,
        influencer_bid_amount: bid,
        description: placebiddescription,
      },
    });
    const data = {
      campaign_details: poolId,
      influencer: loggedInUserData.id,
      influencer_bid_amount: bid,
      description: placebiddescription,
    };
    // console.log(data, "data");
    dispatch(postPlaceBid(data));
    // dispatch(placeBid(data, navigate));
    close();
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <CloseBtn onClick={close} className="absolute right-5 top-7" />
      <h1 className="text-[28px] font-[500] mb-2 ">Place Your Bid</h1>
      <p className="w-390 text-gray-500 text-sm">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex w-full gap-4 items-end my-4" >
        <Dropdown
          label={platform.length ? platform : `Select social platform`}
          className={"w-full"}
          dropdownStyle={"w-[200px]"}
          options={[
            {
              label: "Facebook"
            },
            {
              label: "Instagram"
            }
          ]}
          onChange={(val) => setPlatform(val.label)}
        />
        <Dropdown
          label="Deliverables"
          className={"w-full"}
          dropdownStyle={"w-[150px]"}
          options={[
            {
              label: "Create post"
            },
            {
              label: "Create Story"
            },
          ]}
        />
        <div className="flex flex-col text-left">
          <label htmlFor="" className="text-sm text-gray-900">Days</label>
          <input type="text" className="input-field w-[100px] h-[40px] text-sm rounded-md px-2 py-1 border focus:outline-none text-gray-500" value={1} disabled />
        </div>
        <div className="flex flex-col text-left">
          <label htmlFor="" className="text-sm text-gray-900">Price</label>
          <input type="number" className="input-field w-[110px] h-[40px] text-sm rounded-md px-2 py-1 border focus:outline-none text-gray-500" placeholder="Enter price" />
        </div>
        <div>
          <button className="px-4 py-2 rounded bg-[#3751FF] text-white" >Add</button>
        </div>
      </div>
      <div className="text-left w-full" >
        <h1 className="text-[20px] font-bold mb-2">Selected Platfrom and Prices</h1>
        <div className="flex justify-start" >
          <div className="px-6 py-2 bg-[#EEEEEE] relative rounded-lg text-gray-800" >
            <button className="border border-[#000] rounded-full absolute right-0 top-0" ><svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg></button>
            <p>Facebook - 200</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left gap-1 mt-8 w-full">
        <label>Your Total Bid</label>
        <input
          disabled
          type="text"
          className="input-field text-[18px]"
          placeholder="Enter Bid Amount"
          value={2000}
        />
      </div>
      <div className="flex flex-col text-left gap-1 mt-8 w-full">
        <label className="font-[400] text-[16px] ">Enter your Description</label>
        <textarea
          className=" mt-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
          value={`${placebiddescription}`}
          onChange={(e) => setPlacebiddescription(e.target.value)}
        />
      </div>
      <button className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10" onClick={handlebid}>
        Place your bid
      </button>
    </div>
  );
}

export default PalceBid;
