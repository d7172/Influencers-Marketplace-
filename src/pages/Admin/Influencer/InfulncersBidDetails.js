import React from "react";
import CloseBtn from "../../../components/CloseBtn";
import MyDialog from "../../../components/MyDialog";
import AssignCampaignDetails from "../Campaign/AssignCampaignDetails";
import { useNavigate } from "react-router-dom";
const InfluencersBidDetails = ({ close, reason = "", setReason = () => {} }) => {
  const deliverableDetails = [
    {
      campaignId: "0001",
      brandName: "Perfect Status",
      infName: "Steven Sloan",
      socialPlatform: "instagram",
      deliverables: ["Story", "Reels", "Swipe up Story / Link", "IGTV"],
      duration: ["1 Days", "1 Days", "1 Days", "1 Days"],
      amount: [500, 500, 500, 500],
      documentsLinks: ["link", "link", "link", "link"],
    },
    {
      infName: "Jhon deo",
      socialPlatform: "facebook",
      deliverables: ["Create Post", "Create Story"],
      duration: ["1 Days", "1 Days"],
      amount: [500, 500],
      documentsLinks: ["xyz", "xyz"],
    },
  ];
  let bidTotal = 0;

  return (
    <div className="w-[950px] h-[550px]">
      <CloseBtn onClick={close} className="absolute right-5 top-7" />
      <div className="w-[180px]">
        <h1 className="font-bold">Influencers Bid Details</h1>
      </div>
      <div className="w-[320px] ml-1 mt-4">
        <h1 className="text-[12px] text-left text-[#787A80]">
          Log in to your account using email and password provided during registration.
        </h1>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 my-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="flex">
                  <th scope="col" className="text-[14px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Campaign Id
                  </th>
                  <th scope="col" className="text-[14px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Brand Name
                  </th>
                  <th scope="col" className="text-[14px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Influencers Name
                  </th>
                  <th scope="col" className="text-[14px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Social Platform
                  </th>
                  <th scope="col" className="text-[14px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Deliverables
                  </th>
                  <th scope="col" className="text-[14px] font-[500] text-gray-900 px-6 py-4 text-left ml-7">
                    Duration
                  </th>
                  <th scope="col" className="text-[14px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="border-t-2">
                {deliverableDetails.map((data, index) => {
                  return (
                    <tr key={index} className="flex items-start mt-3">
                      <td className="text-[14px] font-[500] text-gray-900 px-6 py-0 text-left w-[100px]">
                        {data.campaignId}
                      </td>
                      <td className="text-[14px] font-[500] text-gray-900 px-5 py-0 text-left ml-8  w-[140px]">
                        {data.brandName}
                      </td>
                      <td className="text-[14px] font-[500] text-gray-900 px-2 py-0 text-left ml-0  w-[160px]">
                        {data.infName}
                      </td>
                      <td className="flex items-start mr-8 capitalize text-[14px] w-[132px]">
                        <img src={`/svgs/${data.socialPlatform}.svg`} className="w-[20px] h-[20px] mr-2 text-[14px]" />
                        {data.socialPlatform}
                      </td>
                      <td className="flex flex-col gap-4 w-[155px] ml-5">
                        {data.deliverables.map((data) => {
                          return <p className="text-left text-[14px]">{data}</p>;
                        })}
                      </td>
                      <td className="flex flex-col gap-4 w-[80px] ">
                        {data.duration.map((data) => {
                          return <p className="text-left text-[14px]">{data}</p>;
                        })}
                      </td>
                      <td className="flex flex-col gap-4 w-[75px]  text-[#3751FF]">
                        {data.amount.map((data) => {
                          bidTotal += data;
                          return <p className="ml-1">&#8377;{data}</p>;
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <div className="border-t-2 w-[880px] mt-8 ">
                <div className="flex justify-end">
                  <p className="text-right text-[14px]  text-black px-6 py-4 font-bold">Total Bid from Influencers</p>
                  <p className="text-right text-[14px] font-[500]  px-6 py-4 text-[#3751FF]">&#8377;{bidTotal}</p>
                </div>
                <div className="flex justify-end border-t-2 mt-5">
                  <p className="text-right text-[14px]  text-black px-6 py-4 font-bold">Total Bid of Yours</p>
                  <p className="text-right text-[14px] font-[500]  px-6 py-4 text-[#3751FF]">&#8377;{bidTotal}</p>
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export const RejectedCampaign = ({ close, reason = "", setReason = () => {} }) => {
  const reasoning = [
    {
      influncerid: "00001",
      // influncername: "Influancer name",
      name: "Ravi",
    },
    {
      influncerid: "00005",
      // influncername: "Influancer name",
      name: "Jaivik",
    },
  ];
  return (
    <div className="w-[550px] h-[650px] flex justify-center items-center flex-col">
      <CloseBtn onClick={close} className="absolute right-5 top-7" />
      <h1 className="text-[28px] font-[500] mb-2 ">Reason for rejection</h1>
      <p className="w-390 text-gray-500 text-sm">
        Log in to your account using email and password provided during registration.
      </p>
      {reasoning.map((data, index) => {
        return (
          <div className="mt-14 flex flex-row">
            <div>
              <input type="checkbox" name="Influancer name" id="Influancer name" className="mr-2 text-gray-500" />
              <label className="text-md text-black font-bold">Influancer name</label>
              <h1 className="text-sm text-black font-bold text-left ml-5">{data.name}</h1>
            </div>
            <div className="ml-5">
              <label className="text-md text-black font-bold">Influancer id</label>
              <h1 className="text-sm text-black font-bold text-left">{data.influncerid}</h1>
            </div>
          </div>
        );
      })}

      <div className="text-left mt-14">
        <label className="font-[400] text-[16px] ">Enter your Description</label>
        <textarea
          className="block w-[390px] h-[100px] mt-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
          value={reason}
          onChange={(val) => setReason(val.target.value)}
        />
      </div>
      <button onClick={close} className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10">
        Submit
      </button>
    </div>
  );
};

export const Qutationphase = ({ close, reason = "", setReason = () => {} }) => {
  const navigate = useNavigate();

  const campaigns = [
    {
      campaignId: "00001",
      brandName: "Perfect Status",
      CampaignTitle: "Enjoy the videos and music ",
      TotalQuotationSent: "10",
    },
  ];
  return (
    <div className="w-[1000px] h-[550px]">
      <CloseBtn onClick={close} className="absolute right-5 top-7" />
      <div className="w-[230px]">
        <h1 className="font-bold text-lg">Quotation Phase to Brand</h1>
      </div>
      <div className="w-[320px] ml-1 mt-4">
        <h1 className="text-[12px] text-left text-[#787A80]">
          Log in to your account using email and password provided during registration.
        </h1>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 my-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="flex gap-5">
                  <th scope="col" className="text-[14px]  text-gray-900 px-6 py-4 text-left font-bold">
                    Campaign Id
                  </th>
                  <th scope="col" className="text-[14px]  text-gray-900 px-6 py-4 text-left font-bold">
                    Brand Name
                  </th>
                  <th
                    scope="col"
                    className="text-[14px]  text-gray-900 px-20 py-4 text-left ml-5 w-[300px] font-bold"
                  >
                    Campaign Title
                  </th>
                  <th scope="col" className="text-[14px]  text-gray-900 px-6 py-4 text-left font-bold">
                    Total Quotation Sent
                  </th>
                </tr>
              </thead>
              <tbody className="border-t-2 border-b-2">
                {campaigns.map((data, index) => {
                  return (
                    <tr className="flex gap-10 ">
                      <td className="text-[14px] font-[500] text-gray-900 px-6 py-4 text-left  w-[125px]">
                        {data.campaignId}
                      </td>
                      <td className="text-[14px] font-[500] text-gray-900 px-1 py-4 text-left  w-[150px] ">
                        {data.brandName}
                      </td>
                      <td className="text-[14px] font-[500] text-gray-900 px-10 py-4 text-left w-[260px]">
                        {data.CampaignTitle}
                      </td>
                      <td className="text-[14px] font-[500] text-gray-900 px-1 py-4 text-left  w-[150px]">
                        {data.TotalQuotationSent}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <div className=" w-[880px] mt-8 ">
                <div className="flex justify-start">
                  <p className="text-right text-[14px]  text-black px-6 py-4 font-bold">Quotation 1.</p>
                  <p className="text-right text-[14px] font-[500]  px-2 py-4 text-[#3751FF]">&#8377;{"6000"}</p>
                  <div className="text-right text-[14px] font-[500]  py-5 text-[#3751FF] ml-4">
                    <div className="w-[8px] h-[8px]  rounded bg-[#FF844B]" />
                  </div>
                  <p className="text-right text-[14px] font-[500]  px-2 py-4 text-[#3751FF]">{"Rejected"}</p>
                </div>
                <div className="flex justify-start">
                  <p className="text-right text-[12px]  text-[#969BA0] ml-6 py-4 font-bold">Quotation Date:</p>
                  <p className=" text-[12px] font-[500]  py-4 text-[#969BA0]">{"12 / 12 / 2020"}</p>
                  <p className="text-right text-[12px] font-[500]  px-4 py-4 text-[#969BA0]">{"Rejected"}</p>
                </div>
                <div className="flex justify-start">
                  <p className="text-right text-[12px]  text-[#969BA0] px-6 py-0 font-bold">Your Margin:</p>
                  <p className="text-right text-[12px] font-[500]  px-0 py-0 text-[#969BA0]">&#8377;{"6000"}</p>
                </div>
                <div className="flex justify-start">
                  <button
                    className="h-[40px] mt-2 px-6 text-[#3751FF] text-[14px] underline"
                    type="button"
                    // onClick={() => setDialog(true)}
                  >
                    View Reson
                  </button>
                </div>
              </div>

              <div className="flex justify-start mt-12">
                <button className="bg-[#3751FF] text-white w-[400px] h-[35px] rounded-full mt-10 text-[14px]"
                onClick={()=> navigate(`/admin/campaign/assigned-campaign/assigned-campaignDetails`) }
                >
                  Sent Another Quotation
                </button>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfluencersBidDetails;
