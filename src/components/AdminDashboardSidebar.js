import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomDisclosure from "./Disclouser";
import Disclosure from "./Disclouser";

function AdminDashboardSidebar() {
  const location = useLocation();
  const isDashboard = location?.pathname === "/admin/dashboard";
  const isCampaign = location?.pathname.startsWith("/admin/campaign");
  const isInfluencer = location?.pathname.startsWith("/admin/influencer");
  const isBrand = location?.pathname.startsWith("/admin/brand");
  const isActiveBids = location?.pathname.startsWith("/admin/active-bids");
  const isTransaction = location?.pathname.startsWith("/admin/transaction");
  const isEarning = location?.pathname === "/admin/transaction/earning";
  const isPayments = location?.pathname === "/admin/transaction/payments";
  const isStatement = location?.pathname === "/admin/transaction/statement";
  const isInfNewUser = location?.pathname.includes("/admin/influencer/new-user");
  const isInfActiveUser = location?.pathname.includes("/admin/influencer/active-user");
  const isInfRejectedUser = location?.pathname.includes("/admin/influencer/rejected-user");
  const isBrandNewUser = location?.pathname.includes("/admin/brand/new-user");
  const isBrandActiveUser = location?.pathname.includes("/admin/brand/active-user");
  const isBrandRejectedUser = location?.pathname.includes("/admin/brand/rejected-user");
  const isNewCampaign = location?.pathname.includes("/admin/campaign/new-campaign");
  const isAssignedCampaign = location?.pathname.includes("/admin/campaign/assigned-campaign");
  const isActiveCampaign = location?.pathname.includes("/admin/campaign/active-campaign");
  const isRejectedCampaign = location?.pathname.includes("/admin/campaign/rejected-campaign");

  return (
    <div className="min-w-[308px] h-full overflow-hidden box-shadow-sidebar">
      <h1 className="text-[#1E266D] text-[32px] text-center my-4 font-[500]">
        Admin<span className="text-red-500">:</span>{" "}
      </h1>
      <div className="flex flex-col gap-0">
        <Link to="/admin/dashboard" className="flex gap-6 items-center">
          <div className={`w-[20px] h-[55px] ${isDashboard ? "bg-[#3751FF]" : "bg-white"} `} />
          {dashboardSvg(isDashboard ? "#3751FF" : "#969BA0")}
          <h1 className={`text-[18px] font-[600]  ${isDashboard ? "text-[#3751FF]" : "text-[#969BA0]"} `}>Dashboard</h1>
        </Link>
        <div className="flex gap-6 mt-4">
          <div className={`w-[20px] h-[55px] ${isInfluencer ? "bg-[#3751FF]" : "bg-white"} `} />
          {CampaignSvg(isCampaign ? "#3751FF" : "#969BA0")}
          <CustomDisclosure
            inActiveColor="text-[#969BA0]"
            activeColor="text-[#3751FF]"
            className="text-[18px] font-[600] w-[180px]"
            label="Influencers list"
            content={() => (
              <div className=" py-4 px-2 flex flex-col gap-4 items-start">
                <Link
                  to="/admin/influencer/new-user"
                  className={`text-[18px] ${isInfNewUser ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  New Users
                </Link>
                <Link
                  to="/admin/influencer/active-user"
                  className={`text-[18px] ${isInfActiveUser ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Active Users
                </Link>
                <Link
                  to="/admin/influencer/rejected-user"
                  className={`text-[18px] ${isInfRejectedUser ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Rejected Users
                </Link>
              </div>
            )}
          />
        </div>
        <div className="flex gap-6 mt-4">
          <div className={`w-[20px] h-[55px] ${isBrand ? "bg-[#3751FF]" : "bg-white"} `} />
          {CampaignSvg(isCampaign ? "#3751FF" : "#969BA0")}
          <CustomDisclosure
            inActiveColor="text-[#969BA0]"
            activeColor="text-[#3751FF]"
            className="text-[18px] font-[600] w-[180px]"
            label="Brand list"
            content={() => (
              <div className=" py-4 px-2 flex flex-col gap-4 items-start">
                <Link
                  to="/admin/brand/new-user"
                  className={`text-[18px] ${isBrandNewUser ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  New Users
                </Link>
                <Link
                  to="/admin/brand/active-user"
                  className={`text-[18px] ${isBrandActiveUser ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Active Users
                </Link>
                <Link
                  to="/admin/brand/rejected-user"
                  className={`text-[18px] ${isBrandRejectedUser ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Rejected Users
                </Link>
              </div>
            )}
          />
        </div>
        <div className="flex gap-6 mt-4">
          <div className={`w-[20px] h-[55px] ${isCampaign ? "bg-[#3751FF]" : "bg-white"} `} />
          {CampaignSvg(isCampaign ? "#3751FF" : "#969BA0")}
          <CustomDisclosure
            inActiveColor="text-[#969BA0]"
            activeColor="text-[#3751FF]"
            className="text-[18px] font-[600] w-[180px]"
            label="Campaign"
            content={() => (
              <div className=" py-4 px-2 flex flex-col gap-4 items-start">
                <Link
                  to="/admin/campaign/new-campaign"
                  className={`text-[18px] ${isNewCampaign ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  New Campaign
                </Link>
                <Link
                  to="/admin/campaign/assigned-campaign"
                  className={`text-[18px] ${isAssignedCampaign ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Assigned Campaign
                </Link>
                <Link
                  to="/admin/campaign/active-campaign"
                  className={`text-[18px] ${isActiveCampaign ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Active Campaign
                </Link>
                <Link
                  to="/admin/campaign/rejected-campaign"
                  className={`text-[18px] ${isRejectedCampaign ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Rejected Campaign
                </Link>
              </div>
            )}
          />
        </div>
        <Link to="/admin/active-bids" className="flex gap-6 items-center">
          <div className={`w-[20px] h-[55px] ${isActiveBids ? "bg-[#3751FF]" : "bg-white"} `} />
          {dashboardSvg(isActiveBids ? "#3751FF" : "#969BA0")}
          <h1 className={`text-[18px] font-[600]  ${isActiveBids ? "text-[#3751FF]" : "text-[#969BA0]"} `}>
            Active Bids
          </h1>
        </Link>
        <div className="flex gap-6 mt-4">
          <div className={`w-[20px] h-[55px] ${isTransaction ? "bg-[#3751FF]" : "bg-white"} `} />
          {transactionSvg(isTransaction ? "#3751FF" : "#969BA0")}
          <CustomDisclosure
            inActiveColor="text-[#969BA0]"
            activeColor="text-[#3751FF]"
            className="text-[18px] font-[600] w-[180px]"
            label="Transaction"
            content={() => (
              <div className=" py-4 px-2 flex flex-col gap-4 items-start">
                <Link
                  to="/admin/transaction/earning"
                  className={`text-[18px] ${isEarning ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Earning
                </Link>
                <Link
                  to="/admin/transaction/payments"
                  className={`text-[18px] ${isPayments ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Payments
                </Link>
                <Link
                  to="/admin/transaction/statement"
                  className={`text-[18px] ${isStatement ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Statement
                </Link>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardSidebar;

const dashboardSvg = (fill) => (
  <svg width="28" height="28" viewBox="0 0 24 28" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3333 26C13.3333 26.7373 13.9293 27.3333 14.6667 27.3333H18.6667C20.0813 27.3333 21.4373 26.772 22.4373 25.772C23.4373 24.772 24 23.4146 24 22C24 21.2346 24 20.6666 24 20.6666C24 19.9306 23.4027 19.3333 22.6667 19.3333H14.6667C13.9293 19.3333 13.3333 19.9306 13.3333 20.6666V26ZM9.33333 27.3333C10.0693 27.3333 10.6667 26.7373 10.6667 26V12.6666C10.6667 11.9306 10.0693 11.3333 9.33333 11.3333H1.33333C0.596 11.3333 0 11.9306 0 12.6666V22C0 23.4146 0.56133 24.772 1.56133 25.772C2.56133 26.772 3.91867 27.3333 5.33333 27.3333H9.33333ZM21.3333 22H16V24.6666H18.6667C19.3733 24.6666 20.052 24.3866 20.552 23.8866C21.052 23.3866 21.3333 22.708 21.3333 22ZM8 24.6666V14H2.66667V22C2.66667 22.708 2.94666 23.3866 3.448 23.8866C3.948 24.3866 4.62533 24.6666 5.33333 24.6666H8ZM14.6667 0.666626C13.9293 0.666626 13.3333 1.26396 13.3333 1.99996V15.3333C13.3333 16.0706 13.9293 16.6666 14.6667 16.6666H22.6667C23.4027 16.6666 24 16.0706 24 15.3333V5.99996C24 4.58663 23.4373 3.22929 22.4373 2.22929C21.4373 1.22929 20.0813 0.666626 18.6667 0.666626H14.6667ZM16 3.33329V14H21.3333V5.99996C21.3333 5.29329 21.052 4.61462 20.552 4.11462C20.052 3.61462 19.3733 3.33329 18.6667 3.33329H16ZM10.6667 1.99996C10.6667 1.26396 10.0693 0.666626 9.33333 0.666626H5.33333C3.91867 0.666626 2.56133 1.22929 1.56133 2.22929C0.56133 3.22929 0 4.58663 0 5.99996V7.33329C0 8.07063 0.596 8.66663 1.33333 8.66663H9.33333C10.0693 8.66663 10.6667 8.07063 10.6667 7.33329V1.99996ZM8 3.33329H5.33333C4.62533 3.33329 3.948 3.61462 3.448 4.11462C2.94666 4.61462 2.66667 5.29329 2.66667 5.99996H8V3.33329Z"
    />
  </svg>
);
const transactionSvg = (fill) => (
  <svg width="28" height="28" viewBox="0 0 22 28" className="mt-2" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8026 21.4947C16.8373 20.3587 19.0013 17.4294 19.0013 14C19.0013 11.792 18.1039 9.79203 16.6559 8.34403C16.1359 7.82403 16.1359 6.97871 16.6559 6.45871C17.1773 5.93871 18.0213 5.93871 18.5426 6.45871C20.4733 8.38938 21.6679 11.056 21.6679 14C21.6679 18.644 18.6933 22.5987 14.5466 24.0614L15.7613 24.904C16.3653 25.324 16.5159 26.1547 16.0959 26.76C15.6773 27.364 14.8453 27.5147 14.2413 27.0947L10.2413 24.32C9.6386 23.9027 9.48659 23.076 9.90126 22.4707L12.5679 18.58C12.9839 17.972 13.8146 17.8174 14.4213 18.2334C15.0279 18.6494 15.1826 19.48 14.7666 20.0867L13.8026 21.4947ZM7.48659 3.92671L6.26126 3.10937C5.64926 2.70137 5.48259 1.87203 5.89059 1.26003C6.29993 0.648034 7.12793 0.4827 7.73993 0.8907L11.7399 3.55737C12.3533 3.96537 12.5186 4.79338 12.1106 5.40671L9.44393 9.40671C9.0346 10.0187 8.20659 10.184 7.59459 9.77603C6.98259 9.36803 6.81593 8.53871 7.22393 7.92671L8.16393 6.51871C5.14659 7.66404 3.00126 10.5827 3.00126 14C3.00126 16.208 3.89726 18.2067 5.34526 19.656C5.86526 20.176 5.86526 21.02 5.34526 21.5414C4.82526 22.0614 3.97993 22.0614 3.45993 21.5414C1.52926 19.6107 0.334595 16.944 0.334595 14C0.334595 9.34403 3.32393 5.38004 7.48659 3.92671V3.92671Z"
    />
  </svg>
);
const CampaignSvg = (fill) => (
  <svg width="29" height="29" viewBox="0 0 28 22" fill={fill} className="mt-2" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.3343 5.66646C27.3343 2.72126 24.9462 0.333374 22.0007 0.333374C17.5606 0.333374 10.439 0.333374 6.00015 0.333374C3.05471 0.333374 0.666626 2.72126 0.666626 5.66646V16.3326C0.666626 19.2778 3.05471 21.6657 6.00015 21.6657H22.0007C24.9462 21.6657 27.3343 19.2778 27.3343 16.3326V5.66646ZM24.6675 16.3326H3.33339C3.33339 17.8059 4.52677 18.9992 6.00015 18.9992H22.0007C23.4728 18.9992 24.6675 17.8059 24.6675 16.3326ZM3.33339 12.3328V13.6661H24.6675V12.3328H3.33339ZM24.6675 9.66627V5.66646C24.6675 4.19453 23.4728 2.99991 22.0007 2.99991C17.5606 2.99991 10.439 2.99991 6.00015 2.99991C4.52677 2.99991 3.33339 4.19453 3.33339 5.66646V9.66627H24.6675Z"
    />
  </svg>
);
