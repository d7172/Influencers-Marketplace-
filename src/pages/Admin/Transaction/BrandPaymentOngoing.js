import React, { useState } from "react";
import MyDialog from "../../../components/MyDialog";
// import CloseBtn from "../../../components/CloseBtn";
import ResonForRejction from "../../../components/ResonForRejction";

// import { useNavigate } from "react-router-dom";
// import Breadcrumbs from '../../../components/Breadcrumbs';
function BidDetails() {
  const active = "#3751FF";
  const inactive = "#969BA0";
  const requirementDetails = [
    {
      title: "From",
      desc: "24/2/2021 - 26/2/2021",
    },
    {
      title: "Duration",
      desc: "2 Days",
    },
    {
      title: "Category",
      desc: "Fashion, DIY",
    },
    {
      title: "Age Group",
      desc: "18 - 24 Years",
    },
    {
      title: "Gender",
      desc: "Male",
    },
    {
      title: "Country",
      desc: "India",
    },
    {
      title: "State",
      desc: "Maharastra",
    },
    {
      title: "City",
      desc: "Mumbai, Pune",
    },
    {
      title: "Number of Folllowers",
      desc: "1k - 10k",
    },
    {
      title: "Number of Influencer",
      desc: "02",
    },
    {
      title: "Promation Goal",
      desc: "Brand Promation",
    },
  ];
  const bidDetails = [
    {
      socialPlatform: "instagram",
      deliverables: ["Story", "Reels", "Swipe up Story / Link", "IGTV"],
      duration: ["1 Days", "1 Days", "1 Days", "1 Days"],
      amount: [500, 500, 500, 500],
    },
    {
      socialPlatform: "facebook",
      deliverables: ["Create Post", "Create Post"],
      duration: ["1 Days", "1 Days"],
      amount: [500, 500],
    },
  ];
  let bidTotal = 0;
  const [dialog, setDialog] = useState(false);
  // const [reason, setReason] = useState("");
  return (
    <div className="ml-10">
      <div className="px-8 py-5">
        <MyDialog isOpen={dialog} close={() => setDialog(false)} className="rounded-8">
          <ResonForRejction close={() => setDialog(false)} />
        </MyDialog>
        <h1 className="text-start text-2xl font-bold mt-6 mb-2">BoAt</h1>
        <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">#000001</p>
        <div className="mt-8">
          <h1 className="text-[#00000099] text-[16px] font-bold ">Brand Descripation</h1>
          <h1 className="mb-2 text-start text-xl font-bold ">Cardboard paper style</h1>
          <p className=" w-[77%] my-4 text-[14px] font-[500] text-[#93939399] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
            or a typeface without relying on meaningful content. Lorem ipsum
          </p>
        </div>
        <div className="flex mt-8 gap-20">
          <div
            className={`w-[258px] h-[184px] top-[393px] left-[440px] flex flex-col items-center justify-center  pr-4 border-solid border-2 border-[${active}]`}
          >
            <p>
              <span className="bg-[#3751FF] rounded-full w-3"></span>On going
            </p>
            <h1 className="text-[18px] font-[500] text-[#000000] my-2">Campaign : 1</h1>
            <div
              className={`text-[${active}] border-[${active}] font-bold border-2 border-dashed w-[165px] h-[42px] top-[473px] left-[485px] flex items-center justify-center`}
            >
              <h1>&#8377;5553</h1>
            </div>
            <h1 className={`text-[${active}] underline mt-4 cursor-pointer`}>Click here</h1>
          </div>
          <div className="flex gap-20">
            <div
              className={`w-[258px] h-[184px] top-[393px] left-[440px] flex flex-col items-center justify-center  pr-4 border-solid border-2 border-[${inactive}] `}
            >
              <h1 className="text-[18px] font-[500] text-[#000000] my-2 ">Campaign : 2</h1>
              <div
                className={`text-[${inactive}] border-[${inactive}] font-bold border-2 border-dashed w-[165px] h-[42px] top-[473px] left-[485px] flex items-center justify-center`}
              >
                <h1>&#8377;5553</h1>
              </div>
              <h1 className={`text-[${inactive}] underline mt-4 cursor-pointer`}>Click here</h1>
            </div>
          </div>
          <div className="flex gap-20">
            <div
              className={`w-[258px] h-[184px] top-[393px] left-[440px] flex flex-col items-center justify-center  pr-4 border-solid border-2 border-[${inactive}] `}
            >
              <h1 className="text-[18px] font-[500] text-[#000000] my-2 ">Campaign : 3</h1>
              <div
                className={`text-[${inactive}] border-[${inactive}] font-bold border-2 border-dashed w-[165px] h-[42px] top-[473px] left-[485px] flex items-center justify-center`}
              >
                <h1>&#8377;5553</h1>
              </div>
              <h1 className={`text-[${inactive}] underline mt-4 cursor-pointer`}>Click here</h1>
            </div>
          </div>
          <div className="flex gap-20">
            <div
              className={`w-[258px] h-[184px] top-[393px] left-[440px] flex flex-col items-center justify-center  pr-4 border-solid border-2 border-[${inactive}] `}
            >
              <h1 className="text-[18px] font-[500] text-[#000000] my-2 ">Campaign : 4</h1>
              <div
                className={`text-[${inactive}] border-[${inactive}] font-bold border-2 border-dashed w-[165px] h-[42px] top-[473px] left-[485px] flex items-center justify-center`}
              >
                <h1>&#8377;5553</h1>
              </div>
              <h1 className={`text-[${inactive}] underline mt-4 cursor-pointer`}>Click here</h1>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="mb-2 text-start text-xl font-bold ">Campaign Requirement</h1>
          <p className="w-[77%] mb-4 text-[14px] font-[500] text-[#93939399]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="flex gap-8 my-8 flex-wrap">
          {requirementDetails.map((detail, index) => (
            <div key={index}>
              <h1 className="text-[#00000099]">{detail.title}</h1>
              <p className="font-bold">{detail.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-full my-8 h-[2px] bg-[#EEEEEE]"></div>
        <div className="mt-8">
          <h1 className="mb-2 text-start text-lg font-bold">Campaign Budget & Payment Type</h1>
          <p className="w-[77%] mb-4 text-sm font-[400] text-[#93939399]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="flex gap-10">
          {/* {budgePayoutData.map((data, index) => (
          <div key={index}>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        ))} */}
          <div>
            <h1 className="text-[#00000099] font-[500]">Budge Type</h1>
            {/* <p>{data.budgeType}</p> */}
            <p className="font-[600]">Fixed</p>
          </div>
          <div>
            <h1 className="text-[#00000099] font-[500]">Payout Type</h1>
            {/* <p>{data.payoutType}</p> */}
            <p className="font-[600]">Barter</p>
          </div>
          <div>
            <h1 className="text-[#00000099] font-[500]">Amount</h1>
            {/* <p>{data.amount}</p> */}
            <p className="font-[600] text-[#3751FF]">&#8377;5553</p>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="mb-2 text-start text-lg font-bold">Social media platform & Deliverables </h1>
          <p className="w-[77%] mb-4 text-sm font-[400] text-[#93939399]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 my-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="flex w-auto mb-4">
                    <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[137px] mr-8">
                      Social Platform
                    </th>
                    <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[155px] mr-8">
                      Deliverables
                    </th>
                    <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[80px] mr-8">
                      Duration
                    </th>
                    <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[75px] mr-8">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bidDetails.map((data, index) => {
                    return (
                      <tr key={index} className="flex mb-8">
                        <td className="flex items-start w-[137px] mr-8 capitalize">
                          <img src={`/svgs/${data.socialPlatform}.svg`} className="w-[20px] h-[20px] mr-2" />
                          {data.socialPlatform}
                        </td>
                        <td className="flex flex-col gap-4 w-[155px] mr-8">
                          {data.deliverables.map((data) => {
                            return <p>{data}</p>;
                          })}
                        </td>
                        <td className="flex flex-col gap-4 w-[80px] mr-8">
                          {data.duration.map((data) => {
                            return <p>{data}</p>;
                          })}
                        </td>
                        <td className="flex flex-col gap-4 w-[75px] mr-8 text-[#3751FF]">
                          {data.amount.map((data) => {
                            bidTotal += data;
                            return <p>&#8377;{data}</p>;
                          })}
                        </td>
                      </tr>
                    );
                  })}
                  <div className="w-[505px]">
                    <div className="w-[578px] my-8 h-[2px] bg-[#EEEEEE]"></div>
                    <div className="my-16 flex w-full justify-end gap-4">
                      <h1 className="text-2xl font-bold mr-4">Influencers Bid Total</h1>
                      <p className="font-bold text-2xl text-[#3751FF]">&#8377;{bidTotal}</p>
                    </div>
                    <div className="w-72 ml-auto h-1  bg-[#EEEEEE]"></div>
                    <div className="my-16 flex w-full justify-end gap-4">
                      <h1 className="text-2xl font-bold mr-4 w-[235px]">Your Bid</h1>
                      <p className="font-bold text-2xl text-[#3751FF]">&#8377;6000</p>
                    </div>
                    <div className="my-16 flex w-full justify-end gap-4">
                      <h1 className="text-2xl font-bold mr-4 w-[235px]">Your Margin</h1>
                      <p className="font-bold text-2xl text-[#3751FF]">&#8377;1000</p>
                    </div>
                    <div className="w-[578px] my-8 h-[2px] bg-[#EEEEEE]"></div>
                    <div className="my-16 flex w-full justify-end gap-4">
                      <h1 className="text-2xl font-bold mr-4">Influencers Bid Total</h1>
                      <p className="font-bold text-2xl text-[#3751FF]">&#8377;3000</p>
                    </div>
                    <div className="w-[578px] my-8 h-[2px] bg-[#EEEEEE]"></div>
                    <div className="my-16 flex w-full justify-end gap-4">
                      <h1 className="text-2xl font-bold mr-4">Influencers Bid Total</h1>
                      <p className="font-bold text-2xl text-[#3751FF]">&#8377;3000</p>
                    </div>
                    <div>
                      <button className="bg-[#3751FF] text-white px-8 py-4 rounded-lg">Edit</button>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="flex p-4 justify-center items-start">
            <h1>Payment Sent Details by Brand</h1>
            <div>
              <table>
                <thead>
                  <tr className="flex gap-4 my-4">
                    <th className="w-[200px]">Date</th>
                    <th className="w-[200px]">Amount</th>
                    <th className="w-[200px]">Source</th>
                    <th className="w-[200px]">UTR Number</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {paymentDetailsByBrand.map((data,i)=>{
                                        return(
                                            <tr key={i} className="flex gap-4 mb-4">
                                                <td className="w-200px">{data}</td>
                                            </tr>
                                        )
                                    })} */}
                  <tr>
                    <td>12 / 2 / 2020</td>
                    <td>&#8377;5500</td>
                    <td>Brand</td>
                    <td>0123456789</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h1>Hold Payment: &#8377;4840</h1>
              <p>( This payment will be released on 26 /11 / 2022 )</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default BidDetails;
