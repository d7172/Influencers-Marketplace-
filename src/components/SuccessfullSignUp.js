import React from "react";
import CloseBtn from "./CloseBtn";

function SuccessfullSignUp() {
  return (
    <div className="w-[608px] m-auto">
      <CloseBtn className="absolute right-5 top-7" />
      <h1 className="font-sm text-[26px] w-[326px] m-auto">Your registration has been successfully done</h1>
      <p className="text-sm mt-2 text-gray-500 mb-5">Application no : 1234567890</p>
      <img className="m-auto w-[200px]" src="/brand.svg" alt="Is influancer" />
      <h1 className="font-sm w-[333px] m-auto mt-8">Your Application is under process will get back to you in 24 hr</h1>
      <div className="mt-10 flex justify-center cursor-pointer">
        <button className="w-[277px] rounded-[50px] bg-primary text-white py-2">Done</button>
      </div>
      <p className="text-sm text-gray-400 w-[409px] m-auto mt-10">
        Having trouble? Please contact help@yourdomain.com or you can call on 1800-200-3200 for further support.
      </p>
    </div>
  );
}

export default SuccessfullSignUp;
