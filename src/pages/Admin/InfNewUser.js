import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CampaignSearchBar from "../../components/CampaignSearchBar";
import Pagination from "../../components/Pagination";
import AdminUserTable from "../../components/AdminUserTable";

function InfNewUser() {
  const tableData = [
    {
      userId: "#0001",
      name: "Barbara Searcy",
      number: "+91 9874561231",
      email: "test@gmail.com",
      activeSince: "2020",
    },
  ];
  return (
    <div className="max-w-[1280px] pt-6 relative">
      <div className="flex items-center px-8">
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Influencer" }, { title: "New User" }]} />

        <CampaignSearchBar placeHolder={"Search here by userID"} />
      </div>
      <AdminUserTable tableData={tableData} />
      <div className="absolute bottom-[-100px] right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default InfNewUser;
