import React from "react";
import { useState } from "react";
import CloseBtn from "./CloseBtn";

function PalceBid({ close }) {
  const [bid, setBid] = useState("");
  return (
    <div className="w-[500px] h-[570px] flex justify-center items-center flex-col">
      <CloseBtn onClick={close} className="absolute right-5 top-7" />
      <h1 className="text-[28px] font-[500] mb-2 ">Place Your Bid</h1>
      <p className="w-390 text-gray-500 text-sm">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex flex-col text-left gap-1 mt-14">
        <label>Enter Your Bid</label>
        <input
          type="text"
          className="input-field w-[390px] text-center font-[600] text-[18px]"
          placeholder="Enter Bid Amount"
          value={`${bid}`}
          onChange={(e) => setBid(e.target.value)}
        />
      </div>
      <div className="text-left mt-4">
        <label className="font-[400] text-[16px] ">Enter your Description</label>
        <textarea
          className="block w-[390px] h-[200px] mt-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
        />
      </div>
      <button className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10" onClick={close}>
        Place your bid
      </button>
    </div>
  );
}

export default PalceBid;
