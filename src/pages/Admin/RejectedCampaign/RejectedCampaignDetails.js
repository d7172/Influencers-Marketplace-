import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CloseBtn from "../../../components/CloseBtn";
import MyDialog from "../../../components/MyDialog";

// import ResonForRejction from "../../../components/ResonForRejction";

function RejectedCampaignDetails({route}) {
  const active = "#3751FF"
  const inactive = "#969BA0"
  const requirementDetails = [
    {
      title: "From",
      desc: "24/2/2021 - 26/2/2021"
    },
    {
      title: "Duration",
      desc: "2 Days"
    },
    {
      title: "Category",
      desc: "Fashion, DIY"
    },
    {
      title: "Age Group",
      desc: "18 - 24 Years"
    },
    {
      title: "Gender",
      desc: "Male"
    },
    {
      title: "Country",
      desc: "India"
    },
    {
      title: "State",
      desc: "Maharastra"
    },
    {
      title: "City",
      desc: "Mumbai, Pune"
    },
    {
      title: "Number of Folllowers",
      desc: "1k - 10k"
    },
    {
      title: "Number of Influencer",
      desc: "02"
    },
    {
      title: "Promation Goal",
      desc: "Brand Promation"
    },
  ]
  const bidDetails = [
    {
      socialPlatform: "instagram",
      deliverables: ["Story", "Reels", "Swipe up Story / Link", "IGTV"],
      duration: ["1 Days", "1 Days", "1 Days", "1 Days"],
      amount: [500, 500, 500, 500]
    },
    {
      socialPlatform: "facebook",
      deliverables: ["Create Post", "Create Post"],
      duration: ["1 Days", "1 Days"],
      amount: [500, 500]
    }
  ]
  let bidTotal = 0;
  const [dialog, setDialog] = useState(false);
  const navigate = useNavigate();
  // const [reason, setReason] = useState("");
  return (
    <>
      <div className="bg-[#F2F2F2] w-full py-4 px-8 mb-4" >
        <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: "Rejected Campiagn" }, {title: "000001"}]} />
      </div>
      <div className="ml-10">
        <div className="px-8 py-5">
          <MyDialog isOpen={dialog} close={() => setDialog(false)} className="rounded-8">
            <div className="w-[550px] h-[550px] flex justify-center items-center flex-col">
              <CloseBtn onClick={() => { setDialog(false) }} className="absolute right-5 top-7" />
              <h1 className="text-[28px] font-[500] mb-2 ">Reason for rejection</h1>
              <p className="w-390 text-gray-500 text-sm text-left">
                Log in to your account using email and password provided during registration.
              </p>
              <div className="text-left mt-14">
                <p className="block w-[390px] h-auto mt-1 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia est necessitatibus dignissimos aliquam optio accusamus dolorem hic amet labore, id, perferendis tenetur pariatur nostrum quidem expedita officia reprehenderit doloremque itaque ea. Ipsam ab saepe nostrum ratione suscipit amet laudantium libero culpa dignissimos nam, nesciunt aperiam cupiditate quos voluptatum, odit consequuntur commodi non quia natus.</p>
              </div>
              <button onClick={() => { setDialog(false) }} className="bg-[#3751FF] text-white w-[400px] h-[47px] rounded-full mt-10">
                Close
              </button>
            </div>
          </MyDialog>
          <div className="flex w-full justify-between">
            <div>
              <h1 className="text-start text-2xl font-bold mt-6 mb-2">Campaign Id</h1>
              <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                #000001
              </p>
            </div>
            <div>
              <h1 className="text-start text-xl font-bold mt-6 mb-1">Influencers Rejected this Campaign</h1>
              <p className="w-390 inline-block text-gray-500 text-sm text-start text-[14px] font-[500] text-[#93939399] mb-4">
                relying on meaningful content. Lorem ipsum
              </p>
              <p onClick={() => setDialog(true)}
                className="text-sm text-start underline text-[14px] font-[500] text-[#3751FF] cursor-pointer mb-4">
                View reason
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-[#00000099] text-[16px] font-bold ">Brand Descripation</h1>
            <h1 className="mb-2 text-start text-xl font-bold ">Cardboard paper style</h1>
            <p className=" w-[77%] my-4 font-[500] text-[#93939399] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut publishing and graphic design, Lorem ipsum
              is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum
            </p>
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
              </div>))}
          </div>
          <div className="w-full my-8 h-[2px] bg-[#EEEEEE]" ></div>
          <div className="mt-8">
            <h1 className="mb-2 text-start text-lg font-bold" >Campaign Budget & Payment Type</h1>
            <p className="w-[77%] mb-4 text-sm font-[400] text-[#93939399]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="flex gap-10">
            {/* {budgePayoutData.map((data, index) => (
          <div key={index}>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        ))} */}
            <div>
              <h1 className="text-[#00000099] font-[500]" >Budge Type</h1>
              {/* <p>{data.budgeType}</p> */}
              <p className="font-[600]">Fixed</p>
            </div>
            <div>
              <h1 className="text-[#00000099] font-[500]">Payout Type</h1>
              {/* <p>{data.payoutType}</p> */}
              <p className="font-[600]">Barter</p>
            </div>
            <div >
              <h1 className="text-[#00000099] font-[500]">Amount</h1>
              {/* <p>{data.amount}</p> */}
              <p className="font-[600]">&#8377;5553</p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="mb-2 text-start text-lg font-bold" >Social media platform & Deliverables </h1>
            <p className="w-[77%] mb-4 text-sm font-[400] text-[#93939399]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 my-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="flex w-auto mb-4">
                      <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[137px] mr-8">Social Platform</th>
                      <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[155px] mr-8">Deliverables</th>
                      <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[80px] mr-8">Duration</th>
                      <th scope="col" className="text-left text-[#6C6C6C] font-[500] text-lg w-[75px] mr-8">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bidDetails.map((data, index) => {
                      return (
                        <tr key={index} className="flex mb-8">
                          <td className="flex items-start w-[137px] mr-8 capitalize"><img src={`/svgs/${data.socialPlatform}.svg`} className="w-[20px] h-[20px] mr-2" />{data.socialPlatform}</td>
                          <td className="flex flex-col gap-4 w-[155px] mr-8">{data.deliverables.map((data) => { return <p>{data}</p> })}</td>
                          <td className="flex flex-col gap-4 w-[80px] mr-8">{data.duration.map((data) => { return <p>{data}</p> })}</td>
                          <td className="flex flex-col gap-4 w-[75px] mr-8 text-[#3751FF]">{data.amount.map((data) => {
                            bidTotal += data;
                            return <p>&#8377;{data}</p>
                          })}</td>
                        </tr>
                      )
                    })}
                    <div className="w-[505px]">
                      <div className="w-[578px] my-8 h-[2px] bg-[#EEEEEE]" ></div>
                      <div className="my-16 flex w-full justify-end gap-4">
                        <h1 className="text-2xl font-bold mr-4">Influencers Bid Total</h1>
                        <p className="font-bold text-2xl text-[#3751FF]">&#8377;{bidTotal}</p>
                      </div>
                      <div className="w-72 ml-auto h-1  bg-[#EEEEEE]" ></div>
                      <div className="my-16 flex w-full justify-end gap-4">
                        <h1 className="text-2xl font-bold mr-4 w-[235px]">Your Bid</h1>
                        <p className="font-bold text-2xl text-[#3751FF]">&#8377;6000</p>
                      </div>
                      <div className="w-[578px] my-8 h-[2px] bg-[#EEEEEE]" ></div>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-8 w-[77%]">
              <h1 className="text-[#00000099] font-[500]" >Note from Brand</h1>
              <p className="text-xl font-[600]">Cardboard paper style</p>
              <p className="font-[400] text-[#93939399]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum accusantium dicta veritatis deserunt laborum vero dolorem fuga ex quia sed nam, voluptas voluptates officiis. Quae, et? Eligendi accusantium debitis dolores commodi id. Laborum, impedit?</p>
            </div>
            <div className="w-full my-8 h-[2px] bg-[#EEEEEE]" ></div>
            <div className="mb-8 w-[77%]">
              <h1 className="text-[#00000099] font-[500]" >Note from Admin</h1>
              <p className="text-xl font-[600]">Jhon Deo</p>
              <p className=" text-[#93939399]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam maxime non animi obcaecati reprehenderit delectus. Culpa omnis voluptatem enim necessitatibus voluptas sed repellat nulla, consectetur fuga tenetur vero, velit expedita cumque, nobis repudiandae modi.</p>
            </div>
            <div className="w-full my-8 h-[2px] bg-[#EEEEEE]" ></div>
            <div className="mb-8 w-[77%]">
              <h1 className="text-xl font-[600] mb-4">Terms & Conditions</h1>
              <p className=" text-[#93939399]">lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
              <p className=" text-[#93939399]">lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
              <p className=" text-[#93939399]">lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
              <p className=" text-[#93939399]">lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className="mb-8 w-[77%]">
              <h1 className="text-xl font-[600] mb-4">Reason for rejection</h1>
              <p className="block w-full h-auto mt-1 px-3 py-1.5 text-[#93939399] text-base font-normal border border-solid border-gray-300 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia est necessitatibus dignissimos aliquam optio accusamus dolorem hic amet labore, id, perferendis tenetur pariatur nostrum quidem expedita officia reprehenderit doloremque itaque ea. Ipsam ab saepe nostrum ratione suscipit amet laudantium libero culpa dignissimos nam, nesciunt aperiam cupiditate quos voluptatum, odit consequuntur commodi non quia natus.</p>
            </div>
          </div>
          <div className="mt-14 flex ">
            <button
              type="button"
              className="rounded-[50px] bg-primary text-white px-4 py-2"
            >
              Reassigned to Influencers
            </button>
            <button
              type="button"
              onClick={()=>navigate(`/admin/campaign/${route}`)}
              className="rounded-[50px] text-[#969BA0] px-4 py-2 underline"
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RejectedCampaignDetails;
