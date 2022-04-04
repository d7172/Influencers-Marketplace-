import React from "react";
import CloseBtn from "./CloseBtn";

function ConnectSocialFeed({ name = "Instagram" }) {
  return (
    <div className="w-[600px] h-full flex flex-col items-center justify-center">
      <CloseBtn className="absolute right-5 top-7" />
      <h1 className="mb-4 text-color text-2xl">How to Connect your Account with {name}</h1>
      <p className="text-sm w-390 text-gray-400 text-center mb-7 m-auto">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="w-[520px] h-[230px] rounded-8 overflow-hidden">
        <img src="/svgs/socialConnect.svg" alt="social Connect" />
      </div>
      <h1 className="mt-5">
        Know Your {name} id <span className="color-primary underline">Clickhere</span>{" "}
      </h1>
      <div className="mt-5">
        <input
          className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
          id="id"
          type="text"
          placeholder={`Add ${name} id here`}
        />
      </div>
      <div className="mt-12 flex justify-center cursor-pointer">
        <button className="w-[277px] rounded-[50px] bg-primary text-white py-2">Submit</button>
      </div>
      <p className="text-sm text-gray-400 w-[409px] m-auto mt-10">
        Having trouble? Please contact help@yourdomain.com or you can call on 1800-200-3200 for further support.
      </p>
    </div>
  );
}

export default ConnectSocialFeed;
