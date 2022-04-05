import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../utils/formsSchema";
import { FormError } from "../influencer/SignUp/PersonalDetails";

const initForm = {
  phone: "",
  otp: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
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
        <Formik
          initialValues={initForm}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            if (!isLogin) {
              dispatch({
                type: "UPDATE_SIGNUP_STATE",
                data: {
                  phone: {
                    dail_code: "+91",
                    contact_number: values.phone.toString(),
                  },
                  otp: values.otp,
                },
              });
              navigate("/signup-type");
            }
          }}
        >
          {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
            return (
              <div className="w-400 m-auto mt-14">
                <div className="flex flex-col text-left">
                  <label className="ml-2">Phone</label>
                  <input
                    id="phone"
                    type="number"
                    className="input-field"
                    placeholder="Input your Phone in here"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && touched.phone && <FormError>{errors.phone}</FormError>}
                </div>
                <div className="flex flex-col text-left mt-10">
                  <label className="ml-2">OTP</label>
                  <input
                    id="otp"
                    type="text"
                    className="input-field"
                    placeholder="Input your OTP in here"
                    value={values.otp}
                    onChange={handleChange}
                  />
                  {errors.otp && touched.otp && <FormError>{errors.otp}</FormError>}
                </div>
                <button
                  type="button"
                  className={`bg-primary h-48 text-white w-full rounded-3xl mt-20`}
                  onClick={handleSubmit}
                >
                  LogIn
                </button>
                <button className="text-sm mt-4 underline color-lightGrey">Resend OTP in 00:34</button>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
export default Login;
