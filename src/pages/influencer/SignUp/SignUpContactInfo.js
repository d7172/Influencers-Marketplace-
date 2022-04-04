import React from "react";
import Dropdown from "../../../components/Dropdown";
import { imageSvg } from "./PersonalDetails";

function SignUpContactInfo() {
  return (
    <div className="w-[1100px] m-auto">
      <h1 className="text-3xl text-center mb-2">Contact Information</h1>
      <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex gap-x-20 gap-y-14 flex-wrap">
        <div>
          <label className="block text-gray-700 text-sm mb-2">Country</label>
          <div>
            <Dropdown className="w-390" dropdownStyle="w-390" label="India" options={[{ label: "India" }]} />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">State</label>
          <div>
            <Dropdown className="w-390" dropdownStyle="w-390" label="State" options={[{ label: "State" }]} />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
            Address<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
            id="phone"
            type="text"
            placeholder="Address"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
            ZIP Code<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
            id="phone"
            type="text"
            placeholder="ZIP Code"
          />
        </div>
      </div>
      <h1 className="text-3xl text-center mt-20 mb-2">Other Information</h1>
      <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex gap-x-20 gap-y-14 flex-wrap">
        <div>
          <label className="block text-gray-700 text-sm mb-2">Average User Engagement</label>
          <div>
            <Dropdown className="w-390" dropdownStyle="w-390" label="Less than 1 %" options={[]} />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">Basic Charges Per Post(INR)</label>
          <div>
            <Dropdown className="w-390" dropdownStyle="w-390" label="Rs 10000" options={[]} />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">Influencer Experience</label>
          <div>
            <Dropdown className="w-390" dropdownStyle="w-390" label="Lest than 1 year" options={[]} />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">Profile Title</label>
          <div>
            <Dropdown className="w-390" dropdownStyle="w-390" label="Lead Gen Expert" options={[]} />
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center mt-20 mb-2">Bank Account Details</h1>
      <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex gap-x-20 gap-y-14 flex-wrap">
        <div>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
            Bank Name<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
            id="phone"
            type="text"
            placeholder="Bank of India"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
            Account Number<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
            id="phone"
            type="text"
            placeholder="Account Number"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
            Confirm Account Number<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
            id="phone"
            type="text"
            placeholder="Account Number"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
            IFSC Code<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
            id="phone"
            type="text"
            placeholder="IFSC Code"
          />
        </div>
      </div>
      <h1 className="text-3xl text-center mt-20 mb-2">KYC Details</h1>
      <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex gap-x-20 gap-y-14 flex-wrap">
        <div>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
            Pan Card Number<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight outline-none focus:outline-none focus:shadow-blue-300"
            id="phone"
            type="text"
            placeholder="Pan Card Number"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Cover Picture</label>
          <div class="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              {imageSvg}
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer outline-none bg-white rounded-md font-medium text-indigo-600 focus:shadow-blue-300 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
            Pan Card Number<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
            id="phone"
            type="text"
            placeholder="Pan Card Number"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Cover Picture</label>
          <div class="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              {imageSvg}
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer outline-none bg-white rounded-md font-medium text-indigo-600 focus:shadow-blue-300 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="ml-[470px]">
          <div>
            <label class="block text-sm font-medium text-gray-700">Cover Picture</label>
            <div class="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                {imageSvg}
                <div class="flex text-sm text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer outline-none bg-white rounded-md font-medium text-indigo-600 focus:shadow-blue-300 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex justify-center cursor-pointer">
        <button className="w-[400px] rounded-[50px] bg-primary text-white py-2">Next</button>
      </div>
    </div>
  );
}

export default SignUpContactInfo;
