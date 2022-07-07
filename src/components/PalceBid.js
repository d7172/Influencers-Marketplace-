import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { postPlaceBid } from "../store/infPlaceBid/action";
import CloseBtn from "./CloseBtn";
import { useEffect } from "react";

function PalceBid({ close, deliverablesDetails = [] }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("placeBid",deliverablesDetails);
  const [bid, setBid] = useState("");
  const [placebiddescription, setPlacebiddescription] = useState("");
  const loggedInUserData = JSON.parse(localStorage?.userInfo)?.data[0];
  const poolId = useSelector((state) => state?.infCampaignPool?.results[0]?.id);

  const [platform, setPlatform] = useState("");
  const [platformsList, setPlatformsList] = useState(deliverablesDetails.map((item) => { return { label: item.platform } }));
  const [deliverablesList, setDeliverablesList] = useState([]);
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(null);

  const [data, setData] = useState([]);

  const handlebid = (e) => {
    // dispatch({
    //   type: "PLACE_BID_SUCCESS",
    //   data: {
    //     campaign_details: poolId,
    //     influencer: loggedInUserData.id,
    //     influencer_bid_amount: bid,
    //     description: placebiddescription,
    //   },
    // });
    const payload = {
      campaign_details: poolId,
      influencer: loggedInUserData.id,
      influencer_bid_amount: bidTotal,
      description: placebiddescription,
      extra: {social: data}  
    };
    console.log(payload, "payload");

    const reqData = new FormData();
    reqData.append("data",JSON.stringify(payload))
    dispatch(postPlaceBid(reqData));
    // dispatch(placeBid(data, navigate));
    close();
  };


  let bidTotal = 0;
  useEffect(() => {
    const temp = deliverablesDetails.filter((i) => i.platform == platform)[0];
    // console.log(temp);
    setDeliverablesList(temp?.deliverables?.map((i) => { return { label: i } }));
    setDuration(temp?.duration_in_day)
  }, [platform]);

  function addPlatfrom() {
    const temp = [
      {
        platform: platform,
        amount: price,
      }
    ]
    setData(data.concat(temp));
    setPlatformsList(platformsList.filter((item) => item.label != platform))
    setPlatform("");
    setDeliverablesList([]);
    setDuration(0);
    setPrice(null);
  }
  function removePlatform(platformToRemove) {
    setData(data.filter((item) => item.platform !== platformToRemove));
    const temp = [{ label: platformToRemove }]
    setPlatformsList(platformsList.concat(temp));
  }
  console.log(data);
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
          className={"w-[210px] capitalize"}
          dropdownStyle={"w-[200px] capitalize"}
          options={platformsList}
          onChange={(val) => { setPlatform(val.label) }}
        />
        <Dropdown
          disabled={true}
          label={platform.length ? `Deliverables` : `Please select a platform.`}
          className={"w-full"}
          dropdownStyle={"w-[230px]"}
          options={deliverablesList?.length ? deliverablesList : []}
        />
        <div className="flex flex-col text-left">
          <label htmlFor="" className="text-sm text-gray-900">Days</label>
          <input type="text" className="input-field w-[70px] h-[40px] text-sm rounded-md px-2 py-1 border focus:outline-none text-gray-500" value={duration} disabled />
        </div>
        <div className="flex flex-col text-left">
          <label htmlFor="" className="text-sm text-gray-900">Price</label>
          <input
            id="price"
            type="number"
            value={price}
            name="amount"
            className="input-field w-[110px] h-[40px] text-sm rounded-md px-2 py-1 border focus:outline-none text-gray-500"
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.valueAsNumber)} />
        </div>
        <div>
          <button disabled={!platform.length} className="px-4 py-2 rounded bg-[#3751FF] text-white disabled:bg-[#8494ff]" onClick={() => addPlatfrom()}>Add</button>
        </div>
      </div>
      <div className="text-left w-full" >
        <h1 className="text-[20px] font-bold mb-2">Selected Platfrom and Prices</h1>
        <div className="flex justify-start" >
          {data.map((item) => {
            bidTotal += item.amount;
            return (
              <div className="px-6 py-2 bg-[#EEEEEE] relative rounded-lg text-gray-800 mr-4" >
                <button className="border border-[#000] rounded-full absolute right-0 top-0" ><svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  onClick={() => removePlatform(item.platform)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg></button>
                <p className="capitalize">{item.platform} - {item.amount}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col text-left gap-1 mt-8 w-full">
        <label>Your Total Bid</label>
        <input
          disabled
          type="text"
          className="input-field text-[18px]"
          placeholder="Enter Bid Amount"
          value={bidTotal}
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
