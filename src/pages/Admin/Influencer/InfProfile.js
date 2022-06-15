import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Dropdown from "../../../components/Dropdown";
import { categoryList } from "../../influencer/SignUp/Category";
import ResonForRejction from "../../../components/ResonForRejction";
import MyDialog from "../../../components/MyDialog";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesData } from "../../../store/Categories/action";
import { personalDetailsSchema } from "../../../utils/formsSchema";
import { useParams } from "react-router-dom";

const initForm = {
  first_name: "",
  last_name: "",
  user_name: "",
  email: "",
  // phone: { dail_code: "+91", contact_number: "" },
  phone: {},
  gender: "",
  // whats_app: { dail_code: "+91", contact_number: "" },
  whats_app: {},
  dob: "",
  about_yourself: "",
  category: [], // arr of strs
  avg_user_engagement: null,
  basic_charges_per_post: "",
  influencer_experience: null,
  address_details: {},
  bank_details: {},
  kyc_details: {},
  profile_title: "",
  profile_pic: "",
  cover_pic: "",
};
export const FormError = ({ children }) => {
  return <p className="text-red-500 text-xs italic mt-1">{children}</p>;
};
export const ImgUpload = ({ children }) => {
  return <p className="text-[13px] mt-1 text-green-600">Added {children}</p>;
};

function InfProfile({ route }) {
  const { id } = useParams();
  const [rejectBid, setRejectBid] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(initForm);
  let categoryData = [];
  const disable = route === "rejected-user";
  const dispatch = useDispatch();
  categoryData = useSelector((state) => state?.categories);
  let newUserdata = useSelector((state) => state?.infNewUser);
  const infNewUser = newUserdata.results.filter((i) => i.id == id)[0];
  let activeUserdata = useSelector((state) => state?.infActiveUser);
  const infActiveUser = activeUserdata.results.filter((i) => i?.influencerDetail?.id == id)[0]?.influencerDetail;
  let rejectedUserData = useSelector((state) => state?.infRejectedUser);
  const infRejectedUser = rejectedUserData.results.filter((i) => i.id == id)[0];

  const User = {
    first_name: (infNewUser || infActiveUser || infRejectedUser)?.first_name,
    last_name: (infNewUser || infActiveUser || infRejectedUser)?.last_name,
    user_name: (infNewUser || infActiveUser || infRejectedUser)?.user_name,
    email: (infNewUser || infActiveUser || infRejectedUser)?.email,
    phone: { dail_code: "+91", contact_number: (infNewUser || infActiveUser || infRejectedUser)?.contact_number },
    gender: (infNewUser || infActiveUser || infRejectedUser)?.gender === "M" ? "Male" : "Female",
    whats_app: { dail_code: "+91", contact_number: (infNewUser || infActiveUser || infRejectedUser)?.whatsapp_number },
    dob: (infNewUser || infActiveUser || infRejectedUser)?.dob,
    about_yourself: (infNewUser || infActiveUser || infRejectedUser)?.about_yourself,
    category: (infNewUser || infActiveUser || infRejectedUser)?.category, // arr of strs
    avg_user_engagement: (infNewUser || infActiveUser || infRejectedUser)?.avg_user_engagement,
    basic_charges_per_post: (infNewUser || infActiveUser || infRejectedUser)?.basic_charges_per_cost_int,
    influencer_experience: (infNewUser || infActiveUser || infRejectedUser)?.experience_in_years,
    profile_title: (infNewUser || infActiveUser || infRejectedUser)?.profile_title,
    profile_pic: (infNewUser || infActiveUser || infRejectedUser)?.profile_pic,
    cover_pic: (infNewUser || infActiveUser || infRejectedUser)?.cover_pic,
    address_details: (infNewUser || infActiveUser || infRejectedUser)?.address_details,
    bank_details: (infNewUser || infActiveUser || infRejectedUser)?.bank_details,
    kyc_details: (infNewUser || infActiveUser || infRejectedUser)?.kyc_details
  };

  useEffect(() => {
    setPersonalDetails(User);
    dispatch(getCategoriesData());
  }, [infNewUser, infActiveUser]);
  // console.log(categoryData);
  return (
    <>
      <div className="flex gap-4 px-4 w-[100%] justify-center items-center h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs options={[{ title: "influencer" }, { title: route }, { title: id }]} />
      </div>
      <MyDialog isOpen={rejectBid} close={() => setRejectBid(false)} className="rounded-8">
        <ResonForRejction close={() => setRejectBid(false)} />
      </MyDialog>

      <div className=" w-full min-w-infNavbar px-8 items-center justify-between">
        <div className=" gap-4 px-4 w-[100%] mt-[5px] bg-[white]">
          <h1 className="text-start text-2xl font-bold mt-4">Personal Details</h1>
          <p className="block mb-[15px] text-[12px]  font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </p>

          <Formik
            enableReinitialize={true}
            initialValues={personalDetails}
            validationSchema={personalDetailsSchema}
            onSubmit={(values) => {
              console.log(values, "handle submit");
              setPersonalDetails({});
            }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
              return (
                <>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center justify-between">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          value={values.first_name}
                          onChange={(e) => setFieldValue("first_name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Last Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          value={values.last_name}
                          onChange={(e) => setFieldValue("last_name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          User Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-168"
                          id="userName"
                          type="text"
                          placeholder="User Name"
                          value={values.user_name}
                          onChange={(e) => setFieldValue("user_name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Email
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="email"
                          type="text"
                          value={values.email}
                          placeholder="example@gmail.com"
                          onChange={(e) => {
                            setFieldValue("email", e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Phone Number
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="phone"
                          type="text"
                          placeholder="Phone Number"
                          value={values.phone.contact_number}
                          onChange={(e) => {
                            const numberReg = /^[0-9]*$/;
                            if (numberReg.test(e.target.value)) {
                              setFieldValue("phone", { dial_code: "+91", contact_number: e.target.value });
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
                            disabled={disable}
                            dropdownStyle="w-168"
                            className="w-168"
                            label={values.gender.length ? values.gender : "Gender"}
                            options={[
                              {
                                label: "Male",
                              },
                              {
                                label: "Female",
                              },
                            ]}
                            onChange={(val) => {
                              setFieldValue("gender", val.label);
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-20">
                        <div>
                          <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                            Whatsapp Number
                          </label>
                          <input
                            disabled={disable}
                            className="input-field w-390"
                            id="phone"
                            type="text"
                            placeholder="Whatsapp Number"
                            value={values.whats_app.contact_number}
                            onChange={(e) => {
                              const numberReg = /^[0-9]*$/;
                              if (numberReg.test(e.target.value)) {
                                setFieldValue("whats_app", { dial_code: "+91", contact_number: e.target.value });
                              }
                            }}
                          />
                        </div>
                        <div className="datepicker">
                          <label className="block text-gray-700 text-sm mb-2">Date Of Birth </label>
                          <input
                            disabled={disable}
                            type="date"
                            value={values.dob}
                            className="input-field text-gray-500"
                            onChange={(e) => setFieldValue("dob", e.target.value)}
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
                            src={values?.profile_pic}
                            alt="avtar"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Cover Picture</label>

                        <div className="mt-1 flex w-390 ">
                          <img
                            className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                            src={values?.cover_pic}
                            alt="avtar"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <label className="form-label inline-block mb-2">About Your Self </label>
                      <textarea
                        disabled={disable}
                        className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                        value={values.about_yourself}
                        onChange={(e) => setFieldValue("about_yourself", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-8 text-[16px] font-[600] w-[180px]">Category Details</div>
                  <div className="block mb-[15px] text-[12px] font-[400] text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="flex w-full min-w-infNavbar items-center">
                    <div className="flex gap-4 px-4 w-[191px] justify-center items-center h-[61px] bg-[#F1F1F1]">
                      {values?.category}
                    </div>
                  </div>

                  {route === "active-user" && (
                    <div className="mt-8 flex cursor-pointer">
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
                                options={categoryData}
                                onChange={(val) => console.log(val)}
                                optionsLabel={"name"}
                              />
                              <button
                                type="button"
                                className="w-[150px] rounded-[50px] bg-primary text-white m-4 py-2"
                                onClick={() => { }}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex mt-14 cursor-pointer"></div>
                    </div>
                  )}

                  <div className="mt-8 text-[16px] font-[600] w-[180px]">Other Information</div>
                  <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="avgUserEngagement">
                          Average User Engagement
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="avgUserEngagement"
                          type="text"
                          placeholder="Average User Engagement"
                          value={values.avg_user_engagement}
                          onChange={(val) => setFieldValue("avg_user_engagement", val.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="chargePerPost">
                          Basic Charges Per Post (INR)
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="chargePerPost"
                          type="text"
                          placeholder="Basic Charges Per Post (INR)"
                          value={values.basic_charges_per_post}
                          onChange={(val) => setFieldValue("basic_charges_per_post", val.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="infExperience">
                          Influencer Experience
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="infExperience"
                          type="text"
                          placeholder="Influencer Experience"
                          value={values.influencer_experience}
                          onChange={(val) => setFieldValue("influencer_experience", val.target.val)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-[16px] font-[600] w-[180px]">Contact Details</div>
                  <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="country">
                          Country
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="country"
                          type="text"
                          placeholder="country"
                          value={values.address_details.country}
                          onChange={handleChange("country")}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="city">
                          City
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="city"
                          type="text"
                          placeholder="city"
                          value={values.address_details.city}
                          onChange={handleChange("city")}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
                          Address
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="address"
                          type="text"
                          placeholder="address"
                          value={values.address_details.line_1 + values.address_details.line_2}
                          onChange={handleChange("address")}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="zip code">
                          ZIP code
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="ZIP code"
                          type="text"
                          value={values.address_details.pincode}
                          placeholder="zip code"
                          onChange={handleChange("ZIP code")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-[16px] font-[600] w-[180px]">Bank Account Details</div>
                  <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="bankName">
                          Bank Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="bankName"
                          type="text"
                          placeholder="Bank Name"
                          value={values.bank_details.bank_name}
                          onChange={handleChange("bankName")}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="accountNumber">
                          Account Number
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="accountNumber"
                          type="text"
                          placeholder="Account Number"
                          value={values.bank_details.account_number}
                          onChange={handleChange("accountNumber")}
                        />
                      </div>
                      {route==="new-user" && <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="confirmAccNUmber">
                          confirm Account Number
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="confirmAccNUmber"
                          type="text"
                          placeholder=" confirm Account Number"
                          value={values.bank_details.account_number}
                          onChange={handleChange("confirmAccNUmber")}
                        />
                      </div>}
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="IFSC code">
                          IFSC Code
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="IFSCCode"
                          type="text"
                          placeholder=" IFSC code"
                          value={values.bank_details.ifsc_code}
                          onChange={handleChange("IFSCCode")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-[16px] font-[600] w-[180px]">KYC Details</div>
                  <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="PANCardNumber">
                          PAN Card Number
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="PANCardNumber"
                          type="text"
                          placeholder="PAN Card Number"
                          value={values.kyc_details.pan_card_number}
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
                          disabled={disable}
                          className="input-field w-390"
                          id="addharCardNumber"
                          type="text"
                          placeholder=" Addhar Card Number"
                          value={values.kyc_details.aadhar_card_number}
                          onChange={handleChange("addharCardNumber")}
                        />
                      </div>
                      <div>
                        <div className="mt-1 flex w-390 justify-between">
                          <img
                            className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                            src={values.kyc_details.aadhar_card_front_pic}
                            alt="avtar"
                          />
                          <div className="mt-1 flex w-191">
                            <img
                              className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                              src={values.kyc_details.aadhar_card_back_pic}
                              alt="avtar"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-[16px] font-[600] w-[180px]">Social Account</div>
                  <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>

                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="youtubeChannelName">
                          Youtube Channel Name
                        </label>
                        <input
                          disabled={disable}
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
                          disabled={disable}
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

                  {route === "active-user" && (
                    <div className="mt-8 flex cursor-pointer">
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
                                options={[]}
                                onChange={(val) => console.log(val)}
                              />
                              <button
                                type="button"
                                className="w-[150px] rounded-[50px] bg-primary text-white m-4 py-2"
                                onClick={() => { }}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <div className="mt-14 cursor-pointer">
                      <button
                        type="button"
                        className="w-[150px] rounded-[50px] bg-primary text-white py-2"
                        onClick={() => {
                          console.log({ ...values, gender: values.gender.charAt(0) }, "values");
                        }}
                      >
                        {route === "new-user" && `Approve`}
                        {route === "active-user" && `Save`}
                        {route === "rejected-user" && `Re Active`}
                      </button>
                    </div>
                    <div className="m-14 cursor-pointer">
                      <button
                        type="button"
                        className="w-[150px] rounded-[50px] bg-[#FFFFFF] py-2 box-shadow-button"
                        onClick={() => setRejectBid(true)}
                      >
                        {route === "new-user" ? `Reject` : `Cancle`}
                      </button>
                    </div>
                  </div>
                </>
              );
            }}
          </Formik>
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
