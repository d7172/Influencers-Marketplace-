import React, { useState } from "react";
import { imageSvg } from "../pages/influencer/SignUp/PersonalDetails";
import CloseBtn from "./CloseBtn";

function CampaignUploadDocuments({ close, campaign_id, influencer_id }) {
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [doc1, setDoc1] = useState({});
  const [doc2, setDoc2] = useState({});
  const handleUploadDocuments = () => {
    const data = {
      influencer_id: influencer_id,
      campaign_id: campaign_id,
      link: link,
      description: description,
    };
    const finalData = new FormData();
    finalData.append("data", data);
    finalData.append("document1", doc1);
    finalData.append("document2", doc2);
  };
  return (
    <div className="w-[500px] flex justify-center items-center flex-col pb-10">
      <CloseBtn onClick={close} className="absolute right-5 top-7" />
      <h1 className="text-[28px] font-[500] mb-2 ">Upload Document</h1>
      <p className="w-390 text-gray-500 text-sm">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex flex-col text-left mt-10">
        <label>Add Link</label>
        <input
          type="text"
          value={link}
          className="input-field w-390 mt-1"
          placeholder="Enter Link"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="flex flex-col text-left mx-14">
        <label className=" text-sm font-medium text-grey-700">
          Note: Please enter you drive link where all social media deliverables documents stored
        </label>
      </div>
      <div className="flex flex-col text-left mt-10">
        <label className="block text-sm font-medium text-gray-700">Document 1</label>
        <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            {imageSvg}
            <div className="flex text-sm text-gray-600">
              <label htmlFor="cover" className="drag-drop">
                <span>{doc1?.name || "Upload a file"}</span>
                <input
                  id="cover"
                  name="cover"
                  type="file"
                  className="sr-only"
                  accept="image/png, image/jpeg"
                  onChange={(e) => setDoc1(e.target.files[0])}
                />
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
              <label htmlFor="doc2" className="drag-drop">
                <span>{doc2?.name || "Upload a file"}</span>
                <input
                  id="doc2"
                  name="doc2"
                  type="file"
                  className="sr-only"
                  accept="image/png, image/jpeg"
                  onChange={(e) => setDoc2(e.target.files[0])}
                />
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
          value={description}
          placeholder="Your message"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <button className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10" onClick={handleUploadDocuments}>
        Sent
      </button>
    </div>
  );
}

export default CampaignUploadDocuments;
