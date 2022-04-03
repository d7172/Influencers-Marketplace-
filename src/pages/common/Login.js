import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isBrand, setIsBrand] = useState(false);
  return (
    <div className="bg-background h-full min-h-screen py-4 flex flex-col gap-14 items-center justify-center">
      <div className="text-center flex flex-col gap-5">
        <h2 className="text-3xl">{isLogin ? "Log In" : "Sign Up"}</h2>
        <p className="w-390 text-gray-500 text-sm">
          Log in to your account using email and password provided during registration.
        </p>
      </div>
      <div className="bg-white w-608 h-520 text-center rounded-8">
        <div className="flex h-14">
          <div
            className={`w-3/6 cursor-pointer border-b-4  rounded-sm pt-4 ${
              isLogin ? "border-b-active" : "border-b-inactive"
            } `}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </div>
          <div
            className={`w-3/6 cursor-pointer border-b-4 border-b-primary rounded-sm pt-4 ${
              isLogin ? "border-b-inactive" : "border-b-active"
            } `}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </div>
        </div>
        <div className="w-400 m-auto mt-14">
          <div className="flex flex-col text-left">
            <label className="ml-2">Phone</label>
            <input
              type="text"
              className="border-2 border-neutral-200 rounded-8 px-4 py-2"
              placeholder="Input your Phone in here"
            />
          </div>
          <div className="flex flex-col text-left mt-10">
            <label className="ml-2">OTP</label>
            <input
              type="text"
              className="border-2 border-neutral-200 rounded-8 px-4 py-2"
              placeholder="Input your OTP in here"
            />
          </div>
          {isLogin && (
            <div className="mt-5 flex gap-10">
              <div className="flex gap-2.5">
                <input
                  class="overflow-hidden h-4 w-4 border border-gray-300 rounded-sm bg-white checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="checkbox"
                  checked={isBrand}
                  onChange={() => setIsBrand(!isBrand)}
                />
                <label>Are you Brand</label>
              </div>
              <div className="flex gap-2.5">
                <input
                  class="overflow-hidden h-4 w-4 border border-gray-300 rounded-sm bg-white checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="checkbox"
                  checked={!isBrand}
                  onChange={() => setIsBrand(!isBrand)}
                />
                <label>Are you Influencers</label>
              </div>
            </div>
          )}
          <button
            className={`bg-primary h-48 text-white w-full rounded-3xl ${isLogin ? "mt-16" : "mt-20"}`}
            onClick={() => navigate("/signup-type")}
          >
            LogIn
          </button>
          <button className="text-sm mt-4 underline color-lightGrey">Resend OTP in 00:34</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
