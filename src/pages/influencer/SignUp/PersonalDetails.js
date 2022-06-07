import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { personalDetailsSchema } from "../../../utils/formsSchema";
import Dropdown from "../../../components/Dropdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const initForm = {
  first_name: "",
  last_name: "",
  user_name: "",
  email: "",
  phone: "",
  gender: "",
  whats_app: "",
  dob: "",
  about_yourself: "",
  profile: {},
  cover: {},
};

export const FormError = ({ children }) => {
  return <p className="text-red-500 text-xs italic mt-1">{children}</p>;
};
export const ImgUpload = ({ children }) => {
  return <p className="text-[13px] mt-1 text-green-600">Added {children}</p>;
};

function PersonalDetails({ setSignUpStatus }) {
  const dispatch = useDispatch();
  const [personalDetails, setPersonalDetails] = useState(initForm);
  const signUpState = useSelector((state) => state.signUpState);

  useEffect(() => {
    const { first_name, last_name, user_name, email, phone, gender, whats_app, dob, about_yourself, category } =
      signUpState.personal_details;
    if (first_name.length) {
      setPersonalDetails({
        first_name: first_name,
        last_name: last_name,
        user_name: user_name,
        email,
        phone: phone.contact_number,
        gender,
        whats_app: { contact_number: whats_app.contact_number },
        dob: dob,
        about_yourself: about_yourself,
        profile: signUpState.profile_pic,
        cover: signUpState.cover_pic,
      });
    }
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-2">Personal Details</h1>
      <p className="w-390 text-gray-500 text-sm text-center m-auto mb-4">
        Log in to your account using email and password provided during registration.
      </p>
      <Formik
        enableReinitialize={true}
        initialValues={personalDetails}
        // validationSchema={personalDetailsSchema}
        onSubmit={(values) => {
          const data = {
            personal_details: {
              first_name: values.first_name,
              last_name: values.last_name,
              user_name: values.user_name,
              email: values.email,
              phone: {
                dail_code: "+91",
                contact_number: values.phone,
              },
              gender: values.gender,
              whats_app: {
                dail_code: "+91",
                contact_number: values.whats_app,
              },
              dob: values.dob,
              about_yourself: values.about_yourself,
              category: [...signUpState.personal_details.category],
            },
            profile_pic: values.profile,
            cover_pic: values.cover,
          };
          dispatch({ type: "UPDATE_SIGNUP_STATE", data });
          setSignUpStatus(2);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
          return (
            <div className="w-[1100px] m-auto">
              <div className="flex flex-wrap gap-10 items-center justify-between">
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="input-field w-390"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={values.first_name}
                    onChange={handleChange("first_name")}
                  />
                  {errors.first_name && touched.first_name && <FormError>{errors.first_name}</FormError>}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="input-field w-390"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={values.last_name}
                    onChange={handleChange("last_name")}
                  />
                  {errors.last_name && touched.last_name && <FormError>{errors.last_name}</FormError>}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    User Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="input-field w-168"
                    id="userName"
                    type="text"
                    placeholder="User Name"
                    value={values.user_name}
                    onChange={handleChange("user_name")}
                  />
                  {errors.user_name && touched.user_name && <FormError>{errors.user_name}</FormError>}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="input-field w-390"
                    id="email"
                    type="text"
                    placeholder="example@gmail.com"
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                  {errors.email && touched.email && <FormError>{errors.email}</FormError>}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="input-field w-390"
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
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
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    Gender
                  </label>
                  <div>
                    <Dropdown
                      dropdownStyle="w-168"
                      className="w-168"
                      label={values.gender.length ? values.gender : "Gender"}
                      options={[
                        {
                          label: "Male",
                          value: "M",
                        },
                        {
                          label: "Female",
                          value: "F",
                        },
                      ]}
                      optionsLabel={"label"}
                      onChange={(val) => setFieldValue("gender", val.value)}
                    />
                    {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                  </div>
                </div>
                <div className="flex gap-20">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Whatsapp Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="input-field w-390"
                      id="phone"
                      type="text"
                      placeholder="Phone Number"
                      value={values.whats_app}
                      onChange={(e) => {
                        const numberReg = /^[0-9]*$/;
                        if (numberReg.test(e.target.value)) {
                          setFieldValue("whats_app", e.target.value);
                        }
                      }}
                    />
                    {errors.whats_app && touched.whats_app && <FormError>{errors.whats_app}</FormError>}
                  </div>
                  <div className="datepicker">
                    <label className="block text-gray-700 text-sm mb-2">
                      Date Of Birth<span className="text-red-500">*</span>{" "}
                    </label>
                    <input
                      type="date"
                      className="input-field text-gray-500"
                      value={values.dob}
                      onChange={(e) => setFieldValue("dob", e.target.value)}
                    />
                    {errors.dob && touched.dob && <FormError>{errors.dob}</FormError>}
                  </div>
                </div>
              </div>
              <div className="mt-10 flex gap-20">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Picture<span className="text-red-500">*</span>{" "}
                  </label>
                  <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {imageSvg}
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="profile" className="drag-drop">
                          <span>Upload a file</span>
                          <input
                            id="profile"
                            name="profile"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/jpeg"
                            onChange={(e) => setFieldValue("profile", e.target.files[0])}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  {errors.profile && touched.profile && <FormError>{errors.profile}</FormError>}
                  {values.profile.name && <ImgUpload>{values.profile.name}</ImgUpload>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cover Picture</label>
                  <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {imageSvg}
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="cover" className="drag-drop">
                          <span>Upload a file</span>
                          <input
                            id="cover"
                            name="cover"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/jpeg"
                            onChange={(e) => setFieldValue("cover", e.target.files[0])}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  {values.cover.name && <ImgUpload>{values.cover.name}</ImgUpload>}
                </div>
              </div>
              <div className="mt-10">
                <label className="form-label inline-block mb-2">
                  About Your Self <span className="text-red-500">*</span>{" "}
                </label>
                <textarea
                  className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                  value={values.about_yourself}
                  onChange={(e) => setFieldValue("about_yourself", e.target.value)}
                />
                {errors.about_yourself && touched.about_yourself && <FormError>{errors.about_yourself}</FormError>}
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
    </div>
  );
}

export default PersonalDetails;

export const imageSvg = (
  <svg
    className="mx-auto h-12 w-12 text-gray-400"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
