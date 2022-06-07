import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../../components/Dropdown";
import { contactInfoSchema } from "../../../utils/formsSchema";
import { FormError, imageSvg, ImgUpload } from "./PersonalDetails";
import { Country, State, City } from "country-state-city";

const initForm = {
  address: "",
  city: "",
  state: "",
  pinCode: "",
  avgUserEngagement: "",
  basicChargesPerPost: "",
  influencerExperience: "",
  profileTitle: "",
  bankName: "",
  accountNumber: "",
  confirmAccountNumber: "",
  IFSCCode: "",
  panCardNumber: "",
  aadharCardNumber: "",
  uploadPanCard: {},
  uploadAadharFront: {},
  uploadAadharBack: {},
};

function SignUpContactInfo({ setSignUpStatus }) {
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const [contactInfo, setContactInfo] = useState(initForm);
  const signUpState = useSelector((state) => state.signUpState);
  console.log(signUpState);

  const { first_name, last_name, user_name, email, phone, gender, whats_app, dob, about_yourself, category } =
    signUpState.personal_details;

  useEffect(() => {
    const { address_details, personal_details, bank_detials, kyc_details } = signUpState;
    if (address_details.line1.length) {
      setContactInfo({
        address: address_details.line1,
        city: address_details.city,
        state: address_details.state,
        pinCode: address_details.pincode,
        avgUserEngagement: personal_details.avg_user_engagement,
        basicChargesPerPost: personal_details.basic_charges_per_post,
        influencerExperience: personal_details.influencer_experience,
        profileTitle: personal_details.profile_title,
        bankName: bank_detials.bank_name,
        accountNumber: bank_detials.account_number,
        confirmAccountNumber: bank_detials.account_number,
        IFSCCode: bank_detials.ifsc_code,
        panCardNumber: kyc_details.pan_card_number,
        aadharCardNumber: kyc_details.aadhar_card_number,
        uploadPanCard: signUpState.pan_card,
        uploadAadharFront: signUpState.aadhar_card_front,
        uploadAadharBack: signUpState.aadhar_card_back,
      });
      console.log(window.localStorage.getItem("stateCode"));
      setCities(City.getCitiesOfState("IN", window.localStorage.getItem("stateCode")));
    }
  }, []);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={contactInfo}
      // validationSchema={contactInfoSchema}
      onSubmit={(values, { resetForm }) => {
        const data = {
          address_details: {
            line1: values.address,
            line2: "",
            pincode: values.pinCode,
            country: "India",
            state: values.state,
            city: values.city,
          },
          personal_details: {
            first_name: first_name,
            last_name: last_name,
            user_name: user_name,
            email,
            phone: phone,
            gender,
            whats_app: { contact_number: whats_app.contact_number },
            dob: dob,
            category: category,
            about_yourself: about_yourself,
            avg_user_engagement: values.avgUserEngagement,
            basic_charges_per_post: values.basicChargesPerPost,
            influencer_experience: values.influencerExperience,
            profile_title: values.profileTitle,
          },
          bank_detials: {
            bank_name: values.bankName,
            account_number: values.accountNumber,
            ifsc_code: values.IFSCCode,
          },
          kyc_details: {
            pan_card_number: values.panCardNumber,
            aadhar_card_number: values.aadharCardNumber,
          },
          pan_card: values.uploadPanCard,
          aadhar_card_front: values.uploadAadharFront,
          aadhar_card_back: values.uploadAadharBack,
        };
        dispatch({ type: "UPDATE_SIGNUP_STATE", data });
        setSignUpStatus(4);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
        return (
          <div className="w-[1100px] m-auto">
            <h1 className="text-3xl text-center mb-2">Contact Information</h1>
            <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
              Log in to your account using email and password provided during registration.
            </p>
            <div className="flex gap-x-20 gap-y-14 flex-wrap">
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Address<span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="address"
                  type="text"
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange}
                />
                {errors.address && touched.address && <FormError>{errors.address}</FormError>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">City</label>
                <div>
                  <Dropdown
                    className="w-390"
                    dropdownStyle="w-390"
                    // label={cities.length ? (values.city.length ? values.city : "City") : "Please select a state first."}
                    label={values.city.length ? values.city : cities.length ? "City" : "Please select a state first."}
                    options={cities}
                    optionsLabel="name"
                    onChange={(val) => {
                      setFieldValue("city", val.name);
                    }}
                  />
                </div>
                {errors.city && touched.city && <FormError>{errors.city}</FormError>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">State</label>
                <div>
                  <Dropdown
                    className="w-390"
                    dropdownStyle="w-390"
                    label={values.state.length ? values.state : "State"}
                    options={State.getStatesOfCountry("IN")}
                    optionsLabel="name"
                    onChange={(props) => {
                      window.localStorage.setItem("stateCode", props.isoCode);
                      setCities(City.getCitiesOfState("IN", props.isoCode));
                      setFieldValue("city", "");
                      setFieldValue("state", props.name);
                    }}
                  />
                </div>
                {errors.state && touched.state && <FormError>{errors.state}</FormError>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  ZIP Code<span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="pinCode"
                  type="text"
                  placeholder="ZIP Code"
                  value={values.pinCode}
                  onChange={(e) => {
                    const numberReg = /^[0-9]*$/;
                    if (numberReg.test(e.target.value)) {
                      setFieldValue("pinCode", e.target.value);
                    }
                  }}
                />
                {errors.pinCode && touched.pinCode && <FormError>{errors.pinCode}</FormError>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Country</label>
                <div>
                  <Dropdown
                    className="w-390"
                    dropdownStyle="w-390"
                    label="India"
                    options={[{ label: "India" }]}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-3xl text-center mt-20 mb-2">Other Information</h1>
            <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
              Log in to your account using email and password provided during registration.
            </p>
            <div className="flex gap-x-20 gap-y-14 flex-wrap">
              <div>
                <label className="block text-gray-700 text-sm mb-2">Average User Engagement</label>
                <div>
                  <Dropdown
                    className="w-390"
                    dropdownStyle="w-390"
                    label={values.avgUserEngagement.length ? values.avgUserEngagement : "Avg User Engagement"}
                    options={avgUserEngagementOptions}
                    onChange={(prop) => setFieldValue("avgUserEngagement", prop.label)}
                  />
                </div>
                {errors.avgUserEngagement && touched.avgUserEngagement && (
                  <FormError>{errors.avgUserEngagement}</FormError>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Basic Charges Per Post (INR)<span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="basicChargesPerPost"
                  type="text"
                  placeholder="Charges per post"
                  value={values.basicChargesPerPost}
                  onChange={(e) => {
                    const numberReg = /^[0-9]*$/;
                    if (numberReg.test(e.target.value)) {
                      setFieldValue("basicChargesPerPost", e.target.value);
                    }
                  }}
                />
                {errors.basicChargesPerPost && touched.basicChargesPerPost && (
                  <FormError>{errors.basicChargesPerPost}</FormError>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Influencer Experience</label>
                <div>
                  <Dropdown
                    className="w-390"
                    dropdownStyle="w-390"
                    label={values.influencerExperience.length ? values.influencerExperience : "Influencer Experience"}
                    options={InfluencerExperienceOptions}
                    onChange={(prop) => setFieldValue("influencerExperience", prop.label)}
                  />
                </div>
                {errors.influencerExperience && touched.influencerExperience && (
                  <FormError>{errors.influencerExperience}</FormError>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Profile Title</label>
                <div>
                  <Dropdown
                    className="w-390"
                    dropdownStyle="w-390"
                    label={values.profileTitle.length ? values.profileTitle : "Profile Title"}
                    options={profileTitleOptions}
                    onChange={(prop) => setFieldValue("profileTitle", prop.label)}
                  />
                </div>
                {errors.profileTitle && touched.profileTitle && <FormError>{errors.profileTitle}</FormError>}
              </div>
            </div>
            <h1 className="text-3xl text-center mt-20 mb-2">Bank Account Details</h1>
            <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
              Log in to your account using email and password provided during registration.
            </p>
            <div className="flex gap-x-20 gap-y-14 flex-wrap">
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Bank Name<span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="bankName"
                  type="text"
                  placeholder="Bank Name"
                  value={values.bankName}
                  onChange={handleChange}
                />
                {errors.bankName && touched.bankName && <FormError>{errors.bankName}</FormError>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Account Number<span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="accountNumber"
                  type="text"
                  placeholder="Account Number"
                  value={values.accountNumber}
                  onChange={(e) => {
                    const numberReg = /^[0-9]*$/;
                    if (numberReg.test(e.target.value)) {
                      setFieldValue("accountNumber", e.target.value);
                    }
                  }}
                />
                {errors.accountNumber && touched.accountNumber && <FormError>{errors.accountNumber}</FormError>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Confirm Account Number<span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="confirmAccountNumber"
                  type="text"
                  placeholder="Account Number"
                  value={values.confirmAccountNumber}
                  onChange={(e) => {
                    const numberReg = /^[0-9]*$/;
                    if (numberReg.test(e.target.value)) {
                      setFieldValue("confirmAccountNumber", e.target.value);
                    }
                  }}
                />
                {errors.confirmAccountNumber && touched.confirmAccountNumber && (
                  <FormError>{errors.confirmAccountNumber}</FormError>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  IFSC Code<span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="IFSCCode"
                  type="text"
                  placeholder="IFSC Code"
                  value={values.IFSCCode}
                  onChange={handleChange}
                />
                {errors.IFSCCode && touched.IFSCCode && <FormError>{errors.IFSCCode}</FormError>}
              </div>
            </div>
            <h1 className="text-3xl text-center mt-20 mb-2">KYC Details</h1>
            <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
              Log in to your account using email and password provided during registration.
            </p>
            <div className="flex gap-x-20 gap-y-14 flex-wrap">
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Pan Card Number<span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="panCardNumber"
                  type="text"
                  placeholder="Pan Card Number"
                  value={values.panCardNumber}
                  onChange={handleChange("panCardNumber")}
                />
                {errors.panCardNumber && touched.panCardNumber && <FormError>{errors.panCardNumber}</FormError>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Pan Card</label>
                <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {imageSvg}
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="uploadPanCard" className="drag-drop">
                        <span>Upload a file</span>
                        <input
                          id="uploadPanCard"
                          name="uploadPanCard"
                          type="file"
                          className="sr-only"
                          accept="image/png, image/jpeg"
                          onChange={(e) => setFieldValue("uploadPanCard", e.target.files[0])}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                {errors.uploadPanCard && touched.uploadPanCard && <FormError>{errors.uploadPanCard}</FormError>}
                {values.uploadPanCard.name && <ImgUpload>{values.uploadPanCard.name}</ImgUpload>}
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Aadhaar Card Number <span className="text-red-500">*</span>
                </label>
                <input
                  className="input-field w-390"
                  id="aadharCardNumber"
                  type="text"
                  placeholder="Aadhaar Card Number"
                  value={values.aadharCardNumber}
                  onChange={(e) => {
                    const numberReg = /^[0-9]*$/;
                    if (numberReg.test(e.target.value)) {
                      setFieldValue("aadharCardNumber", e.target.value);
                    }
                  }}
                />
                {errors.aadharCardNumber && touched.aadharCardNumber && (
                  <FormError>{errors.aadharCardNumber}</FormError>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Aadhaar Card Front</label>
                <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {imageSvg}
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="uploadAadharFront" className="drag-drop">
                        <span>Upload a file</span>
                        <input
                          id="uploadAadharFront"
                          name="uploadAadharFront"
                          type="file"
                          className="sr-only"
                          accept="image/png, image/jpeg"
                          onChange={(e) => setFieldValue("uploadAadharFront", e.target.files[0])}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                {errors.uploadAadharFront && touched.uploadAadharFront && (
                  <FormError>{errors.uploadAadharFront}</FormError>
                )}
                {values.uploadAadharFront.name && <ImgUpload>{values.uploadAadharFront.name}</ImgUpload>}
              </div>

              <div className="ml-[470px]">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload Aadhaar Card Back</label>
                  <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {imageSvg}
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="uploadAadharBack" className="drag-drop">
                          <span>Upload a file</span>
                          <input
                            id="uploadAadharBack"
                            name="uploadAadharBack"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/jpeg"
                            onChange={(e) => setFieldValue("uploadAadharBack", e.target.files[0])}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                {errors.uploadAadharBack && touched.uploadAadharBack && (
                  <FormError>{errors.uploadAadharBack}</FormError>
                )}
                {values.uploadAadharBack.name && <ImgUpload>{values.uploadAadharBack.name}</ImgUpload>}
              </div>
            </div>
            <div className="mt-14 flex justify-center cursor-pointer">
              <button
                type="button"
                className="w-[400px] rounded-[50px] bg-primary text-white py-2"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default SignUpContactInfo;

const avgUserEngagementOptions = [
  { label: "Less Than 1%" },
  { label: "Between 1% To 3%" },
  { label: "Greater Than 3%" },
];

const profileTitleOptions = [{ label: "Leads Generation Exxport" }, { label: "Social Media Expert" }];

const InfluencerExperienceOptions = [
  { label: "Less Than 1 Year" },
  { label: "Between 1 Yr To 5 Yrs" },
  { label: "Between 5 Yrs To 10 Yrs" },
  { label: "Greater Than 10 Yrs" },
];
