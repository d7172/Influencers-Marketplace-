import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { personalDetailsSchema } from "../../../utils/formsSchema";
import Dropdown from "../../../components/Dropdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCountryData } from "../../../store/Country/action";
import { getStatesData } from "../../../store/State/action";
import MyDialog from "../../../components/MyDialog";
import SuccessfullSignUp from "../../../components/SuccessfullSignUp";
import { postSignUp } from "../../../store/SignUp/action";
import { useNavigate } from "react-router-dom";

const initForm = {
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    organization_name: "",
    organization_type: "",
    about_organization: "",
    description: "",
    site_url: "",
    country: { id: null, name: "" },
    state: { id: null, name: "" },
    address: "",
    pinCode: "",
    cover_pic: {}
};

export const FormError = ({ children }) => {
    return <p className="text-red-500 text-xs italic mt-1">{children}</p>;
};
export const ImgUpload = ({ children }) => {
    return <p className="text-[13px] mt-1 text-green-600">Added {children}</p>;
};


function PersonalDetails() {
    const dispatch = useDispatch();
    const [personalDetails, setPersonalDetails] = useState(initForm);
    // const [cities, setCities] = useState([]);
    const signUpState = useSelector((state) => state.signUpState);
    const [showSuccessfullSignUp, setShowSuccessfullSignUp] = useState(false);
    const signUp = useSelector((state) => state.signUp);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getCountryData());
        dispatch(getStatesData());
        if (signUp.status === "success") {
            setShowSuccessfullSignUp(true);
        }
    }, [signUp]);
    let Country = useSelector((state) =>
        state?.countryList?.results.map((r) => {
            return { id: r?.id, name: r?.name, label: r?.name };
        })
    );
    let State = useSelector((state) =>
        state?.stateList?.results.map((r) => {
            return { id: r?.id, name: r?.name, label: r?.name };
        })
    );
    function resetSuccessfullSignup() {
        setShowSuccessfullSignUp(false);
        dispatch({ type: "SIGN_UP_RESET" });
        navigate("/login");
    }
    return (
        <div>
            <MyDialog isOpen={showSuccessfullSignUp} close={resetSuccessfullSignup} className="rounded-8">
                <SuccessfullSignUp close={resetSuccessfullSignup} />
            </MyDialog>
            <h1 className="text-center text-2xl font-bold mt-8 mb-4">Personal Details</h1>
            <p className="w-390 text-gray-500 text-sm text-center m-auto mb-4">
                Log in to your account using email and password provided during registration.
            </p>
            <Formik
                enableReinitialize={true}
                initialValues={personalDetails}
                // validationSchema={personalDetailsSchema}
                onSubmit={(values) => {
                    console.log(values, "handle submit");
                    const temp = {
                        personal_details: {
                            first_name: values.first_name,
                            last_name: values.last_name,
                            email: values.email,
                            contact_number: values.contact_number,
                            organization_name: values.organization_name,
                            organization_type: values.organization_type,
                            about_organization: values.about_organization,
                            site_url: values.site_url,
                            description: values.description,
                            country: values.country.id,
                            state: values.state.id,
                            address: values.address,
                            zipcode: values.pinCode
                        },
                        phone: signUpState.phone,
                        type: signUpState.type,
                    }
                    const data = new FormData();
                    // delete temp.personal_details.cover_pic;
                    data.append("data", JSON.stringify(temp));
                    data.append("cover_pic", values.cover_pic);
                    console.log(temp);
                    
                    dispatch(postSignUp(data,"brand"))
                }}
            >
                {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
                    return (
                        <div className="w-[1100px] m-auto">
                            <div className="flex flex-wrap gap-10 items-center justify-center">
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
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="lastName">
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
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
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
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                                        Phone<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="input-field w-390"
                                        id="phone"
                                        type="text"
                                        placeholder="Contact Number"
                                        value={values.contact_number}
                                        onChange={(e) => {
                                            const numberReg = /^[0-9]*$/;
                                            if (numberReg.test(e.target.value)) {
                                                setFieldValue("contact_number", e.target.value);
                                            }
                                        }}
                                    />
                                    {errors.contact_number && touched.contact_number && <FormError>{errors.contact_number}</FormError>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="organizationName">
                                        Organization Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="input-field w-390"
                                        id="organizationName"
                                        type="text"
                                        placeholder="Organization Name"
                                        value={values.organization_name}
                                        onChange={(val) => setFieldValue("organization_name", val.target.value)}
                                    />
                                    {errors.organization_name && touched.organization_name && <FormError>{errors.organization_name}</FormError>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="typeOfOrganization">
                                        Type of Organization<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="input-field w-390"
                                        id="typeOfOrganization"
                                        type="text"
                                        placeholder="Organization Type"
                                        value={values.organization_type}
                                        onChange={(val) => setFieldValue("organization_type", val.target.value)}
                                    />
                                    {errors.organization_type && touched.organization_type && <FormError>{errors.organization_type}</FormError>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="site">
                                        Website URL<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="input-field w-390"
                                        id="site"
                                        type="text"
                                        placeholder="https://www.xyz.com/"
                                        value={values.site_url}
                                        onChange={(val) => setFieldValue("site_url", val.target.value)}
                                    />
                                    {errors.site_url && touched.site_url && <FormError>{errors.site_url}</FormError>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Cover Picture<span className="text-red-500">*</span>{" "}</label>
                                    <div className="mt-1 flex w-390 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            {imageSvg}
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="cover_pic" className="drag-drop">
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="cover_pic"
                                                        name="cover_pic"
                                                        type="file"
                                                        className="sr-only"
                                                        accept="image/png, image/jpeg"
                                                        onChange={(e) => setFieldValue("cover_pic", e.target.files[0])}
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    {values.cover_pic.name && <ImgUpload>{values.cover_pic.name}</ImgUpload>}
                                </div>
                                <div className="mt-10">
                                    <label className="form-label inline-block mb-2">
                                        About Your Organization <span className="text-red-500">*</span>{" "}
                                    </label>
                                    <textarea
                                        className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Your message"
                                        value={values.about_organization}
                                        onChange={(e) => setFieldValue("about_organization", e.target.value)}
                                    />
                                    {errors.about_organization && touched.about_organization && <FormError>{errors.about_organization}</FormError>}
                                </div>
                            </div>
                            <h1 className="text-center text-2xl font-bold mt-8 mb-4">Contact Information</h1>
                            <p className="w-390 text-gray-500 text-sm text-center m-auto mb-4">
                                Log in to your account using email and password provided during registration.
                            </p>
                            <div className="w-[75%] mx-auto flex flex-wrap gap-10 items-center justify-start " >
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2">
                                        Country
                                    </label>
                                    <div>
                                        <Dropdown
                                            dropdownStyle="w-390"
                                            className="w-390"
                                            label={values.country.name.length ? values.country.name : "Select country"}
                                            options={Country}
                                            onChange={(val) => setFieldValue("country", { id: val.id, name: val.name })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2">
                                        State
                                    </label>
                                    <div>
                                        <Dropdown
                                            dropdownStyle="w-390"
                                            className="w-390"
                                            label={values.state.name.length ? values.state.name : "select state"}
                                            options={State}
                                            optionsLabel="name"
                                            onChange={(val) => setFieldValue("state", { id: val.id, name: val.name })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
                                        Address<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="input-field w-390"
                                        id="address"
                                        type="text"
                                        placeholder="Address"
                                        value={values.address}
                                        onChange={(val) => setFieldValue("address", val.target.value)}
                                    />
                                    {errors.address && touched.address && <FormError>{errors.address}</FormError>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="pinCode">
                                        Zip Code<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="input-field w-390"
                                        id="pinCode"
                                        type="text"
                                        placeholder="Zip code"
                                        value={values.pinCode}
                                        onChange={(val) => setFieldValue("pinCode", val.target.value)}
                                    />
                                    {errors.pinCode && touched.pinCode && <FormError>{errors.pinCode}</FormError>}
                                </div>

                            </div>
                            <div className="mt-14 flex justify-center cursor-pointer">
                                <button
                                    type="button"
                                    className="w-[400px] rounded-[50px] bg-primary text-white py-2"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </div >
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
