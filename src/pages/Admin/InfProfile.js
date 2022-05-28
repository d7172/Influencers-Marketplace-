import { Formik } from "formik";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Dropdown from "../../components/Dropdown";
import { categoryList } from "../influencer/SignUp/Category";

function InfProfile({ route }) {
  return (
    <>
      <div className=" w-full min-w-infNavbar px-8 items-center justify-between">
        <div className="flex gap-4 px-4 w-[100%] justify-center items-center h-[50px] bg-[#F1F1F1]">
          <Breadcrumbs options={[{ title: "influencer" }, { title: route }, { title: "0001" }]} />
        </div>
        <div className=" gap-4 px-4 w-[100%] h-[100vh] mt-[5px] bg-[white]">
          <div className="mt-8 text-[16px] font-[600] w-[180px]">Personal Details</div>
          <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <Formik
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log("handle submit");
            }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
              return (
                <div className="w-[1100px]">
                  <div className="flex flex-wrap gap-10 items-center justify-between">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="input-field w-390"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        value={"Anette"}
                        onChange={handleChange("firstName")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                        Last Name
                      </label>
                      <input
                        className="input-field w-390"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={"black"}
                        onChange={handleChange("lastName")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                        User Name
                      </label>
                      <input
                        className="input-field w-168"
                        id="userName"
                        type="text"
                        placeholder="User Name"
                        value={"d_7896"}
                        onChange={handleChange("userName")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                        Email
                      </label>
                      <input
                        className="input-field w-390"
                        id="email"
                        type="text"
                        value={"anetteB@gmail.com"}
                        placeholder="example@gmail.com"
                        onChange={handleChange("email")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                        Phone Number
                      </label>
                      <input
                        className="input-field w-390"
                        id="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={"9878665644"}
                        onChange={(e) => {
                          const numberReg = /^[0-9]*$/;
                          if (numberReg.test(e.target.value)) {
                            setFieldValue("phone", e.target.value);
                          }
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                        Gender
                      </label>
                      <div>
                        <Dropdown
                          dropdownStyle="w-168"
                          className="w-168"
                          label={"Gender"}
                          options={[
                            {
                              label: "Male",
                            },
                            {
                              label: "Female",
                            },
                          ]}
                          onChange={(val) => console.log(val.label)}
                        />
                      </div>
                    </div>
                    <div className="flex gap-20">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Whatsapp Number
                        </label>
                        <input
                          className="input-field w-390"
                          id="phone"
                          type="text"
                          placeholder="Phone Number"
                          value={"9878665644"}
                          onChange={(e) => {
                            const numberReg = /^[0-9]*$/;
                            if (numberReg.test(e.target.value)) {
                              setFieldValue("whatsapp", e.target.value);
                            }
                          }}
                        />
                      </div>
                      <div className="datepicker">
                        <label className="block text-gray-700 text-sm mb-2">Date Of Birth </label>
                        <input
                          type="date"
                          value={"12/12/1994"}
                          className="input-field text-gray-500"
                          onChange={(e) => setFieldValue("DOB", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex gap-20">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Profile Picture </label>
                      <div className="mt-1 flex w-390 ">
                        <img
                          className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                          src="/images/placeholder.png"
                          alt="avtar"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cover Picture</label>

                      <div className="mt-1 flex w-390 ">
                        <img
                          className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                          src="/images/unsplash_aJYO8JmVodY.png"
                          alt="avtar"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <label className="form-label inline-block mb-2">About Your Self </label>
                    <textarea
                      className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                      value={
                        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
                      }
                      onChange={(e) => setFieldValue("aboutYourself", e.target.value)}
                    />
                  </div>
                </div>
              );
            }}
          </Formik>
          <div className="mt-8 text-[16px] font-[600] w-[180px]">Category Details</div>
          <div className="block mb-[15px] text-[12px] font-[400] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur
          </div>

          <div className="flex w-full min-w-infNavbar items-center">
            <div className="flex gap-4 px-4 w-[191px] justify-center items-center h-[61px] bg-[#F1F1F1]">
              Fashion & Style
            </div>
            <div className="flex gap-4 px-8 mx-8 w-[191px] justify-center items-center h-[61px] bg-[#F1F1F1]">
              Travel & Holidays
            </div>
            <div className="flex gap-4 px-4 w-[191px] justify-center items-center h-[61px] bg-[#F1F1F1]">Parenting</div>
          </div>
          <div className="mt-8 flex cursor-pointer">
            <Formik
              enableReinitialize={true}
              onSubmit={(values) => {
                console.log("handle submit");
              }}
            >
              {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
                return (
                  <div className="">
                    <div className="flex flex-wrap gap-10 items-center justify-between">
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="category">
                          Add Category Details
                        </label>
                        <div className="justify-between">
                          <Dropdown
                            className="w-390"
                            label={"category"}
                            options={categoryList.map((cat) => cat.title)}
                            onChange={(val) => console.log(val)}
                          />
                          <button
                            type="button"
                            className="w-[150px] rounded-[50px] bg-primary text-white m-4 py-2"
                            onClick={() => {}}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Formik>
            <div className=" flex mt-14 cursor-pointer"></div>
          </div>

          <div className="mt-8 text-[16px] font-[600] w-[180px]">Contact Details</div>
          <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <Formik
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log("handle submit");
            }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
              return (
                <div className="w-[1100px]">
                  <div className="flex flex-wrap gap-10 items-center">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="country">
                        Country
                      </label>
                      <input
                        className="input-field w-390"
                        id="country"
                        type="text"
                        placeholder="country"
                        value={"USA"}
                        onChange={handleChange("country")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="city">
                        City
                      </label>
                      <input
                        className="input-field w-390"
                        id="city"
                        type="text"
                        placeholder="city"
                        value={"New jersey"}
                        onChange={handleChange("city")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
                        Address
                      </label>
                      <input
                        className="input-field w-390"
                        id="address"
                        type="text"
                        placeholder="address"
                        value={"2464 Royal Ln. Mesa, New Jersey"}
                        onChange={handleChange("address")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="zip code">
                        ZIP code
                      </label>
                      <input
                        className="input-field w-390"
                        id="ZIP code"
                        type="text"
                        value={"45463"}
                        placeholder="zip code"
                        onChange={handleChange("ZIP code")}
                      />
                    </div>
                  </div>
                </div>
              );
            }}
          </Formik>

          <div className="mt-8 text-[16px] font-[600] w-[180px]">Other Information</div>
          <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <Formik
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log("handle submit");
            }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
              return (
                <div className="w-[1100px]">
                  <div className="flex flex-wrap gap-10 items-center">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="avgUserEngagement">
                        Average User Engagement
                      </label>
                      <input
                        className="input-field w-390"
                        id="avgUserEngagement"
                        type="text"
                        placeholder="Average User Engagement"
                        value={"Less than 1%"}
                        onChange={handleChange("avgUserEngagement")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="chargePerPost">
                        Basic Charges Per Post (INR)
                      </label>
                      <input
                        className="input-field w-390"
                        id="chargePerPost"
                        type="text"
                        placeholder="Basic Charges Per Post (INR)"
                        value={"10,000"}
                        onChange={handleChange("chargePerPost")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="infExperience">
                        Influencer Experience
                      </label>
                      <input
                        className="input-field w-390"
                        id="infExperience"
                        type="text"
                        placeholder="Influencer Experience"
                        value={"Less than 1 Year"}
                        onChange={handleChange("infExperience")}
                      />
                    </div>
                  </div>
                </div>
              );
            }}
          </Formik>

          <div className="mt-8 text-[16px] font-[600] w-[180px]">Bank Account Details</div>
          <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <Formik
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log("handle submit");
            }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
              return (
                <div className="w-[1100px]">
                  <div className="flex flex-wrap gap-10 items-center">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="bankName">
                        Bank Name
                      </label>
                      <input
                        className="input-field w-390"
                        id="bankName"
                        type="text"
                        placeholder="Bank Name"
                        value={"Bank of India"}
                        onChange={handleChange("bankName")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="accountNumber">
                        Account Number
                      </label>
                      <input
                        className="input-field w-390"
                        id="accountNumber"
                        type="text"
                        placeholder="Account Number"
                        value={"01213456789"}
                        onChange={handleChange("accountNumber")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="confirmAccNUmber">
                        confirm Account Number
                      </label>
                      <input
                        className="input-field w-390"
                        id="confirmAccNUmber"
                        type="text"
                        placeholder=" confirm Account Number"
                        value={"01213456789"}
                        onChange={handleChange("confirmAccNUmber")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="IFSC code">
                        IFSC Code
                      </label>
                      <input
                        className="input-field w-390"
                        id="IFSCCode"
                        type="text"
                        placeholder=" IFSC code"
                        value={"ABCD01236"}
                        onChange={handleChange("IFSCCode")}
                      />
                    </div>
                  </div>
                </div>
              );
            }}
          </Formik>

          <div className="mt-8 text-[16px] font-[600] w-[180px]">KYC Details</div>
          <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <Formik
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log("handle submit");
            }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
              return (
                <div className="w-[1100px]">
                  <div className="flex flex-wrap gap-10 items-center">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="PANCardNumber">
                        PAN Card Number
                      </label>
                      <input
                        className="input-field w-390"
                        id="PANCardNumber"
                        type="text"
                        placeholder="PAN Card Number"
                        value={""}
                        onChange={handleChange("PANCardNumber")}
                      />
                    </div>
                    <div>
                      <div className="mt-1 flex w-390 ">
                        <img
                          className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                          src="/images/PAN-Card.png"
                          alt="avtar"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="addharCardNumber">
                        Addhar Card Number
                      </label>
                      <input
                        className="input-field w-390"
                        id="addharCardNumber"
                        type="text"
                        placeholder=" Addhar Card Number"
                        value={"01213456789"}
                        onChange={handleChange("addharCardNumber")}
                      />
                    </div>
                    <div>
                      <div className="mt-1 flex w-390 justify-between">
                        <img
                          className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                          src="/images/addhar-front.png"
                          alt="avtar"
                        />
                        <div className="mt-1 flex w-191">
                          <img
                            className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                            src="/images/addhar-rear.png"
                            alt="avtar"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </Formik>

          <div className="mt-8 text-[16px] font-[600] w-[180px]">Social Account</div>
          <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <Formik
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log("handle submit");
            }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
              return (
                <div className="w-[1100px]">
                  <div className="flex flex-wrap gap-10 items-center">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="youtubeChannelName">
                        Youtube Channel Name
                      </label>
                      <input
                        className="input-field w-390"
                        id="youtubeChannelName"
                        type="text"
                        placeholder="PAN Card Number"
                        value={"DIY By Danny"}
                        onChange={handleChange("youtubeChannelName")}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm mb-2" htmlFor="youTubeLink">
                        Youtube Link
                      </label>
                      <input
                        className="input-field w-390"
                        id="youTubeLink"
                        type="text"
                        placeholder="Youtube link"
                        value={"https://www.figma.com/file/Fn"}
                        onChange={handleChange("youTubeLink")}
                      />
                    </div>
                  </div>
                </div>
              );
            }}
          </Formik>

          <div className="mt-8 flex items-center">
            <div className={`items-center gap-3 w-fit pr-7 py-2 cursor-pointer`}>
              <img className="w-[60px] h-[60px] items-center" src={`/svgs/facebook.svg`} alt={"facebook"} />
              <label className="block text-gray-700 text-[16px] font-[700] mb-2" htmlFor="Instagram">
                Facebook
              </label>
              <label className="block text-gray-700 text-[16px] font-[700] mb-2" htmlFor="Connected">
                Connected
              </label>
              <label className="block text-gray-700 text-[16px] font-[700] mb-2" htmlFor="Followers">
                Followers
              </label>
              <label className="block text-gray-700 text-[16px] font-[700] mb-2">12.2k</label>
            </div>
            <div className={` gap-3 w-fit px-7 py-2 cursor-pointer`}>
              <img className="w-[60px] h-[60px]" src={`/svgs/instagram.svg`} alt={"instagram"} />
              <label className="block text-gray-700 text-[16px] font-[700] mb-2" htmlFor="Instagram">
                Instagram
              </label>
              <label className="block text-[16px] font-[700] text-gray-700 mb-2" htmlFor="Connected">
                Connected
              </label>
              <label className="block text-gray-700 text-[16px] font-[700] mb-2" htmlFor="Followers">
                Followers
              </label>
              <label className="block text-gray-700 text-[16px] font-[700] items-center mb-2">12.2k</label>
            </div>
          </div>

          <div className="mt-8 flex cursor-pointer">
            <Formik
              enableReinitialize={true}
              onSubmit={(values) => {
                console.log("handle submit");
              }}
            >
              {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
                return (
                  <div className="">
                    <div className="flex flex-wrap gap-10 items-center justify-between">
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="socialDetails">
                          Add Social Details
                        </label>
                        <div className="justify-between">
                          <Dropdown
                            className="w-390"
                            label={"socialDetails"}
                            options={categoryList.map((cat) => cat.title)}
                            onChange={(val) => console.log(val)}
                          />
                          <button
                            type="button"
                            className="w-[150px] rounded-[50px] bg-primary text-white m-4 py-2"
                            onClick={() => {}}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Formik>
          </div>

          <div className="flex justify-end">
            <div className="mt-14 cursor-pointer">
              <button type="button" className="w-[150px] rounded-[50px] bg-primary text-white py-2" onClick={() => {}}>
                Approve
              </button>
            </div>
            <div className="m-14 cursor-pointer">
              <button
                type="button"
                className="w-[150px] rounded-[50px] bg-[#FFFFFF] py-2 box-shadow-button"
                onClick={() => {}}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfProfile;

export const imageSvg = (
  <svg
    className="mx-auto h-12 w-12 text-gray-400"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
