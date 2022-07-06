import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

function CampaignSearchBar({ placeHolder }) {
  return (
    <div className="flex gap-4 px-4 w-[450px] h-[50px] bg-[#F1F1F1]">
      <SearchIcon className="w-7" />
      <input type="search" placeholder={placeHolder} className="outline-none border-0 w-full bg-[#F1F1F1] " />
    </div>
  );
}


export default CampaignSearchBar;
