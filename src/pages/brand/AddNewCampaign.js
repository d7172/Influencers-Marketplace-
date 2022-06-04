import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { personalDetailsSchema } from "../../utils/formsSchema";
import Dropdown from "../../components/Dropdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

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
    profile: {},
    cover: {},
};

const platforms = ["facebook", "instagram", "linkedin", "youtube", "amazon", "twitter", "blog", "zomato", "swiggy", "roposo", "mx_takatak", "moj", "josh", "spotify"];

const industires = ["beauty", "health", "fashion", "food", "parenting", "entertainment", "humor", "travel", "fitness", "sports", "technology", "diy"];

export const FormError = ({ children }) => {
    return <p className="text-red-500 text-xs italic mt-1">{children}</p>;
};
export const ImgUpload = ({ children }) => {
    return <p className="text-[13px] mt-1 text-green-600">Added {children}</p>;
};

function CampaignDetails({ setSignUpStatus, route }) {
    const dispatch = useDispatch();
    const [personalDetails, setPersonalDetails] = useState(initForm);
    const signUpState = useSelector((state) => state.signUpState);
    const navigate = useNavigate();
    useEffect(() => {
        const { first_name, last_name, user_name, email, phone, gender, whats_app, dob, about_yourself, category } =
            signUpState.personal_details;
        if (first_name.length) {
            setPersonalDetails({
                firstName: first_name,
                lastName: last_name,
                userName: user_name,
                email,
                phone: phone.contact_number,
                gender,
                whatsapp: whats_app.contact_number,
                DOB: dob,
                aboutYourself: about_yourself,
                profile: signUpState.profile_pic,
                cover: signUpState.cover_pic,
            });
        }
    }, []);
    return (
        <>
            <div className="bg-[#F2F2F2] w-full py-4 px-8 mb-4" >
                <Breadcrumbs options={[{ title: "Dashboard" }, { title: "Campaign" }, { title: "New Campaign" }]} />
            </div>
            <div className="px-8 py-5" >
                <h1 className="text-start text-2xl font-bold mb-2">Campaign Details</h1>
                <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                    Lorem ipsum dolor sit amet, consectetur
                </p>
                <Formik
                    enableReinitialize={true}
                    initialValues={personalDetails}
                    validationSchema={personalDetailsSchema}
                    onSubmit={(values) => {
                        const data = {
                            personal_details: {
                                first_name: values.firstName,
                                last_name: values.lastName,
                                user_name: values.userName,
                                email: values.email,
                                phone: {
                                    dail_code: "+91",
                                    contact_number: values.phone,
                                },
                                gender: values.gender,
                                whats_app: {
                                    dail_code: "+91",
                                    contact_number: values.whatsapp,
                                },
                                dob: values.DOB,
                                about_yourself: values.aboutYourself,
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
                            <div className="w-full m-auto">
                                <div className="flex flex-wrap gap-10 items-center">
                                    <div className="w-[30%] ">
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="campaignTitle">
                                            Campaign Title<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            className="input-field w-full"
                                            id="firstName"
                                            type="text"
                                            value={values.firstName}
                                            onChange={handleChange("firstName")}
                                        />
                                        {errors.firstName && touched.firstName && <FormError>{errors.firstName}</FormError>}
                                    </div>
                                    <div className="datepicker">
                                        <label className="block text-gray-700 text-sm mb-2">
                                            Campaign Date<span className="text-red-500">*</span>{" "}
                                        </label>
                                        <input
                                            type="date"
                                            className="input-field text-gray-500 mr-8"
                                            placeholder="From"
                                            value={values.DOB}
                                            onChange={(e) => setFieldValue("DOB", e.target.value)}
                                        />
                                        {errors.DOB && touched.DOB && <FormError>{errors.DOB}</FormError>}
                                        <input
                                            type="date"
                                            className="input-field text-gray-500"
                                            placeholder="To"
                                            value={values.DOB}
                                            onChange={(e) => setFieldValue("DOB", e.target.value)}
                                        />
                                        {errors.DOB && touched.DOB && <FormError>{errors.DOB}</FormError>}
                                    </div>
                                    <div>
                                        <label className="form-label inline-block mb-2">
                                            About Your Campaign <span className="text-red-500">*</span>{" "}
                                        </label>
                                        <textarea
                                            className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            value={values.aboutYourself}
                                            onChange={(e) => setFieldValue("aboutYourself", e.target.value)}
                                        />
                                        {errors.aboutYourself && touched.aboutYourself && <FormError>{errors.aboutYourself}</FormError>}
                                    </div>
                                    <div className="w-[30%] " >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Campaign Strategy<span className="text-red-500">*</span>
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "Shout Out Campaing"}
                                                options={[
                                                    {
                                                        lable: "Shout Out Campaing"
                                                    },
                                                    {
                                                        label: "Giveaway Campaing",
                                                    },
                                                    {
                                                        label: "Affiliate Campaing",
                                                    },
                                                    {
                                                        label: "Video Creation Campaing",
                                                    },
                                                    {
                                                        lable: "Product Review"
                                                    }
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[30%] mr-16">
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Campaing Goal<span className="text-red-500">*</span>
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "Lead Genration"}
                                                options={[
                                                    {
                                                        label: "CPC",
                                                    },
                                                    {
                                                        label: "Brand Awareness",
                                                    },
                                                    {
                                                        label: "Lead Generation",
                                                    },
                                                    {
                                                        label: "Reach",
                                                    }
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[30%] ">
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Project Duration ( No of Days )<span className="text-red-500">*</span>
                                        </label>
                                        <div>
                                            <input
                                                className="input-field w-full"
                                                id="firstName"
                                                type="number"
                                                placeholder="2"
                                                value={values.firstName}
                                                onChange={handleChange("firstName")}
                                            />
                                            {errors.firstName && touched.firstName && <FormError>{errors.firstName}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[30%] mr-16">
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Age Group<span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex">
                                            <input
                                                className="input-field w-390"
                                                id="firstName"
                                                type="range"
                                                min="10"
                                                max="50"
                                                value={values.firstName}
                                                onChange={handleChange("firstName")}
                                            />
                                            {errors.firstName && touched.firstName && <FormError>{errors.firstName}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[30%] " >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Country<span className="text-red-500">*</span>
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "India"}
                                                options={[
                                                    {
                                                        label: "Australia",
                                                    },
                                                    {
                                                        label: "Brazil",
                                                    },
                                                    {
                                                        label: "Colombia",
                                                    }
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[30%]" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            State<span className="text-red-500">*</span>
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "India"}
                                                options={[
                                                    {
                                                        label: "Gujarat",
                                                    },
                                                    {
                                                        label: "Maharashtra",
                                                    },
                                                    {
                                                        label: "Colombia",
                                                    }
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
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
                                                    },
                                                    {
                                                        label: "Female",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[30%]" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Audience Interest
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "Fashion Wear"}
                                                options={[
                                                    {
                                                        label: "Fashion Wear",
                                                    },
                                                    {
                                                        label: "Fashion Wear",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[30%]" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Number of Influencer
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "1"}
                                                options={[
                                                    {
                                                        label: "2",
                                                    },
                                                    {
                                                        label: "3",
                                                    },
                                                    {
                                                        label: "4",
                                                    },
                                                    {
                                                        label: "5",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[30%]" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Number of  Followers
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "1k - 10k"}
                                                options={[
                                                    {
                                                        label: "10k - 20k",
                                                    },
                                                    {
                                                        label: "20k - 30k",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                </div>

                                <div className="my-8">
                                    <h1 className="text-start text-2xl font-bold mb-2 mt-8">Where Do You Want To Promote</h1>
                                    <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                </div>
                                <div className="grid grid-cols-5 gap-16 " >
                                    {platforms.map((platform, index) => (
                                        <div key={index} className="flex justify-center items-center relative campaignDetailsSVG-shadow w-fit p-3 h-fit rounded-[4rem] bg-white "> <input id={`${platform}SVG`} name="platFormcheck" type="checkbox" className="absolute top-0 right-[10px]" />  <label htmlFor={`${platform}SVG`}> <img src={`/svgs/${platform}.svg`} className="platformsSVG" alt="platform" /></label> </div>
                                    ))}
                                </div>
                                <div className="my-8 flex items-center gap-10" >
                                    <div className="flex flex-col w-full">
                                        <lable className="block text-gray-700 text-sm mb-2" >Minimum Facebook Reach</lable>
                                        <input type="range" name="max-FB-reach" />
                                        <p className="text-gray-700 text-sm mt-4" > Value: 2000</p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <lable className="block text-gray-700 text-sm mb-2">Minimum Facebook Engagement</lable>
                                        <input type="range" name="max-FB-reach" />
                                        <p className="text-gray-700 text-sm mt-4" > Value: 1%</p>
                                    </div>
                                    <div className="w-full" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            No of Days
                                        </label>
                                        <div>
                                            <Dropdown
                                                dropdownStyle="w-168"
                                                className="w-168"
                                                label={values.gender.length ? values.gender : "1"}
                                                options={[
                                                    {
                                                        label: "2",
                                                    },
                                                    {
                                                        label: "3",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-full" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Facebook Deliverables
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "Create post"}
                                                options={[
                                                    {
                                                        label: "Create post",
                                                    },
                                                    {
                                                        label: "Create post",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                </div>
                                <div className="my-8">
                                    <h1 className="text-start text-2xl font-bold mb-2 mt-4">Which Industry You Want To Target</h1>
                                    <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                </div>
                                <div className="grid grid-cols-5 gap-16 " >
                                    {industires.map((industry, index) => (
                                        <div key={index} className="flex justify-center items-center relative campaignDetailsSVG-shadow w-fit p-3 h-fit rounded-[4rem] bg-white "> <input id={`${industry}SVG`} name="platFormcheck" type="checkbox" className="absolute top-0 right-[10px]" />  <label htmlFor={`${industry}SVG`}> <img src={`/svgs/${industry}.svg`} className="industrySVG" alt="industry" /></label> </div>
                                    ))}
                                </div>
                                <div className="my-8" >
                                    <h1 className="text-start text-2xl font-bold mb-2 mt-4">What Will Be The Payout Per Influencer ?</h1>
                                    <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-10" >
                                    <div className="w-[27%]" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Payout Type
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "Barter"}
                                                options={[
                                                    {
                                                        label: "Barter",
                                                    },
                                                    {
                                                        label: "Barter",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[27%]" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Budget Type
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "Fixed"}
                                                options={[
                                                    {
                                                        label: "Fixed",
                                                    },
                                                    {
                                                        label: "Fixed",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[27%]" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Budget Per Influencer
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "1 - 10k"}
                                                options={[
                                                    {
                                                        label: "10k - 20k",
                                                    },
                                                    {
                                                        label: "20k - 30k",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                    <div className="w-[27%]" >
                                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                            Expected Budget Per Influencer
                                        </label>
                                        <div className="w-full">
                                            <Dropdown
                                                dropdownStyle="w-full"
                                                className="w-full"
                                                label={values.gender.length ? values.gender : "10k"}
                                                options={[
                                                    {
                                                        label: "20k",
                                                    },
                                                    {
                                                        label: "30k",
                                                    },
                                                ]}
                                                onChange={(val) => setFieldValue("gender", val.label)}
                                            />
                                            {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                                        </div>
                                    </div>
                                </div>
                                <div className="my-8" >
                                    <h1 className="text-start text-2xl font-bold mb-2 mt-4">Describe Your Campaign</h1>
                                    <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <label className="form-label inline-block mb-2">
                                        Note from Brand <span className="text-red-500">*</span>{" "}
                                    </label>
                                    <textarea
                                        className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={values.aboutYourself}
                                        onChange={(e) => setFieldValue("aboutYourself", e.target.value)}
                                    />
                                    {errors.aboutYourself && touched.aboutYourself && <FormError>{errors.aboutYourself}</FormError>}
                                </div>
                                <div className="mb-8">
                                    <label className="form-label inline-block mb-2">
                                        Terms & Conditions <span className="text-red-500">*</span>{" "}
                                    </label>
                                    <textarea
                                        className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={values.aboutYourself}
                                        onChange={(e) => setFieldValue("aboutYourself", e.target.value)}
                                    />
                                    {errors.aboutYourself && touched.aboutYourself && <FormError>{errors.aboutYourself}</FormError>}
                                </div>

                                <div className="mt-14 flex ">
                                    <button
                                        type="button"
                                        className="rounded-[50px] bg-[#3751FF] text-white px-8 py-2 "
                                        onClick={handleSubmit}
                                    >
                                        Submit Campaing
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-[50px] text-[#969BA0] px-4 py-2 underline"
                                        onClick={() => navigate(`/${route}/campaign/new-campaign`)}
                                    >
                                        Cancle
                                    </button>
                                </div>
                            </div>
                        );
                    }}
                </Formik >
            </div >
        </>
    );
}

export default CampaignDetails;

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
