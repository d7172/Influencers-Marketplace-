import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../../store/SignUpAdmin/action";
import { loginSchema } from "../../../utils/formsSchema";
import { FormError } from "../../influencer/SignUp/PersonalDetails";

const initForm = {
  phone: "",
  otp: "",
  first_name: "",
  last_name: "",
  email: "",
};

function SignUpAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [credentials, setCredentials] = useState(initForm);
  const signUpState = useSelector((state) => state.signUpState);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.admin_type) {
      navigate("/admin/dashboard");
    }
  }, [localStorage.getItem("userInfo")]);

  return (
    <div className="bg-background h-full min-h-screen py-4 flex flex-col gap-14 items-center justify-center">
      <div className="text-center flex flex-col gap-5">
        <h2 className="text-3xl">{isLogin ? "Log In" : "Sign Up"}</h2>
        <p className="w-390 text-gray-500 text-sm">
          Log in to your account using email and password provided during registration.
        </p>
      </div>
      <div className="bg-white w-608 h-520 text-center rounded-8">
        <Formik
          enableReinitialize={true}
          initialValues={credentials}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            dispatch({
              type: "UPDATE_SIGNUP_ADMIN_STATE",
              data: {
                phone: values.phone.toString(),
                otp: values.otp,
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
              },
            });
            dispatch(
              postSignUp({
                phone: values.phone.toString(),
                otp: values.otp,
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                admin_type: "superadmin",
                extra: {},
              })
            );
          }}
        >
          {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
            return (
              <div className="w-400 m-auto mt-14">
                <div className="flex flex-col text-left">
                  <label className="ml-2">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    className="input-field"
                    placeholder="Input your Phone in here"
                    value={values.phone}
                    onChange={(e) => {
                      const numberReg = /^[0-9]*$/;
                      if (numberReg.test(e.target.value)) {
                        setFieldValue("phone", e.target.value);
                      }
                    }}
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
                    onChange={handleChange("otp")}
                  />
                  {errors.otp && touched.otp && <FormError>{errors.otp}</FormError>}
                </div>
                <div className="flex flex-col text-left mt-10">
                  <label className="ml-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="input-field"
                    placeholder="Input your Email in here"
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                  {errors.email && touched.email && <FormError>{errors.email}</FormError>}
                </div>
                <div className="flex flex-col text-left mt-10">
                  <label className="ml-2">First Name</label>
                  <input
                    id="first_name"
                    type="name"
                    className="input-field"
                    placeholder="Input your first name in here"
                    value={values.first_name}
                    onChange={handleChange("first_name")}
                  />
                  {errors.first_name && touched.first_name && <FormError>{errors.first_name}</FormError>}
                </div>
                <div className="flex flex-col text-left mt-10">
                  <label className="ml-2">last Name</label>
                  <input
                    id="last_name"
                    type="name"
                    className="input-field"
                    placeholder="Input your last name in here"
                    value={values.last_name}
                    onChange={handleChange("last_name")}
                  />
                  {errors.last_name && touched.last_name && <FormError>{errors.last_name}</FormError>}
                </div>
                <button
                  type="button"
                  className={`bg-primary h-48 text-white w-full rounded-3xl mt-20`}
                  onClick={handleSubmit}
                >
                  {isLogin ? "Login" : "Signup"}
                </button>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
export default SignUpAdmin;
