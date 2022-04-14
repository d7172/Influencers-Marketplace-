import React from "react";
import { imageSvg } from "../pages/influencer/SignUp/PersonalDetails";
import CloseBtn from "./CloseBtn";

function CampaignUploadDocuments() {
  return (
    <div className="w-[500px] flex justify-center items-center flex-col pb-10">
      <CloseBtn onClick={() => {}} className="absolute right-5 top-7" />
      <h1 className="text-[28px] font-[500] mb-2 ">Upload Document</h1>
      <p className="w-390 text-gray-500 text-sm">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex flex-col text-left mt-10">
        <label>Add Link</label>
        <input type="text" className="input-field w-390 mt-1" placeholder="Enter Link" />
      </div>
      <div className="flex flex-col text-left mt-10">
        <label className="block text-sm font-medium text-gray-700">Document 1</label>
        <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            {imageSvg}
            <div className="flex text-sm text-gray-600">
              <label htmlFor="cover" className="drag-drop">
                <span>Upload a file</span>
                <input id="cover" name="cover" type="file" className="sr-only" accept="image/png, image/jpeg" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left mt-10">
        <label className="block text-sm font-medium text-gray-700">Document 2</label>
        <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            {imageSvg}
            <div className="flex text-sm text-gray-600">
              <label htmlFor="cover" className="drag-drop">
                <span>Upload a file</span>
                <input id="cover" name="cover" type="file" className="sr-only" accept="image/png, image/jpeg" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      <div className="text-left mt-14">
        <label className="font-[400] text-[16px] ">Enter your Description</label>
        <textarea
          className="block w-[390px] h-[200px] mt-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
        />
      </div>
      <button className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10">Sent</button>
    </div>
  );
}

export default CampaignUploadDocuments;
