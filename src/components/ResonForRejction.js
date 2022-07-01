import React from "react";
import CloseBtn from "./CloseBtn";

function ResonForRejction({ close, reason = "" ,setReason = () => {} }) {
  return (
    <div className="w-[550px] h-[550px] flex justify-center items-center flex-col">
      <CloseBtn onClick={close} className="absolute right-5 top-7" />
      <h1 className="text-[28px] font-[500] mb-2 ">Reason for rejection</h1>
      <p className="w-390 text-gray-500 text-sm">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="text-left mt-14">
        <label className="font-[400] text-[16px] ">Enter your Description</label>
        <textarea
          className="block w-[390px] h-[200px] mt-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
          value={reason}
          onChange={(val)=>setReason(val.target.value)}
        />
      </div>
      <button onClick={close} className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10">
        Submit
      </button>
    </div>
  );
}

export default ResonForRejction;


