import React from "react";
import { Formik } from "formik";
import { personalDetailsSchema } from "../../../utils/formsSchema";
import Dropdown from "../../../components/Dropdown";

const initForm = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phone: "",
  gender: "",
  whatsapp: "",
  DOB: "",
  aboutYourself: "",
};

function PersonalDetails() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-2">Personal Details</h1>
      <p className="w-390 text-gray-500 text-sm text-center m-auto mb-4">
        Log in to your account using email and password provided during registration.
      </p>
      <Formik initialValues={initForm} validateSchema={personalDetailsSchema} onSubmit={(values, { resetForm }) => {}}>
        {({ handleChange, handleSubmit, values, errors, setFieldValue }) => {
          return (
            <div className="w-[1100px] m-auto">
              <div className="flex flex-wrap gap-10 items-center justify-between">
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange("firstName")}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
                    id="firstName"
                    type="text"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    User Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-168 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
                    id="userName"
                    type="text"
                    placeholder="User Name"
                    value={values.userName}
                    onChange={handleChange("userName")}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
                    id="firstName"
                    type="text"
                    placeholder="example@gmail.com"
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
                    id="firstName"
                    type="text"
                    placeholder="Phone Number"
                    value={values.phone}
                    onChange={handleChange("phone")}
                  />
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
                          onClick: () => setFieldValue("gender", "Male"),
                        },
                        {
                          label: "Female",
                          onClick: () => setFieldValue("gender", "Female"),
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="flex gap-20">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Whatsapp Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
                      id="phone"
                      type="text"
                      placeholder="Phone Number"
                      value={values.whatsapp}
                      onChange={handleChange("whatsapp")}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Date Of Birth</label>
                    <input type="date" className="form-date h-48" />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex gap-20">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Profile Picture</label>
                  <div class="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      {imageSvg}
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Cover Picture</label>
                  <div class="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      {imageSvg}
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer outline-none bg-white rounded-md font-medium text-indigo-600 focus:shadow-blue-300 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <label class="form-label inline-block mb-2">About Your Self</label>
                <textarea
                  className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                />
              </div>
              <div className="mt-14 flex justify-center cursor-pointer">
                <button className="w-[400px] rounded-[50px] bg-primary text-white py-2">Next</button>
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
  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
    <path
      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
