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
        <PersonalDetails/>
      </div>
    </div>
  );
}

export default BrandSignUp;
