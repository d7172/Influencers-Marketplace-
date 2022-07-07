import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CampainBrand from "../../influencer/Dashboard/CampaignDetails"


function BrandViewDetails() {
    return (
        <>
            <div className=" w-full min-w-infNavbar px-8 items-center justify-between">
        <div className=" gap-4 px-4 w-[100%] mt-[5px] bg-[white]">
          <h1 className="text-start text-2xl font-bold mt-4">Personal Details</h1>
          <p className="block mb-[15px] text-[12px]  font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </p>

          <Formik
            enableReinitialize={true}
            // initialValues={personalDetails}
            // validationSchema={personalDetailsSchema}
            // onSubmit={(values) => {
            //   console.log(values, "handle submit");
            //   setPersonalDetails({});
            // }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
              return (
                <>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                        //   value={values.first_name}
                        //   onChange={(e) => setFieldValue("first_name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Last Name
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                        //   value={values.last_name}
                        //   onChange={(e) => setFieldValue("last_name", e.target.value)}
                        />
                      </div>
                      {/* <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          User Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-168"
                          id="userName"
                          type="text"
                          placeholder="User Name"
                          value={values.user_name}
                          onChange={(e) => setFieldValue("user_name", e.target.value)}
                        />
                      </div> */}
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Email
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                          id="email"
                          type="text"
                        //   value={values.email}
                          placeholder="example@gmail.com"
                        //   onChange={(e) => {
                        //     setFieldValue("email", e.target.value);
                        //   }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Phone Number
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                          id="phone"
                          type="text"
                          placeholder="Phone Number"
                        //   value={values.phone.contact_number}
                        //   onChange={(e) => {
                        //     const numberReg = /^[0-9]*$/;
                        //     if (numberReg.test(e.target.value)) {
                        //       setFieldValue("phone", { dial_code: "+91", contact_number: e.target.value });
                        //     }
                        //   }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                        Organization Name
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                        //   id="email"
                          type="text"
                        //   value={values.email}
                          placeholder="Boat"
                        //   onChange={(e) => {
                        //     setFieldValue("email", e.target.value);
                        //   }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                        Type of Organization 
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                        //   id="email"
                          type="text"
                        //   value={values.email}
                          placeholder="LLP"
                        //   onChange={(e) => {
                        //     setFieldValue("email", e.target.value);
                        //   }}
                        />
                      </div>
                    </div>
                    <div className="mt-10 flex gap-20">
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Cover Picture</label>

                        <div className="mt-1 flex w-390 ">
                          <img
                            className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                            // src={values?.cover_pic}
                            alt="avtar"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <label className="form-label inline-block mb-2">About Your Self </label>
                      <textarea
                        // disabled={disable}
                        className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                        // value={values.about_yourself}
                        // onChange={(e) => setFieldValue("about_yourself", e.target.value)}
                      />
                    </div>
                  </div>

                
                  <div className="mt-8 text-[16px] font-[600] w-[180px]">Contact Details</div>
                  <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="country">
                          Country
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                          id="country"
                          type="text"
                          placeholder="country"
                        //   value={values.address_details.country}
                        //   onChange={handleChange("country")}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="city">
                          City
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                          id="city"
                          type="text"
                          placeholder="city"
                        //   value={values.address_details.city}
                        //   onChange={handleChange("city")}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
                          Address
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                          id="address"
                          type="text"
                          placeholder="address"
                        //   value={values.address_details.line_1 + values.address_details.line_2}
                        //   onChange={handleChange("address")}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="zip code">
                          ZIP code
                        </label>
                        <input
                        //   disabled={disable}
                          className="input-field w-390"
                          id="ZIP code"
                          type="text"
                        //   value={values.address_details.pincode}
                          placeholder="zip code"
                        //   onChange={handleChange("ZIP code")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="mt-14 cursor-pointer">
                      <button
                        type="button"
                        className="w-[150px] rounded-[50px] bg-primary text-white py-2"
                        // onClick={() => {
                        //   console.log({ ...values, gender: values.gender.charAt(0) }, "values");
                        //   (route === "new-user" || route === "rejected-user") && handleApproveInf();
                        // }}
                      >
                        {"Approved"}
                        {/* {route === "new-user" && `Approve`}
                        {route === "active-user" && `Save`}
                        {route === "rejected-user" && `Re Active`} */}
                      </button>
                    </div>
                    <div className="m-14 cursor-pointer">
                      <button
                        type="button"
                        className="w-[150px] rounded-[50px] bg-[#FFFFFF] py-2 box-shadow-button"
                        // onClick={() => {
                        //   route === "new-user"
                        //     ? setRejectBid(true)
                        //     : route === "active-user"
                        //     ? navigate(`/admin/influencer/active-user`)
                        //     : navigate(`/admin/influencer/rejected-user`);
                        // }}
                      >
                        {"Reject"}
                        {/* {route === "new-user" ? `Reject` : `Cancel`} */}
                      </button>
                    </div>
                  </div>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
        </>
    )
}
export default BrandViewDetails;