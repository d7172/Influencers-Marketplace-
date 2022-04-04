import React, { useState } from "react";
import Category from "./Category";
import PersonalDetails from "./PersonalDetails";
import SignUpContactInfo from "./SignUpContactInfo";
import SignUpSocialFeed from "./SignUpSocialFeed";

function SignUp() {
  const [signUpstatus, setSignUpStatus] = useState(1);

  const signUpStep = () => {
    switch (signUpstatus) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <Category />;
      case 3:
        return <SignUpContactInfo />;
      case 4:
        return <SignUpSocialFeed />;
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
            <div className="rounded-full transition duration-500 ease-in-out h-10 w-10 border-2 border-b-active flex items-center justify-center cursor-pointer">
              <div
                className="rounded-full transition duration-500 ease-in-out h-7 w-7 bg-primary"
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
              className={`rounded-full transition duration-500 ease-in-out h-10 w-10 py-3 border-2  flex items-center justify-center cursor-pointer ${
                signUpstatus >= 2 ? "border-b-active" : "border-gray-300"
              }`}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-7 w-7 ${
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
              className={`rounded-full transition duration-500 ease-in-out h-10 w-10 py-3 border-2  flex items-center justify-center cursor-pointer ${
                signUpstatus >= 3 ? "border-b-active" : "border-gray-300"
              }`}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-7 w-7 ${
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
              className={`rounded-full transition duration-500 ease-in-out h-10 w-10 py-3 border-2  flex items-center justify-center cursor-pointer ${
                signUpstatus >= 4 ? "border-b-active" : "border-gray-300"
              }`}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-7 w-7 ${
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
