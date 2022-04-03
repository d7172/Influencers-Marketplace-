import React from "react";
import BackArrowBtn from "../../components/BackArrowBtn";

function SignUpType() {
  return (
    <div className="bg-background pb-3 h-full min-h-screen flex flex-col gap-14 items-center justify-center">
      <div className="text-center flex flex-col gap-5">
        <h2 className="text-3xl">Sign Up</h2>
        <p className="w-390 text-gray-500 text-sm">
          Log in to your account using email and password provided during registration.
        </p>
      </div>
      <div className="bg-white w-608 h-520 text-center rounded-8 flex flex-col gap-10">
        <BackArrowBtn className="mt-6 ml-10" onClick={() => window.history.go(-1)} />
        <div className="flex items-center">
          <div className="w-3/6 h-335">
            <img className="m-auto" src="/influancer.svg" alt="Is influancer" />
            <h1 className="py-4 text-xl text-color">Are you Influencers?</h1>
            <p className="w-238 leading-5 text-gray-500 text-sm">
              Log in to your account using email and password provided.
            </p>
            <button className="bg-primary h-40 text-white w-120 rounded-3xl mt-10 ">Sign up</button>
          </div>
          <div className="w-3/6 h-335">
            <img className="m-auto" src="/brand.svg" alt="Is influancer" />
            <h1 className="py-4 text-xl text-color">Are you Brand?</h1>
            <p className="w-238 leading-5 text-gray-500 text-sm">
              Log in to your account using email and password provided.
            </p>
            <button className="bg-primary h-40 text-white w-120 rounded-3xl mt-10 ">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpType;
