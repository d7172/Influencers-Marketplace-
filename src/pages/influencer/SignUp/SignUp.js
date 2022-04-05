import React, { useState } from "react";
import Category from "./Category";
import PersonalDetails from "./PersonalDetails";
import SignUpContactInfo from "./SignUpContactInfo";
import SignUpSocialFeed from "./SignUpSocialFeed";

function SignUp() {
  const [signUpstatus, setSignUpStatus] = useState(1);
  const [signUp, setSignUp] = useState(initSignUp);

  const signUpStep = () => {
    switch (signUpstatus) {
      case 1:
        return (
          <PersonalDetails
            signUp={signUp}
            setSignUp={(data) => setSignUp(data)}
            setSignUpStatus={(status) => setSignUpStatus(status)}
          />
        );
      case 2:
        return (
          <Category
            signUp={signUp}
            setSignUp={(data) => setSignUp(data)}
            setSignUpStatus={(status) => setSignUpStatus(status)}
          />
        );
      case 3:
        return (
          <SignUpContactInfo
            signUp={signUp}
            setSignUp={(data) => setSignUp(data)}
            setSignUpStatus={(status) => setSignUpStatus(status)}
          />
        );
      case 4:
        return (
          <SignUpSocialFeed
            signUp={signUp}
            setSignUp={(data) => setSignUp(data)}
            setSignUpStatus={(status) => setSignUpStatus(status)}
          />
        );
    }
  };

  return (
    <div className="bg-background h-full min-h-screen pb-24 pt-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">Sign In as a Influencer</h1>
      <p className="text-sm mb-5 w-390 text-center text-gray-500">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="w-1258 bg-white h-full rounded-8 pb-14">
        <div className="flex items-center w-390 m-auto my-10">
          <div className="flex items-center relative">
            <div className="rounded-full transition duration-500 ease-in-out h-8 w-8 border-2 border-b-active flex items-center justify-center cursor-pointer">
              <div
                className="rounded-full transition duration-500 ease-in-out h-5 w-5 bg-primary"
                onClick={() => setSignUpStatus(1)}
              />
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              signUpstatus >= 2 ? "border-b-active" : "border-gray-300"
            }`}
          />
          <div className="flex items-center text-white relative">
            <div
              className={`rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2  flex items-center justify-center cursor-pointer ${
                signUpstatus >= 2 ? "border-b-active" : "border-gray-300"
              }`}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-5 w-5 ${
                  signUpstatus >= 2 && "bg-primary"
                }`}
                onClick={() => setSignUpStatus(2)}
              />
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              signUpstatus >= 3 ? "border-b-active" : "border-gray-300"
            }`}
          />
          <div className="flex items-center relative">
            <div
              className={`rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2  flex items-center justify-center cursor-pointer ${
                signUpstatus >= 3 ? "border-b-active" : "border-gray-300"
              }`}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-5 w-5 ${
                  signUpstatus >= 3 && "bg-primary"
                }`}
                onClick={() => setSignUpStatus(3)}
              />
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              signUpstatus >= 4 ? "border-b-active" : "border-gray-300"
            }`}
          ></div>
          <div className="flex items-center relative">
            <div
              className={`rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2  flex items-center justify-center cursor-pointer ${
                signUpstatus >= 4 ? "border-b-active" : "border-gray-300"
              }`}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-5 w-5 ${
                  signUpstatus >= 4 && "bg-primary"
                }`}
                onClick={() => setSignUpStatus(4)}
              />
            </div>
          </div>
        </div>
        {signUpStep()}
      </div>
    </div>
  );
}

export default SignUp;

export const initSignUp = {
  phone: {
    dail_code: "+91",
    contact_number: "",
  },
  otp: "",
  type: "",
  personal_details: {
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    phone: {
      dail_code: "+91",
      contact_number: "",
    },
    gender: "male",
    whats_app: {
      dail_code: "+91",
      contact_number: "",
    },
    dob: "2022-02-01",
    about_yourself: "i m influencer",
    category: ["health", "fitness"],
  },
  address_details: {
    line1: "",
    line2: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
  },
  profession_details: {
    avg_user_engagement: "",
    basic_charges_per_post: 0,
    influencer_experience: "",
    profile_title: "",
  },
  bank_detials: {
    bank_name: "",
    account_number: "",
    ifsc_code: "",
  },
  kyc_details: {
    pan_card_number: "",
    aadhar_card_number: "",
  },
  social_feeds: [],
  profile_pic: {},
  cover_pic: {},
  pan_card: {},
  aadhar_card_front: {},
  aadhar_card_back: {},
};
