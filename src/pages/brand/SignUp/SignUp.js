import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowBtn from "../../../components/BackArrowBtn";
import { Country, State, City } from "country-state-city";
import PersonalDetails from "./PersonalDetails";

function BrandSignUp() {
  const navigate = useNavigate();

  return (
    <div className="bg-background h-full min-h-screen pb-24 pt-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">Sign In as a Brand</h1>
      <p className="text-sm mb-5 w-390 text-center text-gray-500">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="w-1258 bg-white h-full rounded-8 pb-14">
        <BackArrowBtn className="absolute mt-10 ml-10" onClick={()=>navigate(`/signup-type`)} />
        {/* <div className="flex items-center w-390 m-auto my-10">
          <div className="flex items-center relative">
            <div className="rounded-full transition duration-500 ease-in-out h-8 w-8 border-2 border-b-active flex items-center justify-center cursor-pointer">
              <div
                className="rounded-full transition duration-500 ease-in-out h-5 w-5 bg-primary"
                // onClick={() => setSignUpStatus(1)}
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
                // onClick={() => setSignUpStatus(2)}
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
                // onClick={() => setSignUpStatus(3)}
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
                // onClick={() => setSignUpStatus(4)}
              />
            </div>
          </div>
        </div> 
        {signUpStep()}*/}
        <PersonalDetails/>
      </div>
    </div>
  );
}

export default BrandSignUp;
