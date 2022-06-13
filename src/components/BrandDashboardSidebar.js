import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomDisclosure from "./Disclouser";

function BrandDashboardSidebar() {
  const location = useLocation();
  const isDashboard = location?.pathname === "/brand/dashboard";
  const isCampaign = location?.pathname.startsWith("/brand/campaign");
  const isNewCampaign = location?.pathname === "/brand/campaign/new-campaign";
  const isAssignedCampaign = location?.pathname === "/brand/campaign/assigned-campaign";
  const isActiveCampaign = location?.pathname === "/brand/campaign/active-campaign";
  const isRejectedCampaign = location?.pathname === "/brand/campaign/rejected-campaign";
  const isTransaction = location?.pathname.startsWith("/brand/transactions");
  const isEarning = location?.pathname === "/brand/transactions/earning";
  const isStatement = location?.pathname === "/brand/transactions/statement";
  const isSupport = location?.pathname === "/brand/support";

  return (
    <div className="min-w-[308px] h-full overflow-hidden box-shadow-sidebar">
      <h1 className="text-[#1E266D] text-[32px] text-center my-4 font-[500]">
        Brand<span className="text-red-500">:</span>{" "}
      </h1>
      <div className="flex flex-col gap-0">
        <Link to="/brand/dashboard" className="flex gap-6 items-center">
          <div className={`w-[20px] h-[55px] ${isDashboard ? "bg-[#3751FF]" : "bg-white"} `} />
          {dashboardSvg(isDashboard ? "#3751FF" : "#969BA0")}
          <h1 className={`text-[18px] font-[600]  ${isDashboard ? "text-[#3751FF]" : "text-[#969BA0]"} `}>Dashboard</h1>
        </Link>
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
                  to="/brand/campaign/new-campaign"
                  className={`text-[18px] ${isNewCampaign ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  New Campaign
                </Link>
                <Link
                  to="/brand/campaign/assigned-campaign"
                  className={`text-[18px] ${isAssignedCampaign ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Assigned Campaign
                </Link>
                <Link
                  to="/brand/campaign/active-campaign"
                  className={`text-[18px] ${isActiveCampaign ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Active Campaign
                </Link>
                <Link
                  to="/brand/campaign/rejected-campaign"
                  className={`text-[18px] ${isRejectedCampaign ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Rejected Campaign
                </Link>
              </div>
            )}
          />
        </div>
        {/* <Link to="/influencer/bids" className="flex gap-6 items-center">
          <div className={`w-[20px] h-[55px] ${isBids ? "bg-[#3751FF]" : "bg-white"} `} />
          {BidSvg(isBids ? "#3751FF" : "#969BA0")}
          <h1 className={`text-[18px] font-[600]  ${isBids ? "text-[#3751FF]" : "text-[#969BA0]"} `}>Bids</h1>
        </Link> */}
        <div className="flex gap-6 mt-2">
          <div className={`w-[20px] h-[55px]  ${isTransaction ? "bg-[#3751FF]" : "bg-white"} `} />
          {transactionSvg(isTransaction ? "#3751FF" : "#969BA0")}

          <CustomDisclosure
            inActiveColor="text-[#969BA0]"
            activeColor="text-[#3751FF]"
            className="text-[18px] font-[600] w-[180px]"
            label="Transaction"
            content={() => (
              <div className="py-4 px-5 flex flex-col gap-4 items-start">
                <Link
                  to="/brand/transactions/earning"
                  className={`text-[18px] ${isEarning ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Earning
                </Link>
                <Link
                  to="/brand/transactions/statement"
                  className={`text-[18px] ${isStatement ? "text-[#3751FF]" : "text-[#969BA0]"}`}
                >
                  Statement
                </Link>
              </div>
            )}
          />
        </div>
        <Link to="/brand/support" className="flex gap-6 items-center">
          <div className={`w-[20px] h-[55px] ${isSupport ? "bg-[#3751FF]" : "bg-white"} `} />
          {supportSvg(isSupport ? "#3751FF" : "#969BA0")}
          <h1 className={`text-[18px] font-[600]  ${isSupport ? "text-[#3751FF]" : "text-[#969BA0]"} `}>Support</h1>
        </Link>
      </div>
    </div>
  );
}

export default BrandDashboardSidebar;

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
const BidSvg = (fill) => (
  <svg width="28" height="28" viewBox="0 0 30 28" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6155 11.238C9.66468 11.238 8.71386 11.238 7.76609 11.238C6.26189 11.238 4.76075 11.238 3.25655 11.238C2.88967 11.238 2.5075 11.2685 2.14063 11.2288C2.24763 11.2441 2.3577 11.2594 2.4647 11.2716C2.36687 11.2563 2.27821 11.2349 2.18649 11.1982C2.28432 11.238 2.38215 11.2808 2.47999 11.3205C2.39438 11.2808 2.31489 11.2349 2.23846 11.1768C2.32101 11.241 2.40355 11.3052 2.4861 11.3694C2.42496 11.3174 2.36992 11.2624 2.31795 11.2013C2.38215 11.2838 2.44636 11.3664 2.51056 11.4489C2.45247 11.3725 2.40661 11.296 2.36687 11.2074C2.40661 11.3052 2.44941 11.403 2.48916 11.5009C2.45247 11.4092 2.42801 11.3205 2.41578 11.2227C2.43107 11.3297 2.44636 11.4397 2.45859 11.5467C2.42801 11.2441 2.44941 10.9322 2.44941 10.6295C2.44941 9.95694 2.44941 9.28433 2.44941 8.61478C2.44941 7.09835 2.44941 5.57886 2.44941 4.06243C2.44941 3.69555 2.41884 3.31339 2.45859 2.94651C2.4433 3.05351 2.42801 3.16358 2.41578 3.27058C2.43107 3.17275 2.45247 3.08409 2.48916 2.99237C2.44941 3.0902 2.40661 3.18804 2.36687 3.28587C2.40661 3.20027 2.45247 3.12078 2.51056 3.04434C2.44636 3.12689 2.38215 3.20944 2.31795 3.29199C2.36992 3.23084 2.42496 3.17581 2.4861 3.12383C2.40355 3.18804 2.32101 3.25224 2.23846 3.31644C2.31489 3.25835 2.39133 3.21249 2.47999 3.17275C2.38215 3.21249 2.28432 3.2553 2.18649 3.29504C2.27821 3.25835 2.36687 3.2339 2.4647 3.22167C2.3577 3.23695 2.24763 3.25224 2.14063 3.26447C2.4433 3.2339 2.75515 3.2553 3.05782 3.2553C3.73043 3.2553 4.40304 3.2553 5.07259 3.2553C6.58902 3.2553 8.10851 3.2553 9.62494 3.2553C9.99182 3.2553 10.374 3.22472 10.7409 3.26447C10.6339 3.24918 10.5238 3.2339 10.4168 3.22167C10.5146 3.23695 10.6033 3.25835 10.695 3.29504C10.5972 3.2553 10.4993 3.21249 10.4015 3.17275C10.4871 3.21249 10.5666 3.25835 10.643 3.31644C10.5605 3.25224 10.4779 3.18804 10.3954 3.12383C10.4565 3.17581 10.5116 3.23084 10.5635 3.29199C10.4993 3.20944 10.4351 3.12689 10.3709 3.04434C10.429 3.12078 10.4749 3.19721 10.5146 3.28587C10.4749 3.18804 10.4321 3.0902 10.3923 2.99237C10.429 3.08409 10.4535 3.17275 10.4657 3.27058C10.4504 3.16358 10.4351 3.05351 10.4229 2.94651C10.4535 3.24918 10.4321 3.56103 10.4321 3.8637C10.4321 4.53631 10.4321 5.20892 10.4321 5.87848C10.4321 7.39491 10.4321 8.91439 10.4321 10.4308C10.4321 10.7977 10.4626 11.1799 10.4229 11.5467C10.4382 11.4397 10.4535 11.3297 10.4657 11.2227C10.4504 11.3205 10.429 11.4092 10.3923 11.5009C10.4321 11.403 10.4749 11.3052 10.5146 11.2074C10.4749 11.293 10.429 11.3725 10.3709 11.4489C10.4351 11.3664 10.4993 11.2838 10.5635 11.2013C10.5116 11.2624 10.4565 11.3174 10.3954 11.3694C10.4779 11.3052 10.5605 11.241 10.643 11.1768C10.5666 11.2349 10.4902 11.2808 10.4015 11.3205C10.4993 11.2808 10.5972 11.238 10.695 11.1982C10.6033 11.2349 10.5146 11.2594 10.4168 11.2716C10.5238 11.2563 10.6339 11.241 10.7409 11.2288C10.7011 11.2349 10.6583 11.238 10.6155 11.238C10.2975 11.2441 9.97653 11.3694 9.75029 11.5957C9.53933 11.8066 9.3773 12.1551 9.39258 12.4609C9.42316 13.1121 9.93067 13.6991 10.6155 13.6838C11.2147 13.6716 11.7895 13.4484 12.2145 13.0204C12.6303 12.6046 12.8504 12.0481 12.8749 11.4642C12.8779 11.3633 12.8749 11.2655 12.8749 11.1646C12.8749 10.5715 12.8749 9.97528 12.8749 9.38216C12.8749 7.69147 12.8749 6.00077 12.8749 4.31007C12.8749 3.90345 12.881 3.49683 12.8749 3.0902C12.8626 2.25861 12.4071 1.41785 11.6336 1.06014C11.2912 0.901162 10.9824 0.815557 10.5972 0.8125C10.5513 0.8125 10.5085 0.8125 10.4626 0.8125C9.06545 0.8125 7.66826 0.8125 6.27106 0.8125C4.95641 0.8125 3.64177 0.8125 2.33018 0.8125C1.7126 0.8125 1.10725 1.03263 0.666999 1.47594C0.223687 1.91925 0.0035606 2.52154 0.0035606 3.14523C0.0035606 3.62218 0.0035606 4.10217 0.0035606 4.57912C0.0035606 6.27593 0.0035606 7.97274 0.0035606 9.66955C0.0035606 10.2046 0.0035606 10.7396 0.0035606 11.2777C0.0035606 11.3205 0.0035606 11.3633 0.0035606 11.4092C0.00661792 11.7913 0.0952802 12.1062 0.251203 12.4456C0.608909 13.2191 1.44967 13.6746 2.28126 13.6869C3.50419 13.7022 4.72712 13.6869 5.95004 13.6869C7.41756 13.6869 8.88813 13.6869 10.3556 13.6869C10.4412 13.6869 10.5268 13.6869 10.6125 13.6869C11.2514 13.6869 11.866 13.1243 11.8354 12.4639C11.8109 11.7974 11.3034 11.238 10.6155 11.238ZM10.6155 16.4048C9.49653 16.4048 8.38061 16.4048 7.26163 16.4048C5.72686 16.4048 4.19209 16.4048 2.65731 16.4048C2.53196 16.4048 2.40661 16.4018 2.28126 16.4048C1.29069 16.4201 0.459101 17.0316 0.125853 17.9579C-0.0422992 18.4227 0.00661793 18.9791 0.00661793 19.4683C0.00661793 21.107 0.00661793 22.7426 0.00661793 24.3814C0.00661793 25.0784 0.00661793 25.7724 0.00661793 26.4695C0.00661793 26.6316 0.00661793 26.7966 0.00661793 26.9587C0.00661793 27.5946 0.245089 28.2397 0.728145 28.6708C1.18369 29.0774 1.73706 29.2792 2.34547 29.2792C2.52585 29.2792 2.70317 29.2792 2.88355 29.2792C3.58979 29.2792 4.29909 29.2792 5.00533 29.2792C6.63183 29.2792 8.25526 29.2792 9.88175 29.2792C10.0805 29.2792 10.2823 29.2792 10.481 29.2792C10.9151 29.2792 11.3218 29.1997 11.7131 28.9949C12.4438 28.6158 12.8749 27.8025 12.881 26.9954C12.881 26.8547 12.881 26.7172 12.881 26.5765C12.881 25.0295 12.881 23.4795 12.881 21.9325C12.881 21.159 12.881 20.3885 12.881 19.615C12.881 19.2604 12.9054 18.8935 12.8718 18.5388C12.8229 17.9763 12.6119 17.429 12.187 17.0377C11.7528 16.6372 11.2117 16.4171 10.6155 16.4048C9.97653 16.3926 9.36201 16.9765 9.39258 17.6277C9.42316 18.3004 9.93067 18.8354 10.6155 18.8507C10.6583 18.8507 10.7011 18.8537 10.7439 18.8598C10.6369 18.8446 10.5268 18.8293 10.4198 18.817C10.5177 18.8323 10.6063 18.8537 10.6981 18.8904C10.6002 18.8507 10.5024 18.8079 10.4046 18.7681C10.4902 18.8079 10.5697 18.8537 10.6461 18.9118C10.5635 18.8476 10.481 18.7834 10.3984 18.7192C10.4596 18.7712 10.5146 18.8262 10.5666 18.8874C10.5024 18.8048 10.4382 18.7223 10.374 18.6397C10.4321 18.7162 10.4779 18.7926 10.5177 18.8812C10.4779 18.7834 10.4351 18.6856 10.3954 18.5877C10.4321 18.6795 10.4565 18.7681 10.4688 18.866C10.4535 18.759 10.4382 18.6489 10.426 18.5419C10.4565 18.8446 10.4351 19.1564 10.4351 19.4591C10.4351 20.1317 10.4351 20.8043 10.4351 21.4739C10.4351 22.9903 10.4351 24.5098 10.4351 26.0262C10.4351 26.3931 10.4657 26.7752 10.426 27.1421C10.4412 27.0351 10.4565 26.9251 10.4688 26.818C10.4535 26.9159 10.4321 27.0045 10.3954 27.0963C10.4351 26.9984 10.4779 26.9006 10.5177 26.8028C10.4779 26.8884 10.4321 26.9679 10.374 27.0443C10.4382 26.9617 10.5024 26.8792 10.5666 26.7966C10.5146 26.8578 10.4596 26.9128 10.3984 26.9648C10.481 26.9006 10.5635 26.8364 10.6461 26.7722C10.5697 26.8303 10.4932 26.8761 10.4046 26.9159C10.5024 26.8761 10.6002 26.8333 10.6981 26.7936C10.6063 26.8303 10.5177 26.8547 10.4198 26.867C10.5268 26.8517 10.6369 26.8364 10.7439 26.8242C10.4412 26.8547 10.1294 26.8333 9.82672 26.8333C9.15411 26.8333 8.4815 26.8333 7.81195 26.8333C6.29552 26.8333 4.77603 26.8333 3.2596 26.8333C2.89273 26.8333 2.51056 26.8639 2.14368 26.8242C2.25069 26.8394 2.36075 26.8547 2.46776 26.867C2.36992 26.8517 2.28126 26.8303 2.18954 26.7936C2.28738 26.8333 2.38521 26.8761 2.48305 26.9159C2.39744 26.8761 2.31795 26.8303 2.24152 26.7722C2.32406 26.8364 2.40661 26.9006 2.48916 26.9648C2.42801 26.9128 2.37298 26.8578 2.32101 26.7966C2.38521 26.8792 2.44941 26.9617 2.51362 27.0443C2.45553 26.9679 2.40967 26.8914 2.36992 26.8028C2.40967 26.9006 2.45247 26.9984 2.49222 27.0963C2.45553 27.0045 2.43107 26.9159 2.41884 26.818C2.43413 26.9251 2.44941 27.0351 2.46164 27.1421C2.43107 26.8394 2.45247 26.5276 2.45247 26.2249C2.45247 25.5523 2.45247 24.8797 2.45247 24.2102C2.45247 22.6937 2.45247 21.1742 2.45247 19.6578C2.45247 19.2909 2.4219 18.9088 2.46164 18.5419C2.44636 18.6489 2.43107 18.759 2.41884 18.866C2.43413 18.7681 2.45553 18.6795 2.49222 18.5877C2.45247 18.6856 2.40967 18.7834 2.36992 18.8812C2.40967 18.7956 2.45553 18.7162 2.51362 18.6397C2.44941 18.7223 2.38521 18.8048 2.32101 18.8874C2.37298 18.8262 2.42801 18.7712 2.48916 18.7192C2.40661 18.7834 2.32406 18.8476 2.24152 18.9118C2.31795 18.8537 2.39438 18.8079 2.48305 18.7681C2.38521 18.8079 2.28738 18.8507 2.18954 18.8904C2.28126 18.8537 2.36992 18.8293 2.46776 18.817C2.36075 18.8323 2.25069 18.8476 2.14368 18.8598C2.44636 18.8293 2.7582 18.8507 3.06088 18.8507C3.7182 18.8507 4.37552 18.8507 5.03285 18.8507C6.54316 18.8507 8.05348 18.8507 9.56685 18.8507C9.91844 18.8507 10.267 18.8507 10.6186 18.8507C11.2575 18.8507 11.8721 18.2881 11.8415 17.6277C11.8109 16.9643 11.3034 16.4048 10.6155 16.4048ZM16.1003 5.65223C16.5223 5.65223 16.9411 5.65223 17.363 5.65223C18.3719 5.65223 19.3839 5.65223 20.3928 5.65223C21.6096 5.65223 22.8264 5.65223 24.0433 5.65223C25.1011 5.65223 26.1559 5.65223 27.2137 5.65223C27.7273 5.65223 28.2409 5.66141 28.7546 5.65223C28.7607 5.65223 28.7699 5.65223 28.776 5.65223C29.415 5.65223 30.0295 5.08969 29.9989 4.42931C29.9683 3.76587 29.4608 3.20638 28.776 3.20638C28.3541 3.20638 27.9352 3.20638 27.5133 3.20638C26.5044 3.20638 25.4924 3.20638 24.4835 3.20638C23.2667 3.20638 22.0499 3.20638 20.8331 3.20638C19.7752 3.20638 18.7205 3.20638 17.6626 3.20638C17.149 3.20638 16.6354 3.19721 16.1217 3.20638C16.1156 3.20638 16.1065 3.20638 16.1003 3.20638C15.4614 3.20638 14.8468 3.76893 14.8774 4.42931C14.9049 5.08969 15.4155 5.65223 16.1003 5.65223ZM23.976 8.84407C23.0894 8.84407 22.2027 8.84407 21.3131 8.84407C19.8975 8.84407 18.485 8.84407 17.0695 8.84407C16.7454 8.84407 16.4214 8.84407 16.0973 8.84407C15.4583 8.84407 14.8438 9.40662 14.8744 10.067C14.9049 10.7304 15.4124 11.2899 16.0973 11.2899C16.9839 11.2899 17.8705 11.2899 18.7602 11.2899C20.1757 11.2899 21.5882 11.2899 23.0038 11.2899C23.3278 11.2899 23.6519 11.2899 23.976 11.2899C24.615 11.2899 25.2295 10.7274 25.1989 10.067C25.1714 9.40356 24.6639 8.84407 23.976 8.84407ZM16.1003 21.2446C16.5223 21.2446 16.9411 21.2446 17.363 21.2446C18.3719 21.2446 19.3839 21.2446 20.3928 21.2446C21.6096 21.2446 22.8264 21.2446 24.0433 21.2446C25.1011 21.2446 26.1559 21.2446 27.2137 21.2446C27.7273 21.2446 28.2409 21.2537 28.7546 21.2446C28.7607 21.2446 28.7699 21.2446 28.776 21.2446C29.415 21.2446 30.0295 20.682 29.9989 20.0216C29.9683 19.3582 29.4608 18.7987 28.776 18.7987C28.3541 18.7987 27.9352 18.7987 27.5133 18.7987C26.5044 18.7987 25.4924 18.7987 24.4835 18.7987C23.2667 18.7987 22.0499 18.7987 20.8331 18.7987C19.7752 18.7987 18.7205 18.7987 17.6626 18.7987C17.149 18.7987 16.6354 18.7895 16.1217 18.7987C16.1156 18.7987 16.1065 18.7987 16.1003 18.7987C15.4614 18.7987 14.8468 19.3612 14.8774 20.0216C14.9049 20.6851 15.4155 21.2446 16.1003 21.2446ZM23.976 24.4364C23.0894 24.4364 22.2027 24.4364 21.3131 24.4364C19.8975 24.4364 18.485 24.4364 17.0695 24.4364C16.7454 24.4364 16.4214 24.4364 16.0973 24.4364C15.4583 24.4364 14.8438 24.9989 14.8744 25.6593C14.9049 26.3228 15.4124 26.8823 16.0973 26.8823C16.9839 26.8823 17.8705 26.8823 18.7602 26.8823C20.1757 26.8823 21.5882 26.8823 23.0038 26.8823C23.3278 26.8823 23.6519 26.8823 23.976 26.8823C24.615 26.8823 25.2295 26.3197 25.1989 25.6593C25.1714 24.9989 24.6639 24.4364 23.976 24.4364Z" />
  </svg>
);

const supportSvg = (fill) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.49996 3.13735C10.4466 1.65202 12.108 0.666687 14 0.666687C15.892 0.666687 17.5533 1.65202 18.5 3.13735C20.2186 2.75602 22.0906 3.23469 23.428 4.57202C24.7653 5.91069 25.244 7.78134 24.8626 9.50134C26.348 10.448 27.3333 12.1094 27.3333 14C27.3333 15.892 26.348 17.5534 24.8626 18.5C25.244 20.22 24.7653 22.0907 23.428 23.428C22.0906 24.7667 20.2186 25.244 18.5 24.864C17.5533 26.3493 15.892 27.3334 14 27.3334C12.108 27.3334 10.4466 26.3493 9.49996 24.864C7.77996 25.244 5.90929 24.7667 4.57196 23.428C3.23463 22.0907 2.75597 20.22 3.13597 18.5C1.65197 17.5534 0.666626 15.892 0.666626 14C0.666626 12.1094 1.65197 10.448 3.13597 9.50134C2.75597 7.78134 3.23463 5.91069 4.57196 4.57202C5.90929 3.23469 7.77996 2.75602 9.49996 3.13735ZM9.57064 5.97601C9.91997 6.15735 10.332 6.17467 10.696 6.02401C11.06 5.87334 11.3386 5.56935 11.4573 5.19468C11.7986 4.11602 12.808 3.33335 14 3.33335C15.192 3.33335 16.2013 4.11602 16.5426 5.19468C16.6613 5.56935 16.94 5.87334 17.304 6.02401C17.668 6.17467 18.0786 6.15735 18.428 5.97601C19.4333 5.45468 20.7 5.61468 21.5426 6.45868C22.3853 7.30135 22.5466 8.56802 22.0253 9.57202C21.844 9.92136 21.8253 10.3334 21.976 10.696C22.1266 11.06 22.4306 11.3387 22.8053 11.4574C23.8853 11.7987 24.6666 12.808 24.6666 14C24.6666 15.192 23.8853 16.2027 22.8053 16.544C22.4306 16.6627 22.1266 16.9413 21.976 17.304C21.8253 17.668 21.844 18.08 22.0253 18.4293C22.5466 19.4333 22.3853 20.7 21.5426 21.5427C20.7 22.3854 19.4333 22.5467 18.428 22.0254C18.0786 21.844 17.668 21.8267 17.304 21.9774C16.94 22.128 16.6613 22.432 16.5426 22.8067C16.2013 23.8853 15.192 24.6667 14 24.6667C12.808 24.6667 11.7986 23.8853 11.4573 22.8067C11.3386 22.432 11.06 22.128 10.696 21.9774C10.332 21.8267 9.91997 21.844 9.57064 22.0254C8.56664 22.5467 7.29996 22.3854 6.4573 21.5427C5.61463 20.7 5.4533 19.4333 5.97463 18.4293C6.15596 18.08 6.1733 17.668 6.02397 17.304C5.8733 16.9413 5.5693 16.6627 5.1933 16.544C4.11463 16.2027 3.33329 15.192 3.33329 14C3.33329 12.808 4.11463 11.7987 5.1933 11.4574C5.5693 11.3387 5.8733 11.06 6.02397 10.696C6.1733 10.3334 6.15596 9.92136 5.97463 9.57202C5.4533 8.56802 5.61463 7.30135 6.4573 6.45868C7.29996 5.61468 8.56664 5.45468 9.57064 5.97601ZM14 8.66669C11.056 8.66669 8.66663 11.0574 8.66663 14C8.66663 16.944 11.056 19.3334 14 19.3334C16.944 19.3334 19.3333 16.944 19.3333 14C19.3333 11.0574 16.944 8.66669 14 8.66669ZM14 11.3334C15.472 11.3334 16.6666 12.5294 16.6666 14C16.6666 15.472 15.472 16.6667 14 16.6667C12.528 16.6667 11.3333 15.472 11.3333 14C11.3333 12.5294 12.528 11.3334 14 11.3334Z"
      fill="#BFBFBF"
    />
  </svg>
);
