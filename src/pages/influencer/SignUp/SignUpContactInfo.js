import { Formik } from "formik";
import React from "react";
import Dropdown from "../../../components/Dropdown";
import { contactInfoSchema } from "../../../utils/formsSchema";
import { FormError, imageSvg } from "./PersonalDetails";

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

function SignUpContactInfo({ signUp, setSignUp, setSignUpStatus }) {
  return (
    <Formik
      initialValues={initForm}
      validationSchema={contactInfoSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        setSignUp({
          ...signUp,
          address_details: {
            line1: values.address,
            line2: "",
            pincode: values.pinCode,
            country: "India",
            state: values.state,
            city: values.city,
          },
          profession_details: {
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
        });
        setSignUpStatus(4);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
        console.log(errors);
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
                  <Dropdown className="w-390" dropdownStyle="w-390" label="City" options={[{ label: "India" }]} />
                </div>
                {errors.city && touched.city && <FormError>{errors.city}</FormError>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">State</label>
                <div>
                  <Dropdown className="w-390" dropdownStyle="w-390" label="State" options={[{ label: "State" }]} />
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
                  type="number"
                  placeholder="ZIP Code"
                  value={values.pinCode}
                  onChange={handleChange}
                />
                {errors.pinCode && touched.pinCode && <FormError>{errors.pinCode}</FormError>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Country</label>
                <div>
                  <Dropdown className="w-390" dropdownStyle="w-390" label="India" options={[{ label: "India" }]} />
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
                  <Dropdown className="w-390" dropdownStyle="w-390" label="Less than 1 %" options={[]} />
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
                  type="number"
                  placeholder="Charges per post"
                  value={values.basicChargesPerPost}
                  onChange={handleChange}
                />
                {errors.basicChargesPerPost && touched.basicChargesPerPost && (
                  <FormError>{errors.basicChargesPerPost}</FormError>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Influencer Experience</label>
                <div>
                  <Dropdown className="w-390" dropdownStyle="w-390" label="Lest than 1 year" options={[]} />
                </div>
                {errors.influencerExperience && touched.influencerExperience && (
                  <FormError>{errors.influencerExperience}</FormError>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Profile Title</label>
                <div>
                  <Dropdown className="w-390" dropdownStyle="w-390" label="Lead Gen Expert" options={[]} />
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
                  placeholder="Bank of India"
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
                  id="phone"
                  type="text"
                  placeholder="Account Number"
                  value={values.accountNumber}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight outline-none focus:outline-none focus:shadow-blue-300"
                  id="panCardNumber"
                  type="text"
                  placeholder="Pan Card Number"
                  value={values.panCardNumber}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
